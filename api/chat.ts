import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ChatRequest {
  prompt?: string;  // Legacy format
  input?: string;   // New format
  wearables?: any;
  images?: any[];
  protocol_hint?: string;
  extra_context?: any;
}

interface ChatResponse {
  response: string;
  success: boolean;
  timestamp: string;
  model?: string;
  response_time?: number;
  protocol_hint?: string;
  source?: string;
}

// Protocol keyword mapping
const PROTOCOL_KEYWORDS: { [key: string]: string } = {
  'sleep': 'sleep_hygiene.pdf',
  'insomnia': 'sleep_hygiene.pdf',
  'rest': 'sleep_hygiene.pdf',
  'nutrition': 'nutrition_guidelines.pdf',
  'diet': 'nutrition_guidelines.pdf',
  'vitamin': 'vitamin_d_protocol.pdf',
  'vitamin d': 'vitamin_d_protocol.pdf',
  'exercise': 'exercise_guidelines.pdf',
  'workout': 'exercise_guidelines.pdf',
  'fitness': 'exercise_guidelines.pdf',
  'stress': 'stress_management.pdf',
  'anxiety': 'stress_management.pdf',
  'meditation': 'stress_management.pdf',
  'heart': 'cardiovascular_health.pdf',
  'cardio': 'cardiovascular_health.pdf',
  'blood pressure': 'cardiovascular_health.pdf',
  'weight': 'weight_management.pdf',
  'obesity': 'weight_management.pdf',
  'diabetes': 'diabetes_management.pdf',
  'blood sugar': 'diabetes_management.pdf',
  'mental health': 'mental_health_protocol.pdf',
  'depression': 'mental_health_protocol.pdf',
  'mood': 'mental_health_protocol.pdf'
};

function inferProtocolHint(input: string): string | undefined {
  const lowerInput = input.toLowerCase();
  
  for (const [keyword, protocol] of Object.entries(PROTOCOL_KEYWORDS)) {
    if (lowerInput.includes(keyword)) {
      return protocol;
    }
  }
  
  return undefined;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const startTime = Date.now();
    const body: ChatRequest = req.body;

    // Extract input from either legacy 'prompt' or new 'input' field
    const userInput = body.input || body.prompt;
    
    if (!userInput) {
      return res.status(400).json({ 
        error: 'Missing required field: input or prompt' 
      });
    }

    // Infer protocol hint if not provided
    const protocolHint = body.protocol_hint || inferProtocolHint(userInput);

    // Build AurraCloud request
    const aurraRequest = {
      input: userInput,
      multimodal: {
        wearables: body.wearables || {},
        images: body.images || []
      },
      context: {
        protocol_hint: protocolHint,
        protocols_directory: "https://github.com/nickconnelly10/Health-protocols",
        extra_context: body.extra_context || {}
      }
    };

    // Get AurraCloud API key from environment
    const aurraApiKey = process.env.AURRA_API_KEY;
    if (!aurraApiKey) {
      return res.status(500).json({ 
        error: 'AurraCloud API key not configured' 
      });
    }

    // Call AurraCloud API
    const aurraResponse = await fetch(
      'https://api-v1.aurracloud.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aurraApiKey}`
        },
        body: JSON.stringify({
          model: 'aurra-gpt-4o',
          messages: [{ role: 'user', content: userInput }],
          tools: [
            {type: 'native', slug: 'chainlink-toolkit'}
          ],
          context: {
            protocol_hint: protocolHint,
            protocols_directory: "https://github.com/nickconnelly10/Health-protocols",
            extra_context: body.extra_context || {}
          }
        })
      }
    );

    if (!aurraResponse.ok) {
      const errorText = await aurraResponse.text();
      console.error('AurraCloud API error:', aurraResponse.status, errorText);
      return res.status(aurraResponse.status).json({ 
        error: `AurraCloud API error: ${aurraResponse.status}` 
      });
    }

    // Handle streaming response
    const responseText = await aurraResponse.text();
    const responseTime = Date.now() - startTime;

    // Parse streaming response
    let aiResponse = '';
    const lines = responseText.split('\n');
    
    for (const line of lines) {
      if (line.startsWith('0:')) {
        // Extract content from streaming format
        const content = line.substring(2);
        aiResponse += content;
      }
    }

    // If no streaming content found, try to parse as JSON
    if (!aiResponse.trim()) {
      try {
        const aurraData = JSON.parse(responseText);
        if (aurraData.choices && aurraData.choices[0] && aurraData.choices[0].message) {
          aiResponse = aurraData.choices[0].message.content;
        } else if (aurraData.output) {
          aiResponse = aurraData.output;
        } else if (aurraData.message) {
          aiResponse = aurraData.message;
        } else if (aurraData.response) {
          aiResponse = aurraData.response;
        } else if (aurraData.content) {
          aiResponse = aurraData.content;
        }
      } catch (e) {
        console.error('Failed to parse response:', e);
      }
    }

    // Fallback if no response extracted
    if (!aiResponse.trim()) {
      aiResponse = 'I apologize, but I received an unexpected response format from the AI service.';
    }

    // Add disclaimer if not present
    const disclaimer = '\n\n**Disclaimer**: This information is for educational purposes only and should not replace professional medical advice. Always consult with healthcare professionals for medical decisions.';
    if (!aiResponse.toLowerCase().includes('disclaimer')) {
      aiResponse += disclaimer;
    }

    // Build response
    const response: ChatResponse = {
      response: aiResponse,
      success: true,
      timestamp: new Date().toISOString(),
      model: 'aurra-gpt-4o',
      response_time: responseTime,
      protocol_hint: protocolHint,
      source: 'AurraCloud'
    };

    res.status(200).json(response);

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 