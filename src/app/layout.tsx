import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Dienel – Wireframe",
  description: "Low-Fidelity-Wireframe für die Website von Dr. Dienel",
};

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/systemic-question", label: "Die Systemfrage" },
  { href: "/research", label: "Forschung & Perspektiven" },
  { href: "/diseases", label: "Krankheiten" },
  { href: "/about", label: "Über mich" },
  { href: "/lectures", label: "Vorträge" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Kontakt" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} antialiased`}>
        {/* NAV */}
        <nav className="border-b-2 border-dashed border-wire-border bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold text-wire-heading">
              Dr. Dienel
            </Link>
            <div className="flex flex-wrap gap-4 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-wire-dark hover:text-wire-heading transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* MAIN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-16 border-t-2 border-dashed border-wire-border bg-white">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <p className="font-bold text-wire-heading mb-2">Dr. Dienel</p>
                <p>Ernährungsforscher & Arzt</p>
                <p>Über 40 Jahre medizinische Erfahrung</p>
              </div>
              <div>
                <p className="font-bold text-wire-heading mb-2">Navigation</p>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="hover:text-wire-heading">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-bold text-wire-heading mb-2">Rechtliches</p>
                <div className="flex flex-col gap-1">
                  <Link href="/legal/impressum" className="hover:text-wire-heading">Impressum</Link>
                  <Link href="/legal/privacy" className="hover:text-wire-heading">Datenschutz</Link>
                </div>
                <div className="mt-4">
                  <p className="font-bold text-wire-heading mb-2">Verbinden</p>
                  <p>[LinkedIn Icon] LinkedIn</p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-wire-border pt-4 text-center text-xs text-wire-dark">
              &copy; 2026 Dr. Dienel. Alle Rechte vorbehalten.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
