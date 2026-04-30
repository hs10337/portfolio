export const metadata = {
  title: "About — Belle",
  description: "About Belle, a product designer working in AI and systems.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
      <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
        About
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
        I design tools that feel calm, useful, and a little ahead of their time.
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-700">
        <p>
          I&apos;m a product designer working across AI products, design
          systems, and 0→1 concepts. I care about clear thinking, polished
          craft, and the small decisions that shape how a product feels.
        </p>
        <p>
          This is a placeholder. Replace it with a fuller bio, a photo, and a
          way to get in touch.
        </p>
      </div>
    </main>
  );
}
