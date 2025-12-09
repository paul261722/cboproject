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
    }
  };

  const coreValues = [
    { title: 'Transparency', description: 'Openness in all our operations and decision-making processes', icon: '/Static/image1.jpg', color: '#3498db' },
    { title: 'Accountability', description: 'Responsible stewardship of resources and commitments', icon: '/Static/image2.jpg', color: '#2ecc71' },
    { title: 'Impact', description: 'Measurable positive change in communities', icon: '/Static/image3.jpg', color: '#e74c3c' },
    { title: 'Solidarity', description: 'Unity in purpose and collective action', icon: '/Static/image4.jpg', color: '#9b59b6' },
    { title: 'Inclusivity', description: 'Ensuring everyone has a voice and opportunity', icon: '/Static/image5.jpg', color: '#1abc9c' },
    { title: 'Excellence', description: 'Striving for the highest standards in all endeavors', icon: '/Static/image6.jpg', color: '#f39c12' }
  ];

  const timelineData = [
    { year: '2022', title: 'Foundation', description: 'Youth Lead CBO was founded by visionary youth leaders passionate about community development' },
    { year: '2023', title: 'First Major Project', description: 'Launched digital skills training for 200+ youth in Nairobi slums' },
    { year: '2024', title: 'Expansion', description: 'Expanded to 5 counties across Kenya with 15 active community projects' },
    { year: '2025', title: 'National Recognition', description: 'Awarded National Youth Empowerment Excellence Award by Ministry of Youth' }
  ];

  const programs = [
    { title: 'Digital Literacy Program', description: 'Training youth in essential digital skills for the 21st century', image: '/Static/image2.jpg' },
    { title: 'Entrepreneurship Bootcamp', description: 'Developing young entrepreneurs through mentorship and seed funding', image: '/Static/image3.jpg' },
    { title: 'Environmental Conservation', description: 'Youth-led environmental initiatives and climate action projects', image: '/Static/image4.jpg' },
    { title: 'Leadership Development', description: 'Cultivating next-generation leaders through workshops and mentorship', image: '/Static/image5.jpg' }
  ];

  const impactStories = [
    { title: 'Community Impact', description: 'Transformed 45+ communities through sustainable development projects', image: '/Static/image1.jpg' },
    { title: 'Youth Empowerment', description: 'Empowered 2,500+ youth with skills, education, and opportunities', image: '/Static/image2.jpg' },
    { title: 'Partnership Growth', description: 'Built 28+ strategic partnerships for greater community impact', image: '/Static/image3.jpg' },
    { title: 'Program Success', description: 'Achieved 97% success rate across all our youth programs', image: '/Static/image4.jpg' }
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
              OUR STORY • OUR MISSION • OUR IMPACT
            </div>
            
            <h1 style={styles.heroTitle} className="animate-on-scroll">
              Empowering Youth,<br />Transforming Communities
            </h1>
            
            <p style={styles.heroSubtitle} className="animate-on-scroll">
              Youth Lead CBO is a grassroots movement dedicated to unlocking the potential of young people 
              through innovative education, sustainable development projects, and community-led initiatives 
              across Kenya and East Africa.
            </p>

            <div 
              style={styles.statsContainer}
              className="animate-on-scroll"
            >
              {[
                { value: '2,500+', label: 'Youth Empowered' },
                { value: '45+', label: 'Community Projects' },
                { value: '28+', label: 'Strategic Partners' },
                { value: '97%', label: 'Program Success Rate' }
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
              OUR JOURNEY
            </div>
            <h2 style={{ 
              fontSize: getResponsiveValue('1.8rem', '2rem', '2.2rem'), 
              color: '#2c3e50', 
              marginBottom: '25px',
              fontWeight: '800'
            }}>
              From Vision to Impact
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
                  Our Foundation Story
                </h3>
                <p style={{ 
                  fontSize: getResponsiveValue('0.95rem', '1rem', '1rem'), 
                  lineHeight: '1.6', 
                  marginBottom: '15px', 
                  color: '#555' 
                }}>
                  Founded in 2022 by a group of passionate young visionaries from Nairobi's informal settlements, 
                  Youth Lead CBO emerged from a shared commitment to address systemic youth unemployment, 
                  poverty, and limited access to quality education in marginalized communities.
                </p>
                <p style={{ 
                  fontSize: getResponsiveValue('0.95rem', '1rem', '1rem'), 
                  lineHeight: '1.6', 
                  color: '#555' 
                }}>
                  We champion a youth-led development model that positions young people as active agents of change 
                  - not just beneficiaries - empowering them to become architects of their own future and 
                  catalysts for sustainable community transformation.
                </p>
              </div>
              
              <img 
                src="/Static/image2.jpg" 
                alt="Youth Empowerment Workshop"
                style={styles.storyImage}
                className="animate-on-scroll"
              />
            </div>

            <div style={styles.timeline} className="animate-on-scroll">
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  style={styles.timelineItem}
                  className="animate-on-scroll"
                >
                  <div style={{
                    position: 'absolute',
                    left: getResponsiveValue('-25px', '-25px', '-20px'),
                    top: getResponsiveValue('20px', '22px', '25px'),
                    width: getResponsiveValue('30px', '32px', '35px'),
                    height: getResponsiveValue('30px', '32px', '35px'),
                    background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: getResponsiveValue('0.85rem', '0.9rem', '0.9rem')
                  }}>
                    {item.year}
                  </div>
                  <h4 style={{ 
                    color: '#2c3e50', 
                    marginBottom: '8px', 
                    fontSize: getResponsiveValue('1.1rem', '1.15rem', '1.2rem'),
                    fontWeight: '700'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.5',
                    fontSize: getResponsiveValue('0.9rem', '0.95rem', '0.95rem')
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
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
              Our Core Programs
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
              We implement transformative programs that address critical needs while building sustainable futures
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: getResponsiveValue('1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)'),
            gap: getResponsiveValue('20px', '25px', '25px'),
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {programs.map((program, index) => (
              <div 
                key={index}
                style={{
                  ...styles.programCard,
                  background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${program.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'white'
                }}
                className="animate-on-scroll"
              >
                <h3 style={{ 
                  fontSize: getResponsiveValue('1.2rem', '1.3rem', '1.5rem'), 
                  marginBottom: '12px', 
                  fontWeight: '700'
                }}>
                  {program.title}
                </h3>
                <p style={{ 
                  fontSize: getResponsiveValue('0.9rem', '0.95rem', '0.95rem'), 
                  lineHeight: '1.5', 
                  opacity: 0.9
                }}>
                  {program.description}
                </p>
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
                    background: `url("${value.icon}") center/cover`,
                  }}
                />
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
              OUR IMPACT
            </div>
            <h2 style={{ 
              fontSize: getResponsiveValue('1.8rem', '2rem', '2.2rem'), 
              color: '#2c3e50',
              marginBottom: '25px',
              fontWeight: '800'
            }}>
              Transforming Lives & Communities
            </h2>
            <p style={{ 
              fontSize: getResponsiveValue('1rem', '1.1rem', '1.1rem'), 
              margin: '0 auto 40px',
              opacity: 0.8,
              lineHeight: '1.6',
              fontWeight: '300',
              maxWidth: getResponsiveValue('100%', '90%', '800px'),
              padding: getResponsiveValue('0 10px', '0', '0')
            }}>
              Through dedication and strategic initiatives, we've created lasting impact across Kenya
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: getResponsiveValue('1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)'),
            gap: getResponsiveValue('15px', '20px', '25px'),
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {impactStories.map((impact, index) => (
              <div 
                key={index}
                style={styles.impactCard}
                className="animate-on-scroll"
              >
                <div 
                  style={{
                    width: getResponsiveValue('60px', '70px', '80px'),
                    height: getResponsiveValue('60px', '70px', '80px'),
                    background: `url("${impact.image}") center/cover`,
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    border: '3px solid #3498db',
                    boxShadow: '0 8px 20px rgba(52, 152, 219, 0.2)',
                  }}
                />
                <h3 style={{ 
                  color: '#2c3e50', 
                  marginBottom: '12px', 
                  fontSize: getResponsiveValue('1.2rem', '1.3rem', '1.5rem'),
                  fontWeight: '700'
                }}>
                  {impact.title}
                </h3>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.5',
                  fontSize: getResponsiveValue('0.9rem', '0.95rem', '0.95rem')
                }}>
                  {impact.description}
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
            Our Impact Gallery
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
            Witness the transformative journey of youth empowerment through our community projects, 
            workshops, and success stories across Kenya. Featuring our latest initiatives captured in images 19 & 20.
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
                    {index === 6 ? 'New Initiative' : 'Latest Project'}
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
              Showing {galleryImages.length} inspiring moments • Including 2 new initiatives
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
            Join Our Movement
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
            Together, we can create lasting change. Whether you're a youth looking for opportunities, 
            a partner organization, or a donor wanting to make an impact - your journey with us starts here.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: getResponsiveValue('1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)'),
            gap: getResponsiveValue('15px', '20px', '25px'),
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              { label: 'Award Winning', icon: '🏆', desc: 'National Youth Empowerment Award 2024' },
              { label: 'Youth Focused', icon: '👥', desc: '100% youth-led and managed' },
              { label: 'Sustainable', icon: '🌱', desc: 'Environmentally conscious programs' },
              { label: 'Innovative', icon: '💡', desc: 'Cutting-edge solutions for youth development' }
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