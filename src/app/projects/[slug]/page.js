import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
    getProjectBySlug,
    getProjectSlugs,
} from "../../../content/projects";
import Footer from "../../../components/Footer";
import { site } from "../../../content/site";

export function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) {
        return { title: "Project" };
    }

    return {
        title: project.title,
        description: project.summary,
        alternates: {
            canonical: `/projects/${project.slug}`,
        },
        openGraph: {
            title: `${project.title} — ${site.name}`,
            description: project.summary,
            url: `${site.url}/projects/${project.slug}`,
            type: "article",
        },
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const sections = project.caseStudy
        ? [
              { heading: "Problem", body: project.caseStudy.problem },
              { heading: "Approach", body: project.caseStudy.approach },
              { heading: "Result", body: project.caseStudy.result },
          ]
        : [];

    return (
        <main
            id="main"
            className="mx-auto max-w-measure px-6 pb-4 pt-28"
        >
            <Link
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
            >
                <ArrowLeft className="h-3.5 w-3.5" />
                Work
            </Link>

            <p className="mt-10 font-mono text-xs text-faint">{project.year}</p>
            <h1 className="mt-3 text-4xl font-medium tracking-display text-foreground sm:text-5xl">
                {project.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
                {project.summary}
            </p>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-faint">
                {project.stack.join(" · ")}
            </p>

            <div className="mt-8 flex flex-wrap gap-5 font-mono text-xs uppercase tracking-wider">
                {project.hrefs.live ? (
                    <a
                        href={project.hrefs.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:text-foreground"
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
                        className="inline-flex items-center gap-1 text-accent hover:text-foreground"
                    >
                        GitHub
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                ) : null}
            </div>

            {sections.length > 0 ? (
                <div className="mt-16 space-y-12 border-t border-border pt-12">
                    {sections.map((section) => (
                        <section key={section.heading}>
                            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                                {section.heading}
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-muted">
                                {section.body}
                            </p>
                        </section>
                    ))}
                </div>
            ) : (
                <p className="mt-16 border-t border-border pt-12 text-sm text-faint">
                    Full writeup coming. The repo is the source of truth for
                    now.
                </p>
            )}

            <div className="mt-24">
                <Footer />
            </div>
        </main>
    );
}
