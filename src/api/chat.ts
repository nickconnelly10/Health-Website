import { Request, Response } from 'express';

interface AIResponse {
  response: string;
}

export default async function handler(req: Request, res: Response) {
  if (req.method === 'POST') {
    const { question, prompt } = req.body;
    const userQuestion = question || prompt;
    
    if (!userQuestion) {
      return res.status(400).json({ error: 'Question is required' });
    }

    try {
      // Forward the request to the working AI endpoint
      const aiResponse = await fetch('http://10.0.0.95:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userQuestion }),
      });

      if (!aiResponse.ok) {
        throw new Error(`AI service error: ${aiResponse.status}`);
      }

      const data = await aiResponse.json() as AIResponse;
      
      return res.status(200).json({
        success: true,
        response: data.response,
        summary: [],
        timestamp: new Date(),
      });
    } catch (error) {
      console.error('Error calling AI service:', error);
      return res.status(500).json({
        success: false,
        response: `Sorry, I'm having trouble connecting to the AI service. Please try again later.`,
        summary: [],
        timestamp: new Date(),
      });
    }
  }
  
  if (req.method === 'GET') {
    // Return empty chat history
    return res.status(200).json({ chats: [] });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
} 