
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useLanguage } from './LanguageContext';

const AIAssistant: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'ai', text: t('ai_welcome') }]);
  }, [language, t]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Use the injected process.env.API_KEY directly as per requirements
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the AI Strategy Expert for 'Twilight Launch', a digital growth agency operating in Syria and Oman. Current User Interface Language is ${language === 'ar' ? 'Arabic' : 'English'}. ALWAYS respond in the language the user speaks to you. Provide high-level, strategic advice on Meta Ads, ROI engineering, and growth hacking specifically for the Syrian and Omani markets. Be professional, encouraging, and data-driven. Keep responses concise (under 100 words).`,
        }
      });

      const aiText = response.text || (language === 'ar' ? "عذراً، لم أتمكن من معالجة طلبك حالياً." : "I'm sorry, I couldn't process that right now.");
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Assistant Interaction Failed:", error);
      const errorMsg = language === 'ar' ? "حدث خطأ غير متوقع. يرجى المحاولة لاحقاً." : "An unexpected error occurred. Please try again later.";
      setMessages(prev => [...prev, { role: 'ai', text: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-[100] font-sans`}>
      {isOpen && (
        <div className={`absolute bottom-20 ${language === 'ar' ? 'left-0' : 'right-0'} w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300`}>
          <div className="bg-twilight p-5 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <i className="fas fa-robot text-lg"></i>
              </div>
              <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <p className="font-bold text-sm">Growth Assistant</p>
                <p className="text-[10px] opacity-80 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mx-1.5 animate-pulse"></span>
                  Live Strategy Engine
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t('ai_placeholder')}
              className="flex-1 bg-gray-50 border-gray-200 border rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="w-10 h-10 bg-twilight text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 shadow-md"
            >
              <i className={`fas fa-paper-plane ${language === 'ar' ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-twilight text-white shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 active:scale-95 z-[100] ${isOpen ? 'rotate-90' : 'rotate-0'}`}
      >
        <i className={isOpen ? 'fas fa-chevron-down' : 'fas fa-comment-dots'}></i>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
