import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

// Import API routes
import chatHandler from './api/chat';
import userChatHandler from './api/userChat';
import dashboardHandler from './api/dashboard';
import ingestHandler from './api/ingest';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://health.muscadine.box', 'https://www.muscadine.box']
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

// Serve static files from public directory (before API routes)
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Individual API endpoints
app.all('/api/chat', chatHandler);
app.all('/api/userChat', userChatHandler);
app.all('/api/dashboard', dashboardHandler);
app.all('/api/ingest', ingestHandler);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'health-ai-frontend',
    version: '0.0.12',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Backend health check endpoint
app.get('/api/backend-health', async (req, res) => {
  try {
    const { serverHealthAIService } = await import('./api/serverHealthAI');
    const isConnected = await serverHealthAIService.checkConnection();
    res.json({ 
      status: isConnected ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString(),
      backend: 'health-backend',
      ollama_status: isConnected ? 'connected' : 'disconnected'
    });
  } catch (error) {
    res.json({ 
      status: 'error',
      timestamp: new Date().toISOString(),
      backend: 'health-backend',
      ollama_status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  // Handle client-side routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Health AI Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 API available at: http://localhost:${PORT}/api`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
});

export default app; 