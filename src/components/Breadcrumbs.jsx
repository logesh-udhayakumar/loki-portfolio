import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Breadcrumb" 
      style={{ 
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '6px',
        fontSize: 'min(0.85rem, 3.2vw)',
        color: 'var(--color-text-secondary)',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto 2.5rem',
        padding: '0 0 12px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        boxSizing: 'border-box',
        overflow: 'hidden', // Prevent any child from leaking out
        textOverflow: 'ellipsis'
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', transition: 'color 0.2s' }} className="hover-primary">
        <Home size={14} style={{ marginRight: '4px' }} /> Home
      </Link>
      
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <React.Fragment key={to}>
            <ChevronRight size={14} style={{ opacity: 0.5 }} />
            {last ? (
              <span style={{ color: 'var(--color-primary)', fontWeight: '600', textTransform: 'capitalize' }}>
                {value.replace(/-/g, ' ')}
              </span>
            ) : (
              <Link to={to} style={{ textTransform: 'capitalize', transition: 'color 0.2s' }} className="hover-primary">
                {value.replace(/-/g, ' ')}
              </Link>
            )}
          </React.Fragment>
        );
      })}

      <style>{`
        .hover-primary:hover {
          color: var(--color-primary);
        }
      `}</style>
    </motion.nav>
  );
};

export default Breadcrumbs;
