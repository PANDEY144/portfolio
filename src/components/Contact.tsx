import { motion } from 'framer-motion';
import { Github, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { profile } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

type Errors = {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
};

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
    setStatus('idle');

    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const contentType = response.headers.get('content-type') ?? '';
      const data = contentType.includes('application/json')
        ? ((await response.json().catch(() => ({}))) as { error?: string })
        : {};

      if (!response.ok) {
        const apiMissing = response.status === 404 && !contentType.includes('application/json');
        setErrors({
          form: apiMissing
            ? 'The contact API is not running here. Use the deployed site or run it with Vercel Dev.'
            : data.error ?? 'Message could not be sent. Please try again.',
        });
        setStatus('idle');
        return;
      }

      event.currentTarget.reset();
      setErrors({});
      setStatus('sent');
    } catch {
      setErrors({ form: 'Message could not be sent. Please check your connection and try again.' });
      setStatus('idle');
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Open to frontend internship opportunities and project collaboration."
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
          <button className="button primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
          </button>
          {errors.form ? <p className="field-error">{errors.form}</p> : null}
          {status === 'sent' ? <p className="form-success">Message sent. I will get back to you soon.</p> : null}
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
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={18} /> {profile.phone}</a>
          <p><MapPin size={18} /> {profile.location}</p>
          <div className="social-grid">
            <a href={profile.social.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
