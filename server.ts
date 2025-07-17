import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import chatHandler from './src/api/chat';
import ingestHandler from './src/api/ingest';
import authRouter from './src/api/auth';

const app = express();
app.use(cors());
app.use(json());

// Auth routes
app.use('/api/auth', authRouter);

// Ingest & chat endpoints
app.use('/api/ingest', ingestHandler);
app.use('/api/chat', chatHandler);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => console.log(`Server running on port ${port}`));

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
}); 