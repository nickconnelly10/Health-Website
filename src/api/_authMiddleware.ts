import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';
const prisma = new PrismaClient();

interface JWTPayload {
  userId: string;
  role: string;
}

export async function requireAuth(req: Request, res: Response) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Missing or invalid token' });
    return null;
  }
  try {
    const token = auth.split(' ')[1];
    const payload = jwt.verify(token, JWT_SECRET) as JWTPayload;
    const user = await prisma.user.findUnique({ where: { id: payload.userId } });
    if (!user) {
      res.status(401).json({ error: 'User not found' });
      return null;
    }
    return user;
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
    return null;
  }
} 