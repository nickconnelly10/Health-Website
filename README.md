# Muscadine Health AI Advisor

**Institutional-grade AI chat for health and financial self-sovereignty.**

A professional health advisory application powered by advanced AI, providing evidence-based guidance on nutrition, exercise, wellness, and lifestyle topics.

## 🚀 Features

### 🤖 AI-Powered Health Advisory
- **Mistral AI Integration**: Powered by Ollama with Mistral 7.2B model
- **Evidence-Based Responses**: Medical-grade health guidance
- **Real-time Chat**: Instant responses with loading states
- **Connection Monitoring**: Live status indicator for backend connectivity
- **Timeout Handling**: 120-second timeout for AI processing

### 💬 Professional Chat Interface
- **Modern UI**: Clean, medical-grade design with ChatGPT-like interface
- **Dark Mode Support**: Toggle between light and dark themes
- **Message History**: Full conversation tracking
- **Error Handling**: Graceful handling of network issues
- **Responsive Design**: Works on desktop and mobile
- **Accessibility**: ARIA labels and keyboard navigation
- **Connection Status**: Real-time backend connectivity indicator

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
- **Connection Management**: Backend connectivity controls

### 🔧 Technical Features
- **TypeScript**: Full type safety and IntelliSense
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast development and optimized builds
- **Tailwind CSS**: Utility-first styling with dark mode support
- **Flask Backend**: Robust Python backend API
- **NGINX Integration**: Production-ready web server

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Python 3.8+ (for backend)
- Ollama (for AI service)

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
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/health

## 🏗️ Project Structure

```
health.muscadine.box/
├── src/
│   ├── components/          # React components
│   │   ├── ChatWindow.tsx   # Main chat interface with dark mode
│   │   ├── ChatInput.tsx    # Message input component
│   │   ├── Message.tsx      # Individual message display
│   │   ├── MuscadineBanner.tsx # Navigation with settings dropdown
│   │   ├── ResourcesPage.tsx # Health resources and protocols
│   │   ├── NutritionPage.tsx # Nutrition guidance
│   │   ├── LifestylePage.tsx # Lifestyle resources
│   │   ├── PhysicalActivityPage.tsx # Exercise resources
│   │   └── ...              # Other UI components
│   ├── api/                 # API services
│   │   └── healthAI.ts      # Frontend AI service with retry logic
│   ├── App.tsx              # Main application with routing
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── dist/                    # Production build
└── package.json             # Dependencies and scripts
```

## 🔌 API Integration

### Backend Connection
The application connects to a Flask backend running Ollama with Mistral AI:

```typescript
// API Endpoint
POST https://health.muscadine.box/chat

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

### Backend Setup
The frontend requires the [health-backend](https://github.com/nickconnelly10/health-backend) to be running. To set up the backend:

1. **Clone the backend repository**:
   ```bash
   git clone https://github.com/nickconnelly10/health-backend.git
   cd health-backend
   ```

2. **Install dependencies**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Start all services** (recommended):
   ```bash
   ./start_health_system.sh
   ```

4. **Or start individual services**:
   ```bash
   # Start Ollama AI service
   sudo systemctl start ollama
   
   # Start Flask backend
   sudo systemctl start healthchat
   
   # Start NGINX web server
   sudo systemctl start nginx
   ```

5. **Verify setup**:
   ```bash
   curl -s http://localhost:5000/health | jq .
   ```

### Health AI Service
```typescript
import { healthAIService } from './api/healthAI';

// Get health advice
const response = await healthAIService.getHealthAdvice("How much protein should I eat?");

// Check connection
const isConnected = await healthAIService.checkConnection();

// Get connected backend URL
const backendURL = healthAIService.getConnectedBackendURL();
```

## 🚀 Deployment

### Production Deployment
1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy to NGINX**:
   ```bash
   sudo cp -r dist/* /var/www/health.muscadine.box/
   ```

3. **Configure NGINX** (if not already configured):
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Environment Variables
```env
# Backend API URLs
VITE_HEALTH_AI_URL="https://health.muscadine.box"
VITE_BACKUP_URLS="http://localhost:5000,http://127.0.0.1:5000"

# Build Configuration
NODE_ENV=production
VITE_APP_VERSION="1.0.0"
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
curl http://localhost:5000/health

# Chat test
curl -X POST http://localhost:5000/chat \
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
- **Dark Mode**: Optimized theme switching

### Metrics
- **Bundle Size**: ~250KB (gzipped)
- **Load Time**: <2s on 3G
- **Time to Interactive**: <3s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)

## 🔒 Security

### Features
- **CORS Protection**: Configured for production domains
- **Input Validation**: Sanitized user inputs
- **Error Handling**: No sensitive data in error messages
- **HTTPS Only**: Secure connections in production
- **Security Headers**: XSS protection and content security

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
4. **Dark mode not working**: Check browser console for errors

#### Backend Connection Issues
If the AI chat is not connecting to the backend:

1. **Check backend status**:
   ```bash
   # Test backend connection
   curl -s http://localhost:5000/health
   
   # Check if Ollama is running
   curl -s http://localhost:11434/api/tags
   
   # Check Flask service status
   sudo systemctl status healthchat.service
   ```

2. **Restart backend services**:
   ```bash
   # Use the startup script
   cd ~/Desktop/Github-Repositories/health-backend
   ./start_health_system.sh
   ```

3. **Verify NGINX configuration**:
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```

4. **Check logs**:
   ```bash
   # Flask service logs
   sudo journalctl -u healthchat.service -f
   
   # NGINX logs
   sudo tail -f /var/log/nginx/error.log
   ```

#### Debug Mode
```bash
# Enable debug logging
DEBUG=true npm run dev

# Check browser console for errors
# Check network tab for API calls
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
- [ ] File upload interface
- [ ] Health protocols viewer

### Version History
- **v0.0.12**: Dark mode implementation and UI improvements
- **v0.0.11**: Production-ready health AI chat
- **v0.0.10**: Flask backend integration
- **v0.0.9**: UI/UX improvements
- **v0.0.8**: Initial release

---

**Built with ❤️ for health and wellness** 