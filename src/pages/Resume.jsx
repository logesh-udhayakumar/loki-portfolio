import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { FileText, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <PageWrapper>
      <div className="page-center" style={{ alignItems: 'center' }}>
        <h1 className="section-title">
          My <span className="text-gradient-primary">Resume</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '600px',
            width: '100%',
            background: 'var(--color-surface)',
            borderRadius: '24px',
            padding: '50px 30px',
            textAlign: 'center',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--glow-primary)',
            position: 'relative',
            overflow: 'hidden'
          }}
          className="glass"
        >
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '200px',
            background: 'var(--color-primary)',
            filter: 'blur(100px)',
            opacity: 0.3,
            zIndex: -1
          }} />

          <FileText size={80} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />

          <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Logesh Udhayakumar</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '40px' }}>
            Software Engineer
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
            <motion.a
              href="https://drive.google.com/file/d/1KYhXBABoxp4VzlPbNdwcPNEsMF2TnNjl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="resume-btn primary"
            >
              <Eye size={20} /> View / Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .resume-btn {
          width: 80%;
          max-width: 300px;
          padding: 15px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          color: #fff;
          transition: box-shadow 0.3s;
        }
        .resume-btn.primary {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          box-shadow: 0 5px 20px rgba(121, 40, 202, 0.4);
        }
        .resume-btn.primary:hover {
          box-shadow: 0 8px 25px rgba(121, 40, 202, 0.6);
        }
        .resume-btn.secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border);
        }
        .resume-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--color-primary);
        }
      `}</style>
    </PageWrapper>
  );
};

export default Resume;
