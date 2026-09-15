import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          {site.name} · {site.location}
        </p>
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          {site.github ? (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Source
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
