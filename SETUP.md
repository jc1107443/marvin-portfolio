# Marvin Amofa Marfo - Portfolio

## Overview
A professional full-stack + DevOps engineer portfolio showcasing 8+ years of experience in frontend development, backend systems, cloud infrastructure, and DevOps automation. Built with Next.js, Tailwind CSS, and OpenRouter AI chat integration.

## Profile Highlights
- **Full-Stack Development**: React, Next.js, TypeScript, Node.js, Python, Go
- **Cloud & Infrastructure**: AWS, Azure, GCP, Kubernetes, Terraform
- **DevOps & Automation**: CI/CD pipelines, Docker, Prometheus, Grafana, GitlabCI
- **Expertise**: End-to-end system design, infrastructure modernization, cost optimization, security hardening

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure OpenRouter API

1. **Get API Key**:
   - Visit [OpenRouter.ai](https://openrouter.ai/)
   - Sign up or log in
   - Go to Settings → API Keys
   - Copy your API key

2. **Add Environment Variable**:
   - Open `.env.local` in the project root
   - Replace `your_openrouter_api_key_here` with your actual API key:
   ```
   NEXT_PUBLIC_OPENROUTER_API_KEY=sk_xxxxxxxxxxxxx
   ```

3. **Optional Model Configuration**:
   - Default model is `openai/gpt-3.5-turbo`
   - To change, update `.env.local`:
   ```
   NEXT_PUBLIC_CHAT_MODEL=openai/gpt-4
   ```

### 3. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Features

✅ **One-page portfolio** with smooth scrolling  
✅ **Lazy-loaded sections** using Next.js dynamic imports  
✅ **Professional AI chat** powered by OpenRouter  
✅ **Tailwind CSS** styling  
✅ **Fully responsive** design  
✅ **App Router** architecture  

## Deployment

### Vercel
```bash
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## Notes

- `.env.local` is excluded from git (see `.gitignore`)
- Chat API calls are made client-side with proper error handling
- Fallback responses are used if API fails
- All API keys should be kept private and never committed to version control
