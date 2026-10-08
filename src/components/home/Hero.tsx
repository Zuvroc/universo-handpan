'use client';

import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/data/site';

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src={hero.imagen}
        alt="Handpan de acero sobre piedra"
        width={1920}
        height={1088}
        priority
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-fade" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 fade-up">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">
          Escuela · Comunidad · Tienda
        </p>
        <h1 className="mt-6 max-w-4xl text-6xl leading-[0.95] md:text-8xl">
          {hero.titulo} <em className="text-gold">{hero.tituloDestaque}</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{hero.subtitulo}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/escuela"
            className="rounded-full bg-gold px-7 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {hero.ctaPrincipal}
          </Link>
          <Link
            href="/eventos"
            className="glass rounded-full px-7 py-3 transition-colors hover:bg-accent/40"
          >
            {hero.ctaSecundario}
          </Link>
        </div>
      </div>
    </section>
  );
}
