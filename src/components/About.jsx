import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ✅ CORRECT: Using /static/ folder for ALL images
  const imagePaths = Array.from({length: 6}, (_, i) => `/static/image${i + 1}.jpg`);
  
  // ✅ CORRECT: Fixed typo and added proper paths
  const additionalImages = ['/static/image19.jpg', '/static/image20.jpg'];

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
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      clearInterval(galleryInterval);
    };
  }, []);

  const styles = {
    aboutHero: {
      // ✅ CORRECT: Using /static/ folder
      background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.85) 0%, rgba(26, 37, 47, 0.85) 100%), url("/static/image1.jpg")',
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

  // ✅ CORRECT: Using /static/ folder for all images
  const coreValues = [
    { title: 'Transparency', description: 'Openness in all our operations and decision-making processes', icon: '/static/image1.jpg', color: '#3498db' },
    { title: 'Accountability', description: 'Responsible stewardship of resources and commitments', icon: '/static/image2.jpg', color: '#2ecc71' },
    { title: 'Impact', description: 'Measurable positive change in communities', icon: '/static/image3.jpg', color: '#e74c3c' },
    { title: 'Solidarity', description: 'Unity in purpose and collective action', icon: '/static/image4.jpg', color: '#9b59b6' },
    { title: 'Inclusivity', description: 'Ensuring everyone has a voice and opportunity', icon: '/static/image5.jpg', color: '#1abc9c' },
    { title: 'Excellence', description: 'Striving for the highest standards in all endeavors', icon: '/static/image6.jpg', color: '#f39c12' }
  ];

  const timelineData = [
    { year: '2022', title: 'Foundation', description: 'Youth Lead CBO was founded by visionary youth leaders passionate about community development' },
    { year: '2023', title: 'First Major Project', description: 'Launched digital skills training for 200+ youth in Nairobi slums' },
    { year: '2024', title: 'Expansion', description: 'Expanded to 5 counties across Kenya with 15 active community projects' },
    { year: '2025', title: 'National Recognition', description: 'Awarded National Youth Empowerment Excellence Award by Ministry of Youth' }
  ];

  // ✅ CORRECT: Using /static/ folder for all images
  const programs = [
    { title: 'Digital Literacy Program', description: 'Training youth in essential digital skills for the 21st century', image: '/static/image2.jpg' },
    { title: 'Entrepreneurship Bootcamp', description: 'Developing young entrepreneurs through mentorship and seed funding', image: '/static/image3.jpg' },
    { title: 'Environmental Conservation', description: 'Youth-led environmental initiatives and climate action projects', image: '/static/image4.jpg' },
    { title: 'Leadership Development', description: 'Cultivating next-generation leaders through workshops and mentorship', image: '/static/image5.jpg' }
  ];

  const impactStories = [
    { title: 'Community Impact', description: 'Transformed 45+ communities through sustainable development projects', image: '/static/image1.jpg' },
    { title: 'Youth Empowerment', description: 'Empowered 2,500+ youth with skills, education, and opportunities', image: '/static/image2.jpg' },
    { title: 'Partnership Growth', description: 'Built 28+ strategic partnerships for greater community impact', image: '/static/image3.jpg' },
    { title: 'Program Success', description: 'Achieved 97% success rate across all our youth programs', image: '/static/image4.jpg' }
  ];

  // Gallery includes first 6 images + images 19 and 20
  const galleryImages = [
    ...imagePaths.slice(0, 6),
    ...additionalImages
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

      {/* Rest of the component remains the same, but ensure all image paths use /static/ */}
      {/* ... (rest of the JSX) ... */}
      
      <style jsx>{`
        /* Your existing CSS styles remain the same */
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
        
        /* ... rest of your CSS styles ... */
      `}</style>
    </div>
  );
};

export default About;