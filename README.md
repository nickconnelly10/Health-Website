# Muscadine Health AI Advisor

**Institutional-grade AI chat for health and financial self-sovereignty.**

A professional health advisory application powered by AurraCloud AI, providing evidence-based guidance on nutrition, exercise, wellness, and lifestyle topics with protocol-based responses. **Fully deployed on Vercel with integrated serverless functions.**

## 🚀 Features

### 🤖 AI-Powered Health Advisory
- **AurraCloud Integration**: Powered by advanced cloud-based AI agents
- **Protocol-Based Responses**: Evidence-based health guidance with scientific literature
- **Real-time Chat**: Instant responses with loading states
- **Connection Monitoring**: Live status indicator for API connectivity
- **Timeout Handling**: 30-second timeout for AI processing
- **Multimodal Support**: Wearables data and image processing capabilities

### 💬 Professional Chat Interface
- **Modern UI**: Clean, medical-grade design with ChatGPT-like interface
- **Dark Mode Support**: Toggle between light and dark themes
- **Message History**: Full conversation tracking
- **Error Handling**: Graceful handling of network issues
- **Responsive Design**: Works on desktop and mobile
- **Accessibility**: ARIA labels and keyboard navigation
- **Connection Status**: Real-time API connectivity indicator
- **Protocol Indicators**: Visual indicators for evidence-based responses

### 🏥 Health Categories & Resources
- **💪 Physical Activity**: Exercise science and injury recovery resources
- **🥗 Nutrition**: Evidence-based nutrition guidance and resources
- **🧘 Lifestyle**: Holistic wellness and daily living resources
- **📚 Resources**: Comprehensive health resources database
- **🔬 Health Protocol Database**: Scientific literature repository powering AI decisions

### ⚙️ Settings & Configuration
- **Dark Mode Toggle**: Switch between light and dark themes
- **GitHub Repository Links**: Direct access to health protocols repository
- **System Status**: Real-time service monitoring
- **Connection Management**: API connectivity controls

### 🔧 Technical Features
- **TypeScript**: Full type safety and IntelliSense
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast development and optimized builds
- **Tailwind CSS**: Utility-first styling with dark mode support
- **Vercel Serverless Functions**: Integrated backend API
- **AurraCloud AI**: Cloud-based AI service with protocol integration

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- AurraCloud API Key

### Local Development
1. **Clone the repository**:
   ```bash
   git clone https://github.com/nickconnelly10/health.muscadine.box.git
   cd health.muscadine.box
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   - Frontend: http://localhost:5173
   - API Functions: http://localhost:3000/api/* (when using `vercel dev`)

## 🏗️ Project Structure

```
health.muscadine.box/
├── src/                    # Frontend React code
│   ├── components/         # React components
│   │   ├── ChatWindow.tsx  # Main chat interface with AurraCloud integration
│   │   ├── ChatInput.tsx   # Message input component
│   │   ├── Message.tsx     # Individual message display with metadata
│   │   ├── MuscadineBanner.tsx # Navigation with settings dropdown
│   │   ├── ResourcesPage.tsx # Health resources and protocols
│   │   ├── NutritionPage.tsx # Nutrition guidance
│   │   ├── LifestylePage.tsx # Lifestyle resources
│   │   ├── PhysicalActivityPage.tsx # Exercise resources
│   │   └── ...             # Other UI components
│   ├── api/                # API services
│   │   ├── healthAI.ts     # Frontend AI service with AurraCloud support
│   │   ├── serverHealthAI.ts # Server-side AI service
│   │   └── chat.ts         # API handler
│   ├── App.tsx             # Main application with routing
│   └── main.tsx            # Application entry point
├── api/                    # Vercel serverless functions
│   ├── chat.ts             # Chat API endpoint
│   └── health.ts           # Health check endpoint
├── public/                 # Static assets
├── dist/                   # Production build
├── vercel.json             # Vercel configuration
└── package.json            # Dependencies and scripts
```

## 🔌 API Integration

### Vercel Serverless Functions
The application uses Vercel serverless functions for the backend API:

```typescript
// API Endpoint
POST /api/chat

// Request Body (Legacy Format)
{
  "prompt": "user health question"
}

// Request Body (Enhanced Format)
{
  "input": "user health question",
  "wearables": {
    "sleep": { "duration": 420, "quality": "fair" },
    "heartRate": 58
  },
  "images": [],
  "protocol_hint": "sleep_hygiene.pdf",
  "extra_context": { "userId": "abc123" }
}

// Response
{
  "response": "AI health advice with protocol citations",
  "success": true,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "model": "aurra-agent-1a1caab0",
  "response_time": 3.45,
  "protocol_hint": "sleep_hygiene.pdf",
  "source": "aurra"
}
```

### Health AI Service
```typescript
import { healthAIService } from './api/healthAI';

// Get health advice (legacy format)
const response = await healthAIService.getHealthAdvice("How much protein should I eat?");

// Get health advice with enhanced data
const enhancedResponse = await healthAIService.getHealthAdviceWithData({
  input: "I need sleep advice",
  wearables: { sleep: { duration: 360, quality: "poor" } },
  protocol_hint: "sleep_duration_recommendations_hirshkowitz2015.pdf"
});

