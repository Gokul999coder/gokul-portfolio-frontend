import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner section-container">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="footer-name">Gokul M</span>
          <span className="logo-bracket"> /&gt;</span>
        </div>
        <p className="footer-copy">
          © 2026 Gokul M · Built with React + Vite · Designed with 💜
        </p>
        <div className="footer-links">
          <a href="https://github.com/Gokul999coder" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/gokul-m" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:itsgokul555@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
