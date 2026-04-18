import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code, BookOpen, FileText, Send, Menu, X, Share2, Rocket } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/skills', label: 'Skills', icon: Code },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/profiles', label: 'Profiles', icon: Share2 },
  { path: '/resume', label: 'Resume', icon: FileText },
  { path: '/contact', label: 'Contact', icon: Send }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          padding: scrolled ? '10px 0' : '20px 0',
          background: scrolled ? 'rgba(3, 0, 20, 0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {/* Logo */}
          <NavLink to="/" style={{
            fontSize: '1.5rem',
            fontWeight: '900',
            letterSpacing: '-1px',
            fontFamily: 'var(--font-heading)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span className="text-gradient-primary">LU.</span>
            <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-text-secondary)', display: 'none' }} className="hide-mobile">Logesh Udhayakumar</span>
          </NavLink>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '10px' }} className="nav-desktop">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  background: isActive ? 'var(--color-surface-hover)' : 'transparent',
                  border: isActive ? '1px solid var(--color-border)' : '1px solid transparent',
                  transition: 'all 0.2s',
                  position: 'relative'
                })}
              >
                {({ isActive }) => (
                  <>
                    <link.icon size={16} color={isActive ? 'var(--color-primary)' : 'currentColor'} />
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--color-primary)',
                          zIndex: -1
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              display: 'none', // Controlled via CSS later
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: '20px',
              right: '20px',
              background: 'var(--color-bg)',
              zIndex: 99,
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
            className="glass mobile-menu-overlay"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-primary)',
                  background: isActive ? 'var(--color-surface-hover)' : 'transparent',
                })}
              >
                <link.icon size={20} />
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 968px) {
          .nav-desktop { display: none !important; }
          .mobile-toggle { display: block !important; }
          .hide-mobile { display: none !important; }
        }
        @media (min-width: 969px) {
          .hide-mobile { display: inline-block !important; }
          .mobile-menu-overlay { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
