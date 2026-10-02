import { Metadata } from 'next';
import { Container, Section } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cursos } from '@/lib/data/cursos';

export const metadata: Metadata = {
  title: 'Cursos',
  description: 'Cursos de handpan por módulos: desde tu primer golpe hasta tu primera composición.',
};

const nivelStyles: Record<string, string> = {
  Principiante: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Intermedio: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Avanzado: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
};

export default function CursosPage() {
  return (
    <>
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Aprendé a tu ritmo, módulo a módulo</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Videos, audios y material descargable con seguimiento de progreso.
            </p>
          </div>

          <div className="space-y-16">
            {['Principiante', 'Intermedio', 'Avanzado'].map((nivel) => {
              const cursosNivel = cursos.filter((c) => c.nivel === nivel);
              return (
                <div key={nivel} id={nivel.toLowerCase()}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className={nivelStyles[nivel]}>
                        {nivel}
                      </Badge>
                      <span className="text-2xl font-bold">{nivel}</span>
                    </div>
                    <span className="text-muted-foreground">{cursosNivel.length} curso{cursosNivel.length > 1 ? 's' : ''}</span>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {cursosNivel.map((curso) => (
                      <Card key={curso.id} className="h-full">
                        <CardHeader>
                          <CardTitle className="text-xl">{curso.titulo}</CardTitle>
                          <p className="text-sm text-muted-foreground">con {curso.profesor} · {curso.semanas} semanas · {curso.modulos.length} módulos</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <Separator />
                          <ul className="space-y-2 text-sm" role="list">
                            {curso.modulos.map((modulo) => (
                              <li key={modulo.numero} className="flex items-center gap-2 text-muted-foreground">
                                <span className="font-mono text-xs text-primary">{modulo.numero}</span>
                                <span>{modulo.titulo}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button variant="outline" className="w-full">Ver detalles</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}