import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { requireAuth } from './_authMiddleware';

const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response) {
  if (req.method === 'GET') {
    const research = await prisma.research.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: { author: { select: { username: true } } },
    });
    return res.status(200).json({ research });
  }
  if (req.method === 'POST') {
    const user = await requireAuth(req, res);
    if (!user) return;
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content required' });
    }
    const entry = await prisma.research.create({
      data: { title, content, authorId: user.id },
    });
    return res.status(201).json({ research: entry });
  }
  res.status(405).json({ error: 'Method not allowed' });
} 