import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { ExternalLink, Code2, Star } from 'lucide-react';

const profiles = [
  {
    platform: "LeetCode",
    username: "@logesh-udhayakumar",
    stats: ["300+ Problems Solved", "Top 10% in Contests", "Badges: 5"],
    link: "https://leetcode.com/u/logesh-udhayakumar/",
    color: "#FFA116",
    icon: Code2
  },
  {
    platform: "GitHub",
    username: "@logesh-udhayakumar",
    stats: ["50+ Repositories", "1k+ Contributions", "200+ Stars"],
    link: "https://github.com/logesh-udhayakumar",
    color: "#ffffff",
    icon: Star
  },
  {
    platform: "HackerRank",
    username: "@logeshda890",
    stats: ["5 Star Problem Solving", "Gold Badge in React"],
    link: "https://www.hackerrank.com/profile/logeshda890",
    color: "#00EA64",
    icon: Code2
  }
];

const CodingProfiles = () => {
  return (
    <PageWrapper>
      <div className="page-center">
        <h1 className="section-title">
          Coding <span className="text-gradient-accent">Profiles</span>
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '30px',
        }}>
          {profiles.map((profile, idx) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15, type: "spring" }}
              whileHover={{ y: -10 }}
              style={{
                background: 'var(--color-surface)',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid var(--color-border)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="glass profile-card"
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: profile.color,
                boxShadow: `0 0 15px ${profile.color}`,
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <profile.icon size={30} color={profile.color} />
                <a href={profile.link} target="_blank" rel="noopener noreferrer" className="external-link" aria-label={`Link to ${profile.platform}`}>
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{profile.platform}</h3>
              <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 500 }}>
                {profile.username}
              </p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {profile.stats.map(stat => (
                  <li key={stat} style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: profile.color }} />
                    {stat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .profile-card { transition: box-shadow 0.3s; }
        .profile-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .external-link {
          color: var(--color-text-secondary);
          transition: all 0.2s;
        }
        .external-link:hover {
          color: #fff;
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </PageWrapper>
  );
};

export default CodingProfiles;
