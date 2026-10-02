import { Metadata } from 'next';
import Image from 'next/image';
import { Container, Section } from '@/components/layout';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { eventos, getEventosProximos } from '@/lib/data/eventos';

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Workshops, masterclasses, conciertos y círculos de handpan.',
};

const tipoStyles: Record<string, string> = {
  Masterclass: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  Encuentro: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Concierto: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  Workshop: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

export default function EventosPage() {
  const eventosLista = getEventosProximos();

  return (
    <>
      <Section className="bg-muted/30" padding="xl">
        <Container>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Encuentros, conciertos y experiencias</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventosLista.map((evento) => (
              <Card key={evento.id} className="h-full overflow-hidden flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={evento.imagen}
                    alt={evento.titulo}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className={tipoStyles[evento.tipo]}>
                      {evento.tipo}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <p className="text-sm font-medium text-primary">{evento.fecha}</p>
                  <h3 className="mt-1 text-xl font-bold">{evento.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{evento.ubicacion}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{evento.precio}</span>
                    <span className="text-sm text-muted-foreground">
                      {evento.vacantes} de {evento.total} lugares
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full">Ver detalles</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}