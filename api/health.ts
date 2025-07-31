import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const aurraApiKey = process.env.AURRA_API_KEY;
    
    if (!aurraApiKey) {
      return res.status(500).json({
        service: 'vercel-aurra-backend',
        aurra_status: 'api_key_missing',
        error: 'AurraCloud API key not configured'
      });
    }

    // Test AurraCloud connectivity with a simple request
    const testResponse = await fetch(
      'https://api.aurra.cloud/v1/agents/1a1caab0-a136-40fe-b323-d56d4f2683f2/run',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aurraApiKey}`
        },
        body: JSON.stringify({
          input: 'health check',
          multimodal: {},
          context: {}
        })
      }
    );

    const healthResponse = {
      service: 'vercel-aurra-backend',
      aurra_status: testResponse.ok ? 'connected' : 'error',
      agent_id: '1a1caab0-a136-40fe-b323-d56d4f2683f2',
      security: {
        enabled: true,
        api_key_configured: !!aurraApiKey
      },
      protocols: {
        count: 25, // Approximate number of protocols
        directory: 'https://github.com/nickconnelly10/Health-protocols'
      },
      deployment: {
        platform: 'vercel',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
      }
    };

    if (!testResponse.ok) {
      healthResponse.aurra_status = 'error';
      console.error('AurraCloud health check failed:', testResponse.status);
    }

    res.status(200).json(healthResponse);

  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      service: 'vercel-aurra-backend',
      aurra_status: 'error',
      error: 'Health check failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 