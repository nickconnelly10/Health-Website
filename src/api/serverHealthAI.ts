// Server-side Health AI API Service
// Handles communication with Flask backend running Ollama/Mistral

import fetch from 'node-fetch';

export interface HealthAIResponse {
  response: string;
  success: boolean;
  timestamp: Date;
}

export interface HealthAIRequest {
  prompt: string;
}

interface BackendResponse {
  response: string;
}

class ServerHealthAIService {
  private baseURLs = [
    'https://health.muscadine.box',
    'http://health.muscadine.box',
    'http://localhost:5000'
  ];
  private endpoint = '/chat';
  private timeout = 30000; // 30 seconds timeout

  /**
   * Send a health question to the AI advisor
   */
  async askQuestion(prompt: string): Promise<HealthAIResponse> {
    let lastError: Error | null = null;
    
    // Try each backend URL
    for (const baseURL of this.baseURLs) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        const response = await fetch(`${baseURL}${this.endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Backend error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json() as BackendResponse;
        
        if (!data.response) {
          throw new Error('Invalid response format from backend');
        }

        return {
          response: data.response,
          success: true,
          timestamp: new Date(),
        };
      } catch (error) {
        console.warn(`Server failed to connect to ${baseURL}:`, error);
        lastError = error instanceof Error ? error : new Error('Unknown error');
        continue;
      }
    }
    
    // If all backends fail, throw the last error
    if (lastError) {
      console.error('Server: All backend connections failed:', lastError);
      throw lastError;
    }
    
    throw new Error('No backend endpoints available');
  }

  /**
   * Check if the backend is available
   */
  async checkConnection(): Promise<boolean> {
    // Try each backend URL
    for (const baseURL of this.baseURLs) {
      try {
        const response = await fetch(`${baseURL}${this.endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: 'test' }),
        });
        
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
}

// Export singleton instance
export const serverHealthAIService = new ServerHealthAIService();
export default serverHealthAIService; 