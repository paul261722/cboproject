import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use images 1-6 for main content - FIXED: Removed leading slashes
  const imagePaths = Array.from({length: 6}, (_, i) => `static/image${i + 1}.jpg`);
  
  // Add images 19 and 20 specifically for the gallery - FIXED: Removed leading slashes
  const additionalImages = ['static/image19.jpg', 'static/image20.jpg'];

  useEffect(() => {
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
    
    // Auto-rotate gallery images
    const galleryInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3); // Rotate first 3 images
    }, 5000);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearInterval(galleryInterval);
    };
  }, []);

  const styles = {
    aboutHero: {
      // FIXED: Removed leading slash from background URL
      background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.85) 0%, rgba(26, 37, 47, 0.85) 100%), url("static/image1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      textAlign: 'center',
      padding: '140px 0 100px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      marginBottom: '25px',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #ffffff 0%, #3498db 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
      maxWidth: '800px',
      margin: '0 auto 40px',
      opacity: 0.9,
      lineHeight: '1.6',
      fontWeight: '300'
    },
    section: {
      padding: '80px 0'
    },
    storyContent: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '40px',
      alignItems: 'center'
    },
    storyImage: {
      width: '100%',
      height: '300px',
      borderRadius: '20px',
      objectFit: 'cover',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.5s ease',
      marginBottom: '20px'
    },
    timeline: {
      position: 'relative',
      padding: '30px 0'
    },
    timelineItem: {
      position: 'relative',
      padding: '25px',
      margin: '20px 0',
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      borderLeft: '4px solid #3498db'
    },
    vmCard: {
      padding: '50px 30px',
      borderRadius: '20px',
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
      minHeight: '350px',
      marginBottom: '20px'
    },
    philosophyCard: {
      padding: '40px 25px',
      borderRadius: '20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid #e8eef5',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px'
    },
    valueCard: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      padding: '35px 20px',
      borderRadius: '20px',
      textAlign: 'center',
      boxShadow: '0 15px 40px rgba(52, 152, 219, 0.08)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid transparent',
      position: 'relative',
      minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px'
    },
    valueIcon: {
      width: '60px',
      height: '60px',
      background: 'linear-gradient(135deg, #3498db, #2ecc71)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      margin: '0 auto 20px',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 20px rgba(52, 152, 219, 0.3)',
      overflow: 'hidden'
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      margin: '50px auto 0',
      padding: '30px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '20px',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    statItem: {
      textAlign: 'center',
      padding: '15px'
    },
    scrollProgress: {
      position: 'fixed',
      top: '70px',
      left: 0,
      height: '3px',
      background: 'linear-gradient(90deg, #3498db, #2ecc71)',
      width: `${scrollProgress}%`,
      zIndex: 9999,
      transition: 'width 0.1s ease'
    },
    galleryContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '40px'
    },
    galleryImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    programCard: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      padding: '30px',
      borderRadius: '20px',
      textAlign: 'center',
      boxShadow: '0 15px 40px rgba(52, 152, 219, 0.08)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid transparent',
      position: 'relative',
      minHeight: '280px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px',
      overflow: 'hidden'
    },
    impactCard: {
      padding: '40px 30px',
      borderRadius: '20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
      border: '2px solid transparent',
      position: 'relative',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px'
    }
  };

  // Only use first 6 images for core values - FIXED: Removed leading slashes
  const coreValues = [
    { title: 'Transparency', description: 'Openness in all our operations and decision-making processes', icon: 'static/image1.jpg', color: '#3498db' },
    { title: 'Accountability', description: 'Responsible stewardship of resources and commitments', icon: 'static/image2.jpg', color: '#2ecc71' },
    { title: 'Impact', description: 'Measurable positive change in communities', icon: 'static/image3.jpg', color: '#e74c3c' },
    { title: 'Solidarity', description: 'Unity in purpose and collective action', icon: 'static/image4.jpg', color: '#9b59b6' },
    { title: 'Inclusivity', description: 'Ensuring everyone has a voice and opportunity', icon: 'static/image5.jpg', color: '#1abc9c' },
    { title: 'Excellence', description: 'Striving for the highest standards in all endeavors', icon: 'static/image6.jpg', color: '#f39c12' }
  ];

  const timelineData = [
    { year: '2022', title: 'Foundation', description: 'Youth Lead CBO was founded by visionary youth leaders passionate about community development' },
    { year: '2023', title: 'First Major Project', description: 'Launched digital skills training for 200+ youth in Nairobi slums' },
    { year: '2024', title: 'Expansion', description: 'Expanded to 5 counties across Kenya with 15 active community projects' },
    { year: '2025', title: 'National Recognition', description: 'Awarded National Youth Empowerment Excellence Award by Ministry of Youth' }
  ];

  // Programs using only images 2-5 (4 images total from the first 6) - FIXED: Removed leading slashes
  const programs = [
    { title: 'Digital Literacy Program', description: 'Training youth in essential digital skills for the 21st century', image: 'static/image2.jpg' },
    { title: 'Entrepreneurship Bootcamp', description: 'Developing young entrepreneurs through mentorship and seed funding', image: 'static/image3.jpg' },
    { title: 'Environmental Conservation', description: 'Youth-led environmental initiatives and climate action projects', image: 'static/image4.jpg' },
    { title: 'Leadership Development', description: 'Cultivating next-generation leaders through workshops and mentorship', image: 'static/image5.jpg' }
  ];

  const impactStories = [
    { title: 'Community Impact', description: 'Transformed 45+ communities through sustainable development projects', image: 'static/image1.jpg' },
    { title: 'Youth Empowerment', description: 'Empowered 2,500+ youth with skills, education, and opportunities', image: 'static/image2.jpg' },
    { title: 'Partnership Growth', description: 'Built 28+ strategic partnerships for greater community impact', image: 'static/image3.jpg' },
    { title: 'Program Success', description: 'Achieved 97% success rate across all our youth programs', image: 'static/image4.jpg' }
  ];

  // Gallery includes first 6 images + images 19 and 20
  const galleryImages = [
    ...imagePaths.slice(0, 6), // First 6 images
    ...additionalImages // Images 19 and 20
  ];

  return (
    <div className="about-page">
      <div style={styles.scrollProgress}></div>

      <section style={styles.aboutHero}>
        <div className="container">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: '2px',
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
                    fontSize: '2.2rem', 
                    fontWeight: '800', 
                    marginBottom: '10px',
                    background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
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
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              OUR JOURNEY
            </div>
            <h2 style={{ 
              fontSize: '2.2rem', 
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
                padding: '30px',
                background: 'linear-gradient(135deg, #f8fafc, #ffffff)',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(52, 152, 219, 0.1)',
                border: '1px solid #e8eef5',
                marginBottom: '30px'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  color: '#2c3e50', 
                  marginBottom: '20px',
                  fontWeight: '700'
                }}>
                  Our Foundation Story
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.7', 
                  marginBottom: '20px', 
                  color: '#555' 
                }}>
                  Founded in 2022 by a group of passionate young visionaries from Nairobi's informal settlements, 
                  Youth Lead CBO emerged from a shared commitment to address systemic youth unemployment, 
                  poverty, and limited access to quality education in marginalized communities.
                </p>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.7', 
                  color: '#555' 
                }}>
                  We champion a youth-led development model that positions young people as active agents of change 
                  - not just beneficiaries - empowering them to become architects of their own future and 
                  catalysts for sustainable community transformation.
                </p>
              </div>
              
              {/* FIXED: Removed leading slash from image path */}
              <img 
                src="static/image2.jpg" 
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
                    left: '-20px',
                    top: '25px',
                    width: '35px',
                    height: '35px',
                    background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>
                    {item.year}
                  </div>
                  <h4 style={{ 
                    color: '#2c3e50', 
                    marginBottom: '10px', 
                    fontSize: '1.2rem',
                    fontWeight: '700'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.5',
                    fontSize: '0.95rem'
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
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              marginBottom: '25px',
              fontWeight: '800'
            }}>
              Our Core Programs
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              margin: '0 auto 40px',
              opacity: 0.9,
              lineHeight: '1.6',
              fontWeight: '300',
              maxWidth: '800px'
            }}>
              We implement transformative programs that address critical needs while building sustainable futures
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((program, index) => (
              <div 
                key={index}
                style={{
                  ...styles.programCard,
                  // FIXED: Removed leading slash from image URL
                  background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${program.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'white',
                  minHeight: '250px'
                }}
                className="animate-on-scroll"
              >
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '15px', 
                  fontWeight: '700'
                }}>
                  {program.title}
                </h3>
                <p style={{ 
                  fontSize: '0.95rem', 
                  lineHeight: '1.6', 
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
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              OUR FOUNDATION
            </div>
            <h2 style={{ 
              fontSize: '2.2rem', 
              color: '#2c3e50',
              marginBottom: '25px',
              fontWeight: '800'
            }}>
              Values That Drive Us
            </h2>
          </div>

          <div className="values-grid">
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
                    // FIXED: Removed leading slash from image URL
                    background: `url("${value.icon}") center/cover`,
                  }}
                >
                  {/* Image background only */}
                </div>
                <h4 style={{ 
                  color: '#2c3e50', 
                  marginBottom: '15px', 
                  fontSize: '1.2rem',
                  fontWeight: '700'
                }}>
                  {value.title}
                </h4>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.5',
                  fontSize: '0.95rem'
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
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#3498db',
              marginBottom: '15px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              OUR IMPACT
            </div>
            <h2 style={{ 
              fontSize: '2.2rem', 
              color: '#2c3e50',
              marginBottom: '25px',
              fontWeight: '800'
            }}>
              Transforming Lives & Communities
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              margin: '0 auto 40px',
              opacity: 0.8,
              lineHeight: '1.6',
              fontWeight: '300',
              maxWidth: '800px'
            }}>
              Through dedication and strategic initiatives, we've created lasting impact across Kenya
            </p>
          </div>

          <div className="impact-grid">
            {impactStories.map((impact, index) => (
              <div 
                key={index}
                style={styles.impactCard}
                className="animate-on-scroll"
              >
                <div 
                  style={{
                    width: '80px',
                    height: '80px',
                    // FIXED: Removed leading slash from image URL
                    background: `url("${impact.image}") center/cover`,
                    borderRadius: '50%',
                    margin: '0 auto 25px',
                    border: '3px solid #3498db',
                    boxShadow: '0 10px 20px rgba(52, 152, 219, 0.2)',
                  }}
                >
                  {/* Image background only */}
                </div>
                <h3 style={{ 
                  color: '#2c3e50', 
                  marginBottom: '15px', 
                  fontSize: '1.5rem',
                  fontWeight: '800'
                }}>
                  {impact.title}
                </h3>
                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
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
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.2rem', 
            marginBottom: '30px',
            fontWeight: '800'
          }}>
            Our Impact Gallery
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            margin: '0 auto 40px',
            opacity: 0.9,
            lineHeight: '1.6',
            fontWeight: '300',
            maxWidth: '800px'
          }}>
            Witness the transformative journey of youth empowerment through our community projects, 
            workshops, and success stories across Kenya. Featuring our latest initiatives captured in images 19 & 20.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '40px'
          }}>
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="gallery-item animate-on-scroll"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease'
                }}
              >
                <img 
                  src={image} 
                  alt={`Youth Lead CBO activity ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                {/* Special label for images 19 & 20 */}
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
            fontSize: '2.2rem', 
            marginBottom: '30px',
            fontWeight: '800'
          }}>
            Join Our Movement
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            margin: '0 auto 40px',
            opacity: 0.95,
            lineHeight: '1.6',
            fontWeight: '300',
            maxWidth: '800px'
          }}>
            Together, we can create lasting change. Whether you're a youth looking for opportunities, 
            a partner organization, or a donor wanting to make an impact - your journey with us starts here.
          </p>
          
          <div className="social-proof-grid">
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
                  padding: '25px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                className="animate-on-scroll"
              >
                <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
                <div style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '700'
                }}>
                  {item.label}
                </div>
                <div style={{ 
                  fontSize: '0.85rem', 
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
        
        /* Grid Layouts */
        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .impact-grid {
          display: grid;
          grid-templateColumns: repeat(2, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .social-proof-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        /* Hover Effects */
        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(52, 152, 219, 0.15);
          border-color: #3498db !important;
        }
        
        .impact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          border-color: #3498db !important;
        }
        
        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }
        
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        /* Mobile Responsive */
        @media (min-width: 768px) {
          .about-page {
            margin-top: 0;
          }
          
          .container {
            padding: 0 40px;
          }
          
          .story-content {
            grid-template-columns: 1fr 1fr !important;
            gap: 60px !important;
          }
          
          .vision-mission-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
          
          .values-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 25px !important;
          }
          
          .impact-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 30px !important;
          }
          
          .programs-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 25px !important;
          }
          
          .social-proof-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 30px !important;
          }
          
          .gallery-container {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          
          .stats-container {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 30px !important;
            padding: 50px !important;
          }
          
          .hero-title {
            font-size: clamp(3rem, 5vw, 4.5rem) !important;
          }
          
          .hero-subtitle {
            font-size: clamp(1.2rem, 2vw, 1.6rem) !important;
          }
          
          .timeline {
            padding-left: 40px !important;
          }
          
          .timeline-item::before {
            left: -25px !important;
          }
          
          .section {
            padding: 100px 0 !important;
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            padding: 0 60px;
          }
          
          .values-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          .impact-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          
          .programs-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          
          .gallery-container {
            grid-template-columns: repeat(4, 2fr) !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }
          
          .stats-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
            padding: 20px !important;
            margin-top: 30px !important;
          }
          
          .stat-item {
            padding: 10px !important;
          }
          
          .stat-item div:first-child {
            font-size: 1.8rem !important;
          }
          
          .hero-title {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          
          .hero-subtitle {
            font-size: 1rem !important;
            line-height: 1.5 !important;
          }
          
          .values-grid {
            grid-template-columns: 1fr !important;
          }
          
          .impact-grid {
            grid-template-columns: 1fr !important;
          }
          
          .programs-grid {
            grid-template-columns: 1fr !important;
          }
          
          .social-proof-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }
          
          .gallery-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }
          
          .vm-card,
          .philosophy-card,
          .value-card,
          .impact-card,
          .program-card {
            min-height: auto !important;
            padding: 25px 20px !important;
          }
          
          .gallery-image {
            height: 150px !important;
          }
        }
        
        @media (max-width: 350px) {
          .values-grid {
            grid-template-columns: 1fr !important;
          }
          
          .impact-grid {
            grid-template-columns: 1fr !important;
          }
          
          .programs-grid {
            grid-template-columns: 1fr !important;
          }
          
          .stats-container {
            grid-template-columns: 1fr !important;
          }
          
          .social-proof-grid {
            grid-template-columns: 1fr !important;
          }
          
          .gallery-container {
            grid-template-columns: 1fr !important;
          }
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
        
        /* Card hover effects */
        .vm-card:hover,
        .philosophy-card:hover,
        .value-card:hover,
        .impact-card:hover,
        .program-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(52, 152, 219, 0.15);
        }
        
        /* Timeline adjustments for mobile */
        @media (max-width: 767px) {
          .timeline {
            padding-left: 30px;
          }
          
          .timeline-item::before {
            left: -20px;
          }
        }
        
        /* Gallery image hover effect */
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        
        .gallery-item {
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default About;