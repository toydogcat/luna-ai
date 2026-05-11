import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Globe, Users, MousePointerClick, Newspaper, X, Home } from 'lucide-react';
import { trackEvent } from './firebase';

const PROJECTS = [
  {
    id: 'ai-news',
    title: 'AI News',
    desc: 'Comprehensive AI-driven news aggregation and analysis system.',
    url: 'https://toydogcat.github.io/ai-news/',
    icon: <Newspaper size={24} />
  }
];

function App() {
  const [hoverCount, setHoverCount] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  // Track initial page view
  useEffect(() => {
    trackEvent('page_view', { page_title: 'Luna AI Home' });
  }, []);

  // Action Handler for tracking and launching
  const openProject = (project) => {
    trackEvent('project_open', {
      project_id: project.id,
      project_name: project.title,
      project_url: project.url
    });
    setActiveProject(project);
  };

  const closeProject = () => {
    trackEvent('project_close', {
      project_id: activeProject?.id
    });
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
        <div className="nav-links">
          <a href="#" className="nav-item">Projects</a>
          <a href="#" className="nav-item">Analytics</a>
        </div>
        <button 
          className="btn-launch"
          onClick={() => handleTrackedClick('navbar_launch_btn')}
        >
          Launch Console
        </button>
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
            The Future Unified Ecosystem
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="headline">
            Everything <span>Luna</span>,<br /> All in One Place.
          </motion.h1>

          <motion.p variants={itemVariants} className="subheadline">
            A centralized, performance-driven portal aggregating intelligent micro-services and projects into one seamless ecosystem.
          </motion.p>

          {/* Projects Showcase Section */}
          <motion.h2 variants={itemVariants} className="section-title">Our Projects</motion.h2>
          
          <motion.div variants={itemVariants} className="projects-grid">
            {PROJECTS.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => openProject(project)}
              >
                <div className="project-icon">{project.icon}</div>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div style={{marginTop: '1rem', display: 'flex', alignItems:'center', gap:'5px', color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 'bold'}}>
                  Launch Inside <ArrowRight size={14} />
                </div>
              </div>
            ))}

            {/* Placeholder for coming soon */}
            <div className="project-card" style={{opacity: 0.5, cursor: 'default'}}>
              <div className="project-icon"><Globe size={24}/></div>
              <h3 className="project-name">Next Node</h3>
              <p className="project-desc">Connecting intelligent nodes seamlessly. Future integration pending.</p>
            </div>
          </motion.div>

          {/* Interactive Preview Mockup */}
          <motion.h2 variants={itemVariants} className="section-title">Metrics Demo</motion.h2>
          
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
                <h3 style={{ marginBottom: '1rem', color: '#fff' }}>Real-time Portal Tracking</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                  Monitor portal click-through interactions across sub-modules.
                </p>
                <div className="stat-grid">
                  <div className="stat-card" onClick={() => handleTrackedClick('mockup_card', { type: 'visitors' })}>
                    <div className="stat-label"><Users size={16} style={{verticalAlign:'middle', marginRight:'5px'}}/> Unique Visitors</div>
                    <div className="stat-value">1,208</div>
                    <div className="stat-trend">+100% this launch</div>
                  </div>
                  <div className="stat-card" onClick={() => handleTrackedClick('mockup_card', { type: 'clicks' })}>
                    <div className="stat-label"><MousePointerClick size={16} style={{verticalAlign:'middle', marginRight:'5px'}}/> Action Hits</div>
                    <div className="stat-value">{10 + hoverCount}</div>
                    <div className="stat-trend" style={{color: '#A78BFA'}}>Clicked cards: {hoverCount}</div>
                  </div>
                  <div className="stat-card" onClick={() => handleTrackedClick('mockup_card', { type: 'performance' })}>
                    <div className="stat-label"><Zap size={16} style={{verticalAlign:'middle', marginRight:'5px'}}/> Frame Load</div>
                    <div className="stat-value">Sub-Sec</div>
                    <div className="stat-trend">Instant transition</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Luna AI Dashboard. All projects tracked via Firebase Engine.</p>
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
                <div style={{ fontSize: '1.1rem' }}>{activeProject.title}</div>
                <span style={{fontSize: '0.75rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius:'4px'}}>Running within Luna Hub</span>
              </div>
              <button className="btn-close-viewer" onClick={closeProject}>
                <Home size={16} /> Exit to Home
              </button>
            </div>
            <iframe 
              src={activeProject.url} 
              className="iframe-container"
              title={activeProject.title}
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
