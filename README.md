# 🏥 Muscadine Health AI

A modern, evidence-based health AI advisor powered by AurraCloud Grok-4, deployed on Vercel with integrated serverless functions and comprehensive health resources.

## 🚀 Live Application

**Production URL**: https://healthmuscadine-j6q7jm7xe-nicks-projects-000b3e21.vercel.app

## ✨ Features

- **🤖 AI-Powered Health Advice**: Evidence-based recommendations using AurraCloud's Grok-4 model
- **📚 Health Protocol Database**: Comprehensive collection of peer-reviewed health protocols with search and filtering
- **💬 Real-time Chat**: Interactive chat interface with debounced message handling
- **📖 Resource Pages**: Detailed guides for Nutrition, Physical Activity, and Lifestyle
- **🔒 Secure**: API keys protected, HTTPS-only, security headers enabled
- **📱 Responsive**: Modern UI that works on desktop and mobile
- **⚡ Fast**: Serverless deployment with global CDN
- **🌙 Dark Mode**: Full dark/light mode support across all components

## 🏗️ Architecture

```
Frontend (React/TypeScript) → Vercel Serverless Functions → AurraCloud AI → Health Protocols
```

- **Frontend**: React with TypeScript, Vite build system, Tailwind CSS
- **Backend**: Vercel serverless functions (`/api/chat`, `/api/health`)
- **AI Provider**: AurraCloud with Grok-4 model and agent ID
- **Protocols**: GitHub repository with evidence-based health documents
- **Deployment**: Vercel with automatic deployments

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Vercel Serverless Functions, Node.js (ES Modules)
- **AI**: AurraCloud API with Grok-4 model
- **Deployment**: Vercel
- **Protocols**: GitHub repository integration
- **Styling**: Tailwind CSS with custom color scheme

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
curl https://healthmuscadine-j6q7jm7xe-nicks-projects-000b3e21.vercel.app/api/health

# Chat endpoint
curl -X POST https://healthmuscadine-j6q7jm7xe-nicks-projects-000b3e21.vercel.app/api/chat \
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
│   │   ├── Message.tsx    # Individual message component
│   │   ├── Dashboard.tsx  # Dashboard page
│   │   ├── ProfilePage.tsx # Profile page
│   │   ├── NutritionPage.tsx # Nutrition guide
│   │   ├── PhysicalActivityPage.tsx # Exercise guide
│   │   ├── LifestylePage.tsx # Lifestyle guide
│   │   ├── ResourcesPage.tsx # Resources page
│   │   ├── HealthProtocolsPage.tsx # Protocol database
│   │   ├── MuscadineBanner.tsx # Navigation banner
│   │   └── MuscadineFooter.tsx # Footer
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

### Health Protocol Database
- **21 Protocols**: Comprehensive collection of peer-reviewed research
- **8 Categories**: Physical Activity, Nutrition, Sleep, Mental Health, Medical Protocols, etc.
- **Search & Filter**: Find protocols by category or keyword
- **Direct Access**: Read online or download PDFs
- **Evidence-Based**: All protocols are peer-reviewed and evidence-based

Each response includes:
1. **Evidence Summary**: Concise bullet points with protocol citations
2. **Action Plan**: 3-5 precise steps for implementation
3. **Disclaimer**: Medical advice disclaimer

## 🎨 UI/UX Features

### Layout & Design
- **Responsive Grid**: 60/40 layout proportions for optimal content display
- **Dark Mode**: Full dark/light mode support with real-time theme detection
- **Modern Design**: Clean, professional interface with custom color scheme
- **Accessibility**: Proper contrast ratios and keyboard navigation

### Navigation
- **Banner Navigation**: Clean navigation with dropdown settings
- **Resource Pages**: Dedicated pages for Nutrition, Physical Activity, and Lifestyle
- **Health Protocols**: Comprehensive database with search functionality
- **Footer Links**: Updated repository links and legal information

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

**Module System Errors**
```
SyntaxError: Unexpected token 'export'
```
**Solution**: Ensure `"type": "module"` is set in package.json

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

**API Endpoint Errors**
```
FUNCTION_INVOCATION_FAILED
```
**Solution**: Verify API key format and AurraCloud API endpoint configuration

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

**Current Version**: v2.1.0
**Status**: ✅ **Production Ready**
**Last Updated**: January 2025
**API Endpoint**: Updated to AurraCloud Grok-4 model
**Features**: Health Protocol Database, Dark Mode, Responsive Layout

---

**Built with ❤️ for evidence-based health guidance** 