import { site } from "../content/site";

function TextLink({ href, children, external = false }) {
    const extra = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

    return (
        <a
            href={href}
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
            {...extra}
        >
            {children}
        </a>
    );
}

export default function Hero() {
    return (
        <section className="flex flex-col justify-center pb-16 pt-24 sm:min-h-[calc(100svh-9rem)] sm:pb-8 sm:pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {site.role} · {site.location}
            </p>
            <h1 className="mt-5 text-4xl font-medium tracking-display text-foreground sm:text-6xl">
                {site.name}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                {site.oneLiner}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-faint">
                {site.proofLine}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                {site.email ? (
                    <TextLink href={`mailto:${site.email}`}>Email</TextLink>
                ) : null}
                <TextLink href={site.socials.linkedin} external>
                    LinkedIn
                </TextLink>
                <TextLink href={site.socials.github} external>
                    GitHub
                </TextLink>
                {site.resumeUrl ? (
                    <TextLink href={site.resumeUrl} external>
                        Resume
                    </TextLink>
                ) : null}
            </div>
        </section>
    );
}
