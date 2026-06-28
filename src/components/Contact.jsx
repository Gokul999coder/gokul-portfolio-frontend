import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const CONTACT_LINKS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'itsgokul555@gmail.com',
    href: 'mailto:itsgokul555@gmail.com',
    color: '#a855f7',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.6 4.35 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.6a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 73587 30797',
    href: 'tel:+917358730797',
    color: '#06b6d4',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/gokul-m',
    href: 'https://linkedin.com/in/gokul-m',
    color: '#f472b6',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Gokul999coder',
    href: 'https://github.com/Gokul999coder',
    color: '#34d399',
  },
];

// ─── Paste your EmailJS credentials here ───────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_bp2fgk7';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_yjfell5';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'qpyVNwT5sVM-NGRPQ';   // e.g. 'user_XXXXXXXXXXXXXXX'
// ───────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const ref = useRef(null);

  // status: 'idle' | 'loading' | 'success' | 'error'
  const [status,   setStatus]   = useState('idle');
  const [errMsg,   setErrMsg]   = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrMsg('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrMsg('Failed to send. Please try again later.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" ref={ref}>
      <div className="section-container">
        <p className="section-label reveal">Let's Talk</p>
        <h2 className="section-title reveal">
          Get in <span className="grad-text">touch</span>
        </h2>
        <p className="contact-intro reveal">
          Open to internships, collaborations, and full-time opportunities.
          Drop me a message — I respond quickly.
        </p>

        <div className="contact-grid">
          {/* Left — Links */}
          <div className="contact-links-col reveal">
            <h3 className="contact-links-title">Connect with me</h3>
            <div className="contact-links-list">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link-card"
                >
                  <div className="clc-icon" style={{ color: link.color, background: `${link.color}18` }}>
                    {link.icon}
                  </div>
                  <div className="clc-body">
                    <span className="clc-label">{link.label}</span>
                    <span className="clc-value">{link.value}</span>
                  </div>
                  <div className="clc-arrow">→</div>
                </a>
              ))}
            </div>

            <div className="contact-availability">
              <div className="avail-dot" />
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-col reveal">
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>

              {/* Error banner */}
              {status === 'error' && (
                <div className="form-error-banner">
                  ⚠️ {errMsg}
                </div>
              )}

              <button
                type="submit"
                className={`form-submit ${status}`}
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' && (
                  <>
                    <span className="spinner" /> Sending...
                  </>
                )}
                {status === 'success' && (
                  <>✅ Message Sent!</>
                )}
                {(status === 'idle' || status === 'error') && (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}