import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { site } from "../content/site";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: `${site.name} — ${site.role}`,
        template: `%s — ${site.name}`,
    },
    description: `${site.role} in ${site.location}. ${site.oneLiner}`,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: `${site.name} — ${site.role}`,
        description: site.oneLiner,
        url: site.url,
        siteName: site.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: `${site.name} — ${site.role}`,
        description: site.oneLiner,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-background">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
            >
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
                >
                    Skip to content
                </a>
                <Header />
                {children}
            </body>
        </html>
    );
}
