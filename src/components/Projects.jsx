import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    info: '#06D6A0'
  };

  const styles = {
    // Modern Hero Section with Image5
    projectsHero: {
      background: `linear-gradient(135deg, rgba(26, 26, 46, 0.85) 0%, rgba(22, 33, 62, 0.9) 100%), url('/image5.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      textAlign: 'center',
      padding: '180px 0 120px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    heroContent: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 20px'
    },

    heroTitle: {
      fontSize: 'clamp(3.5rem, 7vw, 6rem)',
      marginBottom: '30px',
      fontWeight: '900',
      letterSpacing: '-1.5px',
      lineHeight: '1.1',
      background: 'linear-gradient(45deg, #FFFFFF, #667EEA, #FF6B6B)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% auto',
      animation: 'gradientShift 3s ease infinite'
    },

    heroSubtitle: {
      fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
      maxWidth: '800px',
      margin: '0 auto 50px',
      opacity: 0.9,
      lineHeight: '1.6',
      fontWeight: '300',
      color: 'rgba(255, 255, 255, 0.9)'
    },

    // Geometric background elements
    heroGeometric: {
      position: 'absolute',
      width: '400px',
      height: '400px',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      transform: 'rotate(45deg)',
      top: '15%',
      right: '10%',
      animation: 'float 20s infinite ease-in-out'
    },

    heroGeometric2: {
      position: 'absolute',
      width: '300px',
      height: '300px',
      border: '2px solid rgba(255, 255, 255, 0.08)',
      transform: 'rotate(30deg)',
      bottom: '20%',
      left: '5%',
      animation: 'float 25s infinite ease-in-out reverse'
    },

    // Section styling
    section: {
      padding: '120px 0',
      position: 'relative'
    },

    sectionTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: '800',
      color: colors.dark,
      position: 'relative',
      display: 'inline-block'
    },

    sectionSubtitle: {
      fontSize: '1.3rem',
      textAlign: 'center',
      color: '#666',
      maxWidth: '700px',
      margin: '0 auto 60px',
      lineHeight: '1.7'
    },

    // Modern filter buttons
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '60px',
      flexWrap: 'wrap',
      padding: '25px',
      background: 'rgba(248, 250, 252, 0.7)',
      borderRadius: '30px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(102, 126, 234, 0.1)',
      maxWidth: 'fit-content',
      margin: '0 auto',
      boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
    },

    filterButton: {
      padding: '16px 36px',
      background: 'transparent',
      border: '2px solid transparent',
      borderRadius: '50px',
      color: colors.dark,
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      fontSize: '1rem',
      position: 'relative',
      overflow: 'hidden',
      letterSpacing: '0.5px'
    },

    // Enhanced projects grid
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
      gap: '50px',
      maxWidth: '1400px',
      margin: '0 auto',
      perspective: '1000px'
    },

    projectCard: {
      background: 'white',
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 25px 80px rgba(0,0,0,0.08)',
      transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: '1px solid rgba(102, 126, 234, 0.1)',
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transformStyle: 'preserve-3d'
    },

    projectHeader: {
      padding: '35px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '140px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },

    projectContent: {
      padding: '45px 35px 35px',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: 'white',
      zIndex: 2
    },

    // Modern progress bar
    progressBar: {
      height: '8px',
      background: 'rgba(0,0,0,0.05)',
      borderRadius: '10px',
      overflow: 'hidden',
      marginTop: '20px',
      position: 'relative'
    },

    progressFill: {
      height: '100%',
      borderRadius: '10px',
      background: 'linear-gradient(90deg, #667EEA, #764BA2)',
      transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative'
    },

    // Category and status tags
    categoryTag: {
      background: 'rgba(255,255,255,0.95)',
      padding: '12px 28px',
      borderRadius: '50px',
      fontSize: '0.9rem',
      fontWeight: '700',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255,255,255,0.3)',
      color: colors.dark,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      letterSpacing: '0.5px'
    },

    statusTag: {
      background: 'rgba(255,255,255,0.95)',
      padding: '12px 28px',
      borderRadius: '50px',
      fontSize: '0.9rem',
      fontWeight: '700',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255,255,255,0.3)',
      color: colors.dark,
      position: 'absolute',
      right: '30px',
      top: '30px'
    },

    // Impact section
    impactSection: {
      background: `linear-gradient(135deg, ${colors.dark} 0%, #16213E 100%)`,
      color: 'white',
      padding: '150px 0',
      position: 'relative',
      overflow: 'hidden'
    },

    impactStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '60px',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2
    },

    impactStat: {
      textAlign: 'center',
      position: 'relative',
      padding: '50px 30px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '25px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.4s ease'
    },

    // Floating particles
    particle: {
      position: 'absolute',
      width: '4px',
      height: '4px',
      background: 'rgba(255,255,255,0.3)',
      borderRadius: '50%',
      animation: 'particleFloat 20s infinite linear'
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Youth & Good Governance',
      category: 'Governance',
      description: 'Promoting youth active participation in governance processes to enhance transparency, accountability, and inclusive decision-making at all levels.',
      impact: 'Trained 200+ youth on governance processes, facilitated 15+ community dialogues',
      status: 'Active',
      color: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
      gradient: ['#667EEA', '#764BA2'],
      progress: 85,
      icon: '🏛️',
      stats: { beneficiaries: '200+', partnerships: '15+' }
    },
    {
      id: 2,
      title: 'Gender Equality & Women Empowerment',
      category: 'Gender',
      description: 'Creating a society where all individuals have equal rights, opportunities, and access to resources through advocacy, capacity building, and mentorship programs.',
      impact: 'Empowered 150+ women through skills training, 40+ leadership workshops conducted',
      status: 'Active',
      color: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
      gradient: ['#FF6B6B', '#FF8E53'],
      progress: 90,
      icon: '⚖️',
      stats: { beneficiaries: '150+', partnerships: '40+' }
    },
    {
      id: 3,
      title: 'Livelihoods Resilience',
      category: 'Economic Empowerment',
      description: 'Equipping young people with market-relevant skills, resources, and entrepreneurial support to build resilient livelihoods and sustainable income streams.',
      impact: '300+ youth trained in vocational skills, 50+ business startups supported',
      status: 'Active',
      color: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
      gradient: ['#4ECDC4', '#44A08D'],
      progress: 75,
      icon: '💼',
      stats: { beneficiaries: '300+', partnerships: '50+' }
    },
    {
      id: 4,
      title: 'Climate & Environmental Action',
      category: 'Environment',
      description: 'Supporting innovative approaches to sustainable climate adaptation, environmental conservation, and green entrepreneurship among youth.',
      impact: 'Planted 5000+ trees, trained 100+ youth in sustainable agriculture',
      status: 'Active',
      color: 'linear-gradient(135deg, #06D6A0 0%, #1B9AAA 100%)',
      gradient: ['#06D6A0', '#1B9AAA'],
      progress: 80,
      icon: '🌱',
      stats: { beneficiaries: '100+', trees: '5000+' }
    },
    {
      id: 5,
      title: 'Digital Skills Training',
      category: 'Technology',
      description: 'Providing digital literacy and advanced tech skills training to bridge the digital divide and prepare youth for the digital economy.',
      impact: '100+ youth certified in digital skills, 30+ tech workshops conducted',
      status: 'Ongoing',
      color: 'linear-gradient(135deg, #9B5DE5 0%, #F15BB5 100%)',
      gradient: ['#9B5DE5', '#F15BB5'],
      progress: 70,
      icon: '💻',
      stats: { beneficiaries: '100+', workshops: '30+' }
    },
    {
      id: 6,
      title: 'Youth Entrepreneurship',
      category: 'Business',
      description: 'Supporting young entrepreneurs with mentorship, seed funding, business development services, and market access opportunities.',
      impact: '50+ youth-led startups supported, KES 5M+ in funding facilitated',
      status: 'Active',
      color: 'linear-gradient(135deg, #FFD166 0%, #FF9A00 100%)',
      gradient: ['#FFD166', '#FF9A00'],
      progress: 88,
      icon: '🚀',
      stats: { startups: '50+', funding: 'KES 5M+' }
    }
  ];

  const pillars = [
    {
      title: 'Youth & Good Governance',
      description: 'Promoting transparent, accountable, and youth-inclusive governance systems',
      icon: '🏛️',
      gradient: 'linear-gradient(135deg, #667EEA, #764BA2)',
      projects: 8,
      color: '#667EEA'
    },
    {
      title: 'Gender Equality',
      description: 'Advancing equal rights, opportunities, and access to resources for all genders',
      icon: '⚖️',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
      projects: 6,
      color: '#FF6B6B'
    },
    {
      title: 'Livelihoods Resilience',
      description: 'Building economic resilience through skills development and entrepreneurship',
      icon: '💼',
      gradient: 'linear-gradient(135deg, #4ECDC4, #44A08D)',
      projects: 10,
      color: '#4ECDC4'
    },
    {
      title: 'Climate Action',
      description: 'Championing sustainable environmental practices and climate-smart innovations',
      icon: '🌱',
      gradient: 'linear-gradient(135deg, #06D6A0, #1B9AAA)',
      projects: 7,
      color: '#06D6A0'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  // Generate floating particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 20}s`,
    size: `${2 + Math.random() * 4}px`
  }));

  return (
    <div className="projects-page">
      {/* Animated Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.3
      }}>
        {particles.map(p => (
          <div
            key={p.id}
            style={{
              ...styles.particle,
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.animationDelay
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section style={styles.projectsHero}>
        {/* Geometric Elements */}
        <div style={styles.heroGeometric}></div>
        <div style={styles.heroGeometric2}></div>
        
        {/* Animated Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
          animation: 'gradientShift 8s ease infinite'
        }}></div>
        
        <div style={styles.heroContent}>
          {/* Animated Badge */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '14px 32px',
            borderRadius: '50px',
            marginBottom: '40px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600', 
              letterSpacing: '2px',
              color: 'white'
            }}>
              IMPACT PORTFOLIO
            </span>
          </div>
          
          <h1 style={styles.heroTitle}>
            Transforming
            <br />
            <span style={{ 
              fontSize: '0.85em',
              display: 'inline-block',
              marginTop: '10px'
            }}>
              Communities Through Innovation
            </span>
          </h1>
          
          <p style={styles.heroSubtitle}>
            Discover our portfolio of strategic initiatives that are empowering youth 
            and driving sustainable change across Kenya through innovative solutions 
            and impactful partnerships.
          </p>
          
          {/* Animated Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            maxWidth: '900px',
            margin: '60px auto 0',
            animation: 'fadeInUp 1s ease-out 0.3s both'
          }}>
            {[
              { value: '6', label: 'Core Projects', suffix: '+', color: '#667EEA' },
              { value: '31', label: 'Active Initiatives', suffix: '+', color: '#FF6B6B' },
              { value: '1000', label: 'Youth Impacted', suffix: '+', color: '#4ECDC4' },
              { value: '12', label: 'Counties Reached', suffix: '', color: '#FFD166' }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '30px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '25px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.4s ease',
                  animationDelay: `${0.4 + index * 0.1}s`,
                  animation: 'fadeInUp 0.8s ease-out both'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '900',
                  marginBottom: '10px',
                  background: `linear-gradient(45deg, ${stat.color}, ${stat.color}cc)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1'
                }}>
                  {stat.value}<span style={{ fontSize: '0.7em' }}>{stat.suffix}</span>
                </div>
                <div style={{ 
                  fontSize: '1rem', 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          zIndex: 10,
          animation: 'bounce 2s infinite'
        }}>
          <div style={{ 
            fontSize: '0.9rem', 
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '2px'
          }}>
            EXPLORE
          </div>
          <div style={{
            width: '30px',
            height: '50px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              width: '4px',
              height: '12px',
              background: 'white',
              borderRadius: '2px',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scrollDown 2s infinite'
            }}></div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section style={{ ...styles.section, background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={styles.sectionTitle}>
              <span style={{
                position: 'relative',
                display: 'inline-block'
              }}>
                Strategic Pillars
                <span style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: 'linear-gradient(90deg, #667EEA, #764BA2)',
                  borderRadius: '2px'
                }}></span>
              </span>
            </h2>
            <p style={styles.sectionSubtitle}>
              Four foundational pillars guiding our mission to create lasting impact 
              and empower the next generation of leaders
            </p>
          </div>
          
          <div style={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                style={{
                  ...styles.pillarCard,
                  background: 'white',
                  borderRadius: '25px',
                  padding: '60px 40px',
                  textAlign: 'center',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-20px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 40px 80px ${pillar.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.05)';
                }}
              >
                {/* Pillar Icon */}
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: pillar.gradient,
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3.5rem',
                  margin: '0 auto 35px',
                  transform: 'rotate(45deg)',
                  transition: 'transform 0.5s ease',
                  boxShadow: `0 20px 40px ${pillar.color}40`
                }}>
                  <span style={{ 
                    transform: 'rotate(-45deg)', 
                    display: 'block',
                    filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.2))'
                  }}>
                    {pillar.icon}
                  </span>
                </div>
                
                <h3 style={{ 
                  color: colors.dark, 
                  marginBottom: '25px', 
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  lineHeight: '1.3'
                }}>
                  {pillar.title}
                </h3>
                
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.7', 
                  marginBottom: '35px',
                  fontSize: '1.1rem'
                }}>
                  {pillar.description}
                </p>
                
                {/* Project Count */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: pillar.color,
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  padding: '15px 30px',
                  background: `${pillar.color}10`,
                  borderRadius: '50px',
                  border: `2px solid ${pillar.color}30`
                }}>
                  <span>{pillar.projects}</span>
                  <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Active Projects</span>
                </div>
                
                {/* Hover Effect Line */}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: pillar.gradient,
                  transform: 'scaleX(0)',
                  transition: 'transform 0.4s ease',
                  transformOrigin: 'left'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ ...styles.section, background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={styles.sectionTitle}>
              <span style={{
                position: 'relative',
                display: 'inline-block'
              }}>
                Featured Projects
                <span style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: 'linear-gradient(90deg, #FF6B6B, #FF8E53)',
                  borderRadius: '2px'
                }}></span>
              </span>
            </h2>
            <p style={styles.sectionSubtitle}>
              Explore our diverse portfolio of initiatives driving innovation, 
              empowerment, and sustainable development
            </p>
            
            {/* Modern Filter Tabs */}
            <div style={styles.filterContainer}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  style={{
                    ...styles.filterButton,
                    background: activeFilter === category 
                      ? `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`
                      : 'white',
                    color: activeFilter === category ? 'white' : colors.dark,
                    borderColor: activeFilter === category 
                      ? 'transparent' 
                      : 'rgba(102, 126, 234, 0.2)',
                    boxShadow: activeFilter === category 
                      ? '0 20px 40px rgba(102, 126, 234, 0.3)' 
                      : '0 10px 30px rgba(0,0,0,0.05)',
                    transform: activeFilter === category ? 'scale(1.05)' : 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== category) {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== category) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div style={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                style={styles.projectCard}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Project Header */}
                <div style={{ 
                  ...styles.projectHeader, 
                  background: project.color,
                  transform: hoveredCard === project.id ? 'translateY(-10px)' : 'translateY(0)'
                }}>
                  {/* Animated Background */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                    opacity: hoveredCard === project.id ? 1 : 0.9,
                    transition: 'opacity 0.4s ease'
                  }}></div>
                  
                  {/* Animated Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                    transform: hoveredCard === project.id ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 0.6s ease'
                  }}></div>
                  
                  <span style={styles.statusTag}>
                    {project.status}
                  </span>
                  
                  <div style={{ 
                    position: 'relative', 
                    zIndex: 2,
                    width: '100%'
                  }}>
                    <span style={styles.categoryTag}>
                      <span style={{ fontSize: '1.4rem' }}>{project.icon}</span>
                      {project.category}
                    </span>
                    
                    <h3 style={{ 
                      color: 'white', 
                      fontSize: '1.9rem',
                      fontWeight: '800',
                      marginTop: '25px',
                      lineHeight: '1.3',
                      textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                    }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Project Content */}
                <div style={styles.projectContent}>
                  <p style={{ 
                    color: '#555', 
                    lineHeight: '1.7', 
                    marginBottom: '35px', 
                    flex: '1',
                    fontSize: '1.1rem'
                  }}>
                    {project.description}
                  </p>
                  
                  {/* Progress Section */}
                  <div style={{ marginBottom: '35px' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      marginBottom: '15px',
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        fontSize: '1rem', 
                        color: colors.dark, 
                        fontWeight: '700',
                        letterSpacing: '0.5px'
                      }}>
                        PROJECT PROGRESS
                      </span>
                      <span style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: '800',
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
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                          transform: 'translateX(-100%)',
                          animation: hoveredCard === project.id ? 'shimmer 1.5s infinite' : 'none'
                        }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Impact Stats */}
                  <div style={{ 
                    background: 'rgba(248, 250, 252, 0.8)',
                    padding: '25px',
                    borderRadius: '20px',
                    border: '2px solid rgba(102, 126, 234, 0.1)',
                    marginBottom: '30px'
                  }}>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '20px'
                    }}>
                      {Object.entries(project.stats).map(([key, value], index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                          <div style={{ 
                            fontSize: '2rem', 
                            fontWeight: '800',
                            background: project.color,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '5px'
                          }}>
                            {value}
                          </div>
                          <div style={{ 
                            fontSize: '0.85rem', 
                            color: '#666',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button style={{
                    padding: '18px',
                    background: 'white',
                    color: colors.primary,
                    border: `2px solid ${colors.primary}`,
                    borderRadius: '15px',
                    fontWeight: '700',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = colors.primary;
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'white';
                    e.target.style.color = colors.primary;
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}>
                    <span>Explore Project Details</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section style={styles.impactSection}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          animation: 'float 30s infinite ease-in-out'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          border: '1px solid rgba(255, 255, 255, 0.03)',
          borderRadius: '50%',
          animation: 'float 25s infinite ease-in-out reverse'
        }}></div>
        
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              textAlign: 'center',
              marginBottom: '30px',
              fontWeight: '800',
              background: 'linear-gradient(45deg, #FFFFFF, #667EEA, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'gradientShift 3s ease infinite'
            }}>
              Our Impact Journey
            </h2>
            
            <p style={{ 
              fontSize: '1.3rem', 
              textAlign: 'center', 
              maxWidth: '800px', 
              margin: '0 auto 80px', 
              opacity: 0.9,
              lineHeight: '1.7'
            }}>
              Transforming lives and communities through dedicated efforts and 
              sustainable partnerships since 2022
            </p>
            
            <div style={styles.impactStats}>
              {[
                { 
                  value: '1000', 
                  suffix: '+', 
                  label: 'Youth Directly Impacted', 
                  icon: '👥',
                  color: '#4ECDC4',
                  description: 'Through comprehensive training and empowerment programs'
                },
                { 
                  value: '25', 
                  suffix: '+', 
                  label: 'Community Partnerships', 
                  icon: '🤝',
                  color: '#FFD166',
                  description: 'Collaborating with local and international organizations'
                },
                { 
                  value: '12', 
                  label: 'Counties Reached', 
                  icon: '📍',
                  color: '#FF6B6B',
                  description: 'Expanding our footprint across multiple regions'
                },
                { 
                  value: '95', 
                  suffix: '%', 
                  label: 'Success Rate', 
                  icon: '📈',
                  color: '#667EEA',
                  description: 'Projects meeting or exceeding objectives'
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  style={styles.impactStat}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-15px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div style={{ 
                    fontSize: '4.5rem',
                    marginBottom: '25px',
                    fontWeight: '900',
                    background: `linear-gradient(45deg, ${stat.color}, ${stat.color}dd)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: '1'
                  }}>
                    {stat.value}<span style={{ fontSize: '0.7em' }}>{stat.suffix}</span>
                  </div>
                  
                  <div style={{ 
                    fontSize: '1.8rem',
                    marginBottom: '15px',
                    fontWeight: '700',
                    color: 'white'
                  }}>
                    {stat.icon} {stat.label}
                  </div>
                  
                  <p style={{ 
                    fontSize: '1rem', 
                    opacity: 0.8, 
                    lineHeight: '1.6',
                    marginTop: '15px'
                  }}>
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@700;800;900&display=swap');
        
        .projects-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          overflow-x: hidden;
          scroll-behavior: smooth;
          background: #FFFFFF;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          zIndex: 2;
        }
        
        /* Modern Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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
            transform: translateY(-30px) rotate(10deg);
          }
          66% {
            transform: translateY(30px) rotate(-10deg);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
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
        
        @keyframes scrollDown {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
          }
        }
        
        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-100px) translateX(100px);
          }
          50% {
            transform: translateY(-200px) translateX(-100px);
          }
          75% {
            transform: translateY(-300px) translateX(100px);
          }
          100% {
            transform: translateY(-400px) translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(248, 250, 252, 0.8);
          backdrop-filter: blur(10px);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #667EEA, #764BA2);
          border-radius: 5px;
          border: 2px solid rgba(255, 255, 255, 0.8);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #5a6fd8, #6a3f9e);
        }
        
        /* Selection styles */
        ::selection {
          background: rgba(102, 126, 234, 0.3);
          color: #1A1A2E;
        }
        
        /* Smooth transitions */
        * {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)) !important;
            gap: 40px !important;
          }
          
          .hero-title {
            font-size: 4rem !important;
          }
        }
        
        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)) !important;
            gap: 30px !important;
          }
          
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
          
          .impact-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
          
          .hero-title {
            font-size: 3.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .projects-hero {
            padding: 150px 0 80px !important;
            min-height: 90vh !important;
          }
          
          .hero-title {
            font-size: 3rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.2rem !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
          
          .impact-stats {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .filter-container {
            padding: 20px !important;
            border-radius: 25px !important;
          }
          
          .filter-btn {
            padding: 14px 28px !important;
            font-size: 0.9rem !important;
          }
          
          .section {
            padding: 80px 0 !important;
          }
          
          .section-title {
            font-size: 2.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          
          .section-title {
            font-size: 2rem !important;
          }
          
          .project-card, .pillar-card {
            border-radius: 20px !important;
          }
          
          .project-content {
            padding: 30px 20px !important;
          }
          
          .filter-container {
            padding: 15px !important;
          }
        }
        
        /* Loading animations */
        .project-card {
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        .pillar-card {
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        /* Enhanced hover effects */
        .pillar-card:hover {
          transform: translateY(-20px) scale(1.02) !important;
          box-shadow: 0 40px 80px rgba(102, 126, 234, 0.15) !important;
        }
        
        .pillar-card:hover div:first-child {
          transform: rotate(0deg) !important;
        }
        
        .pillar-card:hover > div:last-child {
          transform: scaleX(1) !important;
        }
        
        .project-card:hover {
          transform: translateY(-25px) scale(1.03) !important;
          box-shadow: 0 50px 100px rgba(102, 126, 234, 0.2) !important;
        }
        
        .filter-btn:hover {
          transform: translateY(-5px) scale(1.08) !important;
          box-shadow: 0 25px 50px rgba(102, 126, 234, 0.25) !important;
        }
        
        /* Performance optimization */
        .will-change {
          will-change: transform, opacity;
        }
        
        /* Print styles */
        @media print {
          .projects-hero {
            background: #1A1A2E !important;
            color: white !important;
            min-height: auto !important;
            padding: 50px 0 !important;
          }
          
          .project-card {
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
          
          .filter-container,
          button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;