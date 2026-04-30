import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 backdrop-blur-md bg-cream-50/75 border-b border-ink-100/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif italic text-lg text-ink-900 tracking-tight"
          >
            Belle Lee
          </Link>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-7 text-sm text-ink-700">
              <li>
                <Link
                  href="/#work"
                  className="hover:text-ink-900 transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-ink-900 transition-colors"
                >
                  Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-ink-900 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-ink-100/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-sans uppercase tracking-[0.18em] text-ink-300">
          <span>© {new Date().getFullYear()} Belle Lee</span>
          <span>Made with care in San Francisco</span>
        </div>
      </footer>
    </div>
  );
}
