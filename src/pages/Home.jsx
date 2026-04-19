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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
        justifyContent: 'center',
        paddingTop: '50px'
      }}>
        <div className="hero-container">

          {/* Background 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hero-3d-bg"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ff0080" />
              <FloatingShape />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </motion.div>

          {/* Foreground Text Details */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: '1.2rem', color: 'var(--color-accent)', marginBottom: '10px' }}
            >
              Hi there, I am
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', lineHeight: '1.2', marginBottom: '20px', wordBreak: 'break-word' }}
            >
              Logesh<br />
              <span className="text-gradient-primary">Udhayakumar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', marginBottom: '30px', maxWidth: '500px' }}
            >
              Builds scalable and efficient <strong style={{ color: '#fff' }}>web applications</strong> with strong backend expertise.
              Uses <strong style={{ color: '#fff' }}>AI tools</strong> to improve productivity and continuously learn new technologies.
            </motion.p>

            <motion.div
              style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/projects" style={{
                padding: '12px 24px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                borderRadius: '30px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: 'var(--glow-primary)',
                transition: 'transform 0.2s'
              }} className="hover-scale">
                View My Work <ArrowRight size={20} />
              </Link>
              <Link to="/resume" style={{
                padding: '12px 24px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '30px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }} className="hover-glass">
                Resume <Download size={20} />
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              style={{ display: 'flex', gap: '20px', marginTop: '40px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a href="https://github.com/logesh-udhayakumar" target="_blank" rel="noreferrer" className="social-icon"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/logesh-udhayakumar/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin size={24} /></a>
              <Link to="/contact" className="social-icon"><Mail size={24} /></Link>
            </motion.div>
          </motion.div>
        </div>

        {/* About Module (smooth entrance) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: '100px', background: 'var(--color-surface)', borderRadius: '24px', border: '1px solid var(--color-border)' }}
          className="glass about-card"
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About <span className="text-gradient-accent">Me</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              I am a software engineer focused on building efficient, scalable, and reliable applications.
              I pay close attention to performance, data integrity, and clean code practices. I prefer solving problems with clear, logical approaches rather than overcomplicating solutions. I actively use AI tools to improve development efficiency, assist in problem-solving,
              and accelerate learning, while continuously upgrading my skills to stay aligned with evolving technologies.
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
        .hero-container {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 80vh;
          width: 100%;
        }
        .hero-3d-bg {
          position: absolute;
          top: 50%;
          right: 0%;
          transform: translateY(-50%);
          width: 600px;
          height: 600px;
          z-index: 0;
          opacity: 0.7;
        }
        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
        }
        .hover-scale:hover { transform: scale(1.05); }
        .hover-glass:hover { background: var(--color-surface-hover); border-color: var(--color-primary); }
        .social-icon { color: var(--color-text-secondary); transition: color 0.3s, transform 0.3s; }
        .social-icon:hover { color: var(--color-primary); transform: translateY(-3px); }
        .stat-card { padding: 15px 20px; background: rgba(0,0,0,0.2); border-left: 4px solid var(--color-primary); border-radius: 8px; }
        .about-card {
          padding: 60px;
        }
        @media (max-width: 768px) {
          .hero-container { justify-content: center; overflow: hidden; margin: 0 -24px; width: calc(100% + 48px); }
          .hero-content { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 24px; }
          .hero-content a { justify-content: center; }
          .about-card { padding: 30px 20px; }
          .hero-3d-bg {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            opacity: 0.5; /* lower opacity so text is fully readable over it */
          }
        }
      `}</style>
    </PageWrapper>
  );
};

export default Home;
