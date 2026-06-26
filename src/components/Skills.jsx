import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    color: '#a855f7',
    skills: [
      { name: 'React.js',     level: 90, icon: '⚛️' },
      { name: 'JavaScript',   level: 85, icon: '🟨' },
      { name: 'HTML5 / CSS3', level: 95, icon: '🎨' },
      { name: 'React Native', level: 75, icon: '📱' },
      { name: 'Figma',        level: 70, icon: '✏️' },
    ],
  },
  {
    category: 'Backend',
    color: '#06b6d4',
    skills: [
      { name: 'Java',         level: 82, icon: '☕' },
      { name: 'Node.js',      level: 68, icon: '🟢' },
      { name: 'Express.js',   level: 65, icon: '🚀' },
      { name: 'Python',       level: 55, icon: '🐍' },
      { name: 'C',            level: 50, icon: '⚙️' },
    ],
  },
  {
    category: 'Database & Tools',
    color: '#f472b6',
    skills: [
      { name: 'Firebase',     level: 78, icon: '🔥' },
      { name: 'MySQL',        level: 72, icon: '🗄️' },
      { name: 'Git / GitHub', level: 85, icon: '🐙' },
      { name: 'Canva',        level: 80, icon: '🖌️' },
      { name: 'PL/SQL',       level: 60, icon: '📊' },
    ],
  },
];

const TECH_BADGES = [
  'React', 'JavaScript', 'Java', 'Node.js', 'HTML5', 'CSS3',
  'Firebase', 'MySQL', 'Git', 'Figma', 'React Native', 'Express',
  'Python', 'Canva', 'REST API', 'Responsive Design',
];

function SkillBar({ name, level, icon, color, visible }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-bar-name">
          <span className="skill-icon">{icon}</span>
          {name}
        </span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: visible ? `0 0 12px ${color}55` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="section-container">
        <p className="section-label reveal">Technical Skills</p>
        <h2 className="section-title reveal">
          Tools I <span className="grad-text">master</span>
        </h2>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div
              key={cat.category}
              className={`skill-category reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${ci * 0.15}s` }}
            >
              <div
                className="skill-cat-label"
                style={{ color: cat.color, borderColor: `${cat.color}40` }}
              >
                {cat.category}
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={cat.color}
                    visible={visible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className="tech-badges-section">
          <p className="tech-badges-label">Also familiar with</p>
          <div className="tech-badges">
            {TECH_BADGES.map((t, i) => (
              <span
                key={t}
                className="tech-badge"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
