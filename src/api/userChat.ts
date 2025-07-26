import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { serverHealthAIService } from './serverHealthAI';

const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response) {
  if (req.method === 'GET') {
    // Return empty chat history for users
    return res.status(200).json({ chats: [] });
  }
  
  if (req.method === 'POST') {
    const { question, prompt } = req.body;
    const userQuestion = question || prompt;
    
    if (!userQuestion) {
      return res.status(400).json({ error: 'Question is required' });
    }
    
    try {
      // Use the server-side HealthAIService
      const aiResponse = await serverHealthAIService.getHealthAdvice(userQuestion);
      
      // Return response without persisting
      return res.status(201).json({ 
        chat: { 
          id: 'anonymous-' + Date.now(),
          question: userQuestion,
          answer: aiResponse.response,
          summary: JSON.stringify([]),
          time: new Date()
        } 
      });
    } catch (error) {
      console.error('Error calling Flask backend:', error);
      return res.status(500).json({
        error: 'Failed to get AI response',
        message: `I apologize, but I'm having trouble connecting to my health advisory system. Please try again in a moment, or contact support if the issue persists. Error: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    }
  }
  
  res.status(405).json({ error: 'Method not allowed' });
} 