// Check connection
const isConnected = await healthAIService.checkConnection();

// Check AurraCloud status
const aurraStatus = await healthAIService.checkAurraCloudStatus();
```

## 🚀 Deployment

### Vercel Deployment (Recommended)
This application is optimized for Vercel deployment:

1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Set environment variables** in Vercel dashboard:
   ```env
   AURRA_API_KEY=your-aurra-api-key-here
   ```

### Environment Variables
```env
# AurraCloud Configuration
AURRA_API_KEY=your-aurra-api-key-here

# Build Configuration
NODE_ENV=production
VITE_APP_VERSION="2.0.0"
```

## 🧪 Testing

### Run Tests
```bash
# Frontend tests
npm test

# TypeScript compilation check
npx tsc --noEmit

# Build test
npm run build

# Lint check
npm run lint
```

### Local Development with Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Start local development
vercel dev
```

This will start:
- Frontend: `http://localhost:3000`
- API Functions: `http://localhost:3000/api/*`

## 📊 Performance

### Optimizations
- **Connection Caching**: 10-second cache for connection status
- **Exponential Backoff**: Intelligent retry logic
- **Request Cancellation**: AbortController for pending requests
- **Code Splitting**: Lazy loading for better performance
- **Bundle Optimization**: Tree shaking and minification
- **Dark Mode**: Optimized theme switching
- **Vercel Edge Functions**: Global CDN distribution

### Metrics
- **Bundle Size**: ~250KB (gzipped)
- **Load Time**: <2s on 3G
- **Time to Interactive**: <3s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **AI Response Time**: 2-10 seconds (AurraCloud processing)

## 🔒 Security

### Features
- **CORS Protection**: Configured for production domains
- **Input Validation**: Sanitized user inputs
- **Error Handling**: No sensitive data in error messages
- **HTTPS Only**: Secure connections in production
- **Security Headers**: XSS protection and content security
- **API Key Protection**: AurraCloud API key never exposed to clients

### Medical Disclaimer
> This application provides general health guidance only. Always consult healthcare professionals for medical advice, diagnosis, or treatment.

## 🎨 UI/UX Features

### Dark Mode
- **Toggle Control**: Settings dropdown with dark mode switch
- **Persistent State**: Remembers user preference
- **Smooth Transitions**: Animated theme switching
- **Accessibility**: High contrast ratios maintained

### Navigation
- **AI Chat**: Primary interface (default landing page)
- **Lifestyle**: Holistic wellness resources
- **Nutrition**: Evidence-based nutrition guidance
- **Physical Activity**: Exercise science resources
- **Resources**: Health protocols database

### Settings Dropdown
- **Dark Mode Toggle**: Switch between themes
- **GitHub Repository**: Link to health protocols
- **Click Outside**: Auto-close functionality
- **Responsive Design**: Works on all screen sizes

### AurraCloud Indicators
- **Connection Status**: Real-time AurraCloud connectivity
- **Response Metadata**: Display response time and protocol hints
- **Protocol Citations**: Visual indicators for evidence-based responses

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Update documentation
- Follow the existing code style
- Test dark mode compatibility
- Ensure Vercel function compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Contact
- **Email**: nickconnelly10@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/nickconnelly10/health.muscadine.box/issues)
- **Documentation**: [Wiki](https://github.com/nickconnelly10/health.muscadine.box/wiki)

### Troubleshooting

#### Common Issues
1. **Build fails**: Check Node.js version (18+ required)
2. **API errors**: Verify AurraCloud API key is configured
3. **Connection issues**: Check network and firewall settings
4. **Dark mode not working**: Check browser console for errors
5. **AurraCloud not responding**: Verify API key and network connectivity

#### Debug Mode
```bash
# Enable debug logging
DEBUG=true npm run dev

# Check browser console for errors
# Check network tab for API calls
# Verify AurraCloud status in connection indicator
```

## 🎯 Roadmap

### Upcoming Features
- [ ] Enhanced protocol integration
- [ ] User authentication and profiles
- [ ] Chat history persistence
- [ ] Voice input/output
- [ ] Health tracking integration
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Advanced multimodal processing
- [ ] File upload interface
- [ ] Health protocols viewer

### Version History
- **v2.0.0**: Vercel-only deployment with integrated serverless functions
- **v0.0.12**: Dark mode implementation and UI improvements
- **v0.0.11**: Production-ready health AI chat
- **v0.0.10**: Flask backend integration
- **v0.0.9**: UI/UX improvements
- **v0.0.8**: Initial release

## 🔄 Migration from External Backend

This application has been simplified to run entirely on Vercel:

### What Changed
- **Backend**: External servers → Vercel serverless functions
- **Deployment**: Multiple services → Single Vercel deployment
- **Dependencies**: Reduced from 50+ to essential packages only
- **Configuration**: Simplified to Vercel-only setup

### What's Preserved
- **All Features**: Complete functionality maintained
- **UI/UX**: Same user experience
- **API Structure**: Legacy format still supported
- **Security**: All security features maintained

For detailed deployment information, see:
- [Vercel Deployment Guide](VERCEL_DEPLOYMENT.md)

---

**Built with ❤️ for health and wellness** 