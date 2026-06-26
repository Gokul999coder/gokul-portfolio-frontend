import React, { useEffect, useRef } from 'react';
import './About.css';

const HIGHLIGHTS = [
  { icon: '🎓', title: 'B.Tech IT', sub: 'R.M.K Engineering College', extra: 'CGPA: 7.69/ 10' },
  { icon: '💻', title: 'Full Stack Dev', sub: 'React + Node + Java', extra: 'Frontend-first mindset' },
  { icon: '📱', title: 'Mobile Dev', sub: 'React Native + Firebase', extra: 'Cross-platform apps' },
  { icon: '🎨', title: 'UI/UX Design', sub: 'Figma + Canva', extra: 'Pixel-perfect interfaces' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const children = ref.current?.querySelectorAll('.reveal');
    children?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref}>
      <div className="section-container">
        <div className="about-grid">

          {/* Left — Text */}
          <div className="about-text">
            <p className="section-label reveal">About Me</p>
            <h2 className="section-title reveal">
              Building things people <span className="grad-text">love to use</span>
            </h2>
            <p className="about-para reveal">
              I'm a passionate 4th-year B.Tech Information Technology student at 
              R.M.K Engineering College, Chennai. My journey in tech started with a 
              curiosity about how things work on the web — and quickly grew into a 
              deep love for creating experiences that are both beautiful and functional.
            </p>
            <p className="about-para reveal">
              I specialise in <strong>React.js</strong> frontends and <strong>Java</strong> backends, 
              and I've shipped real-world projects like a Smart Bus Tracking mobile app 
              using React Native + Firebase, and an RMK Smart Portal for college administration. 
              When I'm not coding, I'm obsessing over UI details in Figma or competing in hackathons.
            </p>
            <div className="about-fun-facts reveal">
              <div className="fun-fact">
                <span className="fun-icon">📍</span>
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className="fun-fact">
                <span className="fun-icon">🌐</span>
                <span>Tamil & English (Fluent)</span>
              </div>
              <div className="fun-fact">
                <span className="fun-icon">🏆</span>
                <span>Class X — 100%</span>
              </div>
              <div className="fun-fact">
                <span className="fun-icon">⚡</span>
                <span>Always learning</span>
              </div>
            </div>
          </div>

          {/* Right — Cards */}
          <div className="about-cards">
            {HIGHLIGHTS.map((item, i) => (
              <div
                key={item.title}
                className="highlight-card reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="hc-icon">{item.icon}</div>
                <div className="hc-body">
                  <div className="hc-title">{item.title}</div>
                  <div className="hc-sub">{item.sub}</div>
                  <div className="hc-extra">{item.extra}</div>
                </div>
                <div className="hc-glow" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
