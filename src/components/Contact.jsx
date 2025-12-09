import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const phoneNumber = '+254724109760';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [activeField, setActiveField] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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

  // Responsive styles
  const styles = {
    // Hero Section - Mobile Optimized
    contactHero: {
      background: `linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.98) 100%), url('static/image5.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      textAlign: 'center',
      padding: isMobile ? '100px 0 60px' : '140px 0 80px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? 'auto' : '100vh',
      display: 'flex',
      alignItems: 'center'
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
      letterSpacing: isMobile ? '-1px' : '-2px',
      lineHeight: '1.1',
      background: 'linear-gradient(45deg, #FFFFFF, #667EEA, #FF6B6B)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% auto'
    },

    heroSubtitle: {
      fontSize: isMobile ? '1.1rem' : 'clamp(1.2rem, 2vw, 1.6rem)',
      maxWidth: isMobile ? '100%' : '800px',
      margin: `0 auto ${isMobile ? '30px' : '40px'}`,
      opacity: 0.9,
      lineHeight: '1.6',
      fontWeight: '300',
      color: 'rgba(255, 255, 255, 0.95)',
      padding: isMobile ? '0 10px' : '0'
    },

    // Contact Grid - Mobile Responsive
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: isMobile ? '30px' : '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      perspective: '1000px'
    },

    // Contact Items - Mobile Optimized
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: isMobile ? 'column' : 'row',
      padding: isMobile ? '24px 20px' : '32px 28px',
      background: 'white',
      borderRadius: isMobile ? '20px' : '25px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: '1px solid rgba(102, 126, 234, 0.1)',
      boxShadow: '0 15px 40px rgba(0,0,0,0.05)',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: isMobile ? '16px' : '20px',
      textAlign: isMobile ? 'center' : 'left'
    },

    contactIconWrapper: {
      width: isMobile ? '60px' : '70px',
      height: isMobile ? '60px' : '70px',
      background: 'linear-gradient(135deg, #667EEA, #764BA2)',
      color: 'white',
      borderRadius: isMobile ? '16px' : '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginRight: isMobile ? 0 : '25px',
      marginBottom: isMobile ? '16px' : 0,
      transform: 'rotate(45deg)',
      transition: 'all 0.4s ease',
      fontSize: isMobile ? '1.5rem' : '1.8rem',
      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.25)'
    },

    // Quick Action Buttons - Mobile Stack
    quickActions: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: isMobile ? '12px' : '20px',
      marginTop: isMobile ? '25px' : '35px'
    },

    actionButton: {
      padding: isMobile ? '18px 24px' : '20px 30px',
      background: 'white',
      color: colors.primary,
      border: '2px solid rgba(102, 126, 234, 0.2)',
      borderRadius: isMobile ? '12px' : '15px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isMobile ? '10px' : '15px',
      fontWeight: '600',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      fontSize: isMobile ? '1rem' : '1.1rem',
      cursor: 'pointer',
      boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
      position: 'relative',
      overflow: 'hidden'
    },

    // Contact Form - Mobile Optimized
    contactForm: {
      background: 'white',
      padding: isMobile ? '32px 24px' : '40px 36px',
      borderRadius: isMobile ? '24px' : '30px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
      border: '1px solid rgba(102, 126, 234, 0.1)',
      position: 'relative',
      overflow: 'hidden',
      marginTop: isMobile ? '20px' : '0'
    },

    formGroup: {
      marginBottom: isMobile ? '24px' : '30px',
      position: 'relative'
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

    // Social Links - Mobile Optimized
    socialLinks: {
      display: 'flex',
      gap: isMobile ? '12px' : '15px',
      marginTop: isMobile ? '24px' : '30px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },

    socialLink: {
      width: isMobile ? '50px' : '55px',
      height: isMobile ? '50px' : '55px',
      borderRadius: isMobile ? '12px' : '15px',
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.primary,
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
      position: 'relative',
      overflow: 'hidden'
    },

    // Info Box - Mobile Adjusted
    infoBox: {
      background: 'rgba(248, 250, 252, 0.8)',
      padding: isMobile ? '24px' : '32px',
      borderRadius: isMobile ? '20px' : '25px',
      marginTop: isMobile ? '32px' : '40px',
      border: '2px solid rgba(102, 126, 234, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    },

    // Floating Shapes - Hidden on Mobile
    floatingShape: {
      position: 'absolute',
      width: isMobile ? '300px' : '500px',
      height: isMobile ? '300px' : '500px',
      border: '2px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '50%',
      top: isMobile ? '-150px' : '-250px',
      right: isMobile ? '-150px' : '-250px',
      animation: 'float 20s infinite ease-in-out',
      display: isMobile ? 'none' : 'block'
    },

    floatingShape2: {
      position: 'absolute',
      width: isMobile ? '200px' : '400px',
      height: isMobile ? '200px' : '400px',
      border: '2px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
      bottom: isMobile ? '-100px' : '-200px',
      left: isMobile ? '-100px' : '-200px',
      animation: 'float 25s infinite ease-in-out reverse',
      display: isMobile ? 'none' : 'block'
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('✨ Your message has been sent successfully! We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const whatsappMessage = encodeURIComponent(`Hello Youth Lead CBO,\n\nI came across your website and would like to learn more about your organization and initiatives.`);
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappMessage}`;

  const contactInfo = [
    { 
      icon: '📧', 
      title: 'Email Address', 
      value: 'info@youthleadcbo.org', 
      link: 'mailto:info@youthleadcbo.org',
      description: 'Send us an email anytime',
      gradient: 'linear-gradient(135deg, #667EEA, #764BA2)'
    },
    { 
      icon: '📱', 
      title: 'Phone Number', 
      value: '+254 724 109 760', 
      link: `tel:${phoneNumber}`,
      description: 'Call us during business hours',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E53)'
    },
    { 
      icon: '📍', 
      title: 'Our Location', 
      value: 'Nairobi, Kenya', 
      link: '#',
      description: 'Based in the heart of Kenya',
      gradient: 'linear-gradient(135deg, #4ECDC4, #44A08D)'
    },
    { 
      icon: '💼', 
      title: 'LinkedIn', 
      value: '@YouthLeadCBO', 
      link: 'https://www.linkedin.com/posts/youth-lead-cbo_youthleadcbo-youthparticipation-fiscalplanning-activity-7297958717273104384-57Ls',
      description: 'Connect professionally',
      gradient: 'linear-gradient(135deg, #0077B5, #00A0DC)'
    }
  ];

  const socialMedia = [
    { icon: '💼', label: 'LinkedIn', link: 'https://www.linkedin.com/posts/youth-lead-cbo_youthleadcbo-youthparticipation-fiscalplanning-activity-7297958717273104384-57Ls', color: '#0077B5' },
    { icon: '🐦', label: 'Twitter', link: '#', color: '#1DA1F2' },
    { icon: '📸', label: 'Instagram', link: '#', color: '#E1306C' },
    { icon: '📘', label: 'Facebook', link: '#', color: '#1877F2' },
    { icon: '📺', label: 'YouTube', link: '#', color: '#FF0000' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section style={styles.contactHero}>
        <div style={styles.floatingShape}></div>
        <div style={styles.floatingShape2}></div>
        
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: isMobile ? '10px 20px' : '12px 28px',
              borderRadius: '50px',
              marginBottom: isMobile ? '24px' : '32px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <span style={{ 
              fontSize: isMobile ? '0.8rem' : '0.9rem', 
              fontWeight: '600', 
              letterSpacing: '2px',
              color: 'white'
            }}>
              GET IN TOUCH
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={styles.heroTitle}
          >
            Let's Create
            <br />
            <span style={{ fontSize: isMobile ? '0.8em' : '0.85em', display: 'block', marginTop: '8px' }}>
              Impact Together
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            Reach out to collaborate, inquire, or join our mission to empower youth 
            and drive sustainable change across communities
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ ...styles.section, background: 'linear-gradient(135deg, #F8FAFC 0%, #E8EEF5 100%)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}
          >
            <h2 style={styles.sectionTitle}>
              <span style={{ position: 'relative', display: 'inline-block' }}>
                Connect With Us
                <span style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '0',
                  right: '0',
                  height: '3px',
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '2px'
                }}></span>
              </span>
            </h2>
            <p style={styles.sectionSubtitle}>
              Choose your preferred way to connect with our team. We're here to help 
              and collaborate on impactful initiatives
            </p>
          </motion.div>

          <div style={styles.contactGrid}>
            {/* Contact Information */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: isMobile ? '24px' : '32px' }}
              >
                <h3 style={{ 
                  color: colors.dark, 
                  marginBottom: isMobile ? '16px' : '20px', 
                  fontSize: isMobile ? '1.5rem' : 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  Contact Information
                </h3>
                <p style={{ 
                  color: '#666', 
                  fontSize: isMobile ? '0.95rem' : '1.05rem', 
                  lineHeight: '1.6',
                  marginBottom: isMobile ? '20px' : '24px'
                }}>
                  Reach out through any channel that works best for you. Our team is 
                  ready to assist with partnerships, inquiries, and collaborations.
                </p>
              </motion.div>
              
              {/* Contact Cards */}
              <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    style={styles.contactItem}
                    target={info.title === 'LinkedIn' ? '_blank' : '_self'}
                    rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : ''}
                    className="contact-card"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: isMobile ? -5 : -8,
                      boxShadow: '0 25px 50px rgba(0,0,0,0.12)'
                    }}
                  >
                    <div style={{ ...styles.contactIconWrapper, background: info.gradient }}>
                      <span style={{ transform: 'rotate(-45deg)', display: 'block' }}>{info.icon}</span>
                    </div>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <h4 style={{ 
                        color: colors.dark, 
                        marginBottom: '6px', 
                        fontSize: isMobile ? '1.1rem' : '1.2rem',
                        fontWeight: '600',
                        transition: 'color 0.3s ease'
                      }}>
                        {info.title}
                      </h4>
                      <p style={{ 
                        color: colors.primary, 
                        fontSize: isMobile ? '1rem' : '1.05rem',
                        fontWeight: '600',
                        marginBottom: '4px',
                        transition: 'color 0.3s ease'
                      }}>
                        {info.value}
                      </p>
                      <p style={{ 
                        color: '#666', 
                        fontSize: isMobile ? '0.85rem' : '0.9rem',
                        margin: 0,
                        transition: 'color 0.3s ease'
                      }}>
                        {info.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={styles.infoBox}
              >
                <h3 style={{ 
                  color: colors.dark, 
                  marginBottom: isMobile ? '16px' : '20px', 
                  fontSize: isMobile ? '1.2rem' : '1.3rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ 
                    width: isMobile ? '36px' : '40px', 
                    height: isMobile ? '36px' : '40px', 
                    background: colors.primary, 
                    color: 'white',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '1rem' : '1.1rem'
                  }}>
                    ⚡
                  </span>
                  Quick Connect
                </h3>
                <p style={{ 
                  color: '#666', 
                  marginBottom: isMobile ? '20px' : '24px', 
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  lineHeight: '1.6'
                }}>
                  For immediate assistance, reach out directly through these channels
                </p>
                
                <div style={styles.quickActions}>
                  <motion.a
                    href={whatsappLink}
                    style={{
                      ...styles.actionButton,
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 10px 30px rgba(37, 211, 102, 0.25)'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: isMobile ? 1.02 : 1.05,
                      boxShadow: '0 15px 35px rgba(37, 211, 102, 0.35)',
                      y: -3
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span style={{ fontSize: isMobile ? '1.2rem' : '1.3rem' }}>💬</span>
                    WhatsApp Chat
                  </motion.a>
                  
                  <motion.a
                    href={`tel:${phoneNumber}`}
                    style={{
                      ...styles.actionButton,
                      background: 'linear-gradient(135deg, #667EEA, #764BA2)',
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.25)'
                    }}
                    whileHover={{ 
                      scale: isMobile ? 1.02 : 1.05,
                      boxShadow: '0 15px 35px rgba(102, 126, 234, 0.35)',
                      y: -3
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span style={{ fontSize: isMobile ? '1.2rem' : '1.3rem' }}>📞</span>
                    Direct Call
                  </motion.a>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ 
                  marginTop: isMobile ? '24px' : '32px',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ 
                  color: colors.dark, 
                  marginBottom: isMobile ? '16px' : '20px', 
                  fontSize: isMobile ? '1.1rem' : '1.15rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  Follow Our Journey
                </h4>
                <div style={styles.socialLinks}>
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      style={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      whileHover={{ 
                        scale: isMobile ? 1.1 : 1.15,
                        y: -3,
                        background: social.color,
                        color: 'white',
                        boxShadow: `0 12px 25px ${social.color}40`
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span style={{ fontSize: isMobile ? '1.2rem' : '1.3rem' }}>{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ marginBottom: isMobile ? '24px' : '32px' }}>
                <h3 style={{ 
                  color: colors.dark, 
                  marginBottom: isMobile ? '16px' : '20px', 
                  fontSize: isMobile ? '1.5rem' : 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  Send a Message
                </h3>
                <p style={{ 
                  color: '#666', 
                  fontSize: isMobile ? '0.95rem' : '1.05rem', 
                  lineHeight: '1.6',
                  marginBottom: isMobile ? '20px' : '24px'
                }}>
                  Have questions or want to collaborate? Fill out the form below and 
                  we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={styles.contactForm}>
                <div style={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    placeholder="Your Full Name"
                    required
                    style={{ 
                      width: '100%', 
                      padding: isMobile ? '16px 20px' : '18px 24px', 
                      border: `2px solid ${activeField === 'name' ? colors.primary : 'rgba(102, 126, 234, 0.1)'}`, 
                      borderRadius: '12px', 
                      fontSize: isMobile ? '1rem' : '1.05rem',
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease',
                      background: 'white',
                      color: colors.dark,
                      boxShadow: activeField === 'name' ? '0 0 0 3px rgba(102, 126, 234, 0.1)' : 'none'
                    }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    placeholder="Your Email Address"
                    required
                    style={{ 
                      width: '100%', 
                      padding: isMobile ? '16px 20px' : '18px 24px', 
                      border: `2px solid ${activeField === 'email' ? colors.primary : 'rgba(102, 126, 234, 0.1)'}`, 
                      borderRadius: '12px', 
                      fontSize: isMobile ? '1rem' : '1.05rem',
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease',
                      background: 'white',
                      color: colors.dark,
                      boxShadow: activeField === 'email' ? '0 0 0 3px rgba(102, 126, 234, 0.1)' : 'none'
                    }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    placeholder="Message Subject"
                    required
                    style={{ 
                      width: '100%', 
                      padding: isMobile ? '16px 20px' : '18px 24px', 
                      border: `2px solid ${activeField === 'subject' ? colors.primary : 'rgba(102, 126, 234, 0.1)'}`, 
                      borderRadius: '12px', 
                      fontSize: isMobile ? '1rem' : '1.05rem',
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease',
                      background: 'white',
                      color: colors.dark,
                      boxShadow: activeField === 'subject' ? '0 0 0 3px rgba(102, 126, 234, 0.1)' : 'none'
                    }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    placeholder="Your message here... Tell us about your project, idea, or how we can collaborate"
                    rows="5"
                    required
                    style={{ 
                      width: '100%', 
                      padding: isMobile ? '16px 20px' : '18px 24px', 
                      border: `2px solid ${activeField === 'message' ? colors.primary : 'rgba(102, 126, 234, 0.1)'}`, 
                      borderRadius: '12px', 
                      fontSize: isMobile ? '1rem' : '1.05rem',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                      background: 'white',
                      color: colors.dark,
                      minHeight: '120px',
                      boxShadow: activeField === 'message' ? '0 0 0 3px rgba(102, 126, 234, 0.1)' : 'none'
                    }}
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    padding: isMobile ? '18px' : '20px',
                    fontSize: isMobile ? '1.05rem' : '1.1rem',
                    fontWeight: '600',
                    background: 'linear-gradient(45deg, #667EEA, #764BA2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 15px 35px rgba(102, 126, 234, 0.35)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabledStyle={{ opacity: 0.6 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ fontSize: isMobile ? '1.1rem' : '1.2rem' }}
                      >
                        ⏳
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </motion.button>
                
                {submitMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                      background: 'linear-gradient(45deg, rgba(78, 205, 196, 0.1), rgba(6, 214, 160, 0.1))', 
                      color: '#155724', 
                      padding: isMobile ? '16px' : '20px', 
                      marginTop: isMobile ? '16px' : '20px', 
                      borderRadius: '12px', 
                      textAlign: 'center', 
                      fontWeight: '500', 
                      border: '1px solid rgba(6, 214, 160, 0.2)',
                      fontSize: isMobile ? '0.95rem' : '1rem'
                    }}
                  >
                    ✨ {submitMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .contact-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          overflow-x: hidden;
          scroll-behavior: smooth;
          background: linear-gradient(135deg, #F8FAFC 0%, #E8EEF5 100%);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          position: relative;
          z-index: 2;
        }
        
        /* Modern Animations */
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
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(248, 250, 252, 0.8);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #667EEA, #764BA2);
          border-radius: 4px;
        }
        
        /* Selection styles */
        ::selection {
          background: rgba(102, 126, 234, 0.3);
          color: #1A1A2E;
        }
        
        /* Hover effects for contact cards */
        .contact-card:hover .contact-icon-wrapper {
          transform: rotate(0deg) scale(1.1) !important;
        }
        
        /* Focus styles */
        input:focus,
        textarea:focus {
          outline: none !important;
        }
        
        /* Responsive Design */
        @media (min-width: 768px) {
          .container {
            padding: 0 24px;
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            padding: 0 32px;
          }
        }
        
        /* Print styles */
        @media print {
          .contact-hero {
            background: #1A1A2E !important;
            color: white !important;
            min-height: auto !important;
            padding: 40px 0 !important;
          }
          
          .contact-form {
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
          
          button {
            display: none !important;
          }
          
          a {
            text-decoration: underline !important;
            color: #667EEA !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;