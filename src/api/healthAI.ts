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
   * Check if the backend is available
   */
  async checkConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}${this.endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: 'test' }),
      });
      
      return response.ok;
    } catch (error) {
      console.error('Connection check failed:', error);
      return false;
    }
  }

  /**
   * Get health advice with retry logic
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
          // Wait before retrying (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
      }
    }
    
    throw lastError || new Error('All retry attempts failed');
  }
}

// Export singleton instance
export const healthAIService = new HealthAIService();
export default healthAIService; 