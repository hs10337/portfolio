export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm text-stone-500">
        <p>© {new Date().getFullYear()} Belle</p>
        <a
          href="mailto:hello@example.com"
          className="transition-colors hover:text-stone-900"
        >
          hello@example.com
        </a>
      </div>
    </footer>
  );
}
