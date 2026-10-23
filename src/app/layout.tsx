import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  "Software Engineer at Dimension Software in Auckland — SQL, Python, React and TypeScript, building APIs and MCP integrations. Production work in healthcare and energy.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: `${site.name} — ${site.title}`,
  description,
  authors: [{ name: site.name }],
  keywords: [
    "William Blake",
    "Software Engineer",
    "Auckland",
    "AI",
    "Dimension Software",
    "SQL",
    "Python",
    "React",
    "TypeScript",
    "APIs",
    "MCP",
  ],
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description,
    type: "website",
    url: "/",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description,
  },
};

// Stored choice wins; otherwise follow the OS. Dark stays the no-JS default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme: light)').matches))document.documentElement.classList.remove('dark');}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  image: `${site.url}${site.hero.photo}`,
  worksFor: { "@type": "Organization", name: site.experience[0].org },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Auckland University of Technology" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Auckland",
    addressCountry: "NZ",
  },
  sameAs: [site.linkedin, site.githubProfile],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NZ"
      className={`${instrument.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
