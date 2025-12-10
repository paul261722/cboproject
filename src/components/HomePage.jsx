import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const styles = {
    // Hero Section with Local Image
    hero: {
      background: `linear-gradient(rgba(44, 62, 80, 0.85), rgba(26, 37, 47, 0.9)), 
                   url('/Static/image1.jpg')`,
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
      background: 'linear-gradient(135deg, #3498db 0%, #2ecc71 100%)',
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

    // Mission Section
    missionSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
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

    // Pillars Section - Updated with specific colors
    pillarsSection: {
      padding: '120px 0',
      background: '#2c3e50',
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

    // Stats Section - Updated with your numbers
    statsSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)',
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
      color: '#3498db',
      marginBottom: '10px',
      fontWeight: '700',
      display: 'block',
      textShadow: '0 4px 20px rgba(52, 152, 219, 0.3)'
    },

    // Activities Highlight Section
    activitiesSection: {
      padding: '120px 0',
      background: '#f8fafc',
      position: 'relative'
    },
    activitiesList: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px',
      background: 'white',
      borderRadius: '24px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
      border: '1px solid #e8eef5'
    },
    activityItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '20px',
      padding: '15px 20px',
      background: '#f8fafc',
      borderRadius: '12px',
      borderLeft: '4px solid #3498db'
    },

    // CTA Section
    ctaSection: {
      padding: '120px 0',
      background: 'linear-gradient(135deg, #3498db 0%, #2ecc71 100%)',
      color: 'white',
      textAlign: 'center',
      position: 'relative'
    },
    ctaTitle: {
      fontSize: '3rem',
      marginBottom: '20px',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #ffffff 0%, #f1c40f 100%)',
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

    // Buttons - Updated colors
    buttonPrimary: {
      background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
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
      boxShadow: '0 10px 30px rgba(52, 152, 219, 0.4)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    buttonSecondary: {
      background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
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
      boxShadow: '0 10px 30px rgba(46, 204, 113, 0.4)',
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

  // Updated pillars with your strategic pillars
  const pillars = [
    { 
      icon: '🏛️', 
      title: 'Youth Leadership & Governance', 
      description: 'Building accountable youth leaders through anti-corruption training, public participation, and governance forums',
      color: '#3498db',
      activities: ['Anti-corruption training', 'Youth public participation', 'Accountability forums']
    },
    { 
      icon: '⚖️', 
      title: 'Gender Equality & SRHR', 
      description: 'Advocating for gender justice, sexual reproductive health rights, and ending gender-based violence',
      color: '#e74c3c',
      activities: ['SRHR Bill review', 'GBV policy validation', 'Menstrual hygiene management']
    },
    { 
      icon: '💼', 
      title: 'Economic Empowerment', 
      description: 'Strengthening economic decision-making, financial accountability, and entrepreneurship among youth',
      color: '#2ecc71',
      activities: ['Leadership training', 'Civic education', 'Entrepreneurship programs']
    },
    { 
      icon: '🌱', 
      title: 'Climate Action & Environment', 
      description: 'Leading youth-driven climate justice initiatives and environmental conservation activities',
      color: '#1abc9c',
      activities: ['Environmental cleanups', 'Climate advocacy', 'Conservation activities']
    }
  ];

  // Recent activities
  const recentActivities = [
    'Trained youth on anti-corruption through Transparency International Kenya',
    'Participated in Kisumu fiscal planning public forums',
    'Contributed to drafting and reviewing Kisumu County SRHR Bill 2024',
    'Led youth forums on accountability and service delivery',
    'Celebrated International Women\'s Day and Youth Day events',
    'Organized climate action and environmental clean-ups',
    'Commemorated Menstrual Hygiene Management Day',
    'Participated in Kisumu County Health Technical Working Group'
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
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
                marginBottom: '20px',
                letterSpacing: '1px'
              }}>
                🚀 ONE OF AFRICA'S MOST INNOVATIVE YOUTH-LED PLATFORMS
              </div>
            </div>
            
            <h1 style={styles.heroTitle}>Building Africa's Future Leaders</h1>
            <p style={styles.heroSubtitle}>
              We are a transformative youth-led platform merging leadership development, 
              entrepreneurship, and community-driven impact to cultivate a new generation 
              of African leaders who don't just imagine change but actively build it.
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
                <span>Explore Our Impact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.missionSection}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#2ecc71',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              OUR GUIDING MISSION
            </div>
            <h2 style={styles.sectionTitle}>
              Cultivating Change-Makers
            </h2>
          </div>
          <div style={styles.missionCard}>
            <div style={{position: 'absolute', top: '20px', right: '20px', fontSize: '2rem'}}>✨</div>
            <div style={{position: 'absolute', bottom: '20px', left: '20px', fontSize: '2rem'}}>🌟</div>
            
            <div style={styles.missionIcon}>🌍</div>
            <p style={styles.missionText}>
              "To cultivate a new generation of African leaders who don't just imagine change 
              but actively build it, turning passion into action, ideas into enterprises, 
              and potential into sustainable impact."
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section style={styles.pillarsSection}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              OUR STRATEGIC PILLARS
            </div>
            <h2 style={{
              ...styles.sectionTitle,
              background: 'linear-gradient(135deg, #3498db, #2ecc71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Four Interconnected Pillars
            </h2>
            <p style={{
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1.2rem',
              maxWidth: '800px',
              margin: '0 auto 60px',
              lineHeight: 1.6
            }}>
              Powering our holistic approach to youth empowerment and social transformation
            </p>
          </div>
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
                
                {/* Activities list */}
                <div style={{
                  textAlign: 'left',
                  marginTop: '20px',
                  padding: '15px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px'
                }}>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: '600', 
                    color: pillar.color,
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Key Activities:
                  </div>
                  <div>
                    {pillar.activities.map((activity, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '8px',
                        fontSize: '0.9rem',
                        color: 'rgba(255,255,255,0.8)'
                      }}>
                        <span style={{color: pillar.color}}>•</span>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  width: '40px',
                  height: '2px',
                  background: `linear-gradient(90deg, ${pillar.color}, transparent)`,
                  margin: '20px auto 0'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#2ecc71',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              OUR MEASURABLE IMPACT
            </div>
            <h2 style={{
              ...styles.sectionTitle,
              background: 'linear-gradient(135deg, #3498db, #2ecc71)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Impact in Numbers
            </h2>
          </div>
          <div style={styles.statsGrid}>
            {[
              { number: '300+', label: 'Youth Engaged in Governance', desc: 'Governance and accountability forums' },
              { number: '30+', label: 'Policy Engagement Spaces', desc: 'Active participation in policy spaces' },
              { number: '20+', label: 'Gender Advocacy Events', desc: 'Gender and SRHR advocacy initiatives' },
              { number: '15+', label: 'Climate Action Activities', desc: 'Environmental and climate initiatives' },
              { number: '10+', label: 'County Consultations', desc: 'County-level policy consultations' }
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

      {/* Activities Highlight Section */}
      <section style={styles.activitiesSection}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              WHAT WE'VE DONE SO FAR
            </div>
            <h2 style={{
              fontSize: '3rem',
              color: '#2c3e50',
              marginBottom: '30px',
              position: 'relative',
              fontWeight: '700',
              letterSpacing: '-0.3px'
            }}>
              Recent Achievements
            </h2>
            <p style={{
              textAlign: 'center',
              color: '#666',
              fontSize: '1.2rem',
              maxWidth: '800px',
              margin: '0 auto 60px',
              lineHeight: 1.6
            }}>
              A snapshot of our recent contributions to youth empowerment and community development
            </p>
          </div>
          
          <div style={styles.activitiesList}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '20px'
            }}>
              {recentActivities.map((activity, index) => (
                <div key={index} style={styles.activityItem}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    background: '#3498db',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span style={{color: '#2c3e50', fontSize: '0.95rem'}}>{activity}</span>
                </div>
              ))}
            </div>
            
            <div style={{
              textAlign: 'center',
              marginTop: '40px',
              paddingTop: '30px',
              borderTop: '1px solid #e8eef5'
            }}>
              <Link 
                to="/about" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#3498db',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  padding: '12px 30px',
                  borderRadius: '12px',
                  border: '2px solid #3498db',
                  transition: 'all 0.3s ease'
                }}
                className="btn-modern"
              >
                <span>View Full Impact Report</span>
                <span>→</span>
              </Link>
            </div>
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
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={styles.ctaTitle}>Ready to Transform Africa with Us?</h2>
            <p style={styles.ctaSubtitle}>
              Join Africa's most innovative youth-led platform for social transformation. 
              Whether you're a youth looking to lead, a partner organization, or a donor 
              wanting to make sustainable impact - your journey starts here.
            </p>
            <div style={styles.ctaButtons}>
              <Link 
                to="/contact" 
                style={styles.buttonPrimary}
                className="btn-modern"
              >
                <span>Get Involved →</span>
              </Link>
              <Link 
                to="/projects" 
                style={styles.buttonWhite}
                className="btn-modern"
              >
                <span>View Our Programs</span>
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
                  <span style={{color: '#2ecc71'}}>✓</span> Partnered with Transparency International
                </span>
                <span>•</span>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: '5px'}}>
                  <span style={{color: '#f1c40f'}}>★</span> Active in Kisumu County Governance
                </span>
                <span>•</span>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: '5px'}}>
                  <span style={{color: '#3498db'}}>👥</span> 300+ Youth Leaders Engaged
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .home-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
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
          background: linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(46, 204, 113, 0.1));
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
          border-color: rgba(52, 152, 219, 0.3) !important;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 8px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3498db, #2ecc71);
          border-radius: 8px;
          border: 2px solid #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2980b9, #27ae60);
        }
        
        /* Selection Color */
        ::selection {
          background: rgba(52, 152, 219, 0.3);
          color: #2c3e50;
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
          
          .activities-list {
            padding: 30px 20px !important;
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
          
          .activities-list > div {
            grid-template-columns: 1fr !important;
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