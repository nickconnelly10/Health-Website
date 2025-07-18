import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { requireAuth } from './_authMiddleware';

const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response) {
  try {
    if (req.method === 'GET') {
      // Return recent community messages (mock data for now)
      const messages = [
        { user: 'HealthAI', message: 'Welcome to the community!', time: new Date().toISOString() },
        { user: 'Dr. Smith', message: 'Great discussion on nutrition!', time: new Date(Date.now() - 300000).toISOString() },
        { user: 'WellnessCoach', message: 'Exercise tips are always helpful', time: new Date(Date.now() - 600000).toISOString() }
      ];
      return res.status(200).json({ messages });
    }

    if (req.method === 'POST') {
      const user = await requireAuth(req, res);
      if (!user) return;

      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      // In a real app, save to community chat table
      // For now, just return success
      return res.status(200).json({ 
        success: true, 
        message: 'Message sent to community',
        user: user.username 
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Community chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 