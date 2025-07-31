module.exports = (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const aurraApiKey = process.env.AURRA_API_KEY;
    
    const response = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment_variables: {
        AURRA_API_KEY: aurraApiKey ? `${aurraApiKey.substring(0, 8)}...` : 'NOT_SET',
        AURRA_API_KEY_LENGTH: aurraApiKey ? aurraApiKey.length : 0,
        NODE_ENV: process.env.NODE_ENV || 'NOT_SET',
        VERCEL_ENV: process.env.VERCEL_ENV || 'NOT_SET'
      },
      all_env_keys: Object.keys(process.env).filter(key => key.includes('AURRA') || key.includes('VERCEL'))
    };

    res.status(200).json(response);

  } catch (error) {
    console.error('Test simple error:', error);
    res.status(500).json({ 
      status: 'error',
      error: 'Internal server error',
      details: error.message || 'Unknown error'
    });
  }
}; 