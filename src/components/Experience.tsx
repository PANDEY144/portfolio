import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of design practice, frontend projects, and client-ready execution."
      />

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.title}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <span>{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
