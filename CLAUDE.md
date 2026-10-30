@AGENTS.md

# Project notes

William Blake's portfolio site (Next.js 16 App Router, React 19, Tailwind 4, framer-motion), deployed on Vercel.

- `src/app/`: layout, page, metadata routes (OG/Twitter images, sitemap, robots).
- `src/components/`: one component per page section (Hero, About, Experience, Projects, Skills, Contact).
- `src/content/`: the text and data the sections render. **The user writes this content themselves.** Don't rewrite copy unless asked; suggest the change instead.

## Workflow

- Work on a branch and open a PR to `main`. **Pushing or merging to `main` deploys to production through Vercel**, so the global guard hook blocks it until the user confirms.
- Check with `npm run lint` and `npm run build` before saying a change is done. For visual changes, run `npm run dev` and look at the page (screenshot at desktop and phone width).
- The repo lives in OneDrive, so installs and builds are slow. Don't delete `node_modules` or `.next` as a "fix".

## Hooks

`.claude/hooks/check.js` runs `eslint --fix` once on the JS/TS files you changed, when you finish a turn. Errors it can't fix come back to you once.
