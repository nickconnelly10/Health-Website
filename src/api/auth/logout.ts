import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  // JWT logout is handled client-side by deleting the token.
  res.status(200).json({ message: 'Logged out (client should delete token)' });
} 