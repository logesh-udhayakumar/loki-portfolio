import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const skillsData = [
  {
    category: "Frontend", items: [
      { name: "React / Next.js", level: 75 },
      { name: "TypeScript", level: 65 },
      { name: "Core HTML, CSS, Javascript", level: 85 },
      { name: "Tailwind CSS", level: 65 }
    ]
  },
  {
    category: "Backend", items: [
      { name: "Java", level: 75 },
      { name: "C Programming", level: 60 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 70 }
    ]
  },
  {
    category: "Tools & DevOps", items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Postman", level: 75 },
      { name: "AWS", level: 60 },
      { name: "Nifi Automation tool", level: 80 }
    ]
  }
];

const SkillBar = ({ name, level, delay }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontWeight: 500 }}>{name}</span>
        <span style={{ color: 'var(--color-primary)' }}>{level}%</span>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        background: 'var(--color-surface)',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
            borderRadius: '4px',
            boxShadow: 'var(--glow-primary)'
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <PageWrapper>
      <div className="page-center">
        <h1 className="section-title">
          My <span className="text-gradient-primary">Skills</span>
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '40px'
        }}>
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              style={{
                background: 'var(--color-surface)',
                padding: '30px',
                borderRadius: '20px',
                border: '1px solid var(--color-border)'
              }}
              className="glass"
            >
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '25px',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '10px'
              }}>
                {category.category}
              </h2>

              <div>
                {category.items.map((skill, sIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={(idx * 0.2) + (sIdx * 0.1)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
