"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "../content/site";

const nav = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const onHome = pathname === "/";

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const resolveHref = (hash) => (onHome ? hash : `/${hash}`);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                isScrolled || isMenuOpen
                    ? "border-b border-border bg-background/80 backdrop-blur-md"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-measure items-center justify-between px-6">
                <Link
                    href="/"
                    className="font-medium tracking-tight text-foreground"
                >
                    {site.name}
                </Link>

                <nav
                    className="hidden items-center gap-7 text-sm text-muted md:flex"
                    aria-label="Primary"
                >
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={resolveHref(item.href)}
                            className="transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                    {site.resumeUrl ? (
                        <a
                            href={site.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs uppercase tracking-wider text-accent transition-colors hover:text-foreground"
                        >
                            Resume
                        </a>
                    ) : null}
                    <a
                        href={`mailto:${site.email}`}
                        className="font-mono text-xs uppercase tracking-wider text-accent transition-colors hover:text-foreground"
                    >
                        Email
                    </a>
                </nav>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            <div
                id="mobile-nav"
                hidden={!isMenuOpen}
                className="border-t border-border bg-background md:hidden"
            >
                <nav
                    className="mx-auto flex max-w-measure flex-col gap-1 px-6 py-3"
                    aria-label="Mobile"
                >
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={resolveHref(item.href)}
                            className="py-2 text-sm text-muted hover:text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    {site.resumeUrl ? (
                        <a
                            href={site.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 font-mono text-xs uppercase tracking-wider text-accent"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resume
                        </a>
                    ) : null}
                    <a
                        href={`mailto:${site.email}`}
                        className="py-2 font-mono text-xs uppercase tracking-wider text-accent"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Email
                    </a>
                </nav>
            </div>
        </header>
    );
}
