import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response) {
  // For now, treat all users as anonymous since auth middleware is not available
  const user = null;
  
  if (req.method === 'GET') {
    // Return empty chat history for anonymous users
    return res.status(200).json({ chats: [] });
  }
  
  if (req.method === 'POST') {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }
    
    // Simulate AI response and summary
    const answer = `This is a test response to: "${question}". Chat functionality is working.`;
    const summary = [
      'Summary bullet 1',
      'Summary bullet 2',
    ];
    
    // Anonymous user - just return response without persisting
    return res.status(201).json({ 
      chat: { 
        id: 'anonymous-' + Date.now(),
        question,
        answer,
        summary: JSON.stringify(summary),
        time: new Date()
      } 
    });
  }
  
  res.status(405).json({ error: 'Method not allowed' });
} 