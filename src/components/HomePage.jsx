import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const styles = {
    // Hero Section with Local Image - FIXED: Removed leading slash
    hero: {
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                   url('/Static/image4.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      padding: '120px 0',
      textAlign: 'center',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    heroContent: {
      position: 'relative',
      zIndex: 3,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      backdropFilter: 'blur(20px)',
      background: 'rgba(255, 255, 255, 0.08)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '60px 40px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    },
    heroTitle: {
      fontSize: '4rem',
      marginBottom: '20px',
      fontWeight: '800',
      lineHeight: 1.2,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.5px'
    },
    heroSubtitle: {
      fontSize: '1.4rem',
      marginBottom: '40px',
      opacity: 0.9,
      lineHeight: 1.6,
      maxWidth: '800px',
      margin: '0 auto',
      fontWeight: '300'
    },
    heroButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },

    // Mission Section - Even Spacing
    missionSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      color: 'white',
      marginBottom: '50px',
      position: 'relative',
      fontWeight: '700',
      letterSpacing: '-0.3px'
    },
    missionCard: {
      background: 'rgba(255, 255, 255, 0.12)',
      padding: '60px 40px',
      borderRadius: '24px',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
    },
    missionIcon: {
      fontSize: '4rem',
      marginBottom: '30px',
      display: 'block',
      color: '#fff',
      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
    },
    missionText: {
      fontSize: '1.8rem',
      lineHeight: 1.6,
      color: 'white',
      fontWeight: '400',
      fontStyle: 'italic',
      position: 'relative'
    },

    // Pillars Section - Even Grid
    pillarsSection: {
      padding: '120px 0',
      background: '#0f172a',
      position: 'relative'
    },
    pillarsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    pillarCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '40px 30px',
      borderRadius: '20px',
      textAlign: 'center',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      height: '100%'
    },
    pillarIcon: {
      fontSize: '3.5rem',
      marginBottom: '20px',
      display: 'block',
      transition: 'all 0.3s ease',
      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
    },

    // Stats Section - Even Spacing
    statsSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      position: 'relative'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '30px',
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    statItem: {
      padding: '40px 20px',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    statNumber: {
      fontSize: '3.5rem',
      color: '#60a5fa',
      marginBottom: '10px',
      fontWeight: '700',
      display: 'block',
      textShadow: '0 4px 20px rgba(96, 165, 250, 0.3)'
    },

    // CTA Section - Even Spacing
    ctaSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      textAlign: 'center',
      position: 'relative'
    },
    ctaTitle: {
      fontSize: '3rem',
      marginBottom: '20px',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    ctaSubtitle: {
      fontSize: '1.4rem',
      marginBottom: '40px',
      opacity: 0.9,
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.6,
      fontWeight: '300'
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },

    // Buttons - Consistent Styling
    buttonPrimary: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '16px 40px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    buttonSecondary: {
      background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
      color: 'white',
      padding: '16px 40px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    buttonOutline: {
      background: 'transparent',
      color: 'white',
      padding: '16px 40px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '12px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    buttonWhite: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '16px 40px',
      fontSize: '1.1rem',
      fontWeight: '600',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },

    // Container for consistent width
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    }
  };

  const pillars = [
    { 
      icon: '🏛️', 
      title: 'Youth Leadership', 
      description: 'Empowering the next generation of African leaders through governance education and civic engagement',
      color: '#60a5fa'
    },
    { 
      icon: '⚖️', 
      title: 'Gender Equality', 
      description: 'Creating inclusive spaces where all genders have equal opportunities to thrive and lead',
      color: '#a78bfa'
    },
    { 
      icon: '💼', 
      title: 'Economic Empowerment', 
      description: 'Developing entrepreneurial skills and creating sustainable livelihood opportunities for youth',
      color: '#34d399'
    },
    { 
      icon: '🌱', 
      title: 'Climate Action', 
      description: 'Mobilizing youth towards sustainable environmental practices and green innovation',
      color: '#fbbf24'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section with Local Image - PATH FIXED */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent} className="fade-in">
            <div style={{marginBottom: '20px'}}>
              <div style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '20px'
              }}>
                🚀 Leading Youth Development Since 2022
              </div>
            </div>
            
            <h1 style={styles.heroTitle}>Redefining Youth Impact in Africa</h1>
            <p style={styles.heroSubtitle}>
              We're building the continent's most innovative youth-led platform for 
              social transformation, combining leadership development, entrepreneurship, 
              and community impact.
            </p>
            <div style={styles.heroButtons}>
              <Link 
                to="/contact" 
                style={styles.buttonPrimary}
                className="btn-modern"
              >
                <span>Join Our Movement →</span>
              </Link>
              <Link 
                to="/projects" 
                style={styles.buttonOutline}
                className="btn-modern"
              >
                <span>Explore Impact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.missionSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Our Guiding <span style={{color: '#fbbf24'}}>Mission</span>
          </h2>
          <div style={styles.missionCard}>
            <div style={{position: 'absolute', top: '20px', right: '20px', fontSize: '2rem'}}>✨</div>
            <div style={{position: 'absolute', bottom: '20px', left: '20px', fontSize: '2rem'}}>🌟</div>
            
            <div style={styles.missionIcon}>🌍</div>
            <p style={styles.missionText}>
              "To architect a new generation of African leaders who don't just dream of change 
              but actively build it—transforming passion into action, ideas into enterprises, 
              and potential into sustainable impact."
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section style={styles.pillarsSection}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Our Strategic <span style={{color: 'white'}}>Pillars</span>
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 60px',
            lineHeight: 1.6
          }}>
            Four interconnected pillars that drive our holistic approach to youth empowerment
          </p>
          <div style={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <div key={index} style={styles.pillarCard} className="pillar-modern">
                <div style={{position: 'absolute', top: '15px', right: '15px', fontSize: '1.2rem', opacity: 0.7}}>→</div>
                <div style={{...styles.pillarIcon, color: pillar.color}}>{pillar.icon}</div>
                <h3 style={{
                  color: 'white',
                  marginBottom: '15px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  letterSpacing: '-0.3px'
                }}>{pillar.title}</h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.6,
                  fontSize: '1rem',
                  marginBottom: '20px'
                }}>{pillar.description}</p>
                <div style={{
                  width: '40px',
                  height: '2px',
                  background: `linear-gradient(90deg, ${pillar.color}, transparent)`,
                  margin: '0 auto'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.container}>
          <h2 style={{
            ...styles.sectionTitle,
            background: 'linear-gradient(135deg, #60a5fa, #34d399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Measurable <span style={{color: 'white'}}>Impact</span>
          </h2>
          <div style={styles.statsGrid}>
            {[
              { number: '500+', label: 'Youth Leaders Trained', desc: 'Across 15 counties in Kenya' },
              { number: '25+', label: 'Community Projects', desc: 'Direct community interventions' },
              { number: '4', label: 'Impact Pillars', desc: 'Comprehensive approach' },
              { number: '2022', label: 'Founded', desc: 'Year of establishment' }
            ].map((stat, index) => (
              <div key={index} style={styles.statItem} className="stat-modern">
                <span style={styles.statNumber}>{stat.number}</span>
                <p style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px'}}>{stat.label}</p>
                <p style={{fontSize: '0.9rem', opacity: 0.7}}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
            padding: '60px 40px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '24px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={styles.ctaTitle}>Ready to Lead?</h2>
            <p style={styles.ctaSubtitle}>
              Join a growing community of young Africans who are actively shaping their 
              communities, building sustainable solutions, and creating lasting impact 
              through our cutting-edge programs.
            </p>
            <div style={styles.ctaButtons}>
              <Link 
                to="/contact" 
                style={styles.buttonPrimary}
                className="btn-modern"
              >
                <span>Start Your Journey →</span>
              </Link>
              <Link 
                to="/programs" 
                style={styles.buttonWhite}
                className="btn-modern"
              >
                <span>View Programs</span>
              </Link>
            </div>
            
            {/* Social Proof */}
            <div style={{
              marginTop: '40px',
              paddingTop: '30px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap'
              }}>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: '5px'}}>
                  <span style={{color: '#34d399'}}>✓</span> Featured on CNN Africa
                </span>
                <span>•</span>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: '5px'}}>
                  <span style={{color: '#fbbf24'}}>★</span> 4.9/5 Rating
                </span>
                <span>•</span>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: '5px'}}>
                  <span style={{color: '#60a5fa'}}>👥</span> 1000+ Active Members
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
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
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .fade-in {
          animation: fadeInUp 0.8s ease-out both;
        }
        
        /* Modern Button Effects */
        .btn-modern {
          position: relative;
          overflow: hidden;
        }
        
        .btn-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.2), 
            transparent);
          transition: left 0.6s ease;
        }
        
        .btn-modern:hover::before {
          left: 100%;
        }
        
        .btn-modern:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3) !important;
        }
        
        /* Pillar Card Modern Effects */
        .pillar-modern {
          position: relative;
        }
        
        .pillar-modern::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
          z-index: -1;
        }
        
        .pillar-modern:hover::after {
          opacity: 1;
        }
        
        .pillar-modern:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 255, 255, 0.3) !important;
        }
        
        .pillar-modern:hover .pillar-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        /* Stat Card Effects */
        .stat-modern:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(96, 165, 250, 0.3) !important;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0f172a;
          border-radius: 8px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 8px;
          border: 2px solid #0f172a;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
        }
        
        /* Selection Color */
        ::selection {
          background: rgba(96, 165, 250, 0.3);
          color: white;
        }
        
        /* Smooth transitions */
        * {
          transition: all 0.3s ease;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero h1 {
            font-size: 3.5rem !important;
          }
          
          .section-title {
            font-size: 2.5rem !important;
          }
          
          .mission-text {
            font-size: 1.6rem !important;
          }
        }
        
        @media (max-width: 992px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .hero-content {
            padding: 50px 30px !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 !important;
          }
          
          .hero h1 {
            font-size: 2.8rem !important;
            margin-bottom: 15px !important;
          }
          
          .hero-subtitle {
            font-size: 1.2rem !important;
            margin-bottom: 30px !important;
          }
          
          .hero-buttons,
          .cta-buttons {
            flex-direction: column !important;
            align-items: center;
            gap: 15px !important;
          }
          
          .button-primary,
          .button-secondary,
          .button-outline,
          .button-white {
            padding: 14px 30px !important;
            font-size: 1rem !important;
            width: 100%;
            max-width: 300px;
          }
          
          .mission-card {
            padding: 40px 25px !important;
          }
          
          .mission-text {
            font-size: 1.4rem !important;
          }
          
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          
          .stat-item {
            padding: 30px 15px !important;
          }
          
          .stat-number {
            font-size: 2.8rem !important;
          }
          
          .cta-title {
            font-size: 2.5rem !important;
          }
          
          .cta-subtitle {
            font-size: 1.2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          
          .hero h1 {
            font-size: 2.2rem !important;
          }
          
          .section-title {
            font-size: 2rem !important;
          }
          
          .cta-title {
            font-size: 2rem !important;
          }
          
          .hero-buttons button {
            padding: 12px 25px !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;