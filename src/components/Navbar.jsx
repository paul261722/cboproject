import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Profile image path - updated with .jpg extension
  const profileImagePath = '/static/profile.jpg';

  const styles = {
    navbar: {
      background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)',
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled 
        ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
        : '0 2px 20px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 0',
      transition: 'padding 0.3s ease'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: '1.8rem',
      fontWeight: '700',
      color: 'white',
      position: 'relative'
    },
    logoText: {
      color: 'white',
      transition: 'color 0.3s ease'
    },
    logoSub: {
      color: '#3498db',
      marginLeft: '5px',
      transition: 'color 0.3s ease'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px'
    },
    navLink: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: '600',
      fontSize: '1rem',
      position: 'relative',
      padding: '8px 0',
      transition: 'all 0.3s ease',
      opacity: 0.9
    },
    activeNavLink: {
      color: '#3498db',
      opacity: 1
    },
    mobileMenu: {
      display: 'none',
      flexDirection: 'column',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px',
      position: 'relative',
      zIndex: 1001
    },
    bar: {
      width: '25px',
      height: '3px',
      background: 'white',
      margin: '3px 0',
      transition: 'all 0.3s ease',
      transformOrigin: 'center'
    },
    profileContainer: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '20px'
    },
    profileImage: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #3498db',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    mobileProfileContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    },
    mobileProfileImage: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #3498db',
      marginBottom: '10px'
    },
    profileName: {
      color: 'white',
      fontSize: '0.9rem',
      fontWeight: '500',
      marginTop: '5px'
    }
  };

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.navbar}>
      <div className="container">
        <div style={styles.navContainer}>
          {/* Logo */}
          <Link 
            to="/" 
            style={styles.logo}
            onClick={closeMenu}
          >
            <span style={styles.logoText}>Youth Lead</span>
            <span style={styles.logoSub}>CBO</span>
          </Link>

          {/* Desktop Navigation */}
          <div style={styles.navLinks} className="desktop-nav">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/projects', label: 'Projects' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.navLink,
                  ...(isActive(item.path) ? styles.activeNavLink : {})
                }}
                className="nav-link-item"
              >
                {item.label}
                {isActive(item.path) && (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: '#3498db',
                    borderRadius: '2px',
                    transform: 'scaleX(1)',
                    transition: 'transform 0.3s ease'
                  }}></div>
                )}
                {!isActive(item.path) && (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: '#3498db',
                    borderRadius: '2px',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 0.3s ease'
                  }}></div>
                )}
              </Link>
            ))}
            
            {/* Profile Photo for Desktop */}
            <div style={styles.profileContainer}>
              <img 
                src={profileImagePath} 
                alt="Profile" 
                style={styles.profileImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%233498db'/%3E%3Ctext x='20' y='25' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3EYL%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={styles.mobileMenu} 
            onClick={toggleMenu} 
            className="menu-toggle"
            aria-label="Toggle menu"
          >
            <span style={{
              ...styles.bar,
              transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}></span>
            <span style={{
              ...styles.bar,
              opacity: isOpen ? 0 : 1
            }}></span>
            <span style={{
              ...styles.bar,
              transform: isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
            }}></span>
          </button>

          {/* Mobile Menu Overlay */}
          <div 
            className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
            onClick={closeMenu}
          ></div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
            <div className="mobile-nav-content">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/projects', label: 'Projects' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/contact', label: 'Contact' }
              ].map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    ...styles.navLink,
                    ...(isActive(item.path) ? styles.activeNavLink : {})
                  }}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span style={{
                    display: 'inline-block',
                    marginRight: '15px',
                    fontSize: '1.2rem'
                  }}>
                    {index + 1}.
                  </span>
                  {item.label}
                  {isActive(item.path) && (
                    <div style={{
                      position: 'absolute',
                      right: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '8px',
                      height: '8px',
                      background: '#3498db',
                      borderRadius: '50%'
                    }}></div>
                  )}
                </Link>
              ))}
              
              {/* Profile Photo for Mobile */}
              <div style={styles.mobileProfileContainer}>
                <img 
                  src={profileImagePath} 
                  alt="Profile" 
                  style={styles.mobileProfileImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3E%3Ccircle cx='35' cy='35' r='35' fill='%233498db'/%3E%3Ctext x='35' y='42' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3EYL%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div style={styles.profileName}>Youth Lead CBO</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Logo hover effect */
        .container a:hover span:first-child {
          color: #3498db;
        }
        
        .container a:hover span:last-child {
          color: #e74c3c;
        }

        /* Desktop link hover effects */
        .desktop-nav .nav-link-item:hover {
          color: #3498db !important;
          transform: translateY(-2px);
          opacity: 1 !important;
        }

        .desktop-nav .nav-link-item:hover > div:last-child {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* Profile image hover effect */
        .desktop-nav img:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(52, 152, 219, 0.5);
          border-color: #e74c3c;
        }

        /* Mobile menu overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* Mobile navigation */
        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
          z-index: 1000;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
        }

        .mobile-nav.open {
          right: 0;
        }

        .mobile-nav-content {
          padding: 100px 30px 40px;
          display: flex;
          flex-direction: column;
          gap: 25px;
          height: 100%;
        }

        .mobile-nav-link {
          color: #ecf0f1 !important;
          font-size: 1.2rem !important;
          padding: 15px 20px !important;
          border-radius: 10px;
          transition: all 0.3s ease !important;
          display: flex;
          align-items: center;
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border-left: 3px solid transparent;
        }

        .mobile-nav-link:hover {
          background: rgba(52, 152, 219, 0.2) !important;
          transform: translateX(10px) !important;
          border-left: 3px solid #3498db;
        }

        .mobile-nav-link.active {
          background: rgba(52, 152, 219, 0.3) !important;
          color: #3498db !important;
          border-left: 3px solid #3498db;
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .desktop-nav {
            gap: 25px !important;
          }
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }

          .menu-toggle {
            display: flex !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-nav {
            width: 85%;
          }

          .mobile-nav-content {
            padding: 80px 20px 40px;
          }

          .mobile-nav-link {
            font-size: 1.1rem !important;
            padding: 12px 15px !important;
          }

          .logo {
            font-size: 1.5rem !important;
          }
          
          .navbar {
            padding: 10px 0 !important;
          }
        }

        /* Animation for mobile menu links */
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-nav.open .mobile-nav-link {
          animation: slideInRight 0.4s ease forwards;
        }

        .mobile-nav.open .mobile-nav-link:nth-child(1) { animation-delay: 0.1s; }
        .mobile-nav.open .mobile-nav-link:nth-child(2) { animation-delay: 0.2s; }
        .mobile-nav.open .mobile-nav-link:nth-child(3) { animation-delay: 0.3s; }
        .mobile-nav.open .mobile-nav-link:nth-child(4) { animation-delay: 0.4s; }
        .mobile-nav.open .mobile-nav-link:nth-child(5) { animation-delay: 0.5s; }

        /* Animation for mobile profile */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav.open .mobile-profile-container {
          animation: fadeInUp 0.5s ease forwards;
          animation-delay: 0.6s;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;