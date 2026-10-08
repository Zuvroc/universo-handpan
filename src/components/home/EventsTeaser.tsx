import Image from 'next/image';
import Link from 'next/link';
import { getEventosProximos } from '@/lib/data/eventos';

export function EventsTeaser() {
  const eventos = getEventosProximos().slice(0, 3);

  return (
    <section
      id="eventos"
      className="relative mx-auto mt-20 max-w-7xl overflow-hidden rounded-3xl"
      aria-label="Próximos eventos"
    >
      <Image
        src="/assets/evento-B0bRXrX4.jpg"
        alt="Círculo de handpan al atardecer"
        fill
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        sizes="(max-width: 1024px) 100vw, 1152px"
      />
      <div className="absolute inset-0 bg-fade" />

      <div className="relative grid gap-8 p-8 py-20 md:grid-cols-2 md:p-16">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Eventos</p>
          <h2 className="mt-4 text-5xl">Encuentros que resuenan</h2>
          <Link
            href="/eventos"
            className="mt-6 inline-block text-sm text-primary hover:underline"
          >
            Ver todos →
          </Link>
        </div>

        <div className="space-y-3">
          {eventos.map((evento) => (
            <Link
              key={evento.id}
              href={`/eventos#${evento.id}`}
              className="glass flex items-center justify-between rounded-2xl p-4 transition-colors hover:bg-accent/40"
            >
              <div>
                <p className="font-medium">{evento.titulo}</p>
                <p className="text-sm text-muted-foreground">{evento.ubicacion}</p>
              </div>
              <p className="font-display text-2xl text-gold">{evento.fecha}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
