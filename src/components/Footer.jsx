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

  // Updated social links with actual URLs
  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      label: 'Facebook', 
      url: 'https://www.facebook.com/share/17eGCNTpJt/',
      platform: 'facebook',
      color: '#1877f2'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ), 
      label: 'Twitter', 
      url: 'https://x.com/YouthLeadCBO', 
      platform: 'twitter',
      color: '#1da1f2'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      label: 'Instagram', 
      url: 'https://www.instagram.com/youthleadkisumu?igsh=MWZ4OGlubHdmMGUzeQ==', 
      platform: 'instagram',
      color: '#e4405f'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ), 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/posts/youth-lead-cbo_youthleadcbo-youthparticipation-fiscalplanning-activity-7297958717273104384-57Ls', 
      platform: 'linkedin',
      color: '#0077b5'
    }
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
              One of Africa's most innovative youth-led platforms for social transformation, 
              merging leadership development, entrepreneurship, and community-driven impact.
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
                <span style={{ color: '#3498db' }}>📧</span> youthleadcbo@gmail.com
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
                  className={`social-icon ${social.platform}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: '0.8rem',
              marginTop: '15px',
              lineHeight: '1.5'
            }}>
              Follow us for updates on our youth empowerment initiatives and community impact.
            </p>
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
            Building Africa's Future Leaders | Cultivating Change-Makers
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .social-icon:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .social-icon.facebook:hover {
          background: #1877f2 !important;
          color: white !important;
        }
        
        .social-icon.twitter:hover {
          background: #1da1f2 !important;
          color: white !important;
        }
        
        .social-icon.instagram:hover {
          background: #e4405f !important;
          color: white !important;
        }
        
        .social-icon.linkedin:hover {
          background: #0077b5 !important;
          color: white !important;
        }
        
        .footer-links a:hover {
          color: #3498db !important;
          transform: translateX(5px);
          padding-left: 5px;
        }
        
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
          
          .contact-info p {
            justify-content: center;
          }
          
          .footer-links li {
            display: inline-block;
            margin-right: 15px;
          }
          
          .footer-links li:last-child {
            margin-right: 0;
          }
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
          }
          
          .social-icon svg {
            width: 16px !important;
            height: 16px !important;
          }
          
          .footer-links li {
            display: block;
            margin-right: 0;
            margin-bottom: 10px;
          }
        }
        
        /* Animation for social icons */
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .social-icon:hover {
          animation: pulse 0.3s ease;
        }
        
        /* Description fade in */
        .footer-section:first-child p {
          transition: color 0.3s ease;
        }
        
        .footer-section:first-child:hover p {
          color: rgba(255, 255, 255, 0.9) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;