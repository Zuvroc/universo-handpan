import { Metadata } from 'next';
import { Container, Section } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { membresias, alquilerInfo } from '@/lib/data/membresias';

export const metadata: Metadata = {
  title: 'Escuela',
  description: 'Clases de handpan presenciales y online, membresías y alquiler de instrumentos.',
};

const niveles = [
  {
    titulo: 'Principiante',
    descripcion: 'Postura, golpe y primeros ritmos. Sin experiencia previa.',
  },
  {
    titulo: 'Intermedio',
    descripcion: 'Independencia de manos, groove y melodía.',
  },
  {
    titulo: 'Avanzado',
    descripcion: 'Improvisación, composición y performance.',
  },
];

export default function EscuelaPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-primary/5 to-transparent" padding="xl">
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Un camino para cada <em className="not-italic">etapa</em></h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Grupos reducidos por nivel, clases individuales y modalidad online. Si todavía no tenés instrumento, te lo prestamos o alquilamos.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" id="niveles">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {niveles.map((nivel) => (
              <Card key={nivel.titulo} className="h-full">
                <CardHeader>
                  <Badge variant="secondary" className="mb-3">
                    {nivel.titulo}
                  </Badge>
                  <CardTitle className="text-2xl">{nivel.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{nivel.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="muted" id="membresias">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Membresías</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {membresias.map((membresia) => (
              <Card key={membresia.id} className={membresia.destacado ? 'ring-2 ring-primary relative' : ''}>
                {membresia.destacado && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Más popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{membresia.nombre}</CardTitle>
                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">${membresia.precio.toLocaleString('es-AR')}</span>
                    <span className="text-muted-foreground">{membresia.periodo}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Separator />
                  <ul className="space-y-3" role="list">
                    {membresia.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full" variant={membresia.destacado ? 'default' : 'outline'}>
                    {membresia.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="xl" id="alquiler">
        <Container>
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-3">{alquilerInfo.titulo}</h3>
              <p className="text-muted-foreground mb-6">{alquilerInfo.descripcion}</p>
              <Button variant="outline" asChild>
                <a href={alquilerInfo.href}>{alquilerInfo.cta}</a>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  );
}