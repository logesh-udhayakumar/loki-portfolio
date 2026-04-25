import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { FileText, Eye, Download, Info, Maximize2, X } from 'lucide-react';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);
  const resumeGoogleDriveId = '1KYhXBABoxp4VzlPbNdwcPNEsMF2TnNjl';

  // Links
  const viewLink = `https://drive.google.com/file/d/${resumeGoogleDriveId}/view?usp=sharing`;
  const previewLink = `https://drive.google.com/file/d/${resumeGoogleDriveId}/preview`;
  const downloadLink = `https://drive.google.com/uc?export=download&id=${resumeGoogleDriveId}`;

  return (
    <PageWrapper>
      <div className="page-center" style={{ alignItems: 'center' }}>
        <h1 className="section-title">
          My <span className="text-gradient-primary">Resume</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="resume-container glass"
        >
          {/* Header Section */}
          <div className="resume-header">
            <div className="resume-icon-wrapper">
              <FileText size={40} color="var(--color-secondary)" />
            </div>
            <div className="resume-info">
              <h2>Logesh Udhayakumar</h2>
              <p>SOFTWARE ENGINEER</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="resume-actions">
            <motion.button
              onClick={() => setShowPreview(!showPreview)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`action-btn ${showPreview ? 'active' : ''}`}
            >
              {showPreview ? <X size={18} /> : <Eye size={18} />}
              {showPreview ? 'Close Preview' : 'Read Online'}
            </motion.button>

            <motion.a
              href={downloadLink}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="action-btn primary"
            >
              <Download size={18} /> Download PDF
            </motion.a>

            <motion.a
              href={viewLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="action-btn secondary"
            >
              <Maximize2 size={18} /> Open in Drive
            </motion.a>
          </div>

          {/* Preview Section */}
          <AnimatePresence>
            {showPreview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '600px' }}
                exit={{ opacity: 0, height: 0 }}
                className="resume-preview-wrapper"
              >
                <iframe
                  src={previewLink}
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  style={{ border: 'none', borderRadius: '12px' }}
                  title="Resume Preview"
                ></iframe>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .resume-container {
          max-width: 800px;
          width: 100%;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid var(--color-border);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .resume-header {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .resume-icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(121, 40, 202, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(121, 40, 202, 0.2);
        }

        .resume-info h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .resume-info p {
          color: var(--color-primary);
          font-weight: 600;
          letter-spacing: 2px;
          font-size: 0.9rem;
        }

        .resume-actions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 15px;
        }

        .action-btn {
          padding: 14px 20px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid var(--color-border);
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          text-decoration: none;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          border: none;
          box-shadow: 0 8px 20px rgba(121, 40, 202, 0.3);
        }

        .action-btn.active {
          background: var(--color-surface-hover);
          border-color: var(--color-primary);
        }

        .resume-preview-wrapper {
          width: 100%;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }

        .permission-note {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          align-items: center;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        .note-icon { color: var(--color-primary); flex-shrink: 0; }
        .highlight { color: #fff; font-weight: 600; }

        @media (max-width: 600px) {
          .resume-container { padding: 25px; }
          .resume-header { flex-direction: column; text-align: center; }
          .resume-actions { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageWrapper>
  );
};

export default Resume;


