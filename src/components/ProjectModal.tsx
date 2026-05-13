import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Project } from '../types/portfolio';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.article
            className="project-modal"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${project.id}-title`}
          >
            <button className="modal-close icon-button" type="button" onClick={onClose} aria-label="Close case study">
              <X size={18} />
            </button>
            <div className="modal-hero" style={{ '--accent': project.palette[0] } as CSSProperties}>
              <span>{project.category}</span>
              <h2 id={`${project.id}-title`}>{project.title}</h2>
              <p>{project.subtitle}</p>
            </div>

            <div className="modal-content">
              <div className="modal-meta">
                <span>Role: {project.role}</span>
                <span>Year: {project.year}</span>
                <span>Impact: {project.impact}</span>
              </div>

              <div className="modal-section">
                <h3>Problem Solved</h3>
                <p>{project.problem}</p>
              </div>

              <div className="modal-columns">
                <div className="modal-section">
                  <h3>UI Process</h3>
                  <ul>{project.process.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className="modal-section">
                  <h3>Design Decisions</h3>
                  <ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>

              <div className="modal-section">
                <h3>Challenges Faced</h3>
                <ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>

              <div className="responsive-preview" aria-label="Responsive screenshot mockups">
                <div className="preview-desktop" />
                <div className="preview-mobile" />
              </div>

              <div className="modal-section">
                <h3>Final Outcome</h3>
                <p>{project.outcome}</p>
              </div>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.testimonial ? <blockquote>{project.testimonial}</blockquote> : null}

              <div className="modal-actions">
                <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo <ExternalLink size={18} />
                </a>
                <a className="button secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub <Github size={18} />
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
