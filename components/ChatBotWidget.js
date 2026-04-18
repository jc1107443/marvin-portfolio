'use client';

import { useState, useRef, useEffect } from 'react';

const initialMessages = [
  { from: 'bot', text: "Hi! I'm Marvin Amofa Marfo, a Full-Stack & DevOps Engineer with 10+ years of experience. I specialize in building scalable web applications, AI/ML integration, and cloud infrastructure. How can I help you with your project?" },
];

const quickReplies = [
  'Full-stack web development',
  'AI/ML integration & automation',
  'DevOps & CI/CD implementation',
  'System architecture & design',
];

export default function ChatBotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((current) => [...current, { from: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
      const model = process.env.NEXT_PUBLIC_CHAT_MODEL || 'openai/gpt-3.5-turbo';

      if (!apiKey) {
        throw new Error('OpenRouter API key not configured');
      }

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.href,
          'X-Title': 'Marvin Portfolio Chat',
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: 'system',
              content: "You are Marvin Amofa Marfo, a results-driven Full Stack + DevOps Engineer with 10+ years building scalable production systems. You specialize in: Frontend (React, Next.js, TypeScript, Tailwind), Backend (Node.js, Python, Go, APIs), Cloud & Infrastructure (AWS, Azure, GCP, Kubernetes, Terraform), and DevOps (CI/CD, Docker, monitoring). You are having a direct conversation with a potential client. Keep responses concise, professional, and focused on helping with full-stack development, cloud architecture, infrastructure automation, and project inquiries. Emphasize your ability to deliver complete end-to-end solutions. Respond as Marvin himself, not as an AI assistant.",
            },
            ...messages.map((msg) => ({
              role: msg.from === 'user' ? 'user' : 'assistant',
              content: msg.text,
            })),
            { role: 'user', content: userMessage },
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from OpenRouter');
      }

      const data = await response.json();
      const botResponse = data.choices[0]?.message?.content || "I'm having trouble responding. Please try again.";

      setMessages((current) => [...current, { from: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Chat error:', error);
      const fallbackResponses = [
        "Marvin builds complete full-stack systems—frontend with React/Next.js, scalable backend APIs, and production infrastructure with Kubernetes and Terraform. What kind of system are you planning?",
        "With expertise in cloud platforms (AWS, Azure, GCP) and DevOps automation, Marvin can help you design resilient architectures. Tell me about your infrastructure needs.",
        "Whether you need full-stack development, cloud migration, or infrastructure modernization, Marvin delivers end-to-end solutions. What's your primary focus?",
      ];
      const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      setMessages((current) => [...current, { from: 'bot', text: randomResponse }]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickReply = (reply) => {
    setMessages((current) => [...current, { from: 'user', text: reply }]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      let response = '';
      switch (reply) {
        case 'Full-stack web development':
          response = "Perfect! I specialize in building complete web applications with React/Next.js frontends and scalable Node.js/Python backends. What type of application are you looking to build?";
          break;
        case 'AI/ML integration & automation':
          response = "Excellent! I can help integrate AI/ML capabilities into your applications, from chatbots and recommendation systems to automated data processing pipelines. What type of AI functionality are you looking to implement?";
          break;
        case 'DevOps & CI/CD implementation':
          response = "Great! I can set up complete DevOps pipelines with automated testing, deployment, and monitoring using tools like GitlabCI, ArgoCD, and Prometheus. What's your current deployment process?";
          break;
        case 'System architecture & design':
          response = "Great! I excel at designing scalable system architectures from microservices to monolithic applications. What type of system architecture are you looking to implement or redesign?";
          break;
        default:
          response = "Great! I'd love to discuss this further. Let me connect you with more details.";
      }
      setMessages((current) => [
        ...current,
        { from: 'bot', text: response },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)]">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-accent via-sky-400 to-cyan-400 p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <div className="relative flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-slate-950 to-slate-900 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-4">
            <div className="relative flex items-center">
              <svg className="h-6 w-6 transition-all duration-300 group-hover:scale-125" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-3 w-3 rounded-full bg-accent animate-pulse"></span>
            </div>
            <div className="flex flex-col items-start gap-0">
              <span className="text-xs font-medium uppercase tracking-wider text-accent transition-colors duration-300 group-hover:text-white">Start conversation</span>
              <span className="text-sm font-semibold text-white">Chat with Marvin</span>
            </div>
          </div>
        </button>
      )}

      {open && (
        <div className="flex max-h-[600px] flex-col overflow-hidden rounded-[1.75rem] border border-slate-700/60 bg-slate-950/98 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="border-b border-slate-800/70 bg-gradient-to-r from-slate-900/80 to-slate-800/80 px-5 py-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-sky-500 flex items-center justify-center shadow-lg shadow-accent/30 border-2 border-accent/50 flex-shrink-0">
                  <span className="text-xs font-bold text-white">MA</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">Marvin Amofa Marfo</p>
                  <p className="text-xs text-slate-400">Full-Stack & DevOps Engineer</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-700/50 transition-all duration-300 active:scale-90"
                aria-label="Close chat"
              >
                <svg className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:text-white group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
            {messages.map((message, index) => (
              <div
                key={`${message.from}-${index}`}
                className={`flex gap-3 ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {/* Bot Avatar */}
                {message.from === 'bot' && (
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-accent to-sky-500 flex items-center justify-center shadow-lg shadow-accent/30 border-2 border-accent/50">
                    <span className="text-xs font-bold text-white">MA</span>
                  </div>
                )}

                <div className={`max-w-full rounded-2xl px-4 py-3 text-sm leading-relaxed transition-all duration-300 ${
                  message.from === 'bot'
                    ? 'rounded-tl-none bg-slate-800/80 text-slate-200 border border-slate-700/50 shadow-md shadow-slate-900/50'
                    : 'rounded-tr-none bg-accent/25 text-slate-100 border border-accent/40 shadow-md shadow-accent/10'
                }`}>
                  {message.text}
                </div>

                {/* User Avatar */}
                {message.from === 'user' && (
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 border-2 border-blue-400/50">
                    <span className="text-xs font-bold text-white">You</span>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-accent to-sky-500 flex items-center justify-center shadow-lg shadow-accent/30 border-2 border-accent/50 animate-pulse">
                  <span className="text-xs font-bold text-white">MA</span>
                </div>
                <div className="rounded-2xl rounded-tl-none bg-slate-800/80 px-4 py-3 border border-slate-700/50">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="h-2 w-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="h-2 w-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === initialMessages.length && (
            <div className="border-t border-slate-800/70 px-5 py-3">
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => handleQuickReply(reply)}
                    className="group relative overflow-hidden rounded-full border border-slate-700/50 bg-slate-900/50 px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">{reply}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-slate-800/70 bg-slate-900/50 p-4">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 rounded-full border border-slate-700/60 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all duration-300 focus:border-accent/70 focus:ring-2 focus:ring-accent/30 focus:bg-slate-800/70 hover:border-slate-600"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-accent to-sky-400 text-slate-950 transition-all duration-300 hover:from-sky-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-accent/40 disabled:opacity-40 disabled:cursor-not-allowed active:scale-90 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
