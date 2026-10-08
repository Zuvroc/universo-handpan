import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getCursosDestacados } from '@/lib/data/cursos';

export function FeaturedCourses() {
  const cursos = getCursosDestacados();

  return (
    <section id="cursos-destacados" className="mx-auto max-w-7xl px-6 py-16" aria-label="Cursos destacados">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Cursos</p>
          <h2 className="mt-4 text-5xl">Cursos destacados</h2>
        </div>
        <Link href="/cursos" className="text-sm text-primary hover:underline">
          Ver todos →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cursos.map((curso) => (
          <article key={curso.id} className="group">
            <Card className="h-full p-6">
              <Badge variant="outline" className="text-muted-foreground">
                {curso.nivel}
              </Badge>
              <CardTitle className="mt-4 text-3xl font-normal leading-tight">
                {curso.titulo}
              </CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                {curso.profesor} · {curso.semanas} semanas · {curso.modulos.length} módulos
              </p>

              <CardContent className="mt-4 space-y-3 p-0">
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

              <CardFooter className="mt-4 p-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/cursos#${curso.id}`}>Ver curso</Link>
                </Button>
              </CardFooter>
            </Card>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Button variant="ghost" asChild>
          <Link href="/cursos">Ver todos los cursos →</Link>
        </Button>
      </div>
    </section>
  );
}
