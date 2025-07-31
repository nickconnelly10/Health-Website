// Server-side Health AI API Service
// Updated for Vercel deployment with integrated AurraCloud backend
// No external backend dependencies - everything runs on Vercel

import fetch from 'node-fetch';

export interface HealthAIResponse {
  response: string;
  success: boolean;
  timestamp: Date;
  model?: string;
  response_time?: number;
  protocol_hint?: string;
  source?: string;
}

export interface HealthAIRequest {
  prompt?: string;  // Legacy format
  input?: string;   // New format
  wearables?: any;
  images?: any[];
  protocol_hint?: string;
  extra_context?: any;
}

interface BackendResponse {
  response: string;
  model?: string;
  response_time?: number;
  protocol_hint?: string;
  source?: string;
  timestamp?: string;
}

interface HealthEndpointResponse {
  service?: string;
  aurra_status?: string;
  agent_id?: string;
  security?: {
    enabled?: boolean;
  };
  protocols?: {
    count?: number;
  };
}

class ServerHealthAIService {
  private baseURLs = [
    '/api',  // Vercel functions (primary and only)
  ];
  private endpoint = '/chat';
  private timeout = 30000; // 30 seconds timeout

  /**
   * Send a health question to the AI advisor
   * Supports both legacy (prompt) and new (input) formats
   */
  async askQuestion(prompt: string, options?: {
    wearables?: any;
    images?: any[];
    protocol_hint?: string;
    extra_context?: any;
  }): Promise<HealthAIResponse> {
    let lastError: Error | null = null;
    
    // Build request payload - support both formats for backward compatibility
    const payload: HealthAIRequest = {
      prompt, // Legacy format
      input: prompt, // New format
      ...options
    };
    
    // Try Vercel API endpoint
    for (const baseURL of this.baseURLs) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const response = await fetch(`${baseURL}${this.endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json() as BackendResponse;
        
        if (!data.response) {
          throw new Error('Invalid response format from API');
        }

        return {
          response: data.response,
          success: true,
          timestamp: new Date(data.timestamp || Date.now()),
          model: data.model,
          response_time: data.response_time,
          protocol_hint: data.protocol_hint,
          source: data.source,
        };
      } catch (error) {
        console.warn(`Server failed to connect to ${baseURL}:`, error);
        lastError = error instanceof Error ? error : new Error('Unknown error');
        continue;
      }
    }
    
    // If API fails, throw the error
    if (lastError) {
      console.error('Server: API connection failed:', lastError);
      throw lastError;
    }
    
    throw new Error('No API endpoints available');
  }

  /**
   * Send a health question with enhanced data (new format)
   */
  async askQuestionWithData(request: HealthAIRequest): Promise<HealthAIResponse> {
    let lastError: Error | null = null;
    
    // Try Vercel API endpoint
    for (const baseURL of this.baseURLs) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const response = await fetch(`${baseURL}${this.endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json() as BackendResponse;
        
        if (!data.response) {
          throw new Error('Invalid response format from API');
        }

        return {
          response: data.response,
          success: true,
          timestamp: new Date(data.timestamp || Date.now()),
          model: data.model,
          response_time: data.response_time,
          protocol_hint: data.protocol_hint,
          source: data.source,
        };
      } catch (error) {
        console.warn(`Server failed to connect to ${baseURL}:`, error);
        lastError = error instanceof Error ? error : new Error('Unknown error');
        continue;
      }
    }
    
    // If API fails, throw the error
    if (lastError) {
      console.error('Server: API connection failed:', lastError);
      throw lastError;
    }
    
    throw new Error('No API endpoints available');
  }

  /**
   * Check if the API is available
   */
  async checkConnection(): Promise<boolean> {
    // Try Vercel API endpoint
    for (const baseURL of this.baseURLs) {
      try {
        const response = await fetch(`${baseURL}/health`);
        
        if (response.ok) {
          return true;
        }
      } catch (error) {
        console.warn(`Server connection check failed for ${baseURL}:`, error);
        continue;
      }
    }
    
    return false;
  }

  /**
   * Get health advice with retry logic and exponential backoff
   */
  async getHealthAdvice(prompt: string, maxRetries = 2): Promise<HealthAIResponse> {
    let lastError: Error | null = null;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await this.askQuestion(prompt);
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error');
        console.warn(`Server attempt ${attempt} failed:`, lastError.message);
        
        if (attempt < maxRetries) {
          // Exponential backoff: 1s, 2s, 4s, etc.
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw lastError || new Error('All retry attempts failed');
  }

  /**
   * Get health advice with enhanced data
   */
  async getHealthAdviceWithData(request: HealthAIRequest, maxRetries = 2): Promise<HealthAIResponse> {
    let lastError: Error | null = null;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await this.askQuestionWithData(request);
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error');
        console.warn(`Server attempt ${attempt} failed:`, lastError.message);
        
        if (attempt < maxRetries) {
          // Exponential backoff: 1s, 2s, 4s, etc.
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw lastError || new Error('All retry attempts failed');
  }

  /**
   * Check if the API is AurraCloud-powered
   */
  async checkAurraCloudStatus(): Promise<{ isAurra: boolean; status: string }> {
    for (const baseURL of this.baseURLs) {
      try {
        const response = await fetch(`${baseURL}/health`);
        if (response.ok) {
          const data = await response.json() as HealthEndpointResponse;
          return {
            isAurra: data.service === 'vercel-aurra-backend',
            status: data.aurra_status || 'unknown'
          };
        }
      } catch (error) {
        console.warn(`Server failed to check AurraCloud status for ${baseURL}:`, error);
        continue;
      }
    }
    return { isAurra: false, status: 'unknown' };
  }
}

// Export singleton instance
export const serverHealthAIService = new ServerHealthAIService();
export default serverHealthAIService; 