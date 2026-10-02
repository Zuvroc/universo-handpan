'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/data/site';

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.imagen}
          alt="Handpan de acero sobre piedra"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-36 lg:py-48">
        <div className="max-w-3xl text-center">
          <p className="mb-6 text-lg md:text-xl text-white/90 font-medium">
            Escuela · Comunidad · Tienda
          </p>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {hero.titulo}
          </h1>
          <p className="mb-10 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {hero.subtitulo}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" asChild className="w-full sm:w-auto">
              <Link href="/escuela">{hero.ctaPrincipal}</Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-transparent border-white/50 text-white hover:bg-white/10 w-full sm:w-auto" asChild>
              <Link href="/eventos">{hero.ctaSecundario}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}