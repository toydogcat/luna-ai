import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Globe, Users, MousePointerClick, Newspaper, Home, Languages, Heart, Code, Database, Eye } from 'lucide-react';
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
  }
];

function App() {
  const { t, i18n } = useTranslation();
  const [hoverCount, setHoverCount] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

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
        <div className="logo">Luna AI</div>
        
        <div className="navbar-right">
          <div className="nav-links">
            <a href="#" className="nav-item">{t('nav.projects')}</a>
            <a href="#" className="nav-item">{t('nav.analytics')}</a>
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
