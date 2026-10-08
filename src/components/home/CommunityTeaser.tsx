import Link from 'next/link';

export function CommunityTeaser() {
  return (
    <section
      id="comunidad"
      className="mx-auto max-w-3xl px-6 pt-28 text-center"
      aria-label="Comunidad"
    >
      <h2 className="text-5xl">Una comunidad que suena</h2>
      <p className="mt-6 text-muted-foreground">
        Compartí improvisaciones, preguntas y experiencias con músicos de todo el país.
      </p>
      <Link
        href="/comunidad"
        className="mt-8 inline-block rounded-full bg-gold px-7 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Conocer la comunidad
      </Link>
    </section>
  );
}
