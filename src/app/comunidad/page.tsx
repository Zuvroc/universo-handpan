import { Metadata } from 'next';
import { Container, Section } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Comunidad',
  description: 'Una comunidad de músicos que comparten improvisaciones, preguntas y experiencias con el handpan.',
};

const posts = [
  {
    autor: 'Martina R.',
    nivel: 'Principiante',
    inicial: 'M',
    contenido:
      'Hoy por primera vez logré mantener el ritmo base mientras improvisaba arriba. Tres meses de práctica, ¡valió la pena!',
    likes: 42,
    comentarios: 8,
  },
  {
    autor: 'Julián P.',
    nivel: 'Intermedio',
    inicial: 'J',
    contenido:
      '¿Alguien probó tocar con escobillas suaves en el borde? Busco un sonido más cálido para grabar.',
    likes: 17,
    comentarios: 12,
  },
  {
    autor: 'Sofía L.',
    nivel: 'Avanzado',
    inicial: 'S',
    contenido:
      'Compartí mi primera composición completa en el círculo de improvisación. Gracias a todos por la escucha.',
    likes: 88,
    comentarios: 21,
  },
];

const circulos = [
  'Principiantes',
  'Improvisación',
  'Composición',
  'Meditación sonora',
  'Avanzados',
];

export default function ComunidadPage() {
  return (
    <>
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Un lugar para <em className="not-italic">compartir</em> el sonido</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {posts.map((post, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6 pb-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`/assets/avatar-${post.inicial.toLowerCase()}.jpg`} alt={post.autor} />
                      <AvatarFallback className="text-lg font-bold bg-primary text-primary-foreground">
                        {post.inicial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{post.autor}</p>
                      <p className="text-xs text-muted-foreground">{post.nivel}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">"{post.contenido}"</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-4">
                    <span className="flex items-center gap-1">♥ {post.likes}</span>
                    <span className="flex items-center gap-1">💬 {post.comentarios}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Círculos</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {circulos.map((circulo) => (
                <Button
                  key={circulo}
                  variant="secondary"
                  size="sm"
                  className="h-auto px-4 py-2"
                >
                  {circulo}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline">Unirse a la comunidad</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}