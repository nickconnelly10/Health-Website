import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response) {
  if (req.method === 'GET') {
    const uploads = await prisma.upload.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: { user: { select: { username: true } } },
    });
    return res.status(200).json({ uploads });
  }
  if (req.method === 'POST') {
    const { filename, url } = req.body;
    if (!filename || !url) {
      return res.status(400).json({ error: 'Filename and url required' });
    }
    const entry = await prisma.upload.create({
      data: { filename, url } as any,
    });
    return res.status(201).json({ upload: entry });
  }
  res.status(405).json({ error: 'Method not allowed' });
} 