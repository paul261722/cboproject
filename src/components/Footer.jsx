import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      background: '#1a252f',
      color: 'white',
      padding: '40px 0 20px',
      marginTop: 'auto',
      borderTop: '4px solid #3498db'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '30px',
      marginBottom: '30px'
    },
    footerSection: {
      marginBottom: '20px'
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      fontSize: '1.5rem',
      fontWeight: '700'
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0
    },
    footerLink: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      fontSize: '0.85rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
      marginTop: '10px'
    },
    socialIcon: {
      width: '36px',
      height: '36px',
      background: '#2c3e50',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      textDecoration: 'none',
      color: '#3498db',
      transition: 'all 0.3s ease'
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '20px',
      textAlign: 'center',
      fontSize: '0.8rem'
    }
  };

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: 'f', label: 'Facebook', url: '#', platform: 'facebook' },
    { icon: '𝕏', label: 'Twitter', url: '#', platform: 'twitter' },
    { icon: '📸', label: 'Instagram', url: '#', platform: 'instagram' },
    { icon: 'in', label: 'LinkedIn', url: 'https://www.linkedin.com/posts/youth-lead-cbo_youthleadcbo-youthparticipation-fiscalplanning-activity-7297958717273104384-57Ls', platform: 'linkedin' }
  ];

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.footerContent}>
          {/* Logo and Description */}
          <div style={styles.footerSection}>
            <div style={styles.footerLogo}>
              <span style={{ color: 'white' }}>Youth Lead</span>
              <span style={{ color: '#3498db', marginLeft: '5px' }}>CBO</span>
            </div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              lineHeight: '1.5', 
              fontSize: '0.85rem',
              marginBottom: '15px'
            }}>
              A youth-led organization building capacities of young people to 
              live fulfilled lives and positively impact society.
            </p>
          </div>

          {/* Quick Links */}
          <div style={styles.footerSection}>
            <h3 style={{ 
              color: 'white', 
              fontSize: '1rem', 
              marginBottom: '15px', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Quick Links
            </h3>
            <ul style={styles.footerLinks}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <Link to={link.path} style={styles.footerLink}>
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.footerSection}>
            <h3 style={{ 
              color: 'white', 
              fontSize: '1rem', 
              marginBottom: '15px', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Contact Info
            </h3>
            <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <p style={{ 
                marginBottom: '8px', 
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#3498db' }}>📍</span> Kisumu, Kenya
              </p>
              <p style={{ 
                marginBottom: '8px', 
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#3498db' }}>📧</span> info@youthleadcbo.org
              </p>
              <p style={{ 
                marginBottom: '8px', 
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ color: '#3498db' }}>📱</span> +254 700 123 456
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div style={styles.footerSection}>
            <h3 style={{ 
              color: 'white', 
              fontSize: '1rem', 
              marginBottom: '15px', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Connect With Us
            </h3>
            <div style={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  style={styles.socialIcon}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={styles.footerBottom}>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.6)', 
            marginBottom: '8px', 
            fontSize: '0.8rem',
            lineHeight: '1.4'
          }}>
            &copy; {new Date().getFullYear()} Youth Lead CBO. All rights reserved.
          </p>
          <p style={{ 
            color: '#3498db', 
            fontWeight: '500', 
            fontSize: '0.8rem',
            letterSpacing: '0.5px'
          }}>
            Empowering Youth for a Better Tomorrow
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .footer-logo {
            justify-content: center;
          }
        }
        
        .footer-links a:hover {
          color: #3498db !important;
          transform: translateX(5px);
        }
        
        .social-icon:hover {
          background: #3498db !important;
          color: white !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        }
        
        @media (max-width: 480px) {
          .footer {
            padding: 30px 0 15px !important;
          }
          
          .footer-content {
            gap: 20px !important;
          }
          
          .social-icon {
            width: 32px !important;
            height: 32px !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;