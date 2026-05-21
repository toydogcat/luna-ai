import React, { useState, useEffect, useRef } from 'react';

function EnglishPractice() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm your English practice partner. Press mic or type to start." }
  ]);
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

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

  const [useCloud, setUseCloud] = useState(false);

  const styles = {
    wrapper: { position: 'fixed', right: 20, bottom: 20, zIndex: 1200, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' },
    toggle: { background: 'var(--accent)', color: '#000', border: 'none', padding: '10px 12px', borderRadius: 8, cursor: 'pointer', fontWeight: 700 },
    panel: { width: 360, maxWidth: 'calc(100vw - 40px)', background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.06)', padding: 12, borderRadius: 10, marginTop: 8, color: '#fff' },
    header: { fontWeight: 700, marginBottom: 8 },
    chat: { maxHeight: 260, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8, padding: 6 },
    userMsg: { alignSelf: 'flex-end', background: 'rgba(0,200,150,0.12)', padding: 8, borderRadius: 8, maxWidth: '85%' },
    botMsg: { alignSelf: 'flex-start', background: 'rgba(255,255,255,0.04)', padding: 8, borderRadius: 8, maxWidth: '85%' },
    controls: { display: 'flex', gap: 8, marginTop: 8, alignItems: 'center' },
    mic: { padding: '8px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)', color: '#fff', cursor: 'pointer' },
    input: { flex: 1, padding: 8, borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)', background: 'transparent', color: '#fff' },
    send: { padding: '8px 10px', borderRadius: 8, background: 'var(--accent)', border: 'none', color: '#000', cursor: 'pointer' }
  };

  return (
    <div style={styles.wrapper}>
      <button style={styles.toggle} onClick={() => setOpen(o => !o)}>{open ? 'Close English Practice' : 'English Practice'}</button>
      {open && (
        <div style={styles.panel}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap: 8}}>
            <div style={styles.header}>Cloud English Practice — Inline</div>
            <div style={{display:'flex', gap:8}}>
              <button onClick={() => setUseCloud(c => !c)} style={{padding:'6px 10px', borderRadius:8, cursor:'pointer'}}>{useCloud ? 'Use Local' : 'Use Cloud'}</button>
            </div>
          </div>
          {!useCloud ? (
            <>
              <div style={styles.chat} aria-live="polite">
                {messages.map((m, i) => (
                  <div key={i} style={m.sender === 'user' ? styles.userMsg : styles.botMsg}>
                    <div style={{ fontSize: '0.9rem' }}>{m.text}</div>
                  </div>
                ))}
              </div>
              <div style={styles.controls}>
                <button onClick={listening ? stopListen : startListen} style={styles.mic}>{listening ? 'Stop' : '🎤'}</button>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type or use mic to speak (English)" style={styles.input} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
                <button onClick={sendMessage} style={styles.send}>Send</button>
              </div>
            </>
          ) : (
            <div style={{height: '420px', width: '100%'}}>
              <iframe
                title="Cloud English Chat Partner"
                src="https://toydogcat.github.io/chat-partner-gemini/"
                style={{width: '100%', height: '100%', border: 'none', borderRadius: 8}}
                allow="microphone; camera; autoplay; clipboard-write; encrypted-media"
              />
            </div>
          )}
          <div style={{ fontSize: '0.8rem', marginTop: 8, color: 'var(--text-muted)' }}>Note: You can switch to a cloud AI endpoint by modifying this component.</div>
        </div>
      )}
    </div>
  );
}

export default EnglishPractice;
