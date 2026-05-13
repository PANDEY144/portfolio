import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

export function Testimonials() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Testimonials"
        title="Feedback that speaks to clarity, taste, and execution."
      />

      <div className="testimonial-track" aria-label="Client testimonials">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.article
            className="testimonial-card"
            key={`${testimonial.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % testimonials.length) * 0.07 }}
          >
            <p>“{testimonial.quote}”</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
