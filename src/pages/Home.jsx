import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FloatingShape = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial
        color="#7928ca"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
      />
    </Sphere>
  );
};

const Home = () => {
  return (
    <PageWrapper>
      {/*
        ┌─────────────────────────────────────────────┐
        │  home-sections  (position: relative)        │
        │  ┌──────────────┐  ┌──────────────────────┐ │
        │  │  Hero text   │  │  3D Canvas (absolute)│ │
        │  │              │  │  spans hero + about  │ │
        │  └──────────────┘  └──────────────────────┘ │
        │  ┌──────────────────────────────────────┐   │
        │  │  About Me card                       │   │
        │  └──────────────────────────────────────┘   │
        └─────────────────────────────────────────────┘
      */}
      <div className="home-sections">

        {/* 3D Canvas — absolutely positioned to span hero + about */}
        <div className="hero-3d-bg">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ff0080" />
            <FloatingShape />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          </Canvas>
        </div>

        {/* Mobile-only CSS orb (no Canvas overhead) */}
        <div className="hero-orb-mobile" />

        {/* ── Hero Section ── */}
        <div className="hero-wrapper">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '8px' }}
            >
              Hi there, I am
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontSize: 'clamp(2.2rem, 10vw, 5rem)', lineHeight: '1.15', marginBottom: '16px', wordBreak: 'break-word' }}
            >
              Logesh<br />
              <span className="text-gradient-primary">Udhayakumar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '28px', maxWidth: '480px' }}
            >
              Builds scalable and efficient <strong style={{ color: '#fff' }}>web applications</strong> with strong backend expertise.
              Uses <strong style={{ color: '#fff' }}>AI tools</strong> to improve productivity and continuously learn new technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/projects" className="btn-primary hover-scale">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link to="/resume" className="btn-secondary hover-glass">
                Resume <Download size={18} />
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a href="https://github.com/logesh-udhayakumar" target="_blank" rel="noreferrer" className="social-icon"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/logesh-udhayakumar/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin size={22} /></a>
              <Link to="/contact" className="social-icon"><Mail size={22} /></Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── About Me Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="about-card"
        >
          <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', marginBottom: '20px' }}>
            About <span className="text-gradient-accent">Me</span>
          </h2>
          <div className="about-grid">
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>
              I am a software engineer focused on building efficient, scalable, and reliable applications.
              I pay close attention to performance, data integrity, and clean code practices. I prefer solving
              problems with clear, logical approaches rather than overcomplicating solutions. I actively use AI
              tools to improve development efficiency, assist in problem-solving, and accelerate learning, while
              continuously upgrading my skills to stay aligned with evolving technologies.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div className="stat-card">
                <h3 className="text-gradient-primary" style={{ fontSize: '2rem' }}>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3 className="text-gradient-accent" style={{ fontSize: '2rem' }}>10+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        /* ══════════════════════════════════════════
           SHARED CONTAINER — canvas spans both sections
           ══════════════════════════════════════════ */
        .home-sections {
          position: relative;
          width: 100%;
        }

        /* ── 3D Canvas — fixed square straddling hero bottom + about top ── */
        .hero-3d-bg {
          position: absolute;
          top: 20%;         /* starts partway into the hero */
          right: -80px;
          width: 620px;
          height: 620px;
          z-index: 0;
          opacity: 0.85;
        }
        .hero-orb-mobile { display: none; }

        /* ── Hero Layout ── */
        .hero-wrapper {
          width: 100%;
          min-height: calc(100vh - 100px);
          display: flex;
          align-items: center;
          position: relative;
          z-index: 1;
          pointer-events: none; /* pass mouse events through to the canvas */
        }
        .hero-content {
          width: 55%;         /* occupy left half; canvas lives on the right */
          display: flex;
          flex-direction: column;
          pointer-events: none; /* pass clicks through to canvas */
        }
        /* Re-enable pointer events on interactive children */
        .hero-content a,
        .hero-content button,
        .hero-content .btn-primary,
        .hero-content .btn-secondary,
        .hero-content .social-icon {
          pointer-events: auto;
        }

        /* ── CTA Buttons ── */
        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          border-radius: 30px;
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
          box-shadow: var(--glow-primary);
          transition: transform 0.2s;
          white-space: nowrap;
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 30px;
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
          transition: all 0.2s;
          white-space: nowrap;
        }

        /* ── Social Icons ── */
        .hero-socials {
          display: flex;
          gap: 20px;
          margin-top: 32px;
        }
        .social-icon { color: var(--color-text-secondary); transition: color 0.3s, transform 0.3s; }
        .social-icon:hover { color: var(--color-primary); transform: translateY(-3px); }

        /* ── Hover effects ── */
        .hover-scale:hover { transform: scale(1.05); }
        .hover-glass:hover { background: var(--color-surface-hover) !important; border-color: var(--color-primary) !important; }

        /* ── About Card ── */
        .about-card {
          position: relative;
          z-index: 1;
          margin-top: 60px;
          margin-bottom: 40px;
          padding: 60px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: 30px;
        }
        .stat-card {
          padding: 15px 20px;
          background: rgba(0,0,0,0.2);
          border-left: 4px solid var(--color-primary);
          border-radius: 8px;
        }

        /* ════════════════════════════
           MOBILE  ≤ 768px
           ════════════════════════════ */
        @media (max-width: 768px) {
          /* Hide heavy 3D canvas on mobile */
          .hero-3d-bg { display: none !important; }

          /* CSS orb — subtle glow, safely inside viewport */
          .hero-orb-mobile {
            display: block;
            position: absolute;
            top: 10%;
            right: -40px;           /* less bleed so it stays visible */
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle at 40% 40%, #7928ca, #ff0080 70%, transparent);
            filter: blur(60px);
            opacity: 0.25;
            z-index: 0;
            pointer-events: none;
          }

          /* RE-ENABLE pointer events on mobile — no canvas here, no need to pass through */
          .hero-wrapper {
            min-height: calc(100vh - 70px);
            align-items: flex-start;
            padding-top: 16px;
            pointer-events: auto !important;
          }
          .hero-content {
            width: 100% !important;
            align-items: center;
            text-align: center;
            pointer-events: auto !important;
          }
          .hero-content p { font-size: 0.95rem !important; max-width: 100% !important; }

          /* Buttons: equal-width, stacked, centered */
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 260px;
            gap: 10px;
          }
          .btn-primary,
          .btn-secondary {
            width: 260px !important;
            justify-content: center;
            padding: 14px 20px;
          }

          .hero-socials { justify-content: center; margin-top: 24px; }

          /* About Card */
          .about-card { margin-top: 40px; padding: 28px 16px; }
          .about-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>
    </PageWrapper>
  );
};

export default Home;
