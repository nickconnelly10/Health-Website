import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { requireAuth } from './_authMiddleware';

const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response) {
  const user = await requireAuth(req, res);
  if (!user) return;
  if (req.method === 'GET') {
    const notifications = await prisma.notification.findMany({
      where: { OR: [{ userId: user.id }, { userId: null }] },
      orderBy: { time: 'desc' },
      take: 10,
    });
    return res.status(200).json({ notifications });
  }
  if (req.method === 'POST') {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text required' });
    }
    const entry = await prisma.notification.create({
      data: { text, userId: user.id },
    });
    return res.status(201).json({ notification: entry });
  }
  res.status(405).json({ error: 'Method not allowed' });
} 