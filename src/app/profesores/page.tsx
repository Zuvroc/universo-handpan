import { Metadata } from 'next';
import { Container, Section } from '@/components/layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { profesores } from '@/lib/data/profesores';

export const metadata: Metadata = {
  title: 'Profesores',
  description: 'Conocé al equipo docente de Universo Handpan.',
};

export default function ProfesoresPage() {
  return (
    <>
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Quienes acompañan tu camino</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {profesores.map((profesor) => (
              <Card key={profesor.id} className="text-center">
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={profesor.foto} alt={profesor.nombre} />
                    <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">
                      {profesor.inicial}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold">{profesor.nombre}</h3>
                  <p className="text-sm text-muted-foreground">{profesor.rol}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{profesor.bio}</p>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {profesor.especialidad}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}