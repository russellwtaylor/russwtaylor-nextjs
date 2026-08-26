import Link from "next/link";
import { site } from "../content/site";

export default function NotFound() {
    return (
        <main
            id="main"
            className="mx-auto flex min-h-svh max-w-measure flex-col justify-center px-6"
        >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                404
            </p>
            <h1 className="mt-4 text-4xl font-medium tracking-display">
                Page not found
            </h1>
            <p className="mt-4 text-muted">
                That URL doesn’t exist.{" "}
                <Link
                    href="/"
                    className="text-foreground underline decoration-border underline-offset-4 hover:decoration-accent"
                >
                    Back to {site.name.split(" ")[0]}
                </Link>
                .
            </p>
        </main>
    );
}
