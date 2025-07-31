import type { VercelRequest, VercelResponse } from '@vercel/node';

interface HealthResponse {
  status: string;
  timestamp: string;
  aurracloud_status: string;
  aurracloud_agent_id: string;
  security: {
    api_key_configured: boolean;
    https_enabled: boolean;
  };
  deployment: {
    platform: string;
    environment: string;
    version: string;
  };
  error?: string;
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

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const aurraApiKey = process.env.AURRA_API_KEY;
    let aurracloudStatus = 'unknown';
    let error = null;

    if (!aurraApiKey) {
      aurracloudStatus = 'api_key_missing';
      error = 'AurraCloud API key not configured in environment variables';
    } else {
      try {
        // Test AurraCloud API connection
        const testResponse = await fetch(
          'https://api-v1.aurracloud.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${aurraApiKey}`
            },
            body: JSON.stringify({
              model: 'aurra-xai-grok-4',
              agent_id: '1a1caab0-a136-40fe-b323-d56d4f2683f2',
              messages: [{ role: 'user', content: 'test' }],
              max_tokens: 10
            })
          }
        );

        if (testResponse.ok) {
          aurracloudStatus = 'connected';
        } else {
          aurracloudStatus = 'error';
          error = `AurraCloud API returned status ${testResponse.status}`;
        }
      } catch (apiError) {
        aurracloudStatus = 'connection_failed';
        error = `Failed to connect to AurraCloud: ${apiError instanceof Error ? apiError.message : 'Unknown error'}`;
      }
    }

    const response: HealthResponse = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      aurracloud_status: aurracloudStatus,
      aurracloud_agent_id: '1a1caab0-a136-40fe-b323-d56d4f2683f2',
      security: {
        api_key_configured: !!aurraApiKey,
        https_enabled: true
      },
      deployment: {
        platform: 'vercel',
        environment: process.env.VERCEL_ENV || 'development',
        version: '2.0.0'
      }
    };

    if (error) {
      response.error = error;
    }

    res.status(200).json(response);

  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({ 
      status: 'error',
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 