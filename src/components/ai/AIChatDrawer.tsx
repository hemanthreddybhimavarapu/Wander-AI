import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Send,
  X,
  Bot,
  User,
  MessageSquare,
} from 'lucide-react';
import { askGeminiChat } from '../../services/geminiService';
import { useLanguage } from '../../context/LanguageContext';
import { AIThinkingAnimation } from '../lottie/LottieAnimations';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const AIChatDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  destinationContext?: string;
}> = ({ isOpen, onClose, destinationContext = 'Global Destinations' }) => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Greetings. I am WanderAI Concierge. Inquire with me about curated itineraries, secret cultural quarters, dining recommendations, or optimal seasons for ${destinationContext}.`,
      timestamp: 'Now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const quickPrompts = [
    `Best 3-day itinerary for ${destinationContext}?`,
    `What local dishes are unmissable?`,
    `Hidden gems away from crowds?`,
    `What is the best month to visit?`,
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = (queryText || input).trim();
    if (!textToSend || isThinking) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    try {
      const reply = await askGeminiChat(textToSend, destinationContext, language);
      const assistantMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai_${Date.now()}`,
          sender: 'assistant',
          text: 'I apologize, but my satellite link momentarily drifted. Please ask again.',
          timestamp: 'Now',
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[460px] bg-theme-surface/95 backdrop-blur-2xl border-l border-theme-border shadow-2xl z-50 flex flex-col"
          >
            <div className="p-4 sm:p-5 border-b border-theme-border/60 flex items-center justify-between bg-theme-surface">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-theme-accent to-theme-accent-secondary flex items-center justify-center text-white shadow-glow">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-theme-text-primary">
                    {t('ai.title')}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] text-theme-text-muted">
                      {destinationContext}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-theme-text-muted hover:text-theme-text-primary hover:bg-theme-surface-hover transition-colors cursor-pointer"
                aria-label="Close concierge"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'assistant' && (
                    <div className="w-7 h-7 rounded-xl bg-theme-accent/20 border border-theme-accent/40 flex items-center justify-center text-theme-accent shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white rounded-br-xs shadow-glow-sm'
                        : 'bg-theme-surface border border-theme-border/80 text-theme-text-primary rounded-bl-xs'
                    }`}
                  >
                    <p>{m.text}</p>
                    <span className="text-[9px] opacity-60 mt-1 block text-right">
                      {m.timestamp}
                    </span>
                  </div>

                  {m.sender === 'user' && (
                    <div className="w-7 h-7 rounded-xl bg-theme-surface border border-theme-border flex items-center justify-center text-theme-text-muted shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isThinking && (
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-theme-accent/20 border border-theme-accent/40 flex items-center justify-center text-theme-accent shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3 rounded-2xl bg-theme-surface border border-theme-border/80 flex items-center gap-2">
                    <AIThinkingAnimation className="w-5 h-5" />
                    <span className="text-xs text-theme-text-muted">
                      {t('ai.thinking')}
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="px-4 py-2 border-t border-theme-border/40 overflow-x-auto scrollbar-none flex gap-2">
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-3 py-1.5 rounded-full text-[11px] bg-theme-surface hover:bg-theme-surface-hover border border-theme-border/60 text-theme-text-secondary hover:text-theme-text-primary whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 sm:p-4 border-t border-theme-border/60 bg-theme-surface flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('ai.placeholder')}
                className="w-full px-4 py-2.5 rounded-xl bg-theme-surface border border-theme-border text-xs sm:text-sm text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-theme-accent"
              />
              <button
                type="submit"
                disabled={!input.trim() || isThinking}
                className="p-2.5 rounded-xl bg-gradient-to-r from-theme-accent to-theme-accent-secondary text-white shadow-glow disabled:opacity-40 transition-opacity cursor-pointer shrink-0"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const AIChatFloatingButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-tr from-theme-accent to-theme-accent-secondary text-white shadow-glow flex items-center justify-center cursor-pointer border border-white/20"
      aria-label="Open AI Concierge"
    >
      <Sparkles className="w-6 h-6 animate-pulse" />
    </motion.button>
  );
};
