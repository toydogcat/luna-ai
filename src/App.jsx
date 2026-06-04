import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Globe, Brain, Users, MousePointerClick, Newspaper, Home, Languages, Heart, Code, Database, Eye, BookOpen, Scroll, Crown, Bomb, Grid3X3, Grid, Lock, Terminal, CheckCircle2, Smartphone, Shield, Library, Clapperboard, Fingerprint, ScanQrCode, Target, MapPin, Braces, BarChart2, Swords, Car, Siren, MessageSquare, Gavel, CloudLightning, Trees, Activity, ChevronUp, AlarmClock, Radio, Layout, History, ChevronDown, Compass, Presentation, Stars, Layers, Moon, Spade, Dice5, HeartPulse, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { trackEvent } from './firebase';

const EnglishPractice = React.lazy(() => import('./EnglishPractice'));

const PROJECT_CATEGORIES = [
  {
    id: 'intelligence',
    translationKey: 'categories.intelligence',
    projects: [
      {
        id: 'ai-news',
        translationKey: 'projects.aiNews',
        url: 'https://toydogcat.github.io/ai-news/',
        icon: <Newspaper size={24} />
      },
      {
        id: 'ai-lucky',
        translationKey: 'projects.aiLucky',
        url: 'https://toydogcat.github.io/ai-lucky/',
        icon: <Heart size={24} />
      },
      {
        id: 'ai-math',
        translationKey: 'projects.aiMath',
        url: 'https://toydogcat.github.io/ai-math/',
        icon: <BookOpen size={24} />
      },
      {
        id: 'ai-eastern-wisdom',
        translationKey: 'projects.aiEasternWisdom',
        url: 'https://toydogcat.github.io/ai-eastern-wisdom/',
        icon: <Scroll size={24} />
      },
      {
        id: 'ai-scan',
        translationKey: 'projects.aiScan',
        url: 'https://toydogcat.github.io/ai-scan/',
        icon: <ScanQrCode size={24} />
      },
      {
        id: 'ai-ui-layout',
        translationKey: 'projects.aiUiLayout',
        url: 'https://toydogcat.github.io/ai-ui-layout/',
        icon: <Layout size={24} />
      },
      {
        id: 'ai-sch-exam',
        translationKey: 'projects.aiSchExam',
        url: 'https://toydogcat.github.io/ai-sch-exam/',
        icon: <Library size={24} />
      },
      {
        id: 'ai-cognitive-assessment',
        translationKey: 'projects.cognitiveAssessment',
        url: 'https://toydogcat.github.io/ai-cognitive-assessment-/',
        icon: <Brain size={24} />
      },
      {
        id: 'inner-compass',
        translationKey: 'projects.innerCompass',
        url: 'https://toydogcat.github.io/inner-compass/',
        icon: <Compass size={24} />
      },
      {
        id: 'ai-ppt-report',
        translationKey: 'projects.aiPptReport',
        url: 'https://toydogcat.github.io/ai-ppt-report/',
        icon: <Presentation size={24} />
      },
      {
        id: 'ai-glass-qr',
        translationKey: 'projects.aiGlassQr',
        url: 'https://toydogcat.github.io/ai-GlassQR/',
        icon: <Share2 size={24} />
      },
      {
        id: 'ai-heart-rate',
        translationKey: 'projects.aiHeartRate',
        url: 'https://toydogcat.github.io/ai-heart-rate-monitor/',
        icon: <HeartPulse size={24} />
      }
    ]
  },
  {
    id: 'tools',
    translationKey: 'categories.tools',
    projects: [
      {
        id: 'ai-alarm-clock',
        translationKey: 'projects.aiAlarmClock',
        url: 'https://toydogcat.github.io/alarm-clock/',
        icon: <AlarmClock size={24} />
      },
      {
        id: 'nfc-show-info',
        translationKey: 'projects.nfcShowInfo',
        url: 'https://toydogcat.github.io/nfc-show-info/',
        icon: <Radio size={24} />
      }
    ]
  },
  {
    id: 'tech',
    translationKey: 'categories.tech',
    projects: [
      {
        id: 'ai-leetcode',
        translationKey: 'projects.aiLeetcode',
        url: 'https://toydogcat.github.io/ai-leetcode/',
        icon: <Code size={24} />
      },
      {
        id: 'ai-opendata',
        translationKey: 'projects.aiOpendata',
        url: 'https://toydogcat.github.io/ai-opendata/',
        icon: <Database size={24} />
      },
      {
        id: 'ai-statistics-act',
        translationKey: 'projects.aiStatisticsAct',
        url: 'https://toydogcat.github.io/ai-statistics-act/',
        icon: <BarChart2 size={24} />
      },
      {
        id: 'ai-vibe-c',
        translationKey: 'projects.aiVibe',
        url: 'https://github.com/toydogcat/ai-vibe-c',
        icon: <Braces size={24} />,
        isExternal: true
      }
    ]
  },
  {
    id: 'games',
    translationKey: 'categories.games',
    projects: [
      {
        id: 'ai-chess',
        translationKey: 'projects.aiChess',
        url: 'https://toydogcat.github.io/ai-chess/',
        icon: <Crown size={24} />
      },
      {
        id: 'ai-landmine',
        translationKey: 'projects.aiLandmine',
        url: 'https://toydogcat.github.io/ai-landmine/',
        icon: <Bomb size={24} />
      },
      {
        id: 'ai-magic-cube',
        translationKey: 'projects.aiMagicCube',
        url: 'https://toydogcat.github.io/ai-magic-cube/',
        icon: <Grid3X3 size={24} />
      },
      {
        id: 'ai-clicker',
        translationKey: 'projects.aiClicker',
        url: 'https://toydogcat.github.io/ai-clicker/',
        icon: <MousePointerClick size={24} />
      },
      {
        id: 'ai-gomoku',
        translationKey: 'projects.aiGomoku',
        url: 'https://toydogcat.github.io/ai-gomuko/',
        icon: <Target size={24} />
      },
      {
        id: 'ai-cipher-mind',
        translationKey: 'projects.aiCipherMind',
        url: 'https://toydogcat.github.io/ai-cipher-mind/',
        icon: <Lock size={24} />
      },
      {
        id: 'ai-beyblade',
        translationKey: 'projects.aiBeyblade',
        url: 'https://toydogcat.github.io/ai-beyblade/',
        icon: <Swords size={24} />
      },
      {
        id: 'ai-sudoku',
        translationKey: 'projects.aiSudoku',
        url: 'https://toydogcat.github.io/ai-sudoku/',
        icon: <Grid size={24} />
      },
      {
        id: 'stacking-elimination',
        translationKey: 'projects.stackingElimination',
        url: 'https://toydogcat.github.io/stacking-elimination-game/',
        icon: <Layers size={24} />
      },
      {
        id: 'brick-breaking',
        translationKey: 'projects.brickBreaking',
        url: 'https://toydogcat.github.io/brick-breaking-game/',
        icon: <Grid3X3 size={24} />
      }
    ]
  },
  {
    id: 'multiplayer',
    translationKey: 'categories.multiplayer',
    projects: [
      {
        id: 'uno-multiplayer',
        translationKey: 'projects.unoMultiplayer',
        url: 'https://toydogcat.github.io/uno-multi-game/',
        icon: <Users size={24} />
      },
      {
        id: 'werewolf-game',
        translationKey: 'projects.werewolf',
        url: 'https://toydogcat.github.io/werewolf-game/',
        icon: <Moon size={24} />
      },
      {
        id: 'poker-multi-game',
        translationKey: 'projects.poker',
        url: 'https://toydogcat.github.io/poker-multi-game/',
        icon: <Spade size={24} />
      },
      {
        id: 'mahjong-multi-game',
        translationKey: 'projects.mahjong',
        url: 'https://toydogcat.github.io/mahjong-multi-game/',
        icon: <Dice5 size={24} />
      }
    ]
  },
  {
    id: 'simulation',
    translationKey: 'categories.simulation',
    projects: [
      {
        id: 'sim-traffic',
        translationKey: 'projects.simTraffic',
        url: 'https://toydogcat.github.io/sim-traffic/',
        icon: <Car size={24} />
      },
      {
        id: 'sim-car-accident',
        translationKey: 'projects.simCarAccident',
        url: 'https://toydogcat.github.io/sim-car-accident/',
        icon: <Siren size={24} />
      },
      {
        id: 'sim-ecosystem',
        translationKey: 'projects.simEcosystem',
        url: 'https://toydogcat.github.io/sim-ecosystem/',
        icon: <Trees size={24} />
      }
      ,
      {
        id: 'sim-cfo',
        translationKey: 'projects.simCFO',
        url: 'https://toydogcat.github.io/sim-cfo-center/',
        icon: <BarChart2 size={24} />
      },
      {
        id: 'sim-cycloid',
        translationKey: 'projects.simCycloid',
        url: 'https://toydogcat.github.io/sim-cycloid/',
        icon: <Activity size={24} />
      },
      {
        id: 'sim-trust-evolution',
        translationKey: 'projects.simTrustEvolution',
        url: 'https://toydogcat.github.io/sim-trust-evolution/',
        icon: <Users size={24} />
      },
      {
        id: 'sim-fireworks',
        translationKey: 'projects.simFireworks',
        url: 'https://toydogcat.github.io/sim-fireworks/',
        icon: <Sparkles size={24} />
      },
      {
        id: 'sim-3d-cosmos',
        translationKey: 'projects.sim3dCosmos',
        url: 'https://toydogcat.github.io/sim-3d-cosmos/',
        icon: <Stars size={24} />
      }
    ]
  },
  {
    id: 'leisure',
    translationKey: 'categories.leisure',
    projects: [
      {
        id: 'ai-war',
        translationKey: 'projects.aiWar',
        url: 'https://toydogcat.github.io/ai-war/',
        icon: <Clapperboard size={24} />
      },
      {
        id: 'ai-exp-sch-exam',
        translationKey: 'projects.aiExpSchExam',
        url: 'https://toydogcat.github.io/ai-exp-sch-exam/',
        icon: <Scroll size={24} />
      },
      {
        id: 'daily-dialogue',
        translationKey: 'projects.dailyDialogue',
        url: 'https://toydogcat.github.io/daily-dialogue/',
        icon: <BookOpen size={24} />
      },
      {
        id: 'old-to-thousands',
        translationKey: 'projects.oldToThousands',
        url: 'https://toydogcat.github.io/old2thousands/',
        icon: <History size={24} />
      }
    ]
  },
  {
    id: 'aistudio',
    translationKey: 'categories.aistudio',
    projects: [
      {
        id: 'ai-studio-english',
        translationKey: 'projects.aiStudioEnglish',
        url: 'https://toydogcat.github.io/chat-partner-gemini/',
        icon: <CloudLightning size={24} />,
        isExternal: false
      }
    ]
  },
  {
    id: 'localExperimental',
    translationKey: 'categories.localExperimental',
    projects: [
      {
        id: 'chat-partner',
        translationKey: 'projects.chatPartner',
        url: 'https://toydogcat.github.io/chat-partner/',
        icon: <MessageSquare size={24} />
      },
      {
        id: 'lawyer-help',
        translationKey: 'projects.lawyerHelp',
        url: 'https://toydogcat.github.io/lawyer-help/',
        icon: <Gavel size={24} />
      }
    ]
  }
];

