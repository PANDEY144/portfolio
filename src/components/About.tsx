import { motion } from 'framer-motion';
import { Award, Code2, Layers, Rocket } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const highlights = [
  { icon: Code2, label: 'Frontend Foundation', value: 'HTML, CSS, JavaScript, DOM work, and responsive layouts.' },
  { icon: Layers, label: 'UI Thinking', value: 'Clean structure, strong hierarchy, and interfaces that feel easy to use.' },
  { icon: Rocket, label: 'Project Practice', value: 'Learning by building, deploying, and improving real web projects.' },
  { icon: Award, label: 'Next Step', value: 'Ready for internship work where I can contribute and grow fast.' },
];

const tools = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Spline 3D', 'Git', 'GitHub', 'VS Code', 'APIs'];

export function About() {
  return (
    <section className="section" id="about">
      <SectionHeader
        eyebrow="About"
        title="A BCA student growing into frontend development through real projects."
        copy="My work sits at the intersection of clean code, bold web design, and practical learning."
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
            I am an aspiring frontend developer from Rudrapur, Uttarakhand, currently pursuing BCA. I like building web
            pages and small apps that turn basic ideas into usable, responsive experiences.
          </p>
          <p>
            My current focus is strengthening JavaScript fundamentals, DOM manipulation, responsive design, React, APIs,
            and modern tools like Spline 3D. I care about writing clean code and improving with every project I ship.
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
