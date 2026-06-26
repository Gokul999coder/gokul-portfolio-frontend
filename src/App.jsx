import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    // Page load animation
    setTimeout(() => setLoaded(true), 100);

    // Scroll progress bar
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setScrollPct(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      {/* Scroll progress indicator */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPct}%` }}
      />

      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* Back to top */}
      <button
        className={`back-to-top ${scrollPct > 20 ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
}
