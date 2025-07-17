import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  if (req.method === 'POST') {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }
    // Always return a development stub
    return res.status(200).json({
      success: true,
      response: 'Chat is in development. No AI response is available.',
      summary: [],
      timestamp: new Date(),
    });
  }
  if (req.method === 'GET') {
    // Always return empty chat history
    return res.status(200).json({ chats: [] });
  }
  return res.status(405).json({ error: 'Method not allowed' });
} 