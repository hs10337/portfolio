import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <header className="border-b border-stone-200/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-xl text-stone-900 hover:text-stone-700"
        >
          Belle
        </Link>
        <ul className="flex items-center gap-8 text-sm text-stone-600">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-stone-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
