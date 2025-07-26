import { Request, Response } from 'express';

interface AIResponse {
  response: string;
}

// Basic health responses for when AI service is not available
const healthResponses = {
  greeting: "Hello! I'm your Health AI assistant. I can help you with questions about nutrition, exercise, lifestyle, and general health. What would you like to know?",
  nutrition: "For nutrition advice, I recommend focusing on whole foods, plenty of vegetables, adequate protein, and staying hydrated. Would you like specific recommendations for your situation?",
  exercise: "Regular exercise is important for health. Aim for at least 150 minutes of moderate activity per week, plus strength training 2-3 times per week. What type of exercise interests you?",
  sleep: "Quality sleep is crucial for health. Adults should aim for 7-9 hours per night. Good sleep hygiene includes a consistent schedule, dark room, and avoiding screens before bed.",
  stress: "Managing stress is important for overall health. Techniques like meditation, deep breathing, regular exercise, and adequate sleep can help. What's causing you stress?",
  default: "I'm here to help with your health questions! While I'm setting up my advanced AI capabilities, I can provide general health guidance. What specific area would you like to discuss?"
};

export default async function handler(req: Request, res: Response) {
  if (req.method === 'POST') {
    const { question, prompt } = req.body;
    const userQuestion = question || prompt;
    
    if (!userQuestion) {
      return res.status(400).json({ error: 'Question is required' });
    }

    try {
      // Try to connect to the AI service
      const aiResponse = await fetch('http://10.0.0.95:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userQuestion }),
      });

      if (aiResponse.ok) {
        const data = await aiResponse.json() as AIResponse;
        return res.status(200).json({
          success: true,
          response: data.response,
          summary: [],
          timestamp: new Date(),
        });
      }
    } catch (error) {
      console.log('AI service not available, using fallback responses');
    }

    // Fallback responses when AI service is not available
    const lowerQuestion = userQuestion.toLowerCase();
    let response = healthResponses.default;

    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi') || lowerQuestion.includes('hey')) {
      response = healthResponses.greeting;
    } else if (lowerQuestion.includes('nutrition') || lowerQuestion.includes('diet') || lowerQuestion.includes('food') || lowerQuestion.includes('eat')) {
      response = healthResponses.nutrition;
    } else if (lowerQuestion.includes('exercise') || lowerQuestion.includes('workout') || lowerQuestion.includes('fitness') || lowerQuestion.includes('training')) {
      response = healthResponses.exercise;
    } else if (lowerQuestion.includes('sleep') || lowerQuestion.includes('rest')) {
      response = healthResponses.sleep;
    } else if (lowerQuestion.includes('stress') || lowerQuestion.includes('anxiety') || lowerQuestion.includes('mental')) {
      response = healthResponses.stress;
    } else if (lowerQuestion.includes('fast') || lowerQuestion.includes('fasting')) {
      response = "Intermittent fasting can have health benefits, but it's not for everyone. Common approaches include 16:8 (16 hours fasting, 8 hours eating) or 5:2 (5 days normal eating, 2 days restricted calories). Always consult with a healthcare provider before starting any fasting regimen, especially if you have medical conditions.";
    }

    return res.status(200).json({
      success: true,
      response: response,
      summary: [],
      timestamp: new Date(),
    });
  }
  
  if (req.method === 'GET') {
    // Return empty chat history
    return res.status(200).json({ chats: [] });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
} 