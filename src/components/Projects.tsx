import { motion } from 'framer-motion';
import { ExternalLink, FileText, Github } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import { projects } from '../data/portfolio';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section projects-section" id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="Things I have built while learning frontend development."
        copy="Live projects with responsive layouts, JavaScript interactions, and practical UI decisions."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <div className="project-preview" style={{ '--accent': project.palette[0], '--accent-2': project.palette[1] } as CSSProperties}>
              <div className="preview-window">
                <span />
                <span />
                <span />
              </div>
              <div className="preview-art">
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="project-body">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <p className="project-problem">{project.problem}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="small-button">
                  <ExternalLink size={16} /> Live Demo
                </a>
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="small-button">
                    <Github size={16} /> GitHub
                  </a>
                ) : null}
                <button type="button" className="small-button" onClick={() => setSelectedProject(project)}>
                  <FileText size={16} /> Case Study
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
