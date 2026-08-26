export default function ExperienceList({ experience }) {
    return (
        <ol className="mt-10 divide-y divide-border border-y border-border">
            {experience.map((job) => (
                <li key={`${job.org}-${job.years}`} className="py-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-base font-medium text-foreground">
                            {job.title}
                        </h3>
                        <p className="font-mono text-xs text-faint">
                            {job.years}
                        </p>
                    </div>
                    <p className="mt-1 text-sm text-muted">{job.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                        {job.blurb}
                    </p>
                </li>
            ))}
        </ol>
    );
}
