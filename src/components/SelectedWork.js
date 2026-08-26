import { getFeaturedProjects } from "../content/projects";
import ProjectRow from "./ProjectRow";

export default function SelectedWork() {
    const featured = getFeaturedProjects();

    return (
        <section id="work" className="scroll-mt-24 pb-8 pt-24">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Selected work
            </h2>
            <div className="mt-8 border-y border-border">
                {featured.map((project, index) => (
                    <ProjectRow
                        key={project.slug}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
