import React, { useRef, useEffect } from 'react';
import './Experience.css';

const TIMELINE = [
  {
    year: '2023 — Present',
    type: 'education',
    title: 'B.Tech Information Technology',
    org: 'R.M.K Engineering College, Gummidipoondi',
    desc: 'Currently in 5th semester with CGPA 7.64. Focused on full-stack development, data structures, and software engineering fundamentals.',
    tags: ['Full Stack', 'Java', 'React', 'CGPA 7.64'],
    color: '#a855f7',
    icon: '🎓',
  },
  {
    year: '2025 — Ongoing',
    type: 'internship',
    title: 'Web Development Intern',
    org: 'Inamigos Foundation',
    desc: 'Selected for a 2-week intensive web development internship. Assigned to design and build a fully responsive personal portfolio website from scratch using React.js, Vite, HTML5, and CSS3 — applying modern UI principles and component-based architecture.',
    tags: ['React.js', 'Vite', 'HTML5', 'CSS3', 'Portfolio', 'Responsive Design'],
    color: '#06b6d4',
    icon: '🌟',
  },
  {
    year: '2025 — Ongoing',
    type: 'training',
    title: 'DN 5.0 Deep Skilling Program',
    org: 'Cognizant',
    desc: 'Intensive 7-week Java Full Stack Engineering coaching track covering SOLID principles, design patterns, PL/SQL, Angular, and real-world project building — part of placement preparation.',
    tags: ['Java', 'Angular', 'PL/SQL', 'Design Patterns', 'SOLID'],
    color: '#f472b6',
    icon: '💼',
  },
  {
    year: '2024',
    type: 'internship',
    title: 'Web Development Intern',
    org: 'Prodigy InfoTech',
    desc: 'Built responsive websites through hands-on development of real-world mini projects. Strengthened practical front-end skills with focus on clean UI and usability.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    color: '#fb923c',
    icon: '🚀',
  },
  {
    year: '2024',
    type: 'hackathon',
    title: 'GHCI Hackathon',
    org: 'Grace Hopper Celebration India',
    desc: 'Designed an AI-based expense categorization system with ML classification, NLP, and hybrid rule-based logic. Delivered actionable expense tracking insights.',
    tags: ['Python', 'NLP', 'ML', 'Scikit-learn', 'Pandas'],
    color: '#34d399',
    icon: '🏆',
  },
  {
    year: '2022 – 2023',
    type: 'education',
    title: 'Class XII',
    org: 'Ebenezer Marcus Mat. Hr. Sec. School, Chennai',
    desc: 'Completed higher secondary education with 80.3%. Built foundation in mathematics and science, sparking passion for engineering.',
    tags: ['80.3%'],
    color: '#67e8f9',
    icon: '📚',
  },
];

export default function Experience() {
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
    const items = ref.current?.querySelectorAll('.timeline-item');
    items?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref}>
      <div className="section-container">
        <p className="section-label reveal">Background</p>
        <h2 className="section-title reveal">
          My <span className="grad-text">journey</span> so far
        </h2>

        <div className="timeline">
          <div className="timeline-spine" />
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            >
              <div
                className="timeline-dot"
                style={{ background: item.color, boxShadow: `0 0 16px ${item.color}` }}
              >
                <span>{item.icon}</span>
              </div>

              <div className="timeline-card">
                <div className="tc-meta">
                  <span className="tc-year" style={{ color: item.color }}>{item.year}</span>
                  <span className="tc-type">{item.type}</span>
                </div>
                <h3 className="tc-title">{item.title}</h3>
                <p className="tc-org">{item.org}</p>
                <p className="tc-desc">{item.desc}</p>
                <div className="tc-tags">
                  {item.tags.map(t => (
                    <span
                      key={t}
                      className="tc-tag"
                      style={{ borderColor: `${item.color}40`, color: item.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
