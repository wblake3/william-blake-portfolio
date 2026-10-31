import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { site } from "@/content/site";

const title = `Freelance automation & integrations — ${site.name}`;
const description =
  "Workflow automation, integrations, dashboards and AI assistants for small businesses in New Zealand.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, type: "website", url: "/services", locale: "en_NZ" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ServicesPage() {
  return (
    <main id="main" className="pt-16">
      <Services />
    </main>
  );
}
