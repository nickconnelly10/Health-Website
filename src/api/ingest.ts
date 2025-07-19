import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { data, type } = req.body;
    if (!data || !type) {
      return res.status(400).json({ error: 'Data and type are required' });
    }

    // Mock data ingestion response
    const ingestionResult = {
      success: true,
      message: 'Data ingested successfully',
      type,
      recordsProcessed: Array.isArray(data) ? data.length : 1,
      timestamp: new Date().toISOString(),
      userId: 'anonymous'
    };

    return res.status(200).json(ingestionResult);
  } catch (error) {
    console.error('Ingest API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 