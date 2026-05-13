import type { Education, Project, SkillGroup, Strength } from '../types/portfolio';

export const profile = {
  name: 'GAURAV PANDEY',
  initials: 'GP',
  title: 'BCA Student • Aspiring Frontend Developer',
  tagline:
    'I build interactive web experiences with clean code, bold design, responsive layouts, and a constant focus on learning by shipping real projects.',
  email: 'pamdeygaurav911@gmail.com',
  phone: '+91 7497062057',
  location: 'Rudrapur, Uttarakhand',
  resumeUrl: '/resume.pdf',
  availability: 'Available for internship opportunities',
  social: {
    github: 'https://github.com/PANDEY144',
  },
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 'interactive-3d-landing-page',
    title: 'Interactive 3D Landing Page',
    subtitle: 'A responsive landing page with interactive Spline 3D visuals and polished frontend motion.',
    category: '3D Web Experience',
    year: '2026',
    role: 'Frontend Developer',
    problem:
      'The goal was to create a landing page that feels more immersive than a flat static website while still staying responsive and easy to explore.',
    process: [
      'Structured the page with a clear hero, visual focus, and action-oriented content flow.',
      'Integrated Spline 3D elements to add depth without making the layout confusing.',
      'Tested the layout across screen sizes so the experience stayed usable on mobile and desktop.',
    ],
    decisions: [
      'Used HTML, CSS, and JavaScript for a lightweight implementation.',
      'Kept the UI clean so the 3D element becomes the main visual highlight.',
      'Balanced interactive visuals with readable content and simple navigation.',
    ],
    challenges: [
      'Keeping the 3D visual smooth while preserving fast page interaction.',
      'Making the layout responsive around a large embedded visual element.',
    ],
    outcome:
      'A visually engaging landing page that demonstrates comfort with modern web presentation, responsive design, and 3D web tools.',
    impact: 'Live project deployed on Vercel.',
    tags: ['Spline 3D', 'Landing Page', 'Responsive UI'],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Spline'],
    liveUrl: 'https://3d-landing-page-using-spline.vercel.app/',
    palette: ['#8ee3d2', '#f6c177', '#0f172a'],
  },
  {
    id: 'todo-list-web-app',
    title: 'To-Do List Web App',
    subtitle: 'A clean task manager for adding, completing, and deleting daily tasks.',
    category: 'JavaScript Utility App',
    year: '2026',
    role: 'Frontend Developer',
    problem:
      'Users need a quick way to track tasks without a heavy interface or unnecessary steps.',
    process: [
      'Built the app around core task actions: add, mark complete, and delete.',
      'Used DOM manipulation to update the list instantly as users interact.',
      'Refined spacing, contrast, and controls for a simple everyday workflow.',
    ],
    decisions: [
      'Kept the interface minimal so the task list stays the focus.',
      'Used direct visual feedback for completed tasks.',
      'Made controls easy to understand without extra instructions.',
    ],
    challenges: [
      'Handling state changes cleanly with plain JavaScript.',
      'Keeping the UI readable as tasks are added and removed.',
    ],
    outcome:
      'A practical productivity app that shows DOM handling, event listeners, and clean UI thinking.',
    impact: 'Live project deployed on Vercel.',
    tags: ['DOM Manipulation', 'Task Manager', 'Clean UI'],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://to-do-list-nine-psi-97.vercel.app/',
    palette: ['#d8b4fe', '#8ee3d2', '#171717'],
  },
  {
    id: 'calculator-web-app',
    title: 'Calculator Web App',
    subtitle: 'A responsive calculator supporting common arithmetic operations with click and keyboard input.',
    category: 'JavaScript Web App',
    year: '2026',
    role: 'Frontend Developer',
    problem:
      'The project needed a reliable calculator interface that behaves predictably and works across device sizes.',
    process: [
      'Created the calculator layout with clear button grouping and readable output.',
      'Added JavaScript logic for arithmetic operations, clearing, and input handling.',
      'Tested mouse and keyboard interactions for a smoother user experience.',
    ],
    decisions: [
      'Used a responsive grid for stable button alignment.',
      'Kept visual hierarchy simple so numbers and operations are easy to scan.',
      'Supported both click-based and keyboard-based input.',
    ],
    challenges: [
      'Preventing invalid input states during repeated operations.',
      'Keeping the UI compact while preserving comfortable tap targets.',
    ],
    outcome:
      'A fully functional calculator that demonstrates JavaScript fundamentals, event handling, and responsive UI design.',
    impact: 'Live project deployed on Vercel.',
    tags: ['Calculator', 'Event Handling', 'Responsive Design'],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://web-calculator-tau-three.vercel.app/',
    palette: ['#7dd3fc', '#fda4af', '#101828'],
  },
];

export const experience = [
  {
    period: 'Current Focus',
    title: 'Frontend Development Practice',
    detail: 'Building landing pages, utility apps, and interactive web projects with HTML, CSS, JavaScript, and React.',
  },
  {
    period: 'Learning Path',
    title: 'React, APIs & Modern Tools',
    detail: 'Expanding from strong fundamentals into React, API integration, component-based UI, and modern deployment workflows.',
  },
  {
    period: 'Foundation',
    title: 'BCA Student',
    detail: 'Studying computer applications while consistently building practical frontend projects.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript', level: 82 },
    ],
  },
  {
    title: 'Concepts',
    items: [
      { name: 'DOM Manipulation', level: 84 },
      { name: 'Event Handling', level: 82 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', level: 78 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 88 },
    ],
  },
  {
    title: 'Learning',
    items: [
      { name: 'React', level: 72 },
      { name: 'Spline 3D', level: 70 },
      { name: 'APIs', level: 66 },
    ],
  },
];

export const education: Education = {
  degree: 'Bachelor of Computer Applications',
  school: 'St. Andrews Institute of Technology and Management',
  period: 'Currently Pursuing · BCA',
};

export const strengths: Strength[] = [
  {
    title: 'Problem Solving',
    detail: 'I enjoy breaking problems into small steps and turning them into working interfaces.',
  },
  {
    title: 'Quick Learner',
    detail: 'I pick up new tools quickly and apply them through projects instead of only theory.',
  },
  {
    title: 'Web Development Focus',
    detail: 'Frontend development is where I am building discipline, taste, and technical confidence.',
  },
  {
    title: 'Consistent Builder',
    detail: 'I keep improving by creating real projects, publishing them, and learning from each build.',
  },
  {
    title: 'Modern Tooling',
    detail: 'I am exploring React, APIs, Spline 3D, GitHub, and deployment workflows.',
  },
];
