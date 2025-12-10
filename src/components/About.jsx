import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Responsive styles based on screen size
  const getResponsiveValue = (mobileValue, tabletValue, desktopValue) => {
    if (isMobile) return mobileValue;
    if (isTablet) return tabletValue;
    return desktopValue;
  };

  const styles = {
    // Hero Section - Responsive
    aboutHero: {
      background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.85) 0%, rgba(26, 37, 47, 0.85) 100%), url("/static/image1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      color: 'white',
      textAlign: 'center',
      padding: getResponsiveValue('100px 0 60px', '120px 0 80px', '140px 0 100px'),
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      minHeight: isMobile ? 'auto' : '100vh'
    },
    
    heroTitle: {
      fontSize: getResponsiveValue('2rem', '2.5rem', 'clamp(2.5rem, 5vw, 4rem)'),
      marginBottom: getResponsiveValue('20px', '25px', '25px'),
      fontWeight: '800',
      background: 'linear-gradient(135deg, #ffffff 0%, #3498db 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1.2'
    },
    
    heroSubtitle: {
      fontSize: getResponsiveValue('1rem', '1.2rem', 'clamp(1.1rem, 2vw, 1.5rem)'),
      maxWidth: getResponsiveValue('100%', '90%', '800px'),
      margin: `0 auto ${getResponsiveValue('30px', '35px', '40px')}`,
      opacity: 0.9,
      lineHeight: getResponsiveValue('1.5', '1.6', '1.6'),
      fontWeight: '300',
      padding: getResponsiveValue('0 10px', '0', '0')
    },
    
    section: {
      padding: getResponsiveValue('60px 0', '80px 0', '80px 0')
    },
    
    // Story Content - Responsive Grid
    storyContent: {
      display: 'grid',
      gridTemplateColumns: getResponsiveValue('1fr', '1fr', '1fr 1fr'),
      gap: getResponsiveValue('30px', '40px', '60px'),
      alignItems: 'center'
    },
    
    storyImage: {
      width: '100%',
      height: getResponsiveValue('200px', '250px', '300px'),
      borderRadius: getResponsiveValue('15px', '18px', '20px'),
      objectFit: 'cover',
      boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.5s ease',
      marginBottom: getResponsiveValue('15px', '18px', '20px')
    },
    
    timeline: {
      position: 'relative',
      padding: getResponsiveValue('20px 0 20px 30px', '30px 0 30px 40px', '30px 0')
    },
    
    timelineItem: {
      position: 'relative',
      padding: getResponsiveValue('20px', '22px', '25px'),
      margin: getResponsiveValue('15px 0', '18px 0', '20px 0'),
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: getResponsiveValue('12px', '14px', '15px'),
      borderLeft: '4px solid #3498db'
    },
    
    // Cards - Responsive
    vmCard: {
      padding: getResponsiveValue('30px 20px', '40px 25px', '50px 30px'),
      borderRadius: getResponsiveValue('15px', '18px', '20px'),
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: getResponsiveValue('250px', '300px', '350px'),
      marginBottom: getResponsiveValue('15px', '18px', '20px')
    },
    
    valueCard: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      padding: getResponsiveValue('25px 15px', '30px 20px', '35px 20px'),
      borderRadius: getResponsiveValue('15px', '18px', '20px'),
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(52, 152, 219, 0.08)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid transparent',
      position: 'relative',
      minHeight: getResponsiveValue('200px', '220px', '250px'),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: getResponsiveValue('12px', '15px', '15px')
    },
    
    valueIcon: {
      width: getResponsiveValue('50px', '55px', '60px'),
      height: getResponsiveValue('50px', '55px', '60px'),
      background: 'linear-gradient(135deg, #3498db, #2ecc71)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: getResponsiveValue('1.2rem', '1.4rem', '1.5rem'),
      margin: '0 auto 15px',
      transition: 'all 0.3s ease',
      boxShadow: '0 6px 15px rgba(52, 152, 219, 0.3)',
      overflow: 'hidden'
    },
    
    // Stats Container - Responsive Grid
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: getResponsiveValue('repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)'),
      gap: getResponsiveValue('15px', '20px', '30px'),
      margin: getResponsiveValue('30px auto 0', '40px auto 0', '50px auto 0'),
      padding: getResponsiveValue('20px', '30px', '50px'),
      background: 'rgba(255,255,255,0.1)',
      borderRadius: getResponsiveValue('15px', '18px', '20px'),
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    
    statItem: {
      textAlign: 'center',
      padding: getResponsiveValue('10px', '15px', '15px')
    },
    
    scrollProgress: {
      position: 'fixed',
      top: getResponsiveValue('60px', '65px', '70px'),
      left: 0,
      height: '3px',
      background: 'linear-gradient(90deg, #3498db, #2ecc71)',
      width: `${scrollProgress}%`,
      zIndex: 9999,
      transition: 'width 0.1s ease'
    },
    
    // Gallery Container - Responsive Grid
    galleryContainer: {
      display: 'grid',
      gridTemplateColumns: getResponsiveValue(
        'repeat(2, 1fr)', 
        'repeat(3, 1fr)', 
        'repeat(auto-fill, minmax(250px, 1fr))'
      ),
      gap: getResponsiveValue('12px', '16px', '20px'),
      marginTop: getResponsiveValue('30px', '35px', '40px')
    },
    
    galleryImage: {
      width: '100%',
      height: getResponsiveValue('150px', '180px', '200px'),
      objectFit: 'cover',
      borderRadius: getResponsiveValue('12px', '14px', '15px'),
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    
    programCard: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      padding: getResponsiveValue('25px 20px', '30px 25px', '30px'),
      borderRadius: getResponsiveValue('15px', '18px', '20px'),
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(52, 152, 219, 0.08)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid transparent',
      position: 'relative',
      minHeight: getResponsiveValue('220px', '250px', '280px'),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: getResponsiveValue('12px', '15px', '15px'),
      overflow: 'hidden'
    },
    
    impactCard: {
      padding: getResponsiveValue('30px 20px', '35px 25px', '40px 30px'),
      borderRadius: getResponsiveValue('15px', '18px', '20px'),
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      border: '2px solid transparent',
      position: 'relative',
      minHeight: getResponsiveValue('220px', '260px', '300px'),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: getResponsiveValue('15px', '18px', '20px')
    },
    
    // New styles for activity list
    activityList: {
      listStyle: 'none',
      padding: 0,
      marginTop: '15px'
    },
    
    activityItem: {
      fontSize: getResponsiveValue('0.85rem', '0.9rem', '0.9rem'),
      marginBottom: '8px',
      color: '#555',
      display: 'flex',
      alignItems: 'flex-start'
    },
    
    activityBullet: {
      color: '#3498db',
      marginRight: '10px',
      flexShrink: 0,
      fontSize: '0.8rem',
      marginTop: '3px'
    }
  };

  // Updated core values
  const coreValues = [
    { title: 'Innovation', description: 'Constantly seeking new approaches to youth empowerment and social transformation', icon: '/Static/image1.jpg', color: '#3498db' },
    { title: 'Leadership', description: 'Developing young leaders who can drive meaningful change in their communities', icon: '/Static/image2.jpg', color: '#2ecc71' },
    { title: 'Inclusion', description: 'Ensuring all voices are heard, especially marginalized youth and women', icon: '/Static/image3.jpg', color: '#e74c3c' },
    { title: 'Accountability', description: 'Transparent operations and responsible use of resources for maximum impact', icon: '/Static/image4.jpg', color: '#9b59b6' },
    { title: 'Collaboration', description: 'Working with communities, partners, and stakeholders for collective impact', icon: '/Static/image5.jpg', color: '#1abc9c' },
    { title: 'Sustainability', description: 'Creating lasting change through community-driven solutions', icon: '/Static/image6.jpg', color: '#f39c12' }
  ];

  // Strategic Pillars with activities
  const strategicPillars = [
    { 
      title: 'Youth Leadership & Governance',
      description: 'Building accountable youth leaders who actively participate in governance',
      color: '#3498db',
      activities: [
        'Anti-corruption training by Transparency International Kenya',
        'Community anti-corruption sensitization',
        'Youth public participation in Kisumu fiscal planning',
        'Empowered for Change - Social Movement Building training',
        'Youth sensitization forums on accountability & service delivery',
        'Strengthening accountability in Kisumu County',
        'Kisumu County Health Department Technical Working Group – SRHR Bill 2024',
        'Validation Meeting for the Sexual & GBV Policy'
      ]
    },
    { 
      title: 'Gender Equality & SRHR',
      description: 'Advocating for gender justice and sexual reproductive health rights',
      color: '#e74c3c',
      activities: [
        'International Women’s Day participation',
        'Kisumu County SRHR Bill Review (Technical Working Group)',
        'Sexual & GBV Policy Validation',
        'Menstrual Hygiene Management Day',
        'Strengthening health services through community voice',
        'SRHR youth-led advocacy activities'
      ]
    },
    { 
      title: 'Economic Empowerment',
      description: 'Strengthening economic decision-making and financial accountability',
      color: '#2ecc71',
      activities: [
        'Youth Leadership & Governance trainings',
        'Social movement and civic education',
        'Accountability forums',
        'Entrepreneurship skill-building workshops',
        'Financial literacy programs'
      ]
    },
    { 
      title: 'Climate Action & Environment',
      description: 'Leading youth-driven climate justice and environmental conservation',
      color: '#1abc9c',
      activities: [
        'Forefront of climate action & collaboration',
        'Environmental cleanups',
        'Participation in climate-focused International Youth Day sessions',
        'Local environmental conservation activities',
        'Climate justice advocacy and awareness campaigns'
      ]
    }
  ];

  // What We've Done So Far (Impact Highlights)
  const impactHighlights = [
    'Trained youth on anti-corruption through Transparency International Kenya',
    'Participated in Kisumu fiscal planning public forums',
    'Contributed to drafting and reviewing Kisumu County SRHR Bill 2024',
    'Led youth forums on accountability, service delivery, and governance',
    'Celebrated International Women\'s Day, International Youth Week & International Youth Day',
    'Advocated for sexual and gender-based violence policy reforms',
    'Organized and participated in climate action and environmental clean-ups',
    'Commemorated Menstrual Hygiene Management Day with youth-friendly activities',
    'Participated in the Kisumu County Health TWG to strengthen health services'
  ];

  // Gallery includes first 6 images + images 19 and 20
  const galleryImages = [
    ...Array.from({length: 6}, (_, i) => `/Static/image${i + 1}.jpg`),
    '/Static/image19.jpg', '/Static/image20.jpg'
  ];

  // Responsive grid columns calculator
  const getGridColumns = (items) => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    return 4;
  };

  return (
    <div className="about-page">
      <div style={styles.scrollProgress}></div>

      <section style={styles.aboutHero}>
        <div className="container">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              fontSize: getResponsiveValue('0.8rem', '0.85rem', '0.9rem'),
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: getResponsiveValue('1px', '1.5px', '2px'),
              textTransform: 'uppercase'
            }}>
              ONE OF AFRICA'S MOST INNOVATIVE YOUTH-LED PLATFORMS
            </div>
            
            <h1 style={styles.heroTitle} className="animate-on-scroll">
              Building Africa's Future Leaders
            </h1>
            
            <p style={styles.heroSubtitle} className="animate-on-scroll">
              We are one of Africa's most innovative youth-led platforms for social transformation, 
              merging leadership development, entrepreneurship, and community-driven impact to cultivate 
              a new generation of African leaders who don't just imagine change but actively build it.
            </p>

            <div style={{
              fontSize: getResponsiveValue('1.1rem', '1.2rem', '1.3rem'),
              fontStyle: 'italic',
              maxWidth: getResponsiveValue('100%', '90%', '800px'),
              margin: '0 auto 40px',
              opacity: 0.95,
              padding: '20px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              "Turning passion into action, ideas into enterprises, and potential into sustainable impact."
            </div>

            <div 
              style={styles.statsContainer}
              className="animate-on-scroll"
            >
              {[
                { value: '300+', label: 'Youth Engaged in Governance' },
                { value: '30+', label: 'Policy Engagement Spaces' },
                { value: '20+', label: 'Gender & SRHR Advocacy Events' },
                { value: '15+', label: 'Climate Action Activities' }
              ].map((stat, index) => (
                <div key={index} style={styles.statItem}>
                  <div style={{ 
                    fontSize: getResponsiveValue('1.8rem', '2rem', '2.2rem'), 
                    fontWeight: '800', 
                    marginBottom: getResponsiveValue('8px', '10px', '10px'),
                    background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ 
                    fontSize: getResponsiveValue('0.85rem', '0.9rem', '0.9rem'), 
                    opacity: 0.9,
                    letterSpacing: '1px'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: getResponsiveValue('40px', '45px', '50px') }}>
            <div style={{
              fontSize: getResponsiveValue('0.8rem', '0.85rem', '0.9rem'),
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: getResponsiveValue('1px', '1.5px', '2px'),
              textTransform: 'uppercase'
            }}>
              OUR GUIDING MISSION
            </div>
            <h2 style={{ 
              fontSize: getResponsiveValue('1.8rem', '2rem', '2.2rem'), 
              color: '#2c3e50', 
              marginBottom: '25px',
              fontWeight: '800'
            }}>
              Cultivating Change-Makers
            </h2>
          </div>

          <div style={styles.storyContent}>
            <div className="animate-on-scroll">
              <div style={{
                padding: getResponsiveValue('25px', '28px', '30px'),
                background: 'linear-gradient(135deg, #f8fafc, #ffffff)',
                borderRadius: getResponsiveValue('15px', '18px', '20px'),
                boxShadow: '0 15px 40px rgba(52, 152, 219, 0.1)',
                border: '1px solid #e8eef5',
                marginBottom: getResponsiveValue('25px', '28px', '30px')
              }}>
                <h3 style={{ 
                  fontSize: getResponsiveValue('1.3rem', '1.4rem', '1.5rem'), 
                  color: '#2c3e50', 
                  marginBottom: '15px',
                  fontWeight: '700'
                }}>
                  Our Vision for Africa
                </h3>
                <p style={{ 
                  fontSize: getResponsiveValue('0.95rem', '1rem', '1rem'), 
                  lineHeight: '1.6', 
                  marginBottom: '15px', 
                  color: '#555' 
                }}>
                  We are building a transformative youth-led movement that merges leadership development, 
                  entrepreneurship, and community-driven impact. Our mission is to cultivate a new generation 
                  of African leaders who actively build the change they imagine.
                </p>
                <p style={{ 
                  fontSize: getResponsiveValue('0.95rem', '1rem', '1rem'), 
                  lineHeight: '1.6', 
                  color: '#555' 
                }}>
                  We believe in the power of youth to drive social transformation, turning passion into 
                  action, ideas into enterprises, and potential into sustainable impact across communities.
                </p>
              </div>
              
              <img 
                src="/Static/image2.jpg" 
                alt="Youth Empowerment Workshop"
                style={styles.storyImage}
                className="animate-on-scroll"
              />
            </div>

            <div className="animate-on-scroll">
              <div style={{
                padding: getResponsiveValue('25px', '28px', '30px'),
                background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                color: 'white',
                borderRadius: getResponsiveValue('15px', '18px', '20px'),
                boxShadow: '0 15px 40px rgba(52, 152, 219, 0.2)',
                marginBottom: getResponsiveValue('25px', '28px', '30px')
              }}>
                <h3 style={{ 
                  fontSize: getResponsiveValue('1.3rem', '1.4rem', '1.5rem'), 
                  marginBottom: '15px',
                  fontWeight: '700'
                }}>
                  What We've Done So Far
                </h3>
                <ul style={styles.activityList}>
                  {impactHighlights.slice(0, 4).map((highlight, index) => (
                    <li key={index} style={styles.activityItem}>
                      <span style={styles.activityBullet}>✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                padding: getResponsiveValue('25px', '28px', '30px'),
                background: '#f8fafc',
                borderRadius: getResponsiveValue('15px', '18px', '20px'),
                border: '2px solid #3498db'
              }}>
                <h4 style={{ 
                  color: '#2c3e50', 
                  marginBottom: '15px',
                  fontSize: getResponsiveValue('1.1rem', '1.2rem', '1.2rem'),
                  fontWeight: '700'
                }}>
                  Additional Impact
                </h4>
                <ul style={styles.activityList}>
                  {impactHighlights.slice(4).map((highlight, index) => (
                    <li key={index} style={styles.activityItem}>
                      <span style={{...styles.activityBullet, color: '#2ecc71'}}>•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ 
        ...styles.section, 
        background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.9) 0%, rgba(41, 128, 185, 0.9) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: getResponsiveValue('40px', '45px', '50px') }}>
            <h2 style={{ 
              fontSize: getResponsiveValue('1.8rem', '2rem', '2.2rem'), 
              marginBottom: '25px',
              fontWeight: '800'
            }}>
              Our Strategic Pillars
            </h2>
            <p style={{ 
              fontSize: getResponsiveValue('1rem', '1.1rem', '1.1rem'), 
              margin: '0 auto 40px',
              opacity: 0.9,
              lineHeight: '1.6',
              fontWeight: '300',
              maxWidth: getResponsiveValue('100%', '90%', '800px'),
              padding: getResponsiveValue('0 10px', '0', '0')
            }}>
              Four interconnected pillars that power our holistic approach to youth empowerment
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: getResponsiveValue('1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)'),
            gap: getResponsiveValue('20px', '25px', '30px'),
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {strategicPillars.map((pillar, index) => (
              <div 
                key={index}
                style={{
                  ...styles.programCard,
                  borderLeft: `5px solid ${pillar.color}`,
                  textAlign: 'left',
                  padding: getResponsiveValue('20px', '25px', '30px')
                }}
                className="animate-on-scroll"
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    width: '15px',
                    height: '15px',
                    background: pillar.color,
                    borderRadius: '50%',
                    marginRight: '10px'
                  }}></div>
                  <h3 style={{ 
                    fontSize: getResponsiveValue('1.2rem', '1.3rem', '1.5rem'), 
                    margin: 0,
                    color: pillar.color,
                    fontWeight: '700'
                  }}>
                    {pillar.title}
                  </h3>
                </div>
                <p style={{ 
                  fontSize: getResponsiveValue('0.95rem', '1rem', '1rem'), 
                  lineHeight: '1.5', 
                  color: '#555',
                  marginBottom: '20px'
                }}>
                  {pillar.description}
                </p>
                <div style={{
                  fontSize: getResponsiveValue('0.85rem', '0.9rem', '0.9rem'),
                  color: '#666'
                }}>
                  <strong>Key Activities:</strong>
                  <ul style={styles.activityList}>
                    {pillar.activities.slice(0, 4).map((activity, i) => (
                      <li key={i} style={styles.activityItem}>
                        <span style={{...styles.activityBullet, color: pillar.color}}>›</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                    {pillar.activities.length > 4 && (
                      <li style={styles.activityItem}>
                        <span style={{...styles.activityBullet, color: pillar.color}}>+</span>
                        <span>And {pillar.activities.length - 4} more activities</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: getResponsiveValue('40px', '45px', '50px') }}>
            <div style={{
              fontSize: getResponsiveValue('0.8rem', '0.85rem', '0.9rem'),
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: getResponsiveValue('1px', '1.5px', '2px'),
              textTransform: 'uppercase'
            }}>
              OUR FOUNDATION
            </div>
            <h2 style={{ 
              fontSize: getResponsiveValue('1.8rem', '2rem', '2.2rem'), 
              color: '#2c3e50',
              marginBottom: '25px',
              fontWeight: '800'
            }}>
              Values That Drive Us
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: getResponsiveValue('1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)'),
            gap: getResponsiveValue('15px', '20px', '25px'),
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {coreValues.map((value, index) => (
              <div 
                key={index}
                style={{
                  ...styles.valueCard,
                  borderColor: activeValue === index ? value.color : 'transparent',
                }}
                className="animate-on-scroll"
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div 
                  style={{
                    ...styles.valueIcon,
                    background: `linear-gradient(135deg, ${value.color}, ${value.color}99)`,
                  }}
                >
                  {value.title.charAt(0)}
                </div>
                <h4 style={{ 
                  color: '#2c3e50', 
                  marginBottom: '12px', 
                  fontSize: getResponsiveValue('1.1rem', '1.15rem', '1.2rem'),
                  fontWeight: '700'
                }}>
                  {value.title}
                </h4>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.5',
                  fontSize: getResponsiveValue('0.9rem', '0.95rem', '0.95rem')
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ 
        ...styles.section, 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: getResponsiveValue('40px', '45px', '50px') }}>
            <div style={{
              fontSize: getResponsiveValue('0.8rem', '0.85rem', '0.9rem'),
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: getResponsiveValue('1px', '1.5px', '2px'),
              textTransform: 'uppercase'
            }}>
              OUR IMPACT IN NUMBERS
            </div>
            <h2 style={{ 
              fontSize: getResponsiveValue('1.8rem', '2rem', '2.2rem'), 
              color: '#2c3e50',
              marginBottom: '25px',
              fontWeight: '800'
            }}>
              Measurable Impact
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: getResponsiveValue('1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)'),
            gap: getResponsiveValue('20px', '25px', '30px'),
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              { 
                value: '300+', 
                label: 'Youth engaged in governance and accountability forums',
                color: '#3498db',
                icon: '👥'
              },
              { 
                value: '30+', 
                label: 'Policy engagement spaces participated in',
                color: '#2ecc71',
                icon: '🏛️'
              },
              { 
                value: '20+', 
                label: 'Gender and SRHR advocacy events',
                color: '#e74c3c',
                icon: '⚖️'
              },
              { 
                value: '15+', 
                label: 'Climate action and environmental activities',
                color: '#1abc9c',
                icon: '🌱'
              },
              { 
                value: '10+', 
                label: 'County-level policy consultations',
                color: '#9b59b6',
                icon: '📋'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{
                  ...styles.impactCard,
                  borderTop: `5px solid ${stat.color}`
                }}
                className="animate-on-scroll"
              >
                <div style={{ 
                  fontSize: getResponsiveValue('2.5rem', '3rem', '3.5rem'), 
                  marginBottom: '15px'
                }}>
                  {stat.icon}
                </div>
                <div style={{ 
                  fontSize: getResponsiveValue('2.2rem', '2.5rem', '2.8rem'), 
                  fontWeight: '800', 
                  marginBottom: '10px',
                  color: stat.color
                }}>
                  {stat.value}
                </div>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.5',
                  fontSize: getResponsiveValue('0.9rem', '0.95rem', '1rem')
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)', 
        color: 'white',
        padding: getResponsiveValue('60px 0', '80px 0', '100px 0'),
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: getResponsiveValue('1.8rem', '2rem', '2.2rem'), 
            marginBottom: '25px',
            fontWeight: '800'
          }}>
            Our Journey in Pictures
          </h2>
          <p style={{ 
            fontSize: getResponsiveValue('1rem', '1.1rem', '1.1rem'), 
            margin: '0 auto 40px',
            opacity: 0.9,
            lineHeight: '1.6',
            fontWeight: '300',
            maxWidth: getResponsiveValue('100%', '90%', '800px'),
            padding: getResponsiveValue('0 10px', '0', '0')
          }}>
            From governance forums to climate action, witness our youth-led transformation across Kenya
          </p>
          
          <div style={styles.galleryContainer}>
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="animate-on-scroll"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: getResponsiveValue('12px', '14px', '15px'),
                  transition: 'all 0.3s ease'
                }}
              >
                <img 
                  src={image} 
                  alt={`Youth Lead CBO activity ${index + 1}`}
                  style={styles.galleryImage}
                />
                {(index === 6 || index === 7) && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                    color: 'white',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    zIndex: 1
                  }}>
                    {index === 6 ? 'Latest Project' : 'Recent Activity'}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div style={{
            marginTop: '40px',
            padding: '20px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '15px',
            display: 'inline-block'
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>
              Documenting our journey across {strategicPillars.length} strategic pillars
            </p>
          </div>
        </div>
      </section>

      <section style={{ 
        ...styles.section, 
        background: 'linear-gradient(135deg, #3498db 0%, #2ecc71 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: getResponsiveValue('1.8rem', '2rem', '2.2rem'), 
            marginBottom: '25px',
            fontWeight: '800'
          }}>
            Join Our Movement for Change
          </h2>
          <p style={{ 
            fontSize: getResponsiveValue('1rem', '1.1rem', '1.1rem'), 
            margin: '0 auto 40px',
            opacity: 0.95,
            lineHeight: '1.6',
            fontWeight: '300',
            maxWidth: getResponsiveValue('100%', '90%', '800px'),
            padding: getResponsiveValue('0 10px', '0', '0')
          }}>
            Together, we're building Africa's most innovative youth-led platform for social transformation. 
            Be part of the change we're creating across leadership, gender equality, economic empowerment, and climate action.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: getResponsiveValue('1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)'),
            gap: getResponsiveValue('15px', '20px', '25px'),
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              { label: 'Youth-Led', icon: '🌟', desc: '100% youth-driven initiatives' },
              { label: 'Policy Impact', icon: '📜', desc: 'Active in county & national policy' },
              { label: 'Holistic Approach', icon: '🔄', desc: 'Four interconnected pillars' },
              { label: 'Community Focus', icon: '🏘️', desc: 'Grassroots community impact' }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  padding: getResponsiveValue('20px 15px', '22px 18px', '25px'),
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                className="animate-on-scroll"
              >
                <div style={{ fontSize: getResponsiveValue('2rem', '2.2rem', '2.5rem') }}>{item.icon}</div>
                <div style={{ 
                  fontSize: getResponsiveValue('1rem', '1.05rem', '1.1rem'), 
                  fontWeight: '700'
                }}>
                  {item.label}
                </div>
                <div style={{ 
                  fontSize: getResponsiveValue('0.85rem', '0.9rem', '0.85rem'), 
                  opacity: 0.9
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .about-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          margin-top: 70px;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }
        
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Hover Effects */
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(52, 152, 219, 0.15);
          border-color: #3498db !important;
        }
        
        .impact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          border-color: #3498db !important;
        }
        
        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3498db, #2ecc71);
          border-radius: 4px;
        }
        
        /* Responsive Design */
        @media (min-width: 640px) {
          .container {
            padding: 0 24px;
          }
        }
        
        @media (min-width: 768px) {
          .container {
            padding: 0 32px;
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            padding: 0 40px;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }
          
          .about-page {
            margin-top: 60px;
          }
        }
        
        /* Gallery image hover effect */
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        
        .gallery-item {
          transition: transform 0.3s ease;
        }
        
        /* Selection styles */
        ::selection {
          background: rgba(52, 152, 219, 0.3);
          color: #2c3e50;
        }
        
        /* Ensure images and containers don't overflow */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Print styles */
        @media print {
          .about-hero {
            background: #2c3e50 !important;
            color: white !important;
            min-height: auto !important;
            padding: 40px 0 !important;
          }
          
          .program-card,
          .value-card,
          .impact-card {
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;