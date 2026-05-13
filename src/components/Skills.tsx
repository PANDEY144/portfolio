import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="A balanced toolkit for design craft, frontend build, and brand polish."
      />

      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
          >
            <h3>{group.title}</h3>
            <div className="skill-bars">
              {group.items.map((skill) => (
                <div className="skill-bar" key={skill.name}>
                  <div className="skill-label">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
