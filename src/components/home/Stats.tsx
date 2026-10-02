import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/data/site';

export function Stats() {
  const { stats } = siteConfig;

  const items = [
    { value: stats.alumnos, label: 'alumnos' },
    { value: stats.profesores, label: 'profesores' },
    { value: stats.cursos, label: 'cursos y tutoriales' },
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-24" aria-label="Estadísticas">
      <div className="container mx-auto px-4">
        <dl className="grid grid-cols-3 gap-8 md:gap-12 text-center">
          {items.map((item) => (
            <div key={item.label} className="space-y-2">
              <dt className="text-4xl md:text-5xl font-bold tracking-tight">{item.value}</dt>
              <dd className="text-muted-foreground text-sm md:text-base font-medium">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}