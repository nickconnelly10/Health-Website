import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

interface JWTPayload {
  userId: string;
  role: string;
}

function getToken(req: Request) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Bearer ')) return null;
  return auth.split(' ')[1];
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const token = getToken(req);
  if (!token) {
    return res.status(401).json({ error: 'Missing or invalid token' });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET) as JWTPayload;
    const user = await prisma.user.findUnique({ where: { id: payload.userId } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ user: { id: user.id, email: user.email, username: user.username, role: user.role, avatar: user.avatar, createdAt: user.createdAt, badges: user.badges, healthScore: user.healthScore } });
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
} 