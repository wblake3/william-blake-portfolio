# William Blake — Portfolio

Personal site for [William Blake](https://linkedin.com/in/william-blake-88735936b), software engineer in Auckland. Built with Next.js, TypeScript and Tailwind CSS. Light, white and lucid-blue layout with a custom interactive network in the hero.

- Live: [william-blake-portfolio.vercel.app](https://william-blake-portfolio.vercel.app)
- Source: [github.com/wblake3/william-blake-portfolio](https://github.com/wblake3/william-blake-portfolio)
- Custom domain: `williamblake.dev` (attached on Vercel; buy it to go live)

Copy lives in one file: [`src/content/site.ts`](src/content/site.ts).

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

## Deploy

GitHub is connected to Vercel. Pushing to `main` deploys production automatically.

To finish `williamblake.dev`:

1. Buy it in [Vercel Domains](https://vercel.com/dashboard/domains) ($9.99 first year, $13 renewal). Buying through Vercel sets nameservers for you.
2. Wait for DNS (usually minutes). SSL is issued automatically.

Then add `https://williamblake.dev` to LinkedIn.

## Notes

- Phone number is omitted from the public site on purpose. Add it in `site.ts` if you want it shown.
- The hero network respects `prefers-reduced-motion` and uses fewer nodes on small screens.
