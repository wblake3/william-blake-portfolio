import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
import { site } from "@/content/site";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Product-minded software engineer in Auckland shipping production systems in healthcare and energy. TypeScript, React, APIs and Python.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} — ${site.title}`,
  description,
  authors: [{ name: site.name }],
  keywords: [
    "William Blake",
    "Software Engineer",
    "Auckland",
    "TypeScript",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description,
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description,
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NZ"
      className={`${instrument.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
