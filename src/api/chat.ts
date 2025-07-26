import { Request, Response } from 'express';
import { serverHealthAIService } from './serverHealthAI';

export default async function handler(req: Request, res: Response) {
  if (req.method === 'POST') {
    const { question, prompt } = req.body;
    const userQuestion = question || prompt;
    
    if (!userQuestion) {
      return res.status(400).json({ error: 'Question is required' });
    }

    try {
      // Use the server-side HealthAIService
      const aiResponse = await serverHealthAIService.getHealthAdvice(userQuestion);
      
      return res.status(200).json({
        success: true,
        response: aiResponse.response,
        summary: [],
        timestamp: new Date(),
      });
    } catch (error) {
      console.error('Error calling Flask backend:', error);
      return res.status(500).json({
        success: false,
        response: `I apologize, but I'm having trouble connecting to my health advisory system. Please try again in a moment, or contact support if the issue persists. Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        summary: [],
        timestamp: new Date(),
      });
    }
  }
  
  if (req.method === 'GET') {
    // Return empty chat history
    return res.status(200).json({ chats: [] });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
} 