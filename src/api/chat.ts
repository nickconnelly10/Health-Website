import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { requireAuth } from './_authMiddleware';

const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response) {
  try {
    let user = null;
    try {
      user = await requireAuth(req, res);
    } catch (error) {
      // User is not authenticated, allow anonymous chat
      user = null;
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
      
      // Only persist to database if user is authenticated
      if (user) {
        const entry = await prisma.userChat.create({
          data: {
            userId: user.id,
            question,
            answer,
            summary: JSON.stringify(summary),
          },
        });
        return res.status(200).json({
          success: true,
          response: answer,
          summary,
          timestamp: entry.time,
          chat: entry,
        });
      } else {
        // Anonymous user - just return response without persisting
        return res.status(200).json({
          success: true,
          response: answer,
          summary,
          timestamp: new Date(),
        });
      }
    }

    if (req.method === 'GET') {
      // Only return chat history if user is authenticated
      if (!user) {
        return res.status(200).json({ chats: [] });
      }
      
      // Return last 10 chats for this user
      const chats = await prisma.userChat.findMany({
        where: { userId: user.id },
        orderBy: { time: 'desc' },
        take: 10,
      });
      return res.status(200).json({
        chats: chats.map(c => ({
          id: c.id,
          question: c.question,
          answer: c.answer,
          summary: c.summary ? JSON.parse(c.summary) : [],
          timestamp: c.time,
        })),
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 