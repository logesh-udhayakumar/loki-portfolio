import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';

// Pages
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import CodingProfiles from './pages/CodingProfiles';
import Articles from './pages/Articles';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// To animate routes, we need a wrapper component that uses useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profiles" element={<CodingProfiles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Animated Background Blurs */}
        <div className="bg-blur-circle bg-blur-1"></div>
        <div className="bg-blur-circle bg-blur-2"></div>
        <div className="bg-blur-circle bg-blur-3"></div>
        
        {/* Particles */}
        <ParticleBackground />

        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main>
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
