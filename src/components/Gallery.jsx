import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
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

  // Image categories
  const categories = ['All', 'Events', 'Community', 'Training', 'Environment', 'Innovation'];

  // ✅ FIXED: Updated all image paths to use /gallery/ folder
  const galleryImages = [
    { 
      id: 1, 
      src: '/gallery/image1.jpg', 
      title: 'Youth Leadership Conference', 
      category: 'Events',
      description: 'Annual youth leadership gathering with 300+ participants discussing governance and innovation',
      date: 'March 2024'
    },
    { 
      id: 2, 
      src: '/gallery/image2.jpg', 
      title: 'Community Empowerment Workshop', 
      category: 'Community',
      description: 'Interactive workshops with local communities to build capacity and foster sustainable development',
      date: 'February 2024'
    },
    { 
      id: 3, 
      src: '/gallery/image3.jpg', 
      title: 'Tree Planting Initiative 2023', 
      category: 'Environment',
      description: 'Green initiative planting 5,000+ trees across 10 communities for environmental conservation',
      date: 'November 2023'
    },
    { 
      id: 4, 
      src: '/gallery/image4.jpg', 
      title: 'Women Empowerment Program Launch', 
      category: 'Training',
      description: 'Launch of our flagship program empowering women through skills training and mentorship',
      date: 'January 2024'
    },
    { 
      id: 5, 
      src: '/gallery/image5.jpg', 
      title: 'Digital Skills Training Session', 
      category: 'Training',
      description: 'Digital literacy training for youth preparing them for the future workforce',
      date: 'December 2023'
    },
    { 
      id: 6, 
      src: '/gallery/image6.jpg', 
      title: 'Youth Mentorship Program', 
      category: 'Training',
      description: 'One-on-one mentorship sessions connecting experienced professionals with youth',
      date: 'October 2023'
    },
    { 
      id: 7, 
      src: '/gallery/image7.jpg', 
      title: 'Team Building Activity Day', 
      category: 'Events',
      description: 'Team-building exercises to foster collaboration and teamwork among youth',
      date: 'September 2023'
    },
    { 
      id: 8, 
      src: '/gallery/image8.jpg', 
      title: 'Community Health Outreach', 
      category: 'Community',
      description: 'Health awareness campaign reaching 500+ community members in rural areas',
      date: 'August 2023'
    },
    { 
      id: 9, 
      src: '/gallery/image9.jpg', 
      title: 'Entrepreneurship Training', 
      category: 'Training',
      description: 'Business skills workshop for aspiring young entrepreneurs',
      date: 'July 2023'
    },
    { 
      id: 10, 
      src: '/gallery/image10.jpg', 
      title: 'Clean Water Project', 
      category: 'Community',
      description: 'Initiative providing clean water access to underserved communities',
      date: 'June 2023'
    },
    { 
      id: 11, 
      src: '/gallery/image11.jpg', 
      title: 'Youth Sports Tournament', 
      category: 'Events',
      description: 'Annual sports tournament promoting physical health and team spirit',
      date: 'May 2023'
    },
    { 
      id: 12, 
      src: '/gallery/image12.jpg', 
      title: 'Art and Culture Festival', 
      category: 'Innovation',
      description: 'Celebrating youth creativity through art, music, and cultural performances',
      date: 'April 2023'
    },
    { 
      id: 13, 
      src: '/gallery/image13.jpg', 
      title: 'Computer Literacy Class', 
      category: 'Training',
      description: 'Basic computer skills training for first-time technology users',
      date: 'March 2023'
    },
    { 
      id: 14, 
      src: '/gallery/image14.jpg', 
      title: 'Agricultural Training Program', 
      category: 'Training',
      description: 'Modern agricultural techniques training for sustainable farming',
      date: 'February 2023'
    },
    { 
      id: 15, 
      src: '/gallery/image15.jpg', 
      title: 'Youth Parliament Session', 
      category: 'Events',
      description: 'Simulated parliamentary sessions to educate youth on governance',
      date: 'January 2023'
    },
    { 
      id: 16, 
      src: '/gallery/image16.jpg', 
      title: 'Disaster Response Training', 
      category: 'Training',
      description: 'Emergency response training for community resilience',
      date: 'December 2022'
    },
    { 
      id: 17, 
      src: '/gallery/image17.jpg', 
      title: 'Music and Talent Show', 
      category: 'Innovation',
      description: 'Platform for youth to showcase their musical and artistic talents',
      date: 'November 2022'
    },
    { 
      id: 18, 
      src: '/gallery/image18.jpg', 
      title: 'Annual Youth Summit 2024', 
      category: 'Events',
      description: 'Flagship event gathering 1,000+ youth for networking and learning',
      date: 'March 2024'
    }
  ];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  const styles = {
    // ✅ FIXED: Updated hero background URL
    hero: {
      background: `linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.95) 100%), url('/gallery/image5.jpg')`,
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
      alignItems: 'center'
    },

    heroContent: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 20px'
    },

    heroTitle: {
      fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
      marginBottom: '30px',
      fontWeight: '900',
      letterSpacing: '-2px',
      lineHeight: '1',
      background: 'linear-gradient(45deg, #FFFFFF, #667EEA, #FF6B6B)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% auto',
      textShadow: '0 5px 30px rgba(0,0,0,0.3)'
    },

    heroSubtitle: {
      fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
      maxWidth: '800px',
      margin: '0 auto 50px',
      opacity: 0.9,
      lineHeight: '1.6',
      fontWeight: '300',
      color: 'rgba(255, 255, 255, 0.95)'
    },

    // Floating elements
    floatingShape: {
      position: 'absolute',
      width: '500px',
      height: '500px',
      border: '2px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '50%',
      top: '-250px',
      right: '-250px',
      animation: 'float 20s infinite ease-in-out'
    },

    floatingShape2: {
      position: 'absolute',
      width: '400px',
      height: '400px',
      border: '2px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
      bottom: '-200px',
      left: '-200px',
      animation: 'float 25s infinite ease-in-out reverse'
    },

    // Scroll progress bar
    scrollProgress: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #667EEA, #764BA2)',
      width: `${scrollProgress}%`,
      zIndex: 1000,
      transition: 'width 0.1s ease'
    },

    // Filter buttons
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '60px',
      flexWrap: 'wrap',
      padding: '25px',
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '30px',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(102, 126, 234, 0.1)',
      maxWidth: 'fit-content',
      margin: '0 auto',
      boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
    },

    filterButton: {
      padding: '14px 32px',
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

    // Gallery grid
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: '40px',
      padding: '80px 0',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #E8EEF5 100%)'
    },

    galleryItem: {
      position: 'relative',
      borderRadius: '25px',
      overflow: 'hidden',
      cursor: 'pointer',
      aspectRatio: '4/3',
      transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      transformStyle: 'preserve-3d'
    },

    // Modal styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.95)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '20px',
      backdropFilter: 'blur(10px)'
    },

    modalContent: {
      background: 'white',
      borderRadius: '30px',
      maxWidth: '100%',
      maxHeight: '90vh',
      width: '1000px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 40px 100px rgba(0, 0, 0, 0.6)'
    },

    modalImageContainer: {
      position: 'relative',
      height: '500px',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    modalInfo: {
      padding: '35px',
      background: 'white',
      borderTop: '1px solid rgba(0,0,0,0.05)'
    },

    navBtn: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)',
      color: 'white',
      border: 'none',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      fontSize: '1.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      zIndex: 10
    },

    modalClose: {
      position: 'absolute',
      top: '25px',
      right: '25px',
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)',
      color: 'white',
      border: 'none',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      fontSize: '1.5rem',
      cursor: 'pointer',
      zIndex: 10,
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  return (
    <div className="gallery-page">
      {/* Scroll Progress Bar */}
      <div style={styles.scrollProgress}></div>

      {/* Hero Section */}
      <section style={styles.hero}>
        {/* Floating Shapes */}
        <div style={styles.floatingShape}></div>
        <div style={styles.floatingShape2}></div>
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))',
          pointerEvents: 'none'
        }}></div>
        
        <div style={styles.heroContent}>
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              padding: '14px 32px',
              borderRadius: '50px',
              marginBottom: '40px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600', 
              letterSpacing: '3px',
              color: 'white'
            }}>
              VISUAL JOURNEY
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={styles.heroTitle}
          >
            Moments That
            <br />
            <span style={{ fontSize: '0.85em', display: 'block', marginTop: '15px' }}>
              Define Our Impact
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            A visual narrative of our journey, capturing the spirit of innovation, 
            empowerment, and sustainable change across communities
          </motion.p>
          
          {/* Animated Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              maxWidth: '900px',
              margin: '60px auto 0',
              position: 'relative',
              zIndex: 2
            }}
          >
            {[
              { value: '18', label: 'Captured Moments', color: '#667EEA' },
              { value: '6', label: 'Categories', color: '#FF6B6B' },
              { value: '2', label: 'Years', color: '#4ECDC4', suffix: '+' },
              { value: '5000+', label: 'Memories Created', color: '#FFD166' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '30px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '25px',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.4s ease'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  background: 'rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '900',
                  marginBottom: '12px',
                  background: `linear-gradient(45deg, ${stat.color}, ${stat.color}dd)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1'
                }}>
                  {stat.value}{stat.suffix || ''}
                </div>
                <div style={{ 
                  fontSize: '1rem', 
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            zIndex: 10
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div style={{ 
            fontSize: '0.9rem', 
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '3px',
            fontWeight: '500'
          }}>
            EXPLORE GALLERY
          </div>
          <div style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, white, transparent)',
            borderRadius: '1px'
          }}></div>
        </motion.div>
      </section>

      {/* Gallery Filter */}
      <section style={{ padding: '80px 0 40px', background: 'linear-gradient(135deg, #F8FAFC 0%, #E8EEF5 100%)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.filterContainer}
          >
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
                whileHover={{ 
                  scale: activeFilter === category ? 1.05 : 1.1,
                  boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)'
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section>
        <div className="container">
          <div style={styles.galleryGrid}>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                style={{
                  ...styles.galleryItem,
                  transform: hoveredImage === image.id 
                    ? 'translateY(-20px) scale(1.05) rotateX(2deg)' 
                    : 'translateY(0) scale(1) rotateX(0deg)',
                  boxShadow: hoveredImage === image.id 
                    ? '0 40px 80px rgba(0,0,0,0.2)' 
                    : '0 20px 60px rgba(0,0,0,0.1)'
                }}
                onClick={() => openModal(image)}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                className="gallery-item"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 40px 80px rgba(0,0,0,0.2)'
                }}
              >
                {/* Image */}
                <img 
                  src={image.src} 
                  alt={image.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredImage === image.id ? 'scale(1.1)' : 'scale(1)'
                  }} 
                />
                
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)',
                  opacity: hoveredImage === image.id ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '30px'
                }}>
                  <div style={{ 
                    transform: hoveredImage === image.id ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'transform 0.4s ease',
                    opacity: hoveredImage === image.id ? 1 : 0
                  }}>
                    <h4 style={{ 
                      color: 'white', 
                      marginBottom: '12px', 
                      fontSize: '1.5rem', 
                      fontWeight: '700',
                      lineHeight: '1.3'
                    }}>
                      {image.title}
                    </h4>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '0.9rem',
                      marginBottom: '15px'
                    }}>
                      <span style={{
                        background: colors.primary,
                        padding: '6px 16px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {image.category}
                      </span>
                      <span>•</span>
                      <span>{image.date}</span>
                    </div>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      marginBottom: '20px'
                    }}>
                      {image.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem'
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span>Click to view full image</span>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge (always visible) */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  color: colors.dark,
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  zIndex: 2
                }}>
                  {image.category}
                </div>
                
                {/* Number Badge */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  left: '25px',
                  background: 'rgba(26, 26, 46, 0.9)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: '700',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
                  zIndex: 2
                }}>
                  {image.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={styles.modalOverlay}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              className="modal-content"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                style={styles.modalClose}
                onClick={closeModal}
                className="modal-close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6L18 18"/>
                </svg>
              </motion.button>
              
              {/* Image Container */}
              <div style={styles.modalImageContainer}>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    borderRadius: '30px 30px 0 0'
                  }} 
                />
                
                {/* Navigation Buttons */}
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ ...styles.navBtn, left: '30px' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="nav-btn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18L9 12L15 6"/>
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ ...styles.navBtn, right: '30px' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="nav-btn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18L15 12L9 6"/>
                  </svg>
                </motion.button>
              </div>
              
              {/* Image Info */}
              <div style={styles.modalInfo}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '20px'
                }}>
                  <div>
                    <h3 style={{ 
                      color: colors.dark, 
                      margin: '0 0 15px 0', 
                      fontSize: '2rem',
                      fontWeight: '800',
                      lineHeight: '1.2'
                    }}>
                      {selectedImage.title}
                    </h3>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '15px',
                      marginBottom: '15px'
                    }}>
                      <span style={{ 
                        background: colors.primary + '20',
                        color: colors.primary,
                        padding: '8px 20px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}>
                        {selectedImage.category}
                      </span>
                      <span style={{ 
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        {selectedImage.date}
                      </span>
                    </div>
                    <p style={{ 
                      color: '#555', 
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      marginBottom: '25px',
                      maxWidth: '800px'
                    }}>
                      {selectedImage.description}
                    </p>
                  </div>
                  
                  <div style={{ 
                    background: colors.light,
                    padding: '15px 25px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    minWidth: '100px'
                  }}>
                    <div style={{ 
                      fontSize: '3rem', 
                      fontWeight: '900',
                      color: colors.primary,
                      lineHeight: '1'
                    }}>
                      {selectedImage.id}
                    </div>
                    <div style={{ 
                      color: '#666', 
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      of {galleryImages.length}
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  paddingTop: '25px',
                  borderTop: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px',
                    color: '#666',
                    fontSize: '0.95rem'
                  }}>
                    <span>#{selectedImage.id.toString().padStart(2, '0')}</span>
                    <span>•</span>
                    <span>Gallery Image</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px' 
                  }}>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '14px 28px',
                        background: colors.light,
                        color: colors.dark,
                        border: 'none',
                        borderRadius: '15px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Download functionality
                      }}
                    >
                      Download
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: '14px 28px',
                        background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
                        color: 'white',
                        border: 'none',
                        borderRadius: '15px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
                      }}
                    >
                      Share Image
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@700;800;900&display=swap');
        
        .gallery-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          overflow-x: hidden;
          scroll-behavior: smooth;
          background: linear-gradient(135deg, #F8FAFC 0%, #E8EEF5 100%);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          zIndex: 2;
        }
        
        /* Modern Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(5deg);
          }
          66% {
            transform: translateY(30px) rotate(-5deg);
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
          width: 12px;
          height: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(248, 250, 252, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #667EEA, #764BA2);
          border-radius: 10px;
          border: 3px solid rgba(255, 255, 255, 0.8);
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
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important;
            gap: 30px !important;
          }
          
          .hero-title {
            font-size: 4.5rem !important;
          }
        }
        
        @media (max-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
            gap: 25px !important;
          }
          
          .filter-container {
            padding: 20px !important;
            border-radius: 25px !important;
          }
          
          .filter-btn {
            padding: 12px 25px !important;
            font-size: 0.9rem !important;
          }
          
          .hero-title {
            font-size: 3.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .gallery-hero {
            padding: 140px 0 80px !important;
            min-height: 90vh !important;
          }
          
          .hero-title {
            font-size: 3rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.2rem !important;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
            padding: 50px 0 !important;
          }
          
          .modal-content {
            width: 95% !important;
            max-height: 85vh !important;
          }
          
          .modal-image-container {
            height: 350px !important;
          }
          
          .modal-info {
            padding: 25px !important;
          }
          
          .modal-info h3 {
            font-size: 1.6rem !important;
          }
          
          .filter-container {
            gap: 8px !important;
            padding: 15px !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          
          .gallery-item {
            aspect-ratio: 3/2 !important;
          }
          
          .modal-image-container {
            height: 250px !important;
          }
          
          .modal-close {
            top: 15px !important;
            right: 15px !important;
            width: 40px !important;
            height: 40px !important;
          }
          
          .nav-btn {
            width: 50px !important;
            height: 50px !important;
          }
          
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        
        /* Print styles */
        @media print {
          .gallery-hero {
            background: #1A1A2E !important;
            color: white !important;
            min-height: auto !important;
            padding: 50px 0 !important;
          }
          
          .gallery-item {
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
          
          .filter-container,
          button {
            display: none !important;
          }
        }
        
        /* Performance optimization */
        .will-change {
          will-change: transform, opacity;
        }
        
        /* Image loading optimization */
        img {
          content-visibility: auto;
        }
      `}</style>
    </div>
  );
};

export default Gallery;