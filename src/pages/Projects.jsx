import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Klear View",
    desc: "SaaS application for vendor management and payment processing with a centralized dashboard. Enables efficient tracking, automation, and management of vendor operations and transactions.",
    tech: ["Next.js", "TailwindCSS", "PostgreSQL", "Node.js"],
    github: "https://github.com/logesh-udhayakumar/klearview",
    demo: "https://klearview.vercel.app/",
    color: "#7928ca"
  },
  {
    id: 2,
    title: "AI Chat-bot",
    desc: "AI-powered chatbot application designed to understand user queries and provide intelligent, context-aware responses. Built to automate interactions, improve user engagement, and deliver efficient real-time support using modern AI tools.",
    tech: ["LLM APIs", "Node.js", "PostgreSQL"],
    github: "https://github.com/logesh-udhayakumar/chat-bot",
    demo: "#",
    color: "#ff0080"
  },
  {
    id: 3,
    title: "Wow Deals",
    desc: "E-commerce web application similar to Flipkart, enabling users to browse products, manage carts, and place orders through a streamlined interface. Includes features like product listing, search, order management, and secure checkout to simulate a complete online shopping experience.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/logesh-udhayakumar/wow-deals",
    demo: "#",
    color: "#00f0ff"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02, rotateX: 5, rotateY: -5 }}
      style={{
        background: 'var(--color-surface)',
        borderRadius: '20px',
        padding: '30px',
        border: '1px solid var(--color-border)',
        boxShadow: `0 10px 30px rgba(0,0,0,0.5)`,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative',
        overflow: 'hidden',
        transformStyle: 'preserve-3d', // 3D hover effect using framer-motion approach
      }}
      className="glass"
    >
      {/* Decorative Blur */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: project.color,
        filter: 'blur(80px)',
        opacity: 0.4,
        zIndex: -1
      }} />

      <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>{project.title}</h3>
      <p style={{ color: 'var(--color-text-secondary)', flexGrow: 1 }}>{project.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {project.tech.map(tech => (
          <span key={tech} style={{
            fontSize: '0.8rem',
            padding: '4px 10px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            color: project.color
          }}>
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '15px', paddingTop: '15px', borderTop: '1px solid var(--color-border)' }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub size={20} /> Code</a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: project.color }}><ExternalLink size={20} /> Live Demo</a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <PageWrapper>
      <div className="page-center">
        <h1 className="section-title">
          Selected <span className="text-gradient-secondary" style={{ color: 'var(--color-secondary)' }}>Projects</span>
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '30px',
          perspective: '1000px' // Perspective for 3D card tilt
        }}>
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>

      <style>{`
        .project-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          transition: all 0.2s;
        }
        .project-link:hover {
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>
    </PageWrapper>
  );
};

export default Projects;
