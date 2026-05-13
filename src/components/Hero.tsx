import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg" aria-hidden="true">
        <motion.span animate={{ y: [0, -24, 0], opacity: [0.45, 0.72, 0.45] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.span animate={{ y: [0, 18, 0], opacity: [0.35, 0.65, 0.35] }} transition={{ duration: 9, repeat: Infinity }} />
        <motion.span animate={{ x: [0, 28, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      </div>

      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="status-pill">
            <Sparkles size={16} />
            {profile.availability}
          </div>
          <h1>
            {profile.name}
            <span>Frontend developer building clean, interactive web experiences.</span>
          </h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
              <ArrowDown size={18} />
            </a>
            <a className="button secondary" href={profile.resumeUrl} download>
              Download Resume
              <Download size={18} />
            </a>
            <a className="button ghost" href="#contact">
              Contact Me
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
          aria-label="Portfolio preview mockup"
        >
          <div className="device-shell">
            <div className="device-toolbar">
              <span />
              <span />
              <span />
            </div>
            <div className="mockup-dashboard">
              <div className="mockup-panel large">
                <div className="mockup-line short" />
                <div className="mockup-title" />
                <div className="mockup-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="mockup-panel">
                <div className="mockup-line" />
                <div className="mockup-meter" />
              </div>
              <div className="mockup-panel accent">
                <div className="mockup-line short" />
                <strong>94%</strong>
                <p>Usability score</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
