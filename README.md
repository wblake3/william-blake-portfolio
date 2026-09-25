# William Blake — Portfolio

Personal site for [William Blake](https://linkedin.com/in/william-blake-88735936b), a software engineer based in Auckland. Built with Next.js, TypeScript, and Tailwind CSS to showcase product-minded engineering work across AI, healthcare, energy, and full-stack product delivery.

- Live: [williamblake.dev](https://williamblake.dev)
- Source: [github.com/wblake3/william-blake-portfolio](https://github.com/wblake3/william-blake-portfolio)
- Custom domain: `williamblake.dev` (live on Vercel)

The portfolio content is centralized in a single file: [`src/content/site.ts`](src/content/site.ts).

## Overview

This project is a lightweight personal portfolio and engineering profile built to highlight:

- product and software engineering work
- AI and ML-enabled systems
- healthcare and energy domain experience
- end-to-end delivery from product thinking through deployment

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm start
```

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Notes

This repo is intentionally opinionated and minimal: the main content, experience, projects, and contact information live in [`src/content/site.ts`](src/content/site.ts), so it is easy to update without changing the app structure.
