import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getCursosDestacados } from '@/lib/data/cursos';
import type { Course } from '@/types';

export function FeaturedCourses() {
  const cursos = getCursosDestacados();

  const nivelStyles: Record<Course['nivel'], string> = {
    Principiante: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    Intermedio: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    Avanzado: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  };

  return (
    <section id="cursos-destacados" className="py-16 md:py-24" aria-label="Cursos destacados">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cursos destacados</h2>
            <p className="mt-2 text-muted-foreground">Aprendé a tu ritmo, módulo a módulo</p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/cursos">Ver todos →</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((curso) => (
            <article key={curso.id} className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className={cn(nivelStyles[curso.nivel])}>
                      {curso.nivel}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{curso.semanas} semanas</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {curso.titulo}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">con {curso.profesor}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Separator />
                  <ul className="space-y-2 text-sm" role="list">
                    {curso.modulos.slice(0, 3).map((modulo) => (
                      <li key={modulo.numero} className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-mono text-xs text-primary">{modulo.numero}</span>
                        <span>{modulo.titulo}</span>
                      </li>
                    ))}
                    {curso.modulos.length > 3 && (
                      <li className="text-sm text-primary font-medium">
                        +{curso.modulos.length - 3} módulos más
                      </li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/cursos#${curso.id}`}>Ver curso</Link>
                  </Button>
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Button variant="ghost" asChild>
            <Link href="/cursos">Ver todos los cursos →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}