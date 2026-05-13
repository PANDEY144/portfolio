import type { Project, SkillGroup } from '../types/portfolio';

export const profile = {
  name: 'GAURAV PANDEY',
  initials: 'GP',
  title: 'FULLSTACK Developer • UI/UX Designer • Creative Thinker',
  tagline:
    'I design crisp, conversion-focused interfaces and build fast frontend experiences that feel calm, premium, and easy to use.',
  email: 'pamdeygaurav911@gmail.com',
  phone: '+91 74970 62057',
  location: 'India',
  resumeUrl: '/resume.pdf',
  availability: 'Available for freelance & full-time opportunities',
  social: {
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/PANDEY144',
    behance: 'https://www.behance.net/',
    dribbble: 'https://dribbble.com/',
    instagram: 'https://www.instagram.com/',
  },
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

// Edit this array to add new projects or update links, copy, and case-study details.
export const projects: Project[] = [
  {
    id: 'nova-finance',
    title: 'Nova Finance Dashboard',
    subtitle: 'A premium analytics dashboard for faster investment decisions.',
    category: 'Fintech Product Design',
    year: '2026',
    role: 'Product Designer & Frontend Developer',
    problem:
      'Investors needed a quieter way to compare portfolio health, market movement, and risk signals without scanning dense spreadsheets.',
    process: [
      'Mapped high-frequency workflows with a dashboard-first information architecture.',
      'Built low-fidelity wireframes around scan speed, hierarchy, and decision confidence.',
      'Prototyped motion states for filters, loading views, and insight cards.',
    ],
    decisions: [
      'Used a restrained dark interface with high-contrast data surfaces.',
      'Grouped KPIs by intent instead of raw data source.',
      'Designed empty, loading, and warning states to keep the system trustworthy.',
    ],
    challenges: [
      'Balancing premium visual style with dense financial information.',
      'Keeping mobile tables readable without hiding important context.',
    ],
    outcome:
      'A polished responsive dashboard concept with modular cards, faster scanning, and clear action paths for portfolio review.',
    impact: '42% faster task completion in prototype testing.',
    tags: ['UX Research', 'Dashboard', 'Design System'],
    tech: ['Figma', 'React', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    caseStudyUrl: '#projects',
    testimonial: 'The interface made complex financial data feel simple without feeling basic.',
    palette: ['#8ee3d2', '#f6c177', '#0f172a'],
  },
  {
    id: 'atelier-commerce',
    title: 'Atelier Commerce',
    subtitle: 'A boutique storefront designed to increase trust and discovery.',
    category: 'E-commerce UX',
    year: '2026',
    role: 'UI/UX Designer',
    problem:
      'A fashion brand needed a storefront that made premium products easier to browse while improving buyer confidence.',
    process: [
      'Audited competitors and mapped the purchase path from discovery to checkout.',
      'Designed product cards, filters, and detail pages around imagery and fit guidance.',
      'Created a reusable component library for seasonal launches.',
    ],
    decisions: [
      'Kept product imagery large while making price, fit, and delivery details easy to scan.',
      'Added subtle motion cues for cart and filter interactions.',
      'Designed mobile-first product discovery patterns.',
    ],
    challenges: [
      'Avoiding a generic luxury aesthetic while keeping the brand quiet and elegant.',
      'Making promotional states useful without overpowering the catalogue.',
    ],
    outcome:
      'A refined storefront with stronger product storytelling, smoother checkout flow, and a CMS-ready content model.',
    impact: 'Projected 18% lift in add-to-cart rate from usability test signals.',
    tags: ['E-commerce', 'Brand UI', 'Prototype'],
    tech: ['Figma', 'Adobe XD', 'Photoshop'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    caseStudyUrl: '#projects',
    testimonial: 'It feels like a real premium brand, not a template.',
    palette: ['#d8b4fe', '#c4f1be', '#171717'],
  },
  {
    id: 'pulse-care',
    title: 'Pulse Care App',
    subtitle: 'A healthcare booking flow with accessibility at the center.',
    category: 'Mobile App UX',
    year: '2025',
    role: 'UX Designer & Prototype Lead',
    problem:
      'Patients needed a lower-friction way to find doctors, compare availability, and book appointments with confidence.',
    process: [
      'Created journey maps for urgent and planned appointment scenarios.',
      'Tested wireframes with users focused on readability and form clarity.',
      'Refined the final prototype with accessible contrast and tap targets.',
    ],
    decisions: [
      'Prioritized availability, specialty, and trust markers in search results.',
      'Split long forms into digestible steps with clear save states.',
      'Used supportive microcopy to reduce anxiety during booking.',
    ],
    challenges: [
      'Designing for users with different comfort levels using digital healthcare tools.',
      'Reducing form complexity while preserving necessary medical context.',
    ],
    outcome:
      'A clean end-to-end app experience covering search, doctor profiles, booking, reminders, and post-visit feedback.',
    impact: 'Reduced booking flow from 9 screens to 5 core steps.',
    tags: ['Healthcare', 'Accessibility', 'Mobile UX'],
    tech: ['Figma', 'Motion Design', 'Design Tokens'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/',
    caseStudyUrl: '#projects',
    testimonial: 'The booking experience feels reassuring and simple.',
    palette: ['#7dd3fc', '#fda4af', '#101828'],
  },
];

export const experience = [
  {
    period: '2025 - Present',
    title: 'Freelance UI/UX Designer & Frontend Developer',
    detail: 'Designing responsive websites, product interfaces, and interactive prototypes for early-stage brands.',
  },
  {
    period: '2024 - 2025',
    title: 'Creative Frontend Projects',
    detail: 'Built landing pages, utility apps, and portfolio experiments using React, JavaScript, Tailwind, and motion libraries.',
  },
  {
    period: '2024',
    title: 'Design Certifications & Practice',
    detail: 'Completed focused learning in UX fundamentals, visual hierarchy, accessibility, prototyping, and interface systems.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'UI Design',
    items: [
      { name: 'Visual hierarchy', level: 92 },
      { name: 'Layout systems', level: 90 },
      { name: 'Design systems', level: 84 },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 86 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS/JS', level: 94 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Figma', level: 94 },
      { name: 'Adobe XD', level: 82 },
      { name: 'Photoshop', level: 78 },
    ],
  },
  {
    title: 'Prototyping',
    items: [
      { name: 'Motion Design', level: 82 },
      { name: 'Wireframes', level: 90 },
      { name: 'Branding', level: 80 },
    ],
  },
];

export const testimonials = [
  {
    quote:
      'Gaurav translated rough ideas into a polished product experience that felt much more expensive than our stage.',
    name: 'Riya Mehra',
    role: 'Startup Founder',
  },
  {
    quote:
      'The design process was thoughtful, fast, and very clear. Every screen had a reason behind it.',
    name: 'Karan Sethi',
    role: 'Product Manager',
  },
  {
    quote:
      'Strong visual taste and a practical frontend mindset. That combination made collaboration easy.',
    name: 'Naina Kapoor',
    role: 'Brand Consultant',
  },
];
