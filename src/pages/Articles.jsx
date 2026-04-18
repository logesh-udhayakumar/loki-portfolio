import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const articlesData = [
  {
    id: 1,
    title: "Understanding React Server Components",
    excerpt: "A deep dive into how React Server Components (RSC) change the way we build web applications in Next.js 13+.",
    date: "Oct 15, 2023",
    readTime: "8 min read",
    link: "#",
    category: "React"
  },
  {
    id: 2,
    title: "Mastering Framer Motion for Cinematic UIs",
    excerpt: "Learn how to orchestrate complex animations and fluid page transitions using Framer Motion.",
    date: "Sep 02, 2023",
    readTime: "5 min read",
    link: "#",
    category: "Animation"
  },
  {
    id: 3,
    title: "Three.js and React Fiber: A Match Made in 3D",
    excerpt: "How to integrate 3D models seamlessly into your React applications without tanking performance.",
    date: "Aug 10, 2023",
    readTime: "12 min read",
    link: "#",
    category: "WebGL"
  }
];

const Articles = () => {
  return (
    <PageWrapper>
      <div className="page-center">
        <h1 className="section-title">
          Featured <span className="text-gradient-secondary">Articles</span>
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          {articlesData.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ x: 10, background: 'rgba(255, 255, 255, 0.05)' }}
              style={{
                padding: '30px',
                background: 'var(--color-surface)',
                borderRadius: '16px',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              className="glass"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  background: 'rgba(255,255,255,0.1)', 
                  fontSize: '0.8rem',
                  color: 'var(--color-accent)'
                }}>
                  {article.category}
                </span>
                
                <div style={{ display: 'flex', gap: '15px', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={14} /> {article.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14} /> {article.readTime}</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#fff' }}>{article.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>{article.excerpt}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 600, marginTop: '10px' }}>
                Read Article <ArrowRight size={16} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Articles;
