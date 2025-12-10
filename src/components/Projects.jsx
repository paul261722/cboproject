import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check viewport
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Modern color palette
  const colors = {
    primary: '#667EEA',
    secondary: '#764BA2',
    accent: '#FF6B6B',
    dark: '#1A1A2E',
    light: '#F8FAFC',
    success: '#4ECDC4',
    warning: '#FFD166',
    info: '#06D6A0',
    leadership: '#3498db',
    gender: '#e74c3c',
    economic: '#2ecc71',
    climate: '#1abc9c'
  };

  // Category colors mapping
  const categoryColors = {
    'All': '#667EEA',
    'Governance': '#3498db',
    'Gender': '#e74c3c',
    'Economic': '#2ecc71',
    'Environment': '#1abc9c',
    'Capacity': '#9b59b6',
    'Policy': '#f39c12'
  };

  const categoryIcons = {
    'All': '🌟',
    'Governance': '🏛️',
    'Gender': '⚖️',
    'Economic': '💼',
    'Environment': '🌱',
    'Capacity': '👥',
    'Policy': '📜'
  };

  // Function to get appropriate category display name
  const getCategoryDisplayName = (category) => {
    const shortNames = {
      'All': 'All',
      'Governance': isMobile ? 'Governance' : 'Leadership & Governance',
      'Gender': isMobile ? 'Gender' : 'Gender & SRHR',
      'Economic': isMobile ? 'Economic' : 'Economic Empowerment',
      'Environment': isMobile ? 'Environment' : 'Climate & Environment',
      'Capacity': isMobile ? 'Capacity' : 'Capacity Building',
      'Policy': isMobile ? 'Policy' : 'Policy Advocacy'
    };
    return shortNames[category] || category;
  };

  // Responsive styles - UPDATED WITH CHIP-BASED FILTERS
  const styles = {
    // Modern Hero Section - Mobile Optimized
    projectsHero: {
      background: `linear-gradient(135deg, rgba(44, 62, 80, 0.95) 0%, rgba(26, 37, 47, 0.98) 100%), url('/image1.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      color: 'white',
      textAlign: 'center',
      padding: isMobile ? '100px 0 60px' : '140px 0 80px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? 'auto' : '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    heroContent: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 16px' : '0 24px'
    },

    heroTitle: {
      fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 6vw, 5rem)',
      marginBottom: isMobile ? '20px' : '30px',
      fontWeight: '800',
      letterSpacing: isMobile ? '-1px' : '-1.5px',
      lineHeight: '1.1',
      background: 'linear-gradient(45deg, #FFFFFF, #3498db, #2ecc71)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% auto'
    },

    heroSubtitle: {
      fontSize: isMobile ? '1.1rem' : 'clamp(1.2rem, 2vw, 1.6rem)',
      maxWidth: isMobile ? '100%' : '800px',
      margin: `0 auto ${isMobile ? '30px' : '50px'}`,
      opacity: 0.9,
      lineHeight: '1.6',
      fontWeight: '300',
      color: 'rgba(255, 255, 255, 0.95)',
      padding: isMobile ? '0 10px' : '0'
    },

    // Section styling - Mobile Adjusted
    section: {
      padding: isMobile ? '60px 0' : '80px 0',
      position: 'relative'
    },

    sectionTitle: {
      fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3.5rem)',
      textAlign: 'center',
      marginBottom: isMobile ? '16px' : '24px',
      fontWeight: '700',
      color: colors.dark,
      position: 'relative',
      display: 'inline-block',
      lineHeight: '1.2'
    },

    sectionSubtitle: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      textAlign: 'center',
      color: '#666',
      maxWidth: isMobile ? '100%' : '700px',
      margin: `0 auto ${isMobile ? '40px' : '60px'}`,
      lineHeight: '1.6',
      padding: isMobile ? '0 16px' : '0'
    },

    // MODERN CHIP-BASED FILTER CONTAINER
    filterChipContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: isMobile ? '10px' : '12px',
      marginBottom: isMobile ? '30px' : '50px',
      padding: isMobile ? '16px 12px' : '24px 20px',
      background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(240, 247, 255, 0.95))',
      borderRadius: isMobile ? '20px' : '25px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(52, 152, 219, 0.15)',
      boxShadow: '0 10px 30px rgba(52, 152, 219, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'visible'
    },

    // Chip styles - optimized for wrapping
    filterChip: {
      padding: isMobile ? '10px 18px' : '12px 22px',
      borderRadius: '50px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      fontSize: isMobile ? '0.85rem' : '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      position: 'relative',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      minWidth: 'fit-content',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      backdropFilter: 'blur(10px)',
      transform: 'translateZ(0)',
      willChange: 'transform',
      WebkitFontSmoothing: 'antialiased'
    },

    // Enhanced projects grid with proper breakpoints
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: isMobile ? '24px' : isTablet ? '28px' : '36px',
      maxWidth: '1200px',
      margin: '0 auto',
      perspective: '1000px',
      padding: isMobile ? '0 16px' : '0'
    },

    projectCard: {
      background: 'white',
      borderRadius: isMobile ? '18px' : '22px',
      overflow: 'hidden',
      boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: '1px solid rgba(52, 152, 219, 0.1)',
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },

    projectHeader: {
      padding: isMobile ? '20px' : '28px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? '110px' : '130px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },

    projectContent: {
      padding: isMobile ? '24px 20px 20px' : '32px 28px 28px',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: 'white',
      zIndex: 2
    },

    // Modern progress bar
    progressBar: {
      height: '6px',
      background: 'rgba(0,0,0,0.05)',
      borderRadius: '8px',
      overflow: 'hidden',
      marginTop: isMobile ? '14px' : '18px',
      position: 'relative'
    },

    progressFill: {
      height: '100%',
      borderRadius: '8px',
      background: 'linear-gradient(90deg, #667EEA, #764BA2)',
      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative'
    },

    // Category and status tags - Mobile Adjusted
    categoryTag: {
      background: 'rgba(255,255,255,0.95)',
      padding: isMobile ? '6px 12px' : '8px 16px',
      borderRadius: '50px',
      fontSize: isMobile ? '0.7rem' : '0.8rem',
      fontWeight: '600',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255,255,255,0.3)',
      color: colors.dark,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      letterSpacing: '0.4px',
      marginBottom: isMobile ? '12px' : '16px'
    },

    // Impact section - Mobile Optimized
    impactSection: {
      background: `linear-gradient(135deg, ${colors.dark} 0%, #16213E 100%)`,
      color: 'white',
      padding: isMobile ? '60px 0' : '100px 0',
      position: 'relative',
      overflow: 'hidden'
    },

    // Impact stats grid for mobile
    impactStats: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: isMobile ? '20px' : '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      padding: isMobile ? '0 16px' : '0'
    },

    impactStat: {
      textAlign: 'center',
      position: 'relative',
      padding: isMobile ? '24px 20px' : '36px 24px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: isMobile ? '16px' : '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s ease'
    },

    // Pillars Grid with proper responsive breakpoints
    pillarsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: isMobile ? '20px' : isTablet ? '24px' : '32px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 16px' : '0'
    },

    // Activity List Styles
    activityList: {
      listStyle: 'none',
      padding: 0,
      marginTop: '12px',
      marginBottom: '16px'
    },

    activityItem: {
      fontSize: isMobile ? '0.8rem' : '0.85rem',
      marginBottom: '6px',
      color: '#555',
      display: 'flex',
      alignItems: 'flex-start',
      lineHeight: '1.5'
    },

    activityBullet: {
      color: '#3498db',
      marginRight: '8px',
      flexShrink: 0,
      fontSize: '0.7rem',
      marginTop: '3px'
    }
  };

  // Strategic Pillars data
  const strategicPillars = [
    {
      id: 1,
      title: 'Youth Leadership & Governance',
      category: 'Governance',
      description: 'Building accountable youth leaders who actively participate in governance and anti-corruption initiatives.',
      impact: '300+ youth engaged in governance forums, 30+ policy engagement spaces',
      color: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
      gradient: ['#3498db', '#2980b9'],
      progress: 85,
      icon: '🏛️',
      stats: { youth: '300+', policies: '30+' },
      activities: [
        'Anti-corruption training by Transparency International Kenya',
        'Community anti-corruption sensitization',
        'Youth public participation in Kisumu fiscal planning',
        'Youth sensitization forums on accountability & service delivery',
        'Kisumu County Health Department Technical Working Group'
      ]
    },
    {
      id: 2,
      title: 'Gender Equality & SRHR',
      category: 'Gender',
      description: 'Advocating for gender justice, sexual reproductive health rights, and ending gender-based violence.',
      impact: '20+ gender and SRHR advocacy events, multiple policy reviews conducted',
      color: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
      gradient: ['#e74c3c', '#c0392b'],
      progress: 90,
      icon: '⚖️',
      stats: { events: '20+', policies: '5+' },
      activities: [
        'International Women\'s Day participation',
        'Kisumu County SRHR Bill Review (Technical Working Group)',
        'Sexual & GBV Policy Validation',
        'Menstrual Hygiene Management Day',
        'SRHR youth-led advocacy activities'
      ]
    },
    {
      id: 3,
      title: 'Economic Empowerment',
      category: 'Economic',
      description: 'Strengthening economic decision-making, financial accountability, and entrepreneurship among youth.',
      impact: 'Multiple training programs on leadership, governance, and economic empowerment',
      color: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
      gradient: ['#2ecc71', '#27ae60'],
      progress: 75,
      icon: '💼',
      stats: { trainings: '15+', forums: '10+' },
      activities: [
        'Youth Leadership & Governance trainings',
        'Social movement and civic education',
        'Accountability forums',
        'Entrepreneurship skill-building',
        'Financial literacy programs'
      ]
    },
    {
      id: 4,
      title: 'Climate Action & Environment',
      category: 'Environment',
      description: 'Leading youth-driven climate justice initiatives and environmental conservation activities.',
      impact: '15+ climate action and environmental activities, active participation in climate forums',
      color: 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)',
      gradient: ['#1abc9c', '#16a085'],
      progress: 80,
      icon: '🌱',
      stats: { activities: '15+', cleanups: '10+' },
      activities: [
        'Environmental cleanups',
        'Climate action collaboration',
        'International Youth Day participation',
        'Local environmental conservation',
        'Climate justice advocacy'
      ]
    },
    {
      id: 5,
      title: 'Community Capacity Building',
      category: 'Capacity',
      description: 'Empowering communities through training, sensitization, and participatory development.',
      impact: 'Multiple community sensitization programs, capacity building workshops',
      color: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
      gradient: ['#9b59b6', '#8e44ad'],
      progress: 70,
      icon: '👥',
      stats: { communities: '25+', workshops: '30+' },
      activities: [
        'Community anti-corruption sensitization',
        'Youth sensitization forums',
        'Social movement building training',
        'Public participation programs',
        'Capacity building workshops'
      ]
    },
    {
      id: 6,
      title: 'Policy Advocacy & Reform',
      category: 'Policy',
      description: 'Engaging in policy development, review, and advocacy at county and national levels.',
      impact: '10+ county-level policy consultations, multiple bill reviews and policy validations',
      color: 'linear-gradient(135deg, #f39c12 0%, #d35400 100%)',
      gradient: ['#f39c12', '#d35400'],
      progress: 88,
      icon: '📜',
      stats: { consultations: '10+', policies: '5+' },
      activities: [
        'Kisumu County SRHR Bill Review',
        'Sexual & GBV Policy Validation',
        'County fiscal planning participation',
        'Technical Working Group participation',
        'Policy advocacy forums'
      ]
    }
  ];

  const pillars = [
    {
      title: 'Youth Leadership & Governance',
      description: 'Promoting transparent, accountable, and youth-inclusive governance systems',
      icon: '🏛️',
      gradient: 'linear-gradient(135deg, #3498db, #2980b9)',
      projects: 8,
      color: '#3498db',
      activities: [
        'Anti-corruption training',
        'Public participation',
        'Accountability forums',
        'Technical working groups'
      ]
    },
    {
      title: 'Gender Equality & SRHR',
      description: 'Advancing equal rights and sexual reproductive health for all genders',
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
      projects: 6,
      color: '#e74c3c',
      activities: [
        'SRHR advocacy',
        'Policy review',
        'GBV prevention',
        'Women empowerment'
      ]
    },
    {
      title: 'Economic Empowerment',
      description: 'Building economic resilience through skills development and entrepreneurship',
      icon: '💼',
      gradient: 'linear-gradient(135deg, #2ecc71, #27ae60)',
      projects: 10,
      color: '#2ecc71',
      activities: [
        'Leadership training',
        'Civic education',
        'Financial literacy',
        'Entrepreneurship'
      ]
    },
    {
      title: 'Climate Action',
      description: 'Championing sustainable environmental practices and climate justice',
      icon: '🌱',
      gradient: 'linear-gradient(135deg, #1abc9c, #16a085)',
      projects: 7,
      color: '#1abc9c',
      activities: [
        'Environmental cleanups',
        'Climate advocacy',
        'Conservation activities',
        'Youth climate action'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? strategicPillars 
    : strategicPillars.filter(project => project.category === activeFilter);

  const categories = ['All', ...new Set(strategicPillars.map(p => p.category))];

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section style={styles.projectsHero}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(52, 152, 219, 0.1), rgba(46, 204, 113, 0.1))'
        }}></div>
        
        <div style={styles.heroContent}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: isMobile ? '8px 16px' : '10px 24px',
              borderRadius: '50px',
              marginBottom: isMobile ? '20px' : '28px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <span style={{ 
              fontSize: isMobile ? '0.75rem' : '0.85rem', 
              fontWeight: '600', 
              letterSpacing: '1.5px',
              color: 'white'
            }}>
              BUILDING AFRICA'S FUTURE
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={styles.heroTitle}
          >
            Youth-Led
            <br />
            <span style={{ 
              fontSize: isMobile ? '0.7em' : '0.8em',
              display: 'block',
              marginTop: isMobile ? '5px' : '8px'
            }}>
              Social Transformation Platform
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            We are one of Africa's most innovative youth-led platforms for social transformation, 
            merging leadership development, entrepreneurship, and community-driven impact 
            across four strategic pillars.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'inline-block',
              padding: isMobile ? '16px 20px' : '18px 28px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <p style={{ 
              fontSize: isMobile ? '0.95rem' : '1.05rem', 
              fontStyle: 'italic', 
              margin: 0,
              opacity: 0.95
            }}>
              "Cultivating a new generation of African leaders who don't just imagine change 
              but actively build it."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section style={{ ...styles.section, background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
            <div style={{
              fontSize: isMobile ? '0.75rem' : '0.85rem',
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              OUR STRATEGIC PILLARS
            </div>
            <h2 style={styles.sectionTitle}>
              Four Interconnected Pillars
            </h2>
            <p style={styles.sectionSubtitle}>
              Powering our holistic approach to youth empowerment and social transformation
            </p>
          </div>
          
          <div style={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: isMobile ? '16px' : '20px',
                  padding: isMobile ? '28px 20px' : '36px 24px',
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  y: isMobile ? -4 : -8,
                  scale: isMobile ? 1.02 : 1.03,
                  boxShadow: `0 20px 40px ${pillar.color}20`
                }}
              >
                {/* Pillar Icon */}
                <div style={{
                  width: isMobile ? '70px' : '80px',
                  height: isMobile ? '70px' : '80px',
                  background: pillar.gradient,
                  borderRadius: isMobile ? '16px' : '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  margin: '0 auto 20px',
                  boxShadow: `0 10px 25px ${pillar.color}40`
                }}>
                  {pillar.icon}
                </div>
                
                <h3 style={{ 
                  color: colors.dark, 
                  marginBottom: isMobile ? '12px' : '16px', 
                  fontSize: isMobile ? '1.1rem' : '1.3rem',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {pillar.title}
                </h3>
                
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6', 
                  marginBottom: isMobile ? '20px' : '24px',
                  fontSize: isMobile ? '0.85rem' : '0.95rem'
                }}>
                  {pillar.description}
                </p>
                
                {/* Key Activities */}
                <div style={{ textAlign: 'left', marginBottom: '16px' }}>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: '600', 
                    color: pillar.color,
                    marginBottom: '8px'
                  }}>
                    Key Activities:
                  </div>
                  <ul style={styles.activityList}>
                    {pillar.activities.map((activity, i) => (
                      <li key={i} style={styles.activityItem}>
                        <span style={{...styles.activityBullet, color: pillar.color}}>•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Project Count */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: pillar.color,
                  fontWeight: '600',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  padding: isMobile ? '10px 20px' : '12px 24px',
                  background: `${pillar.color}10`,
                  borderRadius: '50px',
                  border: `2px solid ${pillar.color}30`
                }}>
                  <span>{pillar.projects}</span>
                  <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Active Initiatives</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with Chip-based Filters */}
      <section style={{ ...styles.section, background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
            <div style={{
              fontSize: isMobile ? '0.75rem' : '0.85rem',
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              FEATURED INITIATIVES
            </div>
            <h2 style={styles.sectionTitle}>
              Our Impact Programs
            </h2>
            <p style={styles.sectionSubtitle}>
              Explore our diverse portfolio of youth-led initiatives driving innovation, 
              empowerment, and sustainable development across Kenya
            </p>
            
            {/* MODERN CHIP-BASED FILTER SYSTEM */}
            <div style={{
              position: 'relative',
              marginBottom: isMobile ? '40px' : '60px',
              maxWidth: '100%'
            }}>
              {/* Decorative background element */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(52, 152, 219, 0.05) 0%, transparent 70%)',
                zIndex: 0,
                borderRadius: '30px'
              }}></div>
              
              {/* Chip Container */}
              <div style={styles.filterChipContainer}>
                {categories.map((category) => {
                  const isActive = activeFilter === category;
                  const bgColor = categoryColors[category] || colors.primary;
                  
                  return (
                    <motion.button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      style={{
                        ...styles.filterChip,
                        background: isActive 
                          ? `linear-gradient(135deg, ${bgColor}, ${bgColor}cc)`
                          : 'rgba(255, 255, 255, 0.95)',
                        color: isActive ? 'white' : colors.dark,
                        border: isActive 
                          ? `2px solid ${bgColor}`
                          : '2px solid rgba(52, 152, 219, 0.2)',
                        boxShadow: isActive
                          ? `0 8px 25px ${bgColor}40`
                          : '0 4px 12px rgba(0, 0, 0, 0.08)',
                        transform: isActive ? 'translateY(-2px)' : 'none'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3,
                        boxShadow: isActive
                          ? `0 12px 30px ${bgColor}60`
                          : '0 8px 20px rgba(0, 0, 0, 0.12)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Icon */}
                      <span style={{
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        filter: isActive ? 'drop-shadow(0 2px 3px rgba(0,0,0,0.2))' : 'none'
                      }}>
                        {categoryIcons[category] || '📋'}
                      </span>
                      
                      {/* Text */}
                      <span style={{
                        fontWeight: '600',
                        letterSpacing: '0.3px'
                      }}>
                        {getCategoryDisplayName(category)}
                      </span>
                      
                      {/* Count for All filter */}
                      {category === 'All' && (
                        <span style={{
                          marginLeft: '6px',
                          background: 'rgba(255, 255, 255, 0.3)',
                          padding: '2px 8px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '700'
                        }}>
                          {strategicPillars.length}
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
              
              {/* Active filter indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  color: '#666',
                  fontWeight: '500'
                }}
              >
                <span style={{ color: colors.dark, fontWeight: '600' }}>
                  {activeFilter === 'All' ? 'All Categories' : getCategoryDisplayName(activeFilter)}
                </span>
                <span style={{ margin: '0 8px', color: '#999' }}>•</span>
                <span style={{ color: categoryColors[activeFilter] || colors.primary, fontWeight: '600' }}>
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'Program' : 'Programs'}
                </span>
              </motion.div>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div style={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                style={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  y: isMobile ? -4 : -12,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.12)'
                }}
              >
                {/* Project Header */}
                <div style={{ 
                  ...styles.projectHeader, 
                  background: project.color
                }}>
                  <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                    <span style={styles.categoryTag}>
                      <span style={{ fontSize: '1.1rem' }}>{project.icon}</span>
                      {project.category}
                    </span>
                    
                    <h3 style={{ 
                      color: 'white', 
                      fontSize: isMobile ? '1.3rem' : '1.5rem',
                      fontWeight: '700',
                      marginTop: isMobile ? '12px' : '16px',
                      lineHeight: '1.3'
                    }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Project Content */}
                <div style={styles.projectContent}>
                  <p style={{ 
                    color: '#555', 
                    lineHeight: '1.6', 
                    marginBottom: isMobile ? '20px' : '24px', 
                    flex: '1',
                    fontSize: isMobile ? '0.85rem' : '0.95rem'
                  }}>
                    {project.description}
                  </p>
                  
                  {/* Key Activities */}
                  <div style={{ marginBottom: isMobile ? '16px' : '20px' }}>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: '600', 
                      color: '#3498db',
                      marginBottom: '10px'
                    }}>
                      Featured Activities:
                    </div>
                    <ul style={styles.activityList}>
                      {project.activities.slice(0, 3).map((activity, i) => (
                        <li key={i} style={styles.activityItem}>
                          <span style={styles.activityBullet}>✓</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                      {project.activities.length > 3 && (
                        <li style={{...styles.activityItem, color: '#666', fontSize: '0.75rem'}}>
                          <span style={styles.activityBullet}>+</span>
                          <span>And {project.activities.length - 3} more activities</span>
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Progress Section */}
                  <div style={{ marginBottom: isMobile ? '20px' : '24px' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      marginBottom: '10px',
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        fontSize: '0.85rem', 
                        color: colors.dark, 
                        fontWeight: '600'
                      }}>
                        PROGRAM PROGRESS
                      </span>
                      <span style={{ 
                        fontSize: '1rem', 
                        fontWeight: '700',
                        background: project.color,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        {project.progress}%
                      </span>
                    </div>
                    <div style={styles.progressBar}>
                      <div style={{ 
                        ...styles.progressFill, 
                        width: `${project.progress}%`,
                        background: project.color
                      }}></div>
                    </div>
                  </div>
                  
                  {/* Impact Stats */}
                  <div style={{ 
                    background: 'rgba(248, 250, 252, 0.8)',
                    padding: isMobile ? '16px' : '20px',
                    borderRadius: isMobile ? '12px' : '16px',
                    border: '2px solid rgba(52, 152, 219, 0.1)',
                    marginBottom: isMobile ? '20px' : '24px'
                  }}>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '12px'
                    }}>
                      {Object.entries(project.stats).map(([key, value], index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                          <div style={{ 
                            fontSize: isMobile ? '1.3rem' : '1.5rem', 
                            fontWeight: '700',
                            background: project.color,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '4px'
                          }}>
                            {value}
                          </div>
                          <div style={{ 
                            fontSize: isMobile ? '0.75rem' : '0.8rem', 
                            color: '#666',
                            fontWeight: '600',
                            textTransform: 'uppercase'
                          }}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* REMOVED: Action Button */}
                  {/* The "Explore Program" button has been removed */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section style={styles.impactSection}>
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
              <div style={{
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                fontWeight: '600',
                color: '#3498db',
                marginBottom: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                MEASURABLE IMPACT
              </div>
              <h2 style={{ 
                fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 3.5rem)', 
                textAlign: 'center',
                marginBottom: '20px',
                fontWeight: '700',
                background: 'linear-gradient(45deg, #FFFFFF, #3498db, #2ecc71)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Our Impact Journey
              </h2>
              
              <p style={{ 
                fontSize: isMobile ? '0.95rem' : '1.1rem', 
                textAlign: 'center', 
                maxWidth: '800px', 
                margin: '0 auto 40px', 
                opacity: 0.9,
                lineHeight: '1.6',
                padding: isMobile ? '0 16px' : '0'
              }}>
                Transforming lives and communities through dedicated efforts and 
                sustainable partnerships across Kenya
              </p>
            </div>
            
            <div style={styles.impactStats}>
              {[
                { 
                  value: '300', 
                  suffix: '+', 
                  label: 'Youth Engaged in Governance', 
                  icon: '👥',
                  color: '#3498db',
                  description: 'Youth in governance and accountability forums'
                },
                { 
                  value: '30', 
                  suffix: '+', 
                  label: 'Policy Engagement Spaces', 
                  icon: '🏛️',
                  color: '#2ecc71',
                  description: 'Active participation in policy spaces'
                },
                { 
                  value: '20', 
                  suffix: '+', 
                  label: 'Gender Advocacy Events', 
                  icon: '⚖️',
                  color: '#e74c3c',
                  description: 'Gender and SRHR advocacy initiatives'
                },
                { 
                  value: '15', 
                  suffix: '+', 
                  label: 'Climate Action Activities', 
                  icon: '🌱',
                  color: '#1abc9c',
                  description: 'Environmental and climate initiatives'
                },
                { 
                  value: '10', 
                  suffix: '+', 
                  label: 'County Consultations', 
                  icon: '📋',
                  color: '#9b59b6',
                  description: 'County-level policy consultations'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  style={styles.impactStat}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: isMobile ? -4 : -8 }}
                >
                  <div style={{ 
                    fontSize: isMobile ? '2.5rem' : '3rem',
                    marginBottom: isMobile ? '12px' : '16px',
                    fontWeight: '800',
                    background: `linear-gradient(45deg, ${stat.color}, ${stat.color}dd)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: '1'
                  }}>
                    {stat.value}<span style={{ fontSize: '0.7em' }}>{stat.suffix}</span>
                  </div>
                  
                  <div style={{ 
                    fontSize: isMobile ? '1.1rem' : '1.3rem',
                    marginBottom: isMobile ? '10px' : '14px',
                    fontWeight: '600',
                    color: 'white'
                  }}>
                    {stat.icon} {stat.label}
                  </div>
                  
                  <p style={{ 
                    fontSize: isMobile ? '0.8rem' : '0.9rem', 
                    opacity: 0.8, 
                    lineHeight: '1.6'
                  }}>
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .projects-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          overflow-x: hidden;
          scroll-behavior: smooth;
          background: #FFFFFF;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          position: relative;
          zIndex: 2;
        }
        
        /* Modern Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(3deg);
          }
          66% {
            transform: translateY(20px) rotate(-3deg);
          }
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(248, 250, 252, 0.8);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3498db, #2ecc71);
          border-radius: 3px;
        }
        
        /* Selection styles */
        ::selection {
          background: rgba(52, 152, 219, 0.3);
          color: #1A1A2E;
        }
        
        /* Chip-specific styles */
        .filter-chip {
          position: relative;
          isolation: isolate;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }
        
        .filter-chip::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 50px;
          padding: 2px;
          background: linear-gradient(45deg, #667EEA, #764BA2, #3498db, #2ecc71);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .filter-chip:hover::before {
          opacity: 0.5;
        }
        
        /* Mobile-first responsive design */
        @media (max-width: 480px) {
          .filter-chip-container {
            gap: 8px !important;
            padding: 12px 8px !important;
          }
          
          .filter-chip {
            flex: 0 0 calc(50% - 8px) !important;
            max-width: calc(50% - 8px) !important;
            justify-content: center;
            padding: 10px 12px !important;
            font-size: 0.8rem !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .impact-stats {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        
        @media (min-width: 481px) and (max-width: 767px) {
          .filter-chip {
            flex: 0 0 calc(33.333% - 12px) !important;
            max-width: calc(33.333% - 12px) !important;
            justify-content: center;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          .impact-stats {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .filter-chip-container {
            gap: 12px !important;
            padding: 20px 16px !important;
          }
          
          .filter-chip {
            flex: 0 0 calc(33.333% - 12px) !important;
            max-width: calc(33.333% - 12px) !important;
          }
          
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
          
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          
          .impact-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .filter-chip-container {
            gap: 15px !important;
            padding: 24px 20px !important;
          }
          
          .filter-chip {
            flex: 0 0 auto !important;
            max-width: none !important;
          }
          
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)) !important;
            gap: 32px !important;
          }
          
          .pillars-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 28px !important;
          }
          
          .impact-stats {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 28px !important;
          }
        }
        
        /* Active chip glow effect */
        .active-chip {
          animation: pulse 2s infinite;
          position: relative;
          z-index: 10;
        }
        
        .active-chip::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          border-radius: 50px;
          background: inherit;
          filter: blur(15px);
          opacity: 0.5;
          z-index: -1;
          animation: pulse 2s infinite;
        }
        
        /* Ensure filter chips have proper spacing */
        .filter-chip-container {
          justify-content: center !important;
          align-items: center !important;
        }
        
        /* Smooth transitions */
        .filter-chip,
        .project-card,
        .impact-stat {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Print styles */
        @media print {
          .projects-hero {
            background: #1A1A2E !important;
            color: white !important;
            min-height: auto !important;
            padding: 40px 0 !important;
          }
          
          .project-card {
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
          
          button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;