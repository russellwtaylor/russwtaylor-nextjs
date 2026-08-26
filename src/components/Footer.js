import { site } from "../content/site";

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="border-t border-border py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-xs text-faint">
                    © {year} {site.name}
                </p>
                <div className="flex gap-5 text-sm text-muted">
                    <a
                        href={`mailto:${site.email}`}
                        className="hover:text-foreground"
                    >
                        Email
                    </a>
                    <a
                        href={site.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={site.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