const STAGING_PROJECTS = [
  {
    id: 'ai-amulet',
    translationKey: 'projects.aiAmulet',
    url: 'https://toydogcat.github.io/ai-amulet/',
    icon: <Shield size={24} color="var(--accent)" />
  },
  {
    id: 'ai-book',
    translationKey: 'projects.aiBook',
    url: 'https://toydogcat.github.io/ai-book/',
    icon: <Library size={24} color="var(--accent)" />
  },
  {
    id: 'ai-yolo',
    translationKey: 'projects.aiYolo',
    url: 'https://toydogcat.github.io/ai-yolo/',
    icon: <Target size={24} color="var(--accent)" />
  },
  {
    id: 'ho-info',
    translationKey: 'projects.hoInfo',
    url: 'https://toydogcat.github.io/ho-info/',
    icon: <MapPin size={24} color="var(--accent)" />
  }
];

// --- WEBAUTHN UTILS FOR LOCAL BIOMETRICS ---
const bufferToBase64 = (buf) => btoa(String.fromCharCode.apply(null, new Uint8Array(buf)));
const base64ToBuffer = (base64) => Uint8Array.from(atob(base64), c => c.charCodeAt(0)).buffer;

async function registerLocalBiometrics() {
  if (!window.PublicKeyCredential) return false;
  const domain = window.location.hostname;
  
  // Standard WebAuthn Creation parameters
  const createOptions = {
    publicKey: {
      challenge: window.crypto.getRandomValues(new Uint8Array(32)),
      rp: { name: "Luna AI Dashboard", id: domain },
      user: {
        id: window.crypto.getRandomValues(new Uint8Array(16)),
        name: "luna-operator",
        displayName: "Luna Operator",
      },
      pubKeyCredParams: [{ type: "public-key", alg: -7 }, { type: "public-key", alg: -257 }], // ES256 and RS256
      authenticatorSelection: {
        authenticatorAttachment: "platform", // Restrict to onboard TouchID/FaceID
        userVerification: "preferred"
      },
      timeout: 60000,
    }
  };

  try {
    const credential = await navigator.credentials.create(createOptions);
    if (credential) {
      const credIdStr = bufferToBase64(credential.rawId);
      localStorage.setItem('luna_biometric_id', credIdStr);
      return true;
    }
  } catch (e) {
    console.warn("Biometrics Registration Cancelled or Failed:", e);
  }
  return false;
}

