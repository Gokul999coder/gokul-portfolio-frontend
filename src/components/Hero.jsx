import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  delay: Math.random() * 6,
  duration: Math.random() * 8 + 6,
  opacity: Math.random() * 0.5 + 0.1,
}));

export default function Hero() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Star particles */}
      <div className="hero-particles">
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className="hero-star"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" style={{
        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
      }} />
      <div className="hero-orb hero-orb-2" style={{
        transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`
      }} />
      <div className="hero-orb hero-orb-3" style={{
        transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.4}px)`
      }} />

      <div className="hero-content section-container">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-title">
          <span className="hero-greeting">Hi, I'm</span>
          <br />
          <span className="hero-name">prasanth M</span>
        </h1>

        <div className="hero-roles">
          <span className="role-prefix">&gt;_</span>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',  2000,
              'React.js Enthusiast',   2000,
              'UI/UX Craftsman',       2000,
              'Java Engineer',         2000,
              'Mobile App Builder',    2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
            className="role-text"
          />
        </div>

        <p className="hero-bio">
          4th-year B.Tech IT student crafting <em>pixel-perfect interfaces</em> and 
          <em> scalable backends</em>. I turn ideas into immersive digital experiences — 
          one component at a time.
        </p>

        <div className="hero-stats">
          {[
            { value: '5+', label: 'Projects Built' },
            { value: '2+', label: 'Internships' },
            { value: '7.69', label: 'CGPA' },
            { value: '∞',  label: 'Curiosity' },
          ].map(({ value, label }) => (
            <div key={label} className="stat-card">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
          <a
            className="btn-ghost"
            href="mailto:itsgokul555@gmail.com"
            title="Email"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a
            className="btn-ghost"
            href="https://github.com/Gokul999coder"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            className="btn-ghost"
            href="https://www.linkedin.com/in/gokul-m-bb087328a/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
