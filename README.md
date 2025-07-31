# 🏥 Muscadine Health AI

A modern, evidence-based health AI advisor powered by AurraCloud, deployed on Vercel with integrated serverless functions.

## 🚀 Live Application

**Production URL**: https://healthmuscadine-kgageih9p-nicks-projects-000b3e21.vercel.app

## ✨ Features

- **🤖 AI-Powered Health Advice**: Evidence-based recommendations using AurraCloud's Grok-4 model
- **📚 Protocol Integration**: References peer-reviewed health protocols from the Health-protocols repository
- **💬 Real-time Chat**: Interactive chat interface with debounced message handling
- **🔒 Secure**: API keys protected, HTTPS-only, security headers enabled
- **📱 Responsive**: Modern UI that works on desktop and mobile
- **⚡ Fast**: Serverless deployment with global CDN

## 🏗️ Architecture

```
Frontend (React/TypeScript) → Vercel Serverless Functions → AurraCloud AI → Health Protocols
```

- **Frontend**: React with TypeScript, Vite build system
- **Backend**: Vercel serverless functions (`/api/chat`, `/api/health`)
- **AI Provider**: AurraCloud with Grok-4 model
- **Protocols**: GitHub repository with evidence-based health documents
- **Deployment**: Vercel with automatic deployments

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Vercel Serverless Functions, Node.js
- **AI**: AurraCloud API with Grok-4 model
- **Deployment**: Vercel
- **Protocols**: GitHub repository integration

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- AurraCloud API key
- Vercel account

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/nickconnelly10/health.muscadine.box.git
cd health.muscadine.box
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file:
```env
AURRA_API_KEY=your_aurracloud_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**:
   ```bash
   npx vercel login
   ```

2. **Deploy**:
   ```bash
   npx vercel --prod
   ```

3. **Configure Environment Variables**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `AURRA_API_KEY` = your AurraCloud API key
   - Environment: Production

4. **Redeploy**:
   ```bash
   npx vercel --prod
   ```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `AURRA_API_KEY` | Your AurraCloud API key | Yes |

### API Endpoints

- **Health Check**: `GET /api/health`
- **Chat**: `POST /api/chat`

### Chat Request Format
```json
{
  "input": "user message",
  "wearables": {},
  "images": [],
  "protocol_hint": "",
  "extra_context": {}
}
```

### Chat Response Format
```json
{
  "response": "AI response text",
  "success": true,
  "timestamp": "2024-07-31T16:33:00.000Z",
  "model": "aurra-xai-grok-4",
  "response_time": 1500,
  "protocol_hint": "sleep_hygiene.pdf",
  "source": "AurraCloud"
}
```

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test API Endpoints
```bash
# Health check
curl https://your-vercel-url.vercel.app/api/health

# Chat endpoint
curl -X POST https://your-vercel-url.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"input": "hello"}'
```

### Test Script
Use the included test script:
```bash
node test-api-key.js
```

## 📁 Project Structure

```
health.muscadine.box/
├── api/                    # Vercel serverless functions
│   ├── chat.ts            # Chat endpoint
│   └── health.ts          # Health check endpoint
├── src/
│   ├── components/        # React components
│   │   ├── ChatWindow.tsx # Main chat interface
│   │   ├── ChatInput.tsx  # Message input component
│   │   └── Message.tsx    # Individual message component
│   └── api/
│       └── healthAI.ts    # API service layer
├── dist/                  # Build output
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies and scripts
```

## 🔒 Security

- **API Key Protection**: Never exposed to frontend
- **HTTPS Only**: Secure by default on Vercel
- **Security Headers**: XSS protection, content validation
- **CORS**: Configured for production
- **Input Validation**: Sanitized user inputs

## 🎯 AI Capabilities

The AI advisor specializes in:

- **Nutrition**: Tailored macronutrient and micronutrient plans
- **Vitamins & Supplements**: Evidence-based dosing and timing
- **Chronic Disease Management**: Diabetes, hypertension, autoimmune conditions
- **Neurological Care & TBI**: Concussion protocols, cognitive rehabilitation
- **Preventive Medicine**: Lifestyle changes, habit formation
- **Preventive Therapies**: Shockwave therapy, LLLT
- **Environmental Health**: Air quality, pollen, UV exposure
- **Mental Well-Being**: CBT exercises, mood tracking

## 📚 Protocol Integration

The AI references protocols from: https://github.com/nickconnelly10/Health-protocols

Each response includes:
1. **Evidence Summary**: Concise bullet points with protocol citations
2. **Action Plan**: 3-5 precise steps for implementation
3. **Disclaimer**: Medical advice disclaimer

## 🔄 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run lint         # Run linter
```

### Adding New Features

1. **Frontend Changes**: Edit components in `src/components/`
2. **API Changes**: Modify serverless functions in `api/`
3. **Styling**: Update Tailwind classes or add custom CSS
4. **Testing**: Add tests in `__tests__/` directories

## 🐛 Troubleshooting

### Common Issues

**API Key Not Configured**
```
Error: AurraCloud API key not configured
```
**Solution**: Add `AURRA_API_KEY` environment variable in Vercel dashboard

**Double Message Submissions**
```
Messages appearing twice in chat
```
**Solution**: Fixed with debounce mechanism and event handling improvements

**Authentication Required**
```
HTML authentication page instead of API response
```
**Solution**: Disable password protection in Vercel project settings

### Debug Mode

Enable debug logging by setting `DEBUG=true` in environment variables.

## 📈 Performance

- **Bundle Size**: ~239KB (gzipped)
- **Build Time**: ~2.5 seconds
- **Cold Start**: ~1 second (Vercel serverless)
- **Response Time**: ~1-3 seconds (AI processing)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
- Check the troubleshooting section
- Review Vercel deployment logs
- Test API endpoints directly
- Verify environment variable configuration

## 🎉 Status

**Current Version**: v2.0.0
**Status**: ✅ **Production Ready**
**Last Updated**: July 31, 2024

---

**Built with ❤️ for evidence-based health guidance** 