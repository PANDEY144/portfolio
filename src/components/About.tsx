import { motion } from 'framer-motion';
import { Award, Layers, PenTool, Rocket } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const highlights = [
  { icon: PenTool, label: 'Design Philosophy', value: 'Simple flows, strong hierarchy, useful delight.' },
  { icon: Layers, label: 'Systems Thinking', value: 'Reusable components, tokens, and clear states.' },
  { icon: Rocket, label: 'Creative Approach', value: 'Prototype fast, validate early, polish with intent.' },
  { icon: Award, label: 'Achievements', value: 'Built product concepts, landing pages, and UI systems.' },
];

const tools = ['Figma', 'Adobe XD', 'Photoshop', 'React', 'Tailwind', 'HTML/CSS/JS', 'Motion Design'];

export function About() {
  return (
    <section className="section" id="about">
      <SectionHeader
        eyebrow="About"
        title="A product-minded designer who can also bring the interface to life."
        copy="My work sits at the intersection of visual design, UX clarity, and frontend execution."
      />

      <div className="about-grid">
        <motion.div
          className="glass-panel about-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p>
            I design interfaces that help people move through digital products with confidence. My process starts with
            understanding the user, shaping the core journey, and then refining the visual language until every screen
            feels intentional.
          </p>
          <p>
            As a creative frontend developer, I care about how a design behaves after it leaves the canvas: motion,
            loading states, accessibility, responsiveness, and the tiny details that make an experience feel finished.
          </p>
          <div className="tool-cloud">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </motion.div>

        <div className="highlight-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="highlight-card"
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Icon size={22} />
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
