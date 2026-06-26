import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Smart Bus Tracking & Pass App',
    tagline: 'Real-time GPS tracking for tier 2/3 cities',
    description:
      'A cross-platform mobile application for real-time bus tracking, live route visualization, GPS status monitoring, and complete pass management with payment integration. Built for drivers and commuters in under-served cities.',
    tags: ['React Native', 'Firebase', 'Expo', 'GPS', 'Real-time'],
    gradient: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    icon: '🚌',
    github: 'https://github.com/Gokul999coder',
    featured: true,
    badge: 'Featured',
    points: [
      'Live GPS bus tracking with driver coordinates',
      'Multi-stage bus pass application workflow',
      'Simulated payment integration (Razorpay-ready)',
      'Optimistic UI with notification system',
    ],
  },
  {
    id: 2,
    title: 'RMK Smart Portal',
    tagline: 'Digitalized college administration system',
    description:
      'A web-based portal to digitalize and automate college administrative processes with a role-based approval workflow for students and faculty. Features real-time status tracking and approval history.',
    tags: ['React.js', 'Node.js', 'MySQL', 'Role-Based Auth'],
    gradient: 'linear-gradient(135deg, #0891b2, #a855f7)',
    icon: '🏫',
    github: 'https://github.com/Gokul999coder',
    featured: false,
    badge: 'Web App',
    points: [
      'Role-based access for students and faculty',
      'Real-time approval status tracking',
      'Responsive React.js interface',
      'Admin dashboard with history logs',
    ],
  },
  {
    id: 3,
    title: 'GHCI Expense Categorizer',
    tagline: 'AI-powered transaction classification',
    description:
      'An ML-powered system to automatically classify user transactions into meaningful expense categories using NLP and rule-based logic. Built for the Grace Hopper Celebration India hackathon.',
    tags: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'ML'],
    gradient: 'linear-gradient(135deg, #f472b6, #7c3aed)',
    icon: '🧠',
    github: 'https://github.com/Gokul999coder',
    featured: false,
    badge: 'Hackathon',
    points: [
      'NLP with TF-IDF for text classification',
      'Hybrid ML + rule-based approach',
      'Pandas-powered data pipeline',
      'Structured expense tracking insights',
    ],
  },
  {
    id: 4,
    title: 'Prodigy Web Projects',
    tagline: 'Responsive mini-projects — internship',
    description:
      'A collection of responsive websites and mini projects built during the Prodigy Web Development internship. Focus on clean UI, usability, and real-world front-end skills.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    icon: '🌐',
    github: 'https://github.com/Gokul999coder',
    featured: false,
    badge: 'Internship',
    points: [
      'Responsive layouts across all screen sizes',
      'Clean UI with accessibility focus',
      'Interactive JavaScript components',
      'Real-world project delivery',
    ],
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`project-card ${project.featured ? 'featured' : ''} ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient bar */}
      <div className="project-bar" style={{ background: project.gradient }} />

      <div className="project-body">
        <div className="project-header">
          <span className="project-icon">{project.icon}</span>
          <span className="project-badge">{project.badge}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>

        <ul className={`project-points ${hovered ? 'show' : ''}`}>
          {project.points.map(pt => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>

        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="project-glow"
        style={{ background: project.gradient, opacity: hovered ? 0.08 : 0 }}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <p className="section-label reveal">My Work</p>
        <h2 className="section-title reveal">
          Projects I'm <span className="grad-text">proud of</span>
        </h2>
        <p className="projects-subtitle reveal">
          Real-world applications built with genuine care for user experience.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
