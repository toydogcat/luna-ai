import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Mic, Send, MessageSquare, CloudLightning, ShieldAlert, Sparkles, Volume2 } from 'lucide-react';

function EnglishPractice() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm your English practice partner. Press mic or type to start." }
  ]);
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const [useCloud, setUseCloud] = useState(false);
  const recognitionRef = useRef(null);
  const chatEndRef = useRef(null);

  // Auto-scroll chat window to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, useCloud]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.lang = 'en-US';
      rec.interimResults = false;
      rec.onresult = (e) => {
        const text = e.results[0][0].transcript;
        setInput(prev => prev ? prev + ' ' + text : text);
        setListening(false);
      };
      rec.onend = () => setListening(false);
      rec.onerror = () => setListening(false);
      recognitionRef.current = rec;
    }
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.onresult = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.onerror = null;
      }
    };
  }, []);

  const startListen = () => {
    if (!recognitionRef.current) {
      alert('SpeechRecognition not supported in this browser.');
      return;
    }
    try {
      recognitionRef.current.start();
      setListening(true);
    } catch (e) {
      setListening(false);
    }
  };

  const stopListen = () => {
    if (recognitionRef.current) recognitionRef.current.stop();
    setListening(false);
  };

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    const ut = new SpeechSynthesisUtterance(text);
    ut.lang = 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(ut);
  };

  const addMessage = (sender, text) => setMessages(m => [...m, { sender, text }]);

  const generateReply = (text) => {
    const t = text.toLowerCase();
    if (t.includes('hello') || t.includes('hi')) return "Hello! What's your name and what would you like to practice today?";
    if (t.includes('cfo') || t.includes('company') || t.includes('business')) return "Great—let's role-play. You are the CFO starting a company. How would you introduce your business idea in one sentence?";
    if (t.includes('help') || t.includes('tips')) return "Try speaking clearly and use short sentences. I will correct minor grammar when you ask.";
    return `I heard: "${text}". Try asking me to role-play a customer, investor, or co-founder.`;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const text = input.trim();
    addMessage('user', text);
    setInput('');
    const reply = generateReply(text);
    setTimeout(() => {
      addMessage('bot', reply);
      speak(reply);
    }, 600);
  };

  return (
    <div className="english-practice-container">
      {/* Left Sidebar Panel */}
      <div className="ep-left-panel">
        <div>
          <div className="ep-hero-title">
            <Sparkles size={20} style={{ marginRight: 8, display: 'inline' }} />
            English Partner
          </div>
          <div className="ep-subtitle">
            {i18n.language.startsWith('zh') 
              ? '站內專屬英文口語對話與模擬練習空間' 
              : 'Interactive English Practice space inside Luna AI'}
          </div>

          {/* Mode Switcher */}
          <div className="ep-mode-switch">
            <button 
              className={`ep-mode-btn ${!useCloud ? 'active' : ''}`}
              onClick={() => setUseCloud(false)}
            >
              <MessageSquare size={16} style={{ marginRight: 6, display: 'inline', verticalAlign: 'middle' }} />
              Local AI
            </button>
            <button 
              className={`ep-mode-btn ${useCloud ? 'active' : ''}`}
              onClick={() => setUseCloud(true)}
            >
              <CloudLightning size={16} style={{ marginRight: 6, display: 'inline', verticalAlign: 'middle' }} />
              Cloud AI
            </button>
          </div>

          <div className="ep-instructions">
            <h4>💡 {i18n.language.startsWith('zh') ? '練習小指南' : 'Practice Guidelines'}</h4>
            <p>
              {i18n.language.startsWith('zh') 
                ? '1. 選擇 Local AI 可享有極速語音回饋，支援文字與即時語音朗讀。' 
                : '1. Choose Local AI for quick feedback, text and speech readback.'}
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              {i18n.language.startsWith('zh') 
                ? '2. 點選 Cloud AI 載入高階對話模型，體驗流暢深入的口語演練。' 
                : '2. Switch to Cloud AI to load advanced models for more deep and structured role-play.'}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
          <Volume2 size={14} />
          {i18n.language.startsWith('zh') ? '支援瀏覽器語音合成 (TTS)' : 'Powered by Browser Speech Synthesis'}
        </div>
      </div>

      {/* Right Content / Chat Panel */}
      <div className="ep-right-panel">
        {!useCloud ? (
          <>
            {/* Local Chat Arena */}
            <div className="ep-chat-box">
              {messages.map((m, i) => (
                <div key={i} className={`ep-msg-bubble ${m.sender}`}>
                  <div>{m.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Local Input Bar */}
            <div className="ep-input-area">
              <button 
                onClick={listening ? stopListen : startListen} 
                className={`ep-btn-mic ${listening ? 'listening' : ''}`}
                title={listening ? 'Stop listening' : 'Start speaking'}
              >
                <Mic size={20} />
              </button>
              <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder={i18n.language.startsWith('zh') ? "輸入文字或使用麥克風說英文..." : "Type or speak in English..."}
                className="ep-input" 
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()} 
              />
              <button onClick={sendMessage} className="ep-btn-send">
                <Send size={18} style={{ marginRight: 6, display: 'inline', verticalAlign: 'middle' }} />
                {i18n.language.startsWith('zh') ? '傳送' : 'Send'}
              </button>
            </div>
          </>
        ) : (
          /* Cloud AI Iframe Mode */
          <div style={{ width: '100%', height: '100%', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            <iframe
              title="Cloud English Chat Partner"
              src="https://toydogcat.github.io/chat-partner-gemini/"
              style={{ width: '100%', height: '100%', border: 'none', background: '#050509' }}
              allow="microphone; camera; autoplay; clipboard-write; encrypted-media"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default EnglishPractice;
