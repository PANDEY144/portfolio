import { motion } from 'framer-motion';
import { Dribbble, Github, Instagram, Linkedin, Mail, MapPin, Palette, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { profile } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    if (name.length < 2) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Please enter a valid email.';
    if (message.length < 12) nextErrors.message = 'Please share a little more detail.';

    setErrors(nextErrors);
    setSent(Object.keys(nextErrors).length === 0);
    if (Object.keys(nextErrors).length === 0) event.currentTarget.reset();
  }

  return (
    <section className="section contact-section" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build a portfolio, product, or brand experience that earns attention."
        copy={profile.availability}
      />

      <div className="contact-grid">
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" aria-invalid={Boolean(errors.name)} />
            {errors.name ? <span className="field-error">{errors.name}</span> : null}
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} />
            {errors.email ? <span className="field-error">{errors.email}</span> : null}
          </label>
          <label>
            Project details
            <textarea name="message" rows={5} placeholder="Tell me what you want to design or build." aria-invalid={Boolean(errors.message)} />
            {errors.message ? <span className="field-error">{errors.message}</span> : null}
          </label>
          <button className="button primary" type="submit">
            Send Message <Send size={18} />
          </button>
          {sent ? <p className="form-success">Message validated. Connect this form to Formspree, Netlify Forms, or your backend next.</p> : null}
        </motion.form>

        <motion.aside
          className="contact-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <div className="availability-dot">
            <span />
            {profile.availability}
          </div>
          <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <p><MapPin size={18} /> {profile.location}</p>
          <div className="social-grid">
            <a href={profile.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
            <a href={profile.social.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a>
            <a href={profile.social.behance} aria-label="Behance" target="_blank" rel="noreferrer"><Palette size={18} /></a>
            <a href={profile.social.dribbble} aria-label="Dribbble" target="_blank" rel="noreferrer"><Dribbble size={18} /></a>
            <a href={profile.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
