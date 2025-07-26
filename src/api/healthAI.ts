// Health AI API Service
// Handles communication with Flask backend running Ollama/Mistral

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

class HealthAIService {
  private baseURL = 'http://health.muscadine.box';
  private endpoint = '/chat';
  private timeout = 30000; // 30 seconds timeout
  private connectionCache: { status: boolean; timestamp: number } | null = null;
  private readonly CACHE_DURATION = 10000; // 10 seconds cache

  /**
   * Send a health question to the AI advisor
   */
  async askQuestion(prompt: string): Promise<HealthAIResponse> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(`${this.baseURL}${this.endpoint}`, {
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
      console.error('Health AI Service Error:', error);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout - the AI is taking too long to respond. Please try again.');
        }
        throw error;
      }
      
      throw new Error('Unknown error occurred while communicating with the health AI');
    }
  }

  /**
   * Check if the backend is available with caching
   */
  async checkConnection(): Promise<boolean> {
    // Check cache first
    if (this.connectionCache && Date.now() - this.connectionCache.timestamp < this.CACHE_DURATION) {
      return this.connectionCache.status;
    }

    try {
      const response = await fetch(`${this.baseURL}${this.endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: 'test' }),
      });
      
      const isConnected = response.ok;
      
      // Update cache
      this.connectionCache = {
        status: isConnected,
        timestamp: Date.now()
      };
      
      return isConnected;
    } catch (error) {
      console.error('Connection check failed:', error);
      
      // Update cache with failure
      this.connectionCache = {
        status: false,
        timestamp: Date.now()
      };
      
      return false;
    }
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
   * Clear connection cache
   */
  clearCache(): void {
    this.connectionCache = null;
  }

  /**
   * Get connection status from cache without making a request
   */
  getCachedConnectionStatus(): boolean | null {
    if (this.connectionCache && Date.now() - this.connectionCache.timestamp < this.CACHE_DURATION) {
      return this.connectionCache.status;
    }
    return null;
  }
}

// Export singleton instance
export const healthAIService = new HealthAIService();
export default healthAIService; 