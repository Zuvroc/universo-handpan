'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { getEventosProximos } from '@/lib/data/eventos';
import type { Event } from '@/types';

const tipoStyles: Record<Event['tipo'], string> = {
  Masterclass: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  Encuentro: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Concierto: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  Workshop: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

export function EventsTeaser() {
  const eventos = getEventosProximos().slice(0, 3);

  return (
    <section id="eventos" className="py-16 md:py-24 bg-muted/30" aria-label="Próximos eventos">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Eventos</h2>
            <p className="mt-2 text-muted-foreground">Encuentros que resuenan</p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/eventos">Ver todos →</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventos.map((evento) => (
            <article key={evento.id}>
              <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={evento.imagen}
                    alt={evento.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className={cn(tipoStyles[evento.tipo])}>
                      {evento.tipo}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <p className="text-sm font-medium text-primary">{evento.fecha}</p>
                  <h3 className="mt-1 text-xl font-bold">{evento.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{evento.ubicacion}</p>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="text-lg font-bold">{evento.precio}</span>
                  <span className="text-sm text-muted-foreground">
                    {evento.vacantes} de {evento.total} lugares
                  </span>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/eventos#${evento.id}`}>Ver detalles</Link>
                  </Button>
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Button variant="ghost" asChild>
            <Link href="/eventos">Ver todos los eventos →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}