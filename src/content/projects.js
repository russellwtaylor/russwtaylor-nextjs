export const projects = [
    {
        slug: "sf-docs",
        title: "sf-docs",
        year: "2025",
        summary:
            "A Rust CLI that turns Salesforce metadata into interlinked, AI-written documentation — incremental builds, multiple model providers, keys in the OS keychain.",
        stack: ["Rust", "CLI", "LLMs"],
        hrefs: {
            github: "https://github.com/russellwtaylor/sf-docs",
            live: null,
        },
        featured: true,
        caseStudy: {
            problem:
                "Salesforce orgs accumulate Apex, Flows, validation rules, and Lightning Web Components faster than anyone can document them. Wikis rot. New engineers inherit folklore.",
            approach:
                "I built a local CLI in Rust that parses SFDX source, extracts structure, and asks an LLM (Gemini, Groq, OpenAI, or Ollama) to write wiki-style Markdown. Unchanged files hit a cache so you don't pay for the same class twice.",
            result:
                "A tool I actually use: one command, interlinked docs, HTML or Markdown out. Public repo, real README, not a tutorial clone.",
        },
    },
    {
        slug: "auth-template",
        title: "Next.js auth template",
        year: "2025",
        summary:
            "A clonable Next.js starter with email/password auth on Supabase — the boring path done cleanly so the next app doesn't start from zero.",
        stack: ["Next.js", "Supabase", "TypeScript"],
        hrefs: {
            github: "https://github.com/russellwtaylor/template-supabase-auth",
            live: null,
        },
        featured: true,
        caseStudy: null,
    },
    {
        slug: "crm-integrations",
        title: "CRM and product integrations",
        year: "2017—",
        summary:
            "Years of connecting Procore's product to Salesforce — data models, APIs, and the unglamorous work of making two systems agree.",
        stack: ["TypeScript", "REST", "Salesforce"],
        hrefs: {
            github: null,
            live: null,
        },
        featured: true,
        caseStudy: {
            problem:
                "Product data lived in one system. Sales and customer ops lived in another. Neither was a complete picture of the business.",
            approach:
                "I designed and shipped integrations, CRM architecture, and the glue between Procore's core product and Salesforce — APIs, data models, and the edge cases that only show up in production.",
            result:
                "Systems the business runs on daily. No public screenshots; the work is the years of shipping, not a demo.",
        },
    },
];

export function getFeaturedProjects() {
    return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug) ?? null;
}

export function getProjectSlugs() {
    return projects.map((project) => project.slug);
}
