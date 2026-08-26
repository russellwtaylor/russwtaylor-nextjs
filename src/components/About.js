import { about, experience } from "../content/experience";
import { site } from "../content/site";
import ExperienceList from "./ExperienceList";

export default function About() {
    return (
        <section id="about" className="scroll-mt-24 py-24">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                About
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
                {about.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>

            <ExperienceList experience={experience} />

            <div className="mt-10">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                    Tools
                </h3>
                <p className="mt-3 text-sm text-muted">
                    {about.skills.join(" · ")}
                </p>
                <p className="mt-4 text-sm text-faint">{about.certs}</p>
            </div>

            <p className="mt-12 text-sm text-muted">
                Want to talk?{" "}
                <a
                    href={`mailto:${site.email}`}
                    className="text-foreground underline decoration-border underline-offset-4 hover:decoration-accent"
                >
                    {site.email}
                </a>
            </p>
        </section>
    );
}
