import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  res.status(200).json({ message: 'Dashboard endpoint (public)' });
} 