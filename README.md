# GAURAV PANDEY Portfolio

Modern React + Vite + TypeScript portfolio for a BCA student and aspiring frontend developer. It includes a dark/light theme, sticky navigation, scroll progress, Framer Motion animations, project case-study modal, contact form validation, SEO tags, sitemap, and an easy content data file.

## Run Locally

Install Node.js 18 or newer, then run:

```bash
npm install
npm run dev
```

To enable the contact form email forwarding, create a local `.env` file from `.env.example` and set:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=pamdeygaurav911@gmail.com
RESEND_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```

For production on Vercel, add the same environment variables in the project settings. Use a verified sender/domain in `RESEND_FROM_EMAIL` when the site is public.

Use `vercel dev` when you want to test the `/api/contact` serverless function locally.

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
- Education, strengths, and skills

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

## AUTHOR 
GAURAV PANDEY
