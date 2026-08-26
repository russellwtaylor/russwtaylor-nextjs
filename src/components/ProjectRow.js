import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectRow({ project, index }) {
    const number = String(index + 1).padStart(2, "0");

    return (
        <article className="border-t border-border py-8 first:border-t-0">
            <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-xs text-faint">{number}</p>
                <p className="font-mono text-xs text-faint">{project.year}</p>
            </div>

            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <Link
                    href={`/projects/${project.slug}`}
                    className="text-xl font-medium tracking-tight text-foreground transition-colors hover:text-accent sm:text-2xl"
                >
                    {project.title}
                </Link>
                <div className="flex items-center gap-4 font-mono text-xs text-muted">
                    {project.hrefs.live ? (
                        <a
                            href={project.hrefs.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-accent"
                        >
                            Live
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                    ) : null}
                    {project.hrefs.github ? (
                        <a
                            href={project.hrefs.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-accent"
                        >
                            GitHub
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                    ) : null}
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 hover:text-accent"
                    >
                        Notes
                    </Link>
                </div>
            </div>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                {project.summary}
            </p>

            <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-faint">
                {project.stack.join(" · ")}
            </p>
        </article>
    );
}
