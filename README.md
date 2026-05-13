# GAURAV PANDEY Portfolio

Modern React + Vite + TypeScript portfolio for a UI/UX Designer and Creative Developer. It includes a dark/light theme, sticky navigation, scroll progress, Framer Motion animations, project case-study modal, contact form validation, SEO tags, sitemap, and an easy content data file.

## Run Locally

Install Node.js 18 or newer, then run:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Edit Content

Most portfolio content lives in:

```text
src/data/portfolio.ts
```

Update this file to change:

- Name, title, tagline, email, social links, availability, and resume URL
- Project titles, descriptions, tags, tech stack, live demo links, GitHub links, and case-study details
- Experience timeline
- Skills and testimonials

Replace the placeholder resume here:

```text
public/resume.pdf
```

Update production domain references here:

```text
index.html
public/robots.txt
public/sitemap.xml
```

## Folder Structure

```text
src/
  components/       Reusable UI sections and interface elements
  data/             CMS-ready portfolio content
  hooks/            Small React hooks
  styles/           Global Tailwind/CSS design system
  types/            Shared TypeScript types
public/             Static assets, sitemap, robots, resume
```

## Deploy To Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

## Deploy To Netlify

1. Push this repo to GitHub.
2. Create a new Netlify site from Git.
3. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.
