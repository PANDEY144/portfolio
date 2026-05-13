import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section className="section" id="education">
      <SectionHeader
        eyebrow="Education"
        title="My academic foundation in computer applications."
      />

      <div className="timeline">
        <motion.article
          className="timeline-item"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span>{education.period}</span>
          <div>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
