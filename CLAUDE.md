@AGENTS.md

# Project notes

William Blake's portfolio site (Next.js 16 App Router, React 19, Tailwind 4, framer-motion), deployed on Vercel.

- `src/app/`: layout, page, metadata routes (OG/Twitter images, sitemap, robots).
- `src/app/services/`: the freelance services page (`/services`), linked from the footer rather than the main nav so the home page stays focused on recruiters.
- `src/components/`: one component per page section (Hero, About, Experience, Projects, Skills, Services, Contact).
- `src/content/`: the text and data the sections render. Claude may write and edit this copy. Keep the user's plain, specific voice, and say in the summary which lines changed.
- No prices on the site. Freelance pricing is agreed after the first consult.

## Workflow

- Work on a branch and open a PR to `main`. **Pushing or merging to `main` deploys to production through Vercel**, so the global guard hook blocks it until the user confirms.
- Check with `npm run lint` and `npm run build` before saying a change is done. For visual changes, run `npm run dev` and look at the page (screenshot at desktop and phone width).
- The repo lives in OneDrive, so installs and builds are slow. Don't delete `node_modules` or `.next` as a "fix".

## Hooks

`.claude/hooks/check.js` runs `eslint --fix` once on the JS/TS files you changed, when you finish a turn. Errors it can't fix come back to you once.