async function authenticateLocalBiometrics() {
  const savedId = localStorage.getItem('luna_biometric_id');
  if (!savedId || !window.PublicKeyCredential) return false;
  const domain = window.location.hostname;

  const getOptions = {
    publicKey: {
      challenge: window.crypto.getRandomValues(new Uint8Array(32)),
      rpId: domain,
      allowCredentials: [{
        id: base64ToBuffer(savedId),
        type: 'public-key'
      }],
      userVerification: "preferred",
      timeout: 60000,
    }
  };

  try {
    const assertion = await navigator.credentials.get(getOptions);
    return !!assertion; // Truthy means physical scan succeeded!
  } catch (e) {
    console.warn("Biometric Authentication Cancelled or Failed:", e);
    return false;
  }
}

function App() {
  const { t, i18n } = useTranslation();
  const [hoverCount, setHoverCount] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [activePage, setActivePage] = useState('home'); // home | installation | staging
  const [pwInput, setPwInput] = useState('');
  const [pwError, setPwError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);
  const [hasBiometricEnrollment, setHasBiometricEnrollment] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  // Reset header visibility when active project changes
  useEffect(() => {
    setIsHeaderVisible(true);
  }, [activeProject]);

  // Bind mousemove to show header when mouse is close to top (fallback for cross-origin or local dev)
  useEffect(() => {
    if (!activeProject) return;
    const handleParentMouseMove = (e) => {
      if (e.clientY < 15) {
        setIsHeaderVisible(true);
      }
    };
    window.addEventListener('mousemove', handleParentMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleParentMouseMove);
    };
  }, [activeProject]);

  // Handle postMessage events from sub-apps for scroll sync
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === 'iframe_scroll') {
        const { scrollY, direction } = e.data;
        if (scrollY > 60 && direction === 'down') {
          setIsHeaderVisible(false);
        } else if (direction === 'up' || scrollY <= 10) {
          setIsHeaderVisible(true);
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleIframeLoad = (e) => {
    try {
      const iframe = e.target;
      const iframeWindow = iframe.contentWindow;
      const iframeDoc = iframe.contentDocument || iframeWindow.document;
      
      let lastScrollY = 0;
      const scrollThreshold = 10;
      
      const handleScroll = () => {
        try {
          const currentScrollY = iframeWindow.scrollY || iframeDoc.documentElement.scrollTop || iframeDoc.body.scrollTop;
          
          if (currentScrollY > 60 && currentScrollY > lastScrollY + scrollThreshold) {
            setIsHeaderVisible(false);
          } else if (currentScrollY < lastScrollY - scrollThreshold || currentScrollY <= 10) {
            setIsHeaderVisible(true);
          }
          lastScrollY = currentScrollY;
        } catch (err) {}
      };

      let touchStartY = 0;
      const handleTouchStart = (evt) => {
        touchStartY = evt.touches[0].clientY;
      };
      
      const handleTouchMove = (evt) => {
        try {
          const touchY = evt.touches[0].clientY;
          const currentScrollY = iframeWindow.scrollY || iframeDoc.documentElement.scrollTop || iframeDoc.body.scrollTop;
          
          if (currentScrollY <= 15 && touchY > touchStartY + 40) {
            setIsHeaderVisible(true);
          }
        } catch (err) {}
      };
      
      iframeDoc.addEventListener('scroll', handleScroll, { passive: true });
      iframeDoc.addEventListener('touchstart', handleTouchStart, { passive: true });
      iframeDoc.addEventListener('touchmove', handleTouchMove, { passive: true });
      
    } catch (err) {
      console.warn("Could not bind events to iframe due to same-origin restriction:", err);
    }
  };

  useEffect(() => {
    // Check device capability on init
    if (window.PublicKeyCredential) {
      setIsBiometricAvailable(true);
      setHasBiometricEnrollment(!!localStorage.getItem('luna_biometric_id'));
    }
  }, []);

  const handleBiometricLogin = async () => {
    const success = await authenticateLocalBiometrics();
    if (success) {
      setIsUnlocked(true);
      setPwError(false);
      trackEvent('biometric_unlock_success', { type: 'touch_face' });
    }
  };

  const handleBiometricEnroll = async () => {
    const success = await registerLocalBiometrics();
    if (success) {
      setHasBiometricEnrollment(true);
      alert("✨ 註冊成功！下次進入可直接使用生物辨識解鎖！");
    }
  };

  const checkPassword = () => {
    // Current format YYYYMMDD in user timezone
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    const correctCode = `${y}${m}${d}`;
    
    if (pwInput.trim() === correctCode) {
      setIsUnlocked(true);
      setPwError(false);
      trackEvent('staging_unlock_success', { code: 'verified' });
    } else {
      setPwError(true);
      trackEvent('staging_unlock_fail', { code: 'failed' });
    }
  };

  // Track initial page view
  useEffect(() => {
    trackEvent('page_view', { 
      page_title: 'Luna AI Home',
      locale: i18n.language 
    });
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    trackEvent('change_language', { language: lng });
  };

  const openProject = (project) => {
    const projTitle = t(`${project.translationKey}.title`);
    trackEvent('project_open', {
      project_id: project.id,
      project_name: projTitle,
      project_url: project.url,
      is_external: project.isExternal || false
    });

    if (project.isExternal) {
      // Redirect to new tab directly if external site (e.g. GitHub) blocks iframe
      window.open(project.url, '_blank', 'noopener,noreferrer');
      return;
    }

    setActiveProject({
      ...project,
      resolvedTitle: projTitle
    });
  };

  const closeProject = () => {
    trackEvent('project_close', { project_id: activeProject?.id });
    setActiveProject(null);
  };

  const handleTrackedClick = (elementId, metaData = {}) => {
    trackEvent('element_click', {
      element_id: elementId,
      ...metaData
    });
    if (elementId === 'mockup_card') {
      setHoverCount(prev => prev + 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  // Pre-calculate date values to avoid race conditions and Hydration issues
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthNum = today.getMonth() + 1;
  const currentDayNum = today.getDate();
  const visitorsHint = currentYear + currentMonthNum + currentDayNum;
  const mockTotalViews = Math.floor(Date.now() / 100000);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo" onClick={() => setActivePage('home')} style={{cursor: 'pointer'}}>Luna AI</div>
        
        <div className="navbar-right">
          <div className="nav-links">
            <span onClick={() => setActivePage('home')} className={`nav-item ${activePage==='home'?'active-nav':''}`}>{t('nav.home')}</span>
            <span onClick={() => setActivePage('projects')} className={`nav-item ${activePage==='projects'?'active-nav':''}`}>{t('nav.projects')}</span>
            <span onClick={() => setActivePage('installation')} className={`nav-item ${activePage==='installation'?'active-nav':''}`}>{t('nav.installation')}</span>
          </div>
          
          {/* Language Switcher */}
          <div className="language-selector">
            <button 
              onClick={() => changeLanguage('zh')}
              className={i18n.language.startsWith('zh') ? 'active' : ''}
            >中</button>
            <button 
              onClick={() => changeLanguage('en')}
              className={i18n.language.startsWith('en') ? 'active' : ''}
            >EN</button>
          </div>

          <button 
            className="btn-launch"
            onClick={() => handleTrackedClick('navbar_launch_btn')}
          >
            {t('nav.launch')}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        {activePage === 'home' && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.div variants={itemVariants} className="badge">
            <Sparkles size={14} />
            {t('hero.badge')}
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="headline">
            {i18n.language.startsWith('en') ? t('hero.headlineMain') : ''} <span>{i18n.language.startsWith('zh') ? t('hero.headlineMain') : 'Luna'}</span>,<br /> {t('hero.headlineSub')}
          </motion.h1>

          <motion.p variants={itemVariants} className="subheadline">
            {t('hero.subheadline')}
          </motion.p>

          {/* ✅ [GEO] 4: Technical Specifications Section (Moved Up) */}
          <motion.section variants={itemVariants} className="tech-specs-section">
            <h2>{t('technicalSpecs.title')}</h2>
            <p className="section-subtitle">{t('technicalSpecs.subtitle')}</p>
            
            <div className="spec-grid">
              <div className="spec-card">
                <div className="spec-value">{t('technicalSpecs.uptime.value')}</div>
                <div className="spec-label">{t('technicalSpecs.uptime.label')}</div>
                <p className="spec-desc">{t('technicalSpecs.uptime.desc')}</p>
              </div>
              <div className="spec-card">
                <div className="spec-value">{t('technicalSpecs.latency.value')}</div>
                <div className="spec-label">{t('technicalSpecs.latency.label')}</div>
                <p className="spec-desc">{t('technicalSpecs.latency.desc')}</p>
              </div>
              <div className="spec-card">
                <div className="spec-value">{t('technicalSpecs.security.value')}</div>
                <div className="spec-label">{t('technicalSpecs.security.label')}</div>
                <p className="spec-desc">{t('technicalSpecs.security.desc')}</p>
              </div>
              <div className="spec-card">
                <div className="spec-value">{t('technicalSpecs.scalability.value')}</div>
                <div className="spec-label">{t('technicalSpecs.scalability.label')}</div>
                <p className="spec-desc">{t('technicalSpecs.scalability.desc')}</p>
              </div>
            </div>

            <div style={{textAlign: 'left', width: '100%', maxWidth: '1000px', margin: '2rem auto 0.5rem'}}>
              <h4 style={{marginBottom: '0.5rem', color: 'var(--secondary)'}}>{t('technicalSpecs.listTitle')}</h4>
            </div>
            <ul className="spec-list">
              <li dangerouslySetInnerHTML={{ __html: t('technicalSpecs.item1') }}></li>
              <li dangerouslySetInnerHTML={{ __html: t('technicalSpecs.item2') }}></li>
              <li dangerouslySetInnerHTML={{ __html: t('technicalSpecs.item3') }}></li>
            </ul>
          </motion.section>

          {/* ✅ [GEO] 2: Comparison Table Section */}
          <motion.section variants={itemVariants} className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{t('comparisonTable.metrics')}</th>
                  <th>{t('comparisonTable.luna')}</th>
                  <th>{t('comparisonTable.cloud')}</th>
                  <th>{t('comparisonTable.benchmark')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>{t('comparisonTable.latency.label')}</strong></td>
                  <td className="highlight">{t('comparisonTable.latency.value')}</td>
                  <td>{t('comparisonTable.latency.cloud')}</td>
                  <td>{t('comparisonTable.latency.standard')}</td>
                </tr>
                <tr>
                  <td><strong>{t('comparisonTable.privacy.label')}</strong></td>
                  <td className="highlight">{t('comparisonTable.privacy.value')}</td>
                  <td>{t('comparisonTable.privacy.cloud')}</td>
                  <td>{t('comparisonTable.privacy.standard')}</td>
                </tr>
                <tr>
                  <td><strong>{t('comparisonTable.tco.label')}</strong></td>
                  <td className="highlight">{t('comparisonTable.tco.value')}</td>
                  <td>{t('comparisonTable.tco.cloud')}</td>
                  <td>{t('comparisonTable.tco.standard')}</td>
                </tr>
              </tbody>
            </table>
          </motion.section>

          {/* ✅ [SEO] 1: Technical Architecture Section */}
          <motion.section variants={itemVariants} className="tech-architecture-section">
            <div className="tech-architecture-card">
              <h2>{t('techArchitecture.title')}</h2>
              <p className="intro" dangerouslySetInnerHTML={{ __html: t('techArchitecture.desc') }}></p>
              <div className="tech-architecture-list">
                <div className="arch-item">
                  <strong dangerouslySetInnerHTML={{ __html: t('techArchitecture.item1').split(': ')[0] + ':' }}></strong>
                  <span dangerouslySetInnerHTML={{ __html: t('techArchitecture.item1').split(': ')[1] }}></span>
                </div>
                <div className="arch-item">
                  <strong dangerouslySetInnerHTML={{ __html: t('techArchitecture.item2').split(': ')[0] + ':' }}></strong>
                  <span dangerouslySetInnerHTML={{ __html: t('techArchitecture.item2').split(': ')[1] }}></span>
                </div>
                <div className="arch-item">
                  <strong dangerouslySetInnerHTML={{ __html: t('techArchitecture.item3').split(': ')[0] + ':' }}></strong>
                  <span dangerouslySetInnerHTML={{ __html: t('techArchitecture.item3').split(': ')[1] }}></span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ✅ [GEO] 3: Authoritative Links Section */}
          <motion.section variants={itemVariants} className="authoritative-links-section">
            <h2>{t('authoritativeLinks.title')}</h2>
            <div className="links-grid">
              <a href="https://www.w3.org/TR/webgpu/" target="_blank" rel="noopener noreferrer" className="auth-link">
                <Globe size={14} /> {t('authoritativeLinks.w3c')}
              </a>
              <a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer" className="auth-link">
                <Shield size={14} /> {t('authoritativeLinks.gdpr')}
              </a>
              <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" rel="noopener noreferrer" className="auth-link">
                <Lock size={14} /> {t('authoritativeLinks.iso')}
              </a>
              <a href="https://webassembly.org/" target="_blank" rel="noopener noreferrer" className="auth-link">
                <Code size={14} /> {t('authoritativeLinks.wasm')}
              </a>
            </div>
          </motion.section>

          {/* ✅ [GEO] 3: FAQ Accordion Section */}
          <motion.section variants={itemVariants} className="faq-section">
            <h2>{t('faq.title')}</h2>
            <p className="section-subtitle">{t('faq.subtitle')}</p>
            
            <div className="faq-list">
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num} 
                  className={`faq-item ${openFaq === num ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === num ? null : num)}
                >
                  <div className="faq-question">
                    <h3>{t(`faq.q${num}`)}</h3>
                    <ChevronDown size={20} className="faq-chevron" />
                  </div>
                  <div className="faq-answer">
                    <p>{t(`faq.a${num}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Projects Showcase Section - ONLY Intelligence Category on Home Page */}
          <div style={{width: '100%', maxWidth: '1100px', marginTop: '4rem'}}>
            <motion.h2 variants={itemVariants} className="section-title" style={{textAlign: 'center'}}>{t('categories.intelligence')}</motion.h2>
            {PROJECT_CATEGORIES.filter(c => c.id === 'intelligence').map(category => (
              <motion.div 
                key={category.id} 
                variants={itemVariants}
                style={{marginBottom: '3rem'}}
              >
                <div className="projects-grid" style={{margin: '0 auto'}}>
                  {category.projects.map(project => (
                    <div 
                      key={project.id} 
                      className={`project-card card-${category.id}`}
                      onClick={() => openProject(project)}
                    >
                      <div className="project-icon">{project.icon}</div>
                      <h3 className="project-name">{t(`${project.translationKey}.title`)}</h3>
                      <p className="project-desc">{t(`${project.translationKey}.desc`)}</p>
                      <div style={{marginTop: '1rem', display: 'flex', alignItems:'center', gap:'5px', color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 'bold'}}>
                        {t('projects.launchInside')} <ArrowRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        )}

        {/* ================= PROJECT COLLECTION PAGE ================= */}
        {activePage === 'projects' && (
          <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <motion.h1 variants={itemVariants} className="section-title" style={{fontSize: '2.5rem', marginBottom: '3rem'}}>{t('nav.projects')}</motion.h1>
            
            <div style={{width: '100%', maxWidth: '1100px'}}>
              {PROJECT_CATEGORIES.filter(c => c.id !== 'intelligence').map(category => (
                <motion.div 
                  key={category.id} 
                  variants={itemVariants}
                  style={{marginBottom: '3rem'}}
                >
                  <h3 className="category-header">{t(category.translationKey)}</h3>
                  <div className="projects-grid">
                    {category.projects.map(project => (
                      <div 
                        key={project.id} 
                        className={`project-card card-${category.id}`}
                        onClick={() => openProject(project)}
                      >
                        <div className="project-icon">{project.icon}</div>
                        <h3 className="project-name">{t(`${project.translationKey}.title`)}</h3>
                        <p className="project-desc">{t(`${project.translationKey}.desc`)}</p>
                        <div style={{marginTop: '1rem', display: 'flex', alignItems:'center', gap:'5px', color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 'bold'}}>
                          {t('projects.launchInside')} <ArrowRight size={14} />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Placeholder Node Moved Here */}
              <motion.div variants={itemVariants} style={{marginBottom: '5rem', opacity: 0.6}}>
                 <h3 className="category-header" style={{opacity: 0.5}}>⚡ {t('projects.comingSoon')}</h3>
                 <div className="projects-grid">
                    <div className="project-card" style={{cursor: 'default', background: 'rgba(255,255,255,0.02)'}}>
                       <div className="project-icon" style={{background: 'rgba(255,255,255,0.05)', color: '#aaa'}}><Globe size={24}/></div>
                       <h3 className="project-name" style={{color: '#aaa'}}>{t('projects.comingSoon')}</h3>
                       <p className="project-desc">{t('projects.comingSoonDesc')}</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ================= INSTALLATION PAGE ================= */}
        {activePage === 'installation' && (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} style={{maxWidth: '1100px', width:'100%', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '0 1rem'}}>
            <h1 className="page-title" style={{fontSize: '2.5rem', fontWeight: 800, display:'flex', alignItems:'center', justifyContent: 'center'}}><Smartphone style={{marginRight:'12px'}}/> {t('installation.title')}</h1>
            <p className="subheadline" style={{margin: '0 auto 2rem'}}>{t('installation.subtitle')}</p>
            
            <div className="visual-guide-grid">
              <div className="visual-card">
                <div className="card-img-wrap">
                  <img src="/guides/desktop.png" alt="Desktop Install Guide" className="visual-step-img" />
                </div>
                <div className="card-body">
                  <h2>{t('installation.step1')}</h2>
                  <p>{t('installation.desc1')}</p>
                </div>
              </div>
              
              <div className="visual-card">
                <div className="card-img-wrap">
                  <img src="/guides/ios.png" alt="iOS Install Guide" className="visual-step-img" />
                </div>
                <div className="card-body">
                  <h2>{t('installation.step2')}</h2>
                  <p>{t('installation.desc2')}</p>
                </div>
              </div>
              
              <div className="visual-card">
                <div className="card-img-wrap">
                  <img src="/guides/android.png" alt="Android Install Guide" className="visual-step-img" />
                </div>
                <div className="card-body">
                  <h2>{t('installation.step3')}</h2>
                  <p>{t('installation.desc3')}</p>
                </div>
              </div>
            </div>

            {/* ================= STAGING ZONE (Moved to bottom of Installation) ================= */}
            <div style={{marginTop: '5rem', width: '100%', borderTop: '1px solid var(--border-glow)', paddingTop: '5rem'}}>
              <motion.div initial={{opacity:0, scale: 0.95}} whileInView={{opacity:1, scale: 1}} viewport={{once: true}} style={{width:'100%', maxWidth: isUnlocked ? '1000px' : '500px', display:'flex', flexDirection:'column', alignItems:'center', margin: '0 auto'}}>
                {!isUnlocked ? (
                  <div className="lock-box">
                    <div className="lock-ring"><Lock size={40} /></div>
                    <h2 style={{marginBottom:'0.5rem'}}>{t('staging.title')}</h2>
                    <p style={{color: 'var(--text-muted)', fontSize:'0.9rem', marginBottom: '2rem', textAlign:'center'}}>{t('staging.unlockPrompt')}</p>
                    
                    <div className="auth-form">
                      <input 
                        type="password" 
                        inputMode="numeric"
                        pattern="[0-9]*"
                        className="secure-input" 
                        placeholder={t('staging.placeholder')}
                        value={pwInput}
                        onChange={(e) => setPwInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
                        autoFocus
                      />
                      <button onClick={checkPassword} className="btn-primary" style={{width:'100%'}}>{t('staging.unlockBtn')}</button>
                      
                      {hasBiometricEnrollment && (
                        <button 
                          onClick={handleBiometricLogin} 
                          className="btn-outline" 
                          style={{
                            marginTop: '12px', 
                            width:'100%', 
                            borderColor: 'var(--secondary)', 
                            color: 'var(--secondary)', 
                            display:'flex', 
                            alignItems:'center', 
                            justifyContent:'center', 
                            gap:'8px',
                            background: 'rgba(0, 242, 254, 0.05)'
                          }}
                        >
                          <Fingerprint size={18} /> {t('staging.biometricBtn')}
                        </button>
                      )}
                    </div>
                    {pwError && <p className="error-glow">{t('staging.wrongPwd')}</p>}
                  </div>
                ) : (
                  <motion.div initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} style={{width:'100%'}}>
                    {/* Header for Unlocked View */}
                    <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                      <div className="verified-icon"><CheckCircle2 size={48} color="var(--accent)" /></div>
                      <h2 style={{marginBottom:'1.5rem'}}>{t('staging.welcome')}</h2>
                      
                      {isBiometricAvailable && !hasBiometricEnrollment && (
                        <motion.div 
                          initial={{opacity:0, scale:0.9}} 
                          animate={{opacity:1, scale:1}} 
                          transition={{delay: 0.5}}
                          style={{
                            background: 'rgba(255,255,255,0.05)', 
                            border: '1px dashed rgba(255,255,255,0.2)',
                            padding: '1rem', 
                            borderRadius: '8px', 
                            maxWidth: '500px', 
                            margin: '0 auto 2rem',
                            fontSize: '0.9rem'
                          }}
                        >
                          <p style={{color: 'var(--text-muted)', marginBottom: '0.75rem'}}>{t('staging.biometricPrompt')}</p>
                          <button 
                            onClick={handleBiometricEnroll} 
                            className="btn-secondary" 
                            style={{fontSize:'0.8rem', padding:'6px 16px', display:'inline-flex', alignItems:'center', gap:'6px'}}
                          >
                            <Fingerprint size={14} /> {t('staging.biometricLink')}
                          </button>
                        </motion.div>
                      )}
                    </div>

                    {/* Two Column Layout for Logs & Actual Staging Projects */}
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width:'100%'}}>
                      
                      {/* Left Column: Experimental Tools to Launch */}
                      <div>
                        <h3 style={{color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.1rem', display:'flex', alignItems:'center', gap: '8px'}}>
                          <Shield size={18}/> 🛠️ 測試中項目 (Experimental)
                        </h3>
                        <div className="projects-grid" style={{gridTemplateColumns: '1fr'}}>
                          {STAGING_PROJECTS.map(project => (
                            <div 
                              key={project.id} 
                              className="project-card" 
                              style={{borderColor: 'rgba(124, 58, 237, 0.3)', background: 'rgba(124, 58, 237, 0.05)'}}
                              onClick={() => openProject(project)}
                            >
                              <div className="project-icon" style={{background: 'rgba(124, 58, 237, 0.2)'}}>{project.icon}</div>
                              <div style={{position: 'absolute', top: '10px', right: '10px', fontSize: '0.6rem', background: 'var(--accent)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold'}}>ALPHA</div>
                              <h3 className="project-name">{t(`${project.translationKey}.title`)}</h3>
                              <p className="project-desc">{t(`${project.translationKey}.desc`)}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: The Backlog Dev Log */}
                      <div>
                        <h3 style={{color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1.1rem'}}>📈 研發備忘錄 (Dev Logs)</h3>
                        <div className="dev-log" style={{height: 'fit-content'}}>
                          <div className="log-line"><span className="log-badge new">UPDATING</span> {t('staging.item1')}</div>
                          <div className="log-line"><span className="log-badge wip">WIP</span> {t('staging.item2')}</div>
                          <div className="log-line"><span className="log-badge feature">FEATURE</span> {t('staging.item3')}</div>
                          <div className="log-line" style={{opacity: 0.4}}>💡 Auto-update daemon active...</div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ================= STAGING ZONE REMOVED FROM TOP LEVEL ================= */}
      </main>

      <footer>
        <div className="footer-stats">
          <span className="footer-stat-item">
            <Eye size={12} /> {t('metrics.totalViewsLabel')} {mockTotalViews}
          </span>
          <span className="footer-stat-divider">•</span>
          <span className="footer-stat-item">
            <Heart size={12} /> {t('metrics.visitorsLabel')} {visitorsHint}
          </span>
        </div>
        <p>{t('footer', { year: currentYear })}</p>
      </footer>

      {/* MOBILE BOTTOM BAR */}
      <div className="mobile-bottom-nav">
        <button 
          className={`mobile-nav-item ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => { setActivePage('home'); window.scrollTo(0,0); }}
        >
          <Home size={20} />
          <span>{t('nav.home')}</span>
        </button>

        <button 
          className={`mobile-nav-item ${activePage === 'projects' ? 'active' : ''}`}
          onClick={() => { setActivePage('projects'); window.scrollTo(0,0); }}
        >
          <Grid size={20} />
          <span>{t('nav.projects')}</span>
        </button>
        
        <button 
          className={`mobile-nav-item ${activePage === 'installation' ? 'active' : ''}`}
          onClick={() => { setActivePage('installation'); window.scrollTo(0,0); }}
        >
          <Smartphone size={20} />
          <span>{t('nav.installation')}</span>
        </button>
      </div>

      {/* FULLSCREEN OVERLAY IFRAME VIEWER */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="viewer-overlay"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="top-edge-trigger" onMouseEnter={() => setIsHeaderVisible(true)} />
            
            {!isHeaderVisible && (
              <div className="viewer-pull-tab" onClick={() => setIsHeaderVisible(true)}>
                <div className="pull-tab-handle" />
                <Home size={14} style={{ color: 'var(--secondary)' }} />
              </div>
            )}

            <div className={`viewer-header ${isHeaderVisible ? '' : 'hidden'}`}>
              <div className="viewer-title">
                <div style={{ color: 'var(--secondary)' }}>{activeProject.icon}</div>
                <div style={{ fontSize: '1.1rem' }}>{activeProject.resolvedTitle}</div>
                <span style={{fontSize: '0.75rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius:'4px'}}>
                  {t('viewer.runningInside')}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  className="btn-close-viewer" 
                  style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)' }}
                  onClick={() => setIsHeaderVisible(false)}
                  title={i18n.language.startsWith('zh') ? '隱藏上方導覽列以顯示全螢幕' : 'Hide navigation for fullscreen'}
                >
                  <ChevronUp size={16} /> {i18n.language.startsWith('zh') ? '收起導覽' : 'Collapse'}
                </button>
                <button className="btn-close-viewer" onClick={closeProject}>
                  <Home size={16} /> {t('viewer.exit')}
                </button>
              </div>
            </div>

            <div className={`viewer-content-wrap ${isHeaderVisible ? '' : 'header-hidden'}`}>
              {activeProject.id === 'ai-studio-english' ? (
                <React.Suspense fallback={
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    color: 'var(--text-muted)',
                    gap: '1rem'
                  }}>
                    <Zap className="animate-pulse" style={{ color: 'var(--secondary)' }} size={32} />
                    <span>Loading English Practice Space...</span>
                  </div>
                }>
                  <EnglishPractice />
                </React.Suspense>
              ) : (
                <iframe 
                  src={activeProject.url} 
                  className="iframe-container"
                  title={activeProject.resolvedTitle}
                  onLoad={handleIframeLoad}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
resolvedTitle}
                  onLoad={handleIframeLoad}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
