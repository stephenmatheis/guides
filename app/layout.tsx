import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import "@/styles/app.scss";

const space_mono = Space_Mono({
    weight: ["400", "700"],
    variable: "--font-space-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: "Guides | %s",
        default: "Guides",
    },
    description: "dan da dan",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'></text></svg>"
                />
            </head>
            <body className={space_mono.variable} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
