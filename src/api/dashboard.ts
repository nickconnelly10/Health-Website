import { Request, Response } from 'express';
import { requireAuth } from './_authMiddleware';

export default async function handler(req: Request, res: Response) {
  const user = await requireAuth(req, res);
  if (!user) return;
  res.status(200).json({ message: 'Dashboard endpoint (protected)', user: { id: user.id, username: user.username, role: user.role } });
} 