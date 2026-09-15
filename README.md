# William Blake — Portfolio

Personal site for [William Blake](https://linkedin.com/in/william-blake-88735936b), software engineer in Auckland. Built with Next.js, TypeScript and Tailwind CSS. Light, white and lucid-blue layout with a custom interactive network in the hero.

Copy lives in one file: [`src/content/site.ts`](src/content/site.ts). Update experience, projects, skills, email and (when you have them) GitHub / live project links there.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy to GitHub and Vercel

This stack is meant to ship on Vercel and be linked from LinkedIn.

1. Create a GitHub repository (public is fine for a portfolio).
2. Add `github` in `src/content/site.ts` so the footer can link to source.
3. Push this project:

```bash
git add .
git commit -m "Add portfolio site"
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git branch -M main
git push -u origin main
```

4. In [Vercel](https://vercel.com), import the GitHub repo. Framework preset: Next.js. Deploy.
5. Add the Vercel URL (or a custom domain) to your LinkedIn Featured / website field.

Optional custom domain: in Vercel → Project → Settings → Domains.

## Notes

- Phone number is omitted from the public site on purpose. Add it in `site.ts` if you want it shown.
- The hero network respects `prefers-reduced-motion` and uses fewer nodes on small screens.
