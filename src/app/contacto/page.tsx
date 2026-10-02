import { Metadata } from 'next';
import { Container, Section } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escribinos para consultar por clases, cursos, eventos, alquileres o la tienda.',
};

export default function ContactoPage() {
  return (
    <>
      <Section padding="xl">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Escribinos</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Respondemos en menos de 48 horas.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Formulario de contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              <p>Buenos Aires, Argentina</p>
              <a href="mailto:hola@universohandpan.com" className="hover:text-primary transition-colors">
                hola@universohandpan.com
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}