# Vercel Deployment Guide

## 🚀 Complete Vercel Deployment (Frontend + Backend)

This guide will help you deploy the entire Muscadine Health AI application to Vercel, including both the frontend and the AurraCloud-powered backend as serverless functions.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **AurraCloud API Key**: Get your API key from [AurraCloud](https://aurra.cloud)
3. **GitHub Repository**: Your code should be in a GitHub repository

## 🛠️ Deployment Steps

### Step 1: Prepare Your Repository

Ensure your repository has the following structure:
```
health.muscadine.box/
├── src/                    # Frontend React code
├── api/                    # Vercel serverless functions
│   ├── chat.ts            # Chat API endpoint
│   └── health.ts          # Health check endpoint
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── README.md              # Documentation
```

### Step 2: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 3: Login to Vercel

```bash
vercel login
```

### Step 4: Deploy to Vercel

```bash
# From your project directory
vercel --prod
```

### Step 5: Configure Environment Variables

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variable:

```
Name: AURRA_API_KEY
Value: your-aurra-api-key-here
Environment: Production (and Preview if needed)
```

### Step 6: Redeploy with Environment Variables

```bash
vercel --prod
```

## 🔧 Configuration Details

### Vercel Configuration (vercel.json)

```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  "functions": {
    "api/chat.ts": {
      "maxDuration": 30
    }
  },
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

### API Endpoints

After deployment, your application will have these endpoints:

- **Frontend**: `https://your-app.vercel.app`
- **Chat API**: `https://your-app.vercel.app/api/chat`
- **Health Check**: `https://your-app.vercel.app/api/health`

## 🧪 Testing Your Deployment

### Test the Health Endpoint

```bash
curl https://your-app.vercel.app/api/health
```

Expected response:
```json
{
  "service": "vercel-aurra-backend",
  "aurra_status": "connected",
  "agent_id": "1a1caab0-a136-40fe-b323-d56d4f2683f2",
  "security": {
    "enabled": true,
    "api_key_configured": true
  },
  "protocols": {
    "count": 25,
    "directory": "https://github.com/nickconnelly10/Health-protocols"
  },
  "deployment": {
    "platform": "vercel",
    "environment": "production",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

### Test the Chat API

```bash
curl -X POST https://your-app.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"prompt":"How much sleep do I need?"}'
```

Expected response:
```json
{
  "response": "Based on scientific research, adults typically need 7-9 hours of sleep per night...",
  "success": true,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "model": "aurra-agent-1a1caab0",
  "response_time": 3456,
  "protocol_hint": "sleep_hygiene.pdf",
  "source": "aurra"
}
```

## 🔒 Security Features

### Environment Variables
- **AURRA_API_KEY**: Stored securely in Vercel, never exposed to frontend
- **CORS Protection**: Configured for your domain
- **Security Headers**: XSS protection, content type validation

### API Security
- **Input Validation**: All inputs are validated and sanitized
- **Error Handling**: No sensitive information in error messages
- **Rate Limiting**: Vercel provides built-in rate limiting

## 📊 Monitoring and Logs

### Vercel Dashboard
- **Functions**: Monitor serverless function performance
- **Analytics**: Track usage and performance metrics
- **Logs**: View real-time function logs

### Health Monitoring
- **Health Endpoint**: `/api/health` provides system status
- **AurraCloud Status**: Real-time connectivity monitoring
- **Error Tracking**: Comprehensive error logging

## 🚀 Performance Optimization

### Vercel Optimizations
- **Edge Functions**: Global CDN distribution
- **Automatic Scaling**: Handles traffic spikes automatically
- **Caching**: Built-in caching for static assets

### Frontend Optimizations
- **Code Splitting**: Automatic bundle optimization
- **Image Optimization**: Automatic image compression
- **Minification**: Automatic CSS/JS minification

## 🔄 Continuous Deployment

### GitHub Integration
1. Connect your GitHub repository to Vercel
2. Every push to `main` branch triggers automatic deployment
3. Preview deployments for pull requests

### Environment Management
- **Production**: `main` branch
- **Preview**: Pull requests
- **Development**: Local development with `vercel dev`

## 🛠️ Local Development

### Run Locally with Vercel

```bash
# Install dependencies
npm install

# Start local development
vercel dev
```

This will start:
- Frontend: `http://localhost:3000`
- API Functions: `http://localhost:3000/api/*`

### Environment Variables for Local Development

Create a `.env.local` file:
```env
AURRA_API_KEY=your-aurra-api-key-here
```

## 🐛 Troubleshooting

### Common Issues

1. **API Key Not Configured**
   ```
   Error: AurraCloud API key not configured
   ```
   **Solution**: Add `AURRA_API_KEY` to Vercel environment variables

2. **Function Timeout**
   ```
   Error: Function execution timeout
   ```
   **Solution**: Increase `maxDuration` in `vercel.json`

3. **CORS Errors**
   ```
   Error: CORS policy violation
   ```
   **Solution**: Check CORS headers in API functions

4. **Build Failures**
   ```
   Error: Build failed
   ```
   **Solution**: Check TypeScript compilation and dependencies

### Debug Commands

```bash
# Check build locally
npm run build

# Test TypeScript compilation
npx tsc --noEmit

# Run tests
npm test

# Check Vercel configuration
vercel --debug
```

## 📈 Scaling Considerations

### Vercel Limits
- **Function Duration**: 10 seconds (Hobby), 60 seconds (Pro)
- **Request Size**: 4.5MB payload limit
- **Concurrent Functions**: 1000 (Hobby), 3000 (Pro)

### Optimization Tips
- **Keep Functions Light**: Minimize dependencies
- **Use Caching**: Cache frequently accessed data
- **Optimize Images**: Use WebP format
- **Bundle Optimization**: Minimize JavaScript bundle size

## 🎯 Next Steps

After successful deployment:

1. **Test All Features**: Verify chat, health checks, and UI
2. **Monitor Performance**: Check Vercel analytics
3. **Set Up Monitoring**: Configure error tracking
4. **Optimize**: Fine-tune based on usage patterns
5. **Scale**: Upgrade plan if needed

## 📞 Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **AurraCloud Support**: [aurra.cloud/support](https://aurra.cloud/support)
- **GitHub Issues**: Create issues in your repository

---

**🎉 Congratulations! Your Muscadine Health AI application is now fully deployed on Vercel!** 