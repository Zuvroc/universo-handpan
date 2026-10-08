import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

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

export function CommunityTeaser() {
  return (
    <section id="comunidad" className="py-16 md:py-24" aria-label="Comunidad">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Una comunidad que suena</h2>
            <p className="mt-2 text-muted-foreground">
              Compartí improvisaciones, preguntas y experiencias con músicos de todo el país.
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/comunidad">Conocer la comunidad</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="group">
              <Card className="h-full transition-shadow hover:shadow-lg">
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
                  <p className="text-sm text-foreground leading-relaxed">&ldquo;{post.contenido}&rdquo;</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-4">
                    <span className="flex items-center gap-1">♥ {post.likes}</span>
                    <span className="flex items-center gap-1">💬 {post.comentarios}</span>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          <h3 className="text-lg font-semibold">Círculos</h3>
          <div className="flex flex-wrap gap-2">
            {circulos.map((circulo) => (
              <span
                key={circulo}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {circulo}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Button variant="ghost" asChild>
            <Link href="/comunidad">Conocer la comunidad →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}