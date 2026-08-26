/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                surface: "var(--surface)",
                foreground: "var(--foreground)",
                muted: "var(--muted)",
                faint: "var(--faint)",
                border: "var(--border)",
                accent: "var(--accent)",
                "accent-dim": "var(--accent-dim)",
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
            },
            letterSpacing: {
                display: "-0.04em",
            },
            maxWidth: {
                measure: "42rem",
            },
        },
    },
    plugins: [],
};
