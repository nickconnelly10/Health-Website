import { Request, Response } from 'express';
import { requireAuth } from './_authMiddleware';

export default async function handler(req: Request, res: Response) {
  try {
    const user = await requireAuth(req, res);
    if (!user) return;

    if (req.method === 'GET') {
      // Mock wearable data
      const wearablesData = {
        devices: [
          { id: 'fitbit-1', name: 'Fitbit Charge', type: 'fitness_tracker', lastSync: new Date().toISOString() },
          { id: 'apple-watch-1', name: 'Apple Watch', type: 'smartwatch', lastSync: new Date(Date.now() - 3600000).toISOString() }
        ],
        metrics: {
          steps: 8420,
          heartRate: 72,
          sleepHours: 7.5,
          calories: 2100
        }
      };
      return res.status(200).json(wearablesData);
    }

    if (req.method === 'POST') {
      const { deviceId, data } = req.body;
      if (!deviceId || !data) {
        return res.status(400).json({ error: 'Device ID and data are required' });
      }

      // Mock data sync response
      return res.status(200).json({ 
        success: true, 
        message: 'Wearable data synced successfully',
        deviceId,
        timestamp: new Date().toISOString()
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Wearables API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 