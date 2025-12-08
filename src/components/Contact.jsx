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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modern color palette matching other pages
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
    // Modern Hero Section
    contactHero: {
      background: `linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.95) 100%), url('/static/image5.jpg')`,
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
      animation: 'gradientShift 3s ease infinite'
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

    // Contact Grid
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '60px',
      maxWidth: '1200px',
      margin: '0 auto',
      perspective: '1000px'
    },

    // Contact Items
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '35px 30px',
      background: 'white',
      borderRadius: '25px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: '1px solid rgba(102, 126, 234, 0.1)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '20px',
      transformStyle: 'preserve-3d'
    },

    contactIconWrapper: {
      width: '70px',
      height: '70px',
      background: 'linear-gradient(135deg, #667EEA, #764BA2)',
      color: 'white',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginRight: '25px',
      transform: 'rotate(45deg)',
      transition: 'all 0.5s ease',
      fontSize: '1.8rem',
      boxShadow: '0 15px 30px rgba(102, 126, 234, 0.3)'
    },

    contactIcon: {
      transform: 'rotate(-45deg)',
      display: 'block'
    },

    // Quick Action Buttons
    quickActions: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '35px'
    },

    actionButton: {
      padding: '20px 30px',
      background: 'white',
      color: colors.primary,
      border: '2px solid rgba(102, 126, 234, 0.2)',
      borderRadius: '15px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      fontWeight: '700',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      fontSize: '1.1rem',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      position: 'relative',
      overflow: 'hidden'
    },

    // Contact Form
    contactForm: {
      background: 'white',
      padding: '45px 40px',
      borderRadius: '30px',
      boxShadow: '0 30px 80px rgba(0,0,0,0.08)',
      border: '1px solid rgba(102, 126, 234, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    },

    formGroup: {
      marginBottom: '30px',
      position: 'relative'
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

    // Social Links
    socialLinks: {
      display: 'flex',
      gap: '15px',
      marginTop: '30px',
      justifyContent: 'center'
    },

    socialLink: {
      width: '55px',
      height: '55px',
      borderRadius: '15px',
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.primary,
      textDecoration: 'none',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      position: 'relative',
      overflow: 'hidden'
    },

    // Info Box
    infoBox: {
      background: 'rgba(248, 250, 252, 0.8)',
      padding: '35px',
      borderRadius: '25px',
      marginTop: '40px',
      border: '2px solid rgba(102, 126, 234, 0.1)',
      position: 'relative',
      overflow: 'hidden'
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
    
    // Simulate API call
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
              GET IN TOUCH
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={styles.heroTitle}
          >
            Let's Create
            <br />
            <span style={{ fontSize: '0.85em', display: 'block', marginTop: '15px' }}>
              Impact Together
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            Reach out to collaborate, inquire, or join our mission to empower youth 
            and drive sustainable change across communities
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
              { value: '24', label: 'Hour Response', suffix: 'hr', color: '#667EEA' },
              { value: '100', label: 'Partners Connected', suffix: '+', color: '#FF6B6B' },
              { value: '1000', label: 'Messages Sent', suffix: '+', color: '#4ECDC4' },
              { value: '95', label: 'Satisfaction Rate', suffix: '%', color: '#FFD166' }
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
                  {stat.value}<span style={{ fontSize: '0.7em' }}>{stat.suffix}</span>
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
            CONNECT WITH US
          </div>
          <div style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, white, transparent)',
            borderRadius: '1px'
          }}></div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section style={{ ...styles.section, background: 'linear-gradient(135deg, #F8FAFC 0%, #E8EEF5 100%)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <h2 style={styles.sectionTitle}>
              <span style={{ position: 'relative', display: 'inline-block' }}>
                Connect With Us
                <span style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '0',
                  right: '0',
                  height: '4px',
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
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: '40px' }}
              >
                <h3 style={{ 
                  color: colors.dark, 
                  marginBottom: '25px', 
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.3'
                }}>
                  Contact Information
                </h3>
                <p style={{ 
                  color: '#666', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.7',
                  marginBottom: '30px'
                }}>
                  Reach out through any channel that works best for you. Our team is 
                  ready to assist with partnerships, inquiries, and collaborations.
                </p>
              </motion.div>
              
              {/* Contact Cards */}
              <div style={{ marginBottom: '40px' }}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    style={styles.contactItem}
                    target={info.title === 'LinkedIn' ? '_blank' : '_self'}
                    rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : ''}
                    className="contact-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 40px 80px rgba(0,0,0,0.15)'
                    }}
                  >
                    {/* Background gradient */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: info.gradient,
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}></div>
                    
                    <div style={{ ...styles.contactIconWrapper, background: info.gradient }}>
                      <span style={styles.contactIcon}>{info.icon}</span>
                    </div>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <h4 style={{ 
                        color: colors.dark, 
                        marginBottom: '8px', 
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        transition: 'color 0.3s ease'
                      }}>
                        {info.title}
                      </h4>
                      <p style={{ 
                        color: colors.primary, 
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '5px',
                        transition: 'color 0.3s ease'
                      }}>
                        {info.value}
                      </p>
                      <p style={{ 
                        color: '#666', 
                        fontSize: '0.95rem',
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={styles.infoBox}
              >
                <h3 style={{ 
                  color: colors.dark, 
                  marginBottom: '20px', 
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: colors.primary, 
                    color: 'white',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    ⚡
                  </span>
                  Quick Connect
                </h3>
                <p style={{ 
                  color: '#666', 
                  marginBottom: '25px', 
                  fontSize: '1.05rem',
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
                      boxShadow: '0 15px 35px rgba(37, 211, 102, 0.3)'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(37, 211, 102, 0.4)',
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span style={{ fontSize: '1.4rem' }}>💬</span>
                    WhatsApp Chat
                  </motion.a>
                  
                  <motion.a
                    href={`tel:${phoneNumber}`}
                    style={{
                      ...styles.actionButton,
                      background: 'linear-gradient(135deg, #667EEA, #764BA2)',
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)',
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span style={{ fontSize: '1.4rem' }}>📞</span>
                    Direct Call
                  </motion.a>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ 
                  marginTop: '40px',
                  textAlign: 'center'
                }}
              >
                <h4 style={{ 
                  color: colors.dark, 
                  marginBottom: '20px', 
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}>
                  <span>Follow Our Journey</span>
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
                        scale: 1.2,
                        y: -5,
                        background: social.color,
                        color: 'white',
                        boxShadow: `0 15px 30px ${social.color}40`
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span style={{ fontSize: '1.4rem' }}>{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ 
                  color: colors.dark, 
                  marginBottom: '25px', 
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.3'
                }}>
                  Send a Message
                </h3>
                <p style={{ 
                  color: '#666', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.7',
                  marginBottom: '30px'
                }}>
                  Have questions or want to collaborate? Fill out the form below and 
                  we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={styles.contactForm}>
                {/* Form Background */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.02), rgba(118, 75, 162, 0.02))',
                  pointerEvents: 'none'
                }}></div>
                
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
                      padding: '18px 25px', 
                      border: `2px solid ${activeField === 'name' ? colors.primary : 'rgba(102, 126, 234, 0.1)'}`, 
                      borderRadius: '15px', 
                      fontSize: '1.1rem',
                      fontFamily: 'inherit',
                      transition: 'all 0.4s ease',
                      background: 'white',
                      color: colors.dark,
                      boxShadow: activeField === 'name' ? '0 0 0 4px rgba(102, 126, 234, 0.1)' : 'none'
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
                      padding: '18px 25px', 
                      border: `2px solid ${activeField === 'email' ? colors.primary : 'rgba(102, 126, 234, 0.1)'}`, 
                      borderRadius: '15px', 
                      fontSize: '1.1rem',
                      fontFamily: 'inherit',
                      transition: 'all 0.4s ease',
                      background: 'white',
                      color: colors.dark,
                      boxShadow: activeField === 'email' ? '0 0 0 4px rgba(102, 126, 234, 0.1)' : 'none'
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
                      padding: '18px 25px', 
                      border: `2px solid ${activeField === 'subject' ? colors.primary : 'rgba(102, 126, 234, 0.1)'}`, 
                      borderRadius: '15px', 
                      fontSize: '1.1rem',
                      fontFamily: 'inherit',
                      transition: 'all 0.4s ease',
                      background: 'white',
                      color: colors.dark,
                      boxShadow: activeField === 'subject' ? '0 0 0 4px rgba(102, 126, 234, 0.1)' : 'none'
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
                    rows="6"
                    required
                    style={{ 
                      width: '100%', 
                      padding: '18px 25px', 
                      border: `2px solid ${activeField === 'message' ? colors.primary : 'rgba(102, 126, 234, 0.1)'}`, 
                      borderRadius: '15px', 
                      fontSize: '1.1rem', 
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      transition: 'all 0.4s ease',
                      background: 'white',
                      color: colors.dark,
                      boxShadow: activeField === 'message' ? '0 0 0 4px rgba(102, 126, 234, 0.1)' : 'none'
                    }}
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    padding: '22px',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    background: 'linear-gradient(45deg, #667EEA, #764BA2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)',
                    y: -3
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabledStyle={{ opacity: 0.6 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ fontSize: '1.2rem' }}
                      >
                        ⏳
                      </motion.span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </motion.button>
                
                {submitMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                      background: 'linear-gradient(45deg, rgba(78, 205, 196, 0.1), rgba(6, 214, 160, 0.1))', 
                      color: '#155724', 
                      padding: '25px', 
                      marginTop: '25px', 
                      borderRadius: '15px', 
                      textAlign: 'center', 
                      fontWeight: '600', 
                      border: '2px solid rgba(6, 214, 160, 0.2)',
                      fontSize: '1.1rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      right: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'radial-gradient(circle, rgba(6, 214, 160, 0.05) 0%, transparent 70%)',
                      transform: 'rotate(45deg)'
                    }}></div>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      ✨ {submitMessage}
                    </div>
                  </motion.div>
                )}
              </form>

              {/* Response Time */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ 
                  marginTop: '30px',
                  padding: '25px',
                  background: 'rgba(248, 250, 252, 0.8)',
                  borderRadius: '15px',
                  border: '2px solid rgba(102, 126, 234, 0.1)',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px'
                }}
              >
                <span style={{ 
                  fontSize: '1.5rem',
                  background: colors.primary,
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  ⏱️
                </span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ 
                    color: colors.dark, 
                    fontSize: '1rem',
                    fontWeight: '700',
                    marginBottom: '4px'
                  }}>
                    Quick Response Time
                  </div>
                  <p style={{ 
                    color: '#666', 
                    fontSize: '0.95rem',
                    margin: 0
                  }}>
                    We typically respond within <strong>24-48 hours</strong> on business days
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@700;800;900&display=swap');
        
        .contact-page {
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
          z-index: 2;
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
        
        /* Hover effects for contact cards */
        .contact-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 40px 80px rgba(0,0,0,0.15) !important;
        }
        
        .contact-card:hover .contact-icon-wrapper {
          transform: rotate(0deg) scale(1.1) !important;
        }
        
        .contact-card:hover h4,
        .contact-card:hover p:nth-of-type(1) {
          color: white !important;
        }
        
        .contact-card:hover p:nth-of-type(2) {
          color: rgba(255,255,255,0.9) !important;
        }
        
        .contact-card:hover::before {
          opacity: 1 !important;
        }
        
        /* Focus styles */
        input:focus,
        textarea:focus {
          outline: none !important;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          
          .hero-title {
            font-size: 4.5rem !important;
          }
          
          .quick-actions {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 992px) {
          .contact-hero {
            padding: 140px 0 80px !important;
            min-height: 90vh !important;
          }
          
          .hero-title {
            font-size: 3.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.2rem !important;
          }
          
          .contact-form {
            padding: 35px 30px !important;
          }
          
          .contact-item {
            padding: 25px 20px !important;
          }
          
          .contact-icon-wrapper {
            width: 60px !important;
            height: 60px !important;
            margin-right: 20px !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem !important;
          }
          
          .section {
            padding: 80px 0 !important;
          }
          
          .quick-actions {
            grid-template-columns: 1fr !important;
          }
          
          .social-links {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          
          .contact-form {
            padding: 30px 25px !important;
          }
          
          input, textarea {
            padding: 16px 20px !important;
            font-size: 1rem !important;
          }
          
          button[type="submit"] {
            padding: 20px !important;
            font-size: 1.1rem !important;
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
          
          .contact-item {
            flex-direction: column !important;
            text-align: center !important;
            padding: 25px 20px !important;
          }
          
          .contact-icon-wrapper {
            margin-right: 0 !important;
            margin-bottom: 20px !important;
          }
          
          .social-link {
            width: 50px !important;
            height: 50px !important;
          }
        }
        
        /* Loading animations */
        .contact-item {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        /* Print styles */
        @media print {
          .contact-hero {
            background: #1A1A2E !important;
            color: white !important;
            min-height: auto !important;
            padding: 50px 0 !important;
          }
          
          .contact-form {
            box-shadow: none !important;
            border: 1px solid #ddd !important;
          }
          
          button {
            display: none !important;
          }
        }
        
        /* Performance optimization */
        .will-change {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default Contact;