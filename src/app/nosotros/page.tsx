import Image from 'next/image';
import { Metadata } from 'next';
import { Container, Section } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'La historia de Universo Handpan: sonido, naturaleza, creatividad y encuentro.',
};

export default function NosotrosPage() {
  return (
    <>
      <Section padding="xl">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-4">Sobre Universo Handpan</h1>
            <p className="text-center text-muted-foreground mb-12">
              Música, vibración y <em className="not-italic">encuentro</em>
            </p>

            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <Image
                  src="/assets/clase-Cz4qhPIV.jpg"
                  alt="Manos sobre un handpan"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Universo Handpan nació de una certeza simple: el sonido del acero tiene la capacidad de reunir a las personas.
                </p>
                <p>
                  Somos una escuela, una comunidad y una tienda. Enseñamos técnica y musicalidad, pero sobre todo enseñamos a escuchar: al instrumento, al otro y a uno mismo.
                </p>
                <p>
                  Creemos en la exploración sonora, la creatividad y la meditación como caminos para habitar la música con presencia.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}