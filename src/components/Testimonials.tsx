import { motion } from 'framer-motion';
import { strengths } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Testimonials() {
  return (
    <section className="section" id="strengths">
      <SectionHeader
        eyebrow="Strengths"
        title="How I approach frontend work and continuous improvement."
      />

      <div className="testimonial-track" aria-label="Core strengths">
        {strengths.map((strength, index) => (
          <motion.article
            className="testimonial-card"
            key={strength.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
          >
            <p>{strength.detail}</p>
            <div>
              <strong>{strength.title}</strong>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
