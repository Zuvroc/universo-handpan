import { siteConfig } from '@/lib/data/site';

export function Stats() {
  const { stats } = siteConfig;

  const items = [
    { value: stats.alumnos, label: 'alumnos' },
    { value: stats.profesores, label: 'profesores' },
    { value: stats.cursos, label: 'cursos y tutoriales' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16" aria-label="Estadísticas">
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-display text-4xl text-gold md:text-5xl">{item.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
