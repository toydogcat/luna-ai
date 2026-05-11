import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Globe, Users, MousePointerClick, Newspaper, Home, Languages, Heart, Code, Database, Eye, BookOpen, Scroll, Crown, Bomb, Grid3X3, Lock, Terminal, CheckCircle2, Smartphone, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { trackEvent } from './firebase';

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
  }
];

function App() {
  const { t, i18n } = useTranslation();
  const [hoverCount, setHoverCount] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [activePage, setActivePage] = useState('home'); // home | installation | staging
  const [pwInput, setPwInput] = useState('');
  const [pwError, setPwError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const checkPassword = () => {
    // Current format YYYYMMDD in user timezone
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    const correctCode = `${y}${m}${d}`;
    
    if (pwInput === correctCode) {
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
      project_url: project.url
    });
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

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo" onClick={() => setActivePage('home')} style={{cursor: 'pointer'}}>Luna AI</div>
        
        <div className="navbar-right">
          <div className="nav-links">
            <span onClick={() => setActivePage('home')} className={`nav-item ${activePage==='home'?'active-nav':''}`}>{t('nav.projects')}</span>
            <span onClick={() => setActivePage('installation')} className={`nav-item ${activePage==='installation'?'active-nav':''}`}>{t('nav.installation')}</span>
            <span onClick={() => setActivePage('staging')} className={`nav-item ${activePage==='staging'?'active-nav':''}`}>{t('nav.staging')}</span>
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

          {/* Projects Showcase Section by Categories */}
          <motion.h2 variants={itemVariants} className="section-title">{t('projects.title')}</motion.h2>
          
          <div style={{width: '100%', maxWidth: '1100px'}}>
            {PROJECT_CATEGORIES.map(category => (
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
                      className="project-card"
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

            {/* Placeholder Node */}
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

          {/* Metrics Section */}
          <motion.h2 variants={itemVariants} className="section-title">{t('metrics.title')}</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="preview-container"
            initial={{ rotateX: 10, scale: 0.98, opacity: 0 }}
            animate={{ rotateX: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{marginBottom: '5rem'}}
          >
            <div className="mockup">
              <div className="mockup-header">
                <div className="dot" style={{ background: '#EF4444' }}></div>
                <div className="dot" style={{ background: '#F59E0B' }}></div>
                <div className="dot" style={{ background: '#10B981' }}></div>
              </div>
              <div className="mockup-body">
                <h3 style={{ marginBottom: '1rem', color: '#fff' }}>{t('metrics.heading')}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
                  {t('metrics.desc')}
                </p>
                
                {/* SIMPLIFIED STATS CAPSULES */}
                <div className="capsule-container">
                  <div className="stat-capsule">
                    <div className="capsule-icon-wrap icon-eye">
                      <Eye size={18} />
                    </div>
                    <span className="capsule-label">{t('metrics.totalViewsLabel')}</span>
                    <span className="capsule-val">236,189</span>
                    <span className="capsule-unit">{t('metrics.viewsUnit')}</span>
                  </div>
                  
                  <div className="stat-capsule">
                    <div className="capsule-icon-wrap icon-heart">
                      <Heart size={18} fill="currentColor"/>
                    </div>
                    <span className="capsule-label">{t('metrics.visitorsLabel')}</span>
                    <span className="capsule-val">2,026</span>
                    <span className="capsule-unit">{t('metrics.visitorsUnit')}</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
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
                  <h3>{t('installation.step1')}</h3>
                  <p>{t('installation.desc1')}</p>
                </div>
              </div>
              
              <div className="visual-card">
                <div className="card-img-wrap">
                  <img src="/guides/ios.png" alt="iOS Install Guide" className="visual-step-img" />
                </div>
                <div className="card-body">
                  <h3>{t('installation.step2')}</h3>
                  <p>{t('installation.desc2')}</p>
                </div>
              </div>
              
              <div className="visual-card">
                <div className="card-img-wrap">
                  <img src="/guides/android.png" alt="Android Install Guide" className="visual-step-img" />
                </div>
                <div className="card-body">
                  <h3>{t('installation.step3')}</h3>
                  <p>{t('installation.desc3')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= STAGING ZONE ================= */}
        {activePage === 'staging' && (
          <motion.div initial={{opacity:0, scale: 0.95}} animate={{opacity:1, scale: 1}} style={{width:'100%', maxWidth: isUnlocked ? '1000px' : '500px', display:'flex', flexDirection:'column', alignItems:'center', margin: '0 auto'}}>
            {!isUnlocked ? (
              <div className="lock-box">
                <div className="lock-ring"><Lock size={40} /></div>
                <h2 style={{marginBottom:'0.5rem'}}>{t('staging.title')}</h2>
                <p style={{color: 'var(--text-muted)', fontSize:'0.9rem', marginBottom: '2rem', textAlign:'center'}}>{t('staging.unlockPrompt')}</p>
                
                <div className="auth-form">
                  <input 
                    type="password" 
                    className="secure-input" 
                    placeholder={t('staging.placeholder')}
                    value={pwInput}
                    onChange={(e) => setPwInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
                    autoFocus
                  />
                  <button onClick={checkPassword} className="btn-primary" style={{width:'100%'}}>{t('staging.unlockBtn')}</button>
                </div>
                {pwError && <p className="error-glow">{t('staging.wrongPwd')}</p>}
              </div>
            ) : (
              <motion.div initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} style={{width:'100%'}}>
                {/* Header for Unlocked View */}
                <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                  <div className="verified-icon"><CheckCircle2 size={48} color="var(--accent)" /></div>
                  <h2 style={{marginBottom:'1.5rem'}}>{t('staging.welcome')}</h2>
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
        )}
      </main>

      <footer>
        <p>{t('footer', { year: new Date().getFullYear() })}</p>
      </footer>

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
            <div className="viewer-header">
              <div className="viewer-title">
                <div style={{ color: 'var(--secondary)' }}>{activeProject.icon}</div>
                <div style={{ fontSize: '1.1rem' }}>{activeProject.resolvedTitle}</div>
                <span style={{fontSize: '0.75rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius:'4px'}}>
                  {t('viewer.runningInside')}
                </span>
              </div>
              <button className="btn-close-viewer" onClick={closeProject}>
                <Home size={16} /> {t('viewer.exit')}
              </button>
            </div>
            <iframe 
              src={activeProject.url} 
              className="iframe-container"
              title={activeProject.resolvedTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
