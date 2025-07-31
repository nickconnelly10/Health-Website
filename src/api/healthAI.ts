// Health AI API Service
// Updated for Vercel deployment with integrated AurraCloud backend
// No external backend dependencies - everything runs on Vercel

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

class HealthAIService {
  private baseURLs = [
    '/api',  // Vercel functions (primary and only)
  ];
  private endpoint = '/chat';
  private timeout = 30000; // 30 seconds timeout
  private connectionCache: { status: boolean; timestamp: number; url: string } | null = null;
  private readonly CACHE_DURATION = 10000; // 10 seconds cache

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

        // Update cache with successful connection
        this.connectionCache = {
          status: true,
          timestamp: Date.now(),
          url: baseURL
        };

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
        console.warn(`Failed to connect to ${baseURL}:`, error);
        lastError = error instanceof Error ? error : new Error('Unknown error');
        continue;
      }
    }
    
    // If API fails, throw the error
    if (lastError) {
      console.error('API connection failed:', lastError);
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
        console.warn(`Failed to connect to ${baseURL}:`, error);
        lastError = error instanceof Error ? error : new Error('Unknown error');
        continue;
      }
    }
    
    // If API fails, throw the error
    if (lastError) {
      console.error('API connection failed:', lastError);
      throw lastError;
    }
    
    throw new Error('No API endpoints available');
  }

  /**
   * Check if the API is available
   */
  async checkConnection(): Promise<boolean> {
    // Check cache first
    if (this.connectionCache && 
        Date.now() - this.connectionCache.timestamp < this.CACHE_DURATION) {
      return this.connectionCache.status;
    }

    // Try Vercel API endpoint
    for (const baseURL of this.baseURLs) {
      try {
        const response = await fetch(`${baseURL}/health`);
        
        if (response.ok) {
          // Update cache with successful connection
          this.connectionCache = {
            status: true,
            timestamp: Date.now(),
            url: baseURL
          };
          return true;
        }
      } catch (error) {
        console.warn(`Connection check failed for ${baseURL}:`, error);
        continue;
      }
    }
    
    // Update cache with failed connection
    this.connectionCache = {
      status: false,
      timestamp: Date.now(),
      url: ''
    };
    
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
        console.warn(`Attempt ${attempt} failed:`, lastError.message);
        
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
        console.warn(`Attempt ${attempt} failed:`, lastError.message);
        
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
   * Clear the connection cache
   */
  clearCache(): void {
    this.connectionCache = null;
  }

  /**
   * Get cached connection status
   */
  getCachedConnectionStatus(): boolean | null {
    if (!this.connectionCache) return null;
    
    if (Date.now() - this.connectionCache.timestamp > this.CACHE_DURATION) {
      this.connectionCache = null;
      return null;
    }
    
    return this.connectionCache.status;
  }

  /**
   * Get the URL of the currently connected API
   */
  getConnectedBackendURL(): string | null {
    if (!this.connectionCache || 
        Date.now() - this.connectionCache.timestamp > this.CACHE_DURATION) {
      return null;
    }
    
    return this.connectionCache.status ? this.connectionCache.url : null;
  }

  /**
   * Check if the API is AurraCloud-powered
   */
  async checkAurraCloudStatus(): Promise<{ isAurra: boolean; status: string }> {
    for (const baseURL of this.baseURLs) {
      try {
        const response = await fetch(`${baseURL}/health`);
        if (response.ok) {
          const data = await response.json();
          return {
            isAurra: data.service === 'vercel-aurra-backend',
            status: data.aurra_status || 'unknown'
          };
        }
      } catch (error) {
        console.warn(`Failed to check AurraCloud status for ${baseURL}:`, error);
        continue;
      }
    }
    return { isAurra: false, status: 'unknown' };
  }
}

// Export singleton instance
export const healthAIService = new HealthAIService();
export default healthAIService; 