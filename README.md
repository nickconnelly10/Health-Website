# Muscadine Health AI Advisor

**Institutional-grade AI chat for health and financial self-sovereignty.**

A professional health advisory application powered by advanced AI, providing evidence-based guidance on nutrition, exercise, wellness, and lifestyle topics.

## 🚀 Features

### 🤖 AI-Powered Health Advisory
- **Mistral AI Integration**: Powered by Ollama with Mistral 7.2B model
- **Evidence-Based Responses**: Medical-grade health guidance
- **Real-time Chat**: Instant responses with loading states
- **Connection Monitoring**: Live status indicator for backend connectivity

### 💬 Professional Chat Interface
- **Modern UI**: Clean, medical-grade design
- **Message History**: Full conversation tracking
- **Error Handling**: Graceful handling of network issues
- **Responsive Design**: Works on desktop and mobile
- **Accessibility**: ARIA labels and keyboard navigation

### 🏥 Health Categories
- **💪 Exercise Science**: Workout plans, fitness advice, training programs
- **🥗 Nutrition**: Dietary guidance, meal planning, supplement advice
- **🧘 Wellness**: Lifestyle tips, stress management, mental health
- **📚 Education**: Health knowledge, research insights, medical information

### 🔧 Technical Features
- **TypeScript**: Full type safety and IntelliSense
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast development and optimized builds
- **Tailwind CSS**: Utility-first styling
- **Express.js**: Robust backend API
- **Prisma**: Type-safe database operations

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

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
   - Backend API: http://localhost:3001
   - Health Check: http://localhost:3001/api/health

## 🏗️ Project Structure

```
health.muscadine.box/
├── src/
│   ├── components/          # React components
│   │   ├── ChatWindow.tsx   # Main chat interface
│   │   ├── ChatInput.tsx    # Message input component
│   │   ├── Message.tsx      # Individual message display
│   │   └── ...              # Other UI components
│   ├── api/                 # API services
│   │   ├── healthAI.ts      # Frontend AI service
│   │   ├── serverHealthAI.ts # Backend AI service
│   │   ├── chat.ts          # Chat API endpoint
│   │   └── userChat.ts      # User chat API
│   ├── protocols/           # Health research documents
│   └── server.ts            # Express server
├── prisma/                  # Database schema
├── public/                  # Static assets
└── dist/                    # Production build
```

## 🔌 API Integration

### Backend Connection
The application connects to a Flask backend running Ollama with Mistral AI:

```typescript
// API Endpoint
POST http://health.muscadine.box/chat

// Request Body
{
  "prompt": "user health question"
}

// Response
{
  "response": "AI health advice",
  "success": true,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Health AI Service
```typescript
import { healthAIService } from './api/healthAI';

// Get health advice
const response = await healthAIService.getHealthAdvice("How much protein should I eat?");

// Check connection
const isConnected = await healthAIService.checkConnection();
```

## 🚀 Deployment

### Vercel Deployment
1. **Connect repository** to Vercel
2. **Set build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Configure environment variables** in Vercel dashboard
4. **Deploy** automatically on push to main branch

### Environment Variables
```env
# Database
DATABASE_URL="file:./dev.db"

# Server
PORT=3001
NODE_ENV=production

# AI Backend
HEALTH_AI_URL="http://health.muscadine.box"
```

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Build Test
```bash
npm run build
```

### API Test
```bash
# Health check
curl http://localhost:3001/api/health

# Chat test
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"prompt":"test message"}'
```

## 📊 Performance

### Optimizations
- **Connection Caching**: 10-second cache for connection status
- **Exponential Backoff**: Intelligent retry logic
- **Request Cancellation**: AbortController for pending requests
- **Code Splitting**: Lazy loading for better performance
- **Bundle Optimization**: Tree shaking and minification

### Metrics
- **Bundle Size**: ~222KB (gzipped)
- **Load Time**: <2s on 3G
- **Time to Interactive**: <3s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)

## 🔒 Security

### Features
- **CORS Protection**: Configured for production domains
- **Input Validation**: Sanitized user inputs
- **Error Handling**: No sensitive data in error messages
- **HTTPS Only**: Secure connections in production

### Medical Disclaimer
> This application provides general health guidance only. Always consult healthcare professionals for medical advice, diagnosis, or treatment.

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
2. **API errors**: Verify Flask backend is running
3. **Connection issues**: Check network and firewall settings
4. **TypeScript errors**: Run `npm run build:server` to check server types

#### Debug Mode
```bash
# Enable debug logging
DEBUG=true npm run dev

# Check server logs
npm run dev:backend
```

## 🎯 Roadmap

### Upcoming Features
- [ ] User authentication and profiles
- [ ] Chat history persistence
- [ ] Voice input/output
- [ ] Health tracking integration
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Advanced AI models integration

### Version History
- **v0.0.11**: Production-ready health AI chat
- **v0.0.10**: Flask backend integration
- **v0.0.9**: UI/UX improvements
- **v0.0.8**: Initial release

---

**Built with ❤️ for health and wellness** 