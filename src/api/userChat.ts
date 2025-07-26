import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface AIResponse {
  response: string;
}

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
      // Forward the request to the working AI endpoint
      const aiResponse = await fetch('http://10.0.0.95:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userQuestion }),
      });

      if (!aiResponse.ok) {
        throw new Error(`AI service error: ${aiResponse.status}`);
      }

      const data = await aiResponse.json() as AIResponse;
      
      // Return response without persisting
      return res.status(201).json({ 
        chat: { 
          id: 'anonymous-' + Date.now(),
          question: userQuestion,
          answer: data.response,
          summary: JSON.stringify([]),
          time: new Date()
        } 
      });
    } catch (error) {
      console.error('Error calling AI service:', error);
      return res.status(500).json({
        error: 'Failed to get AI response',
        message: 'Please try again later.'
      });
    }
  }
  
  res.status(405).json({ error: 'Method not allowed' });
} 