'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Container, Section } from '@/components/layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { productos, categorias, getProductosByCategoria } from '@/lib/data/productos';

export const metadata: Metadata = {
  title: 'Tienda',
  description: 'Handpans, mini handpans, tongue drums, udus, accesorios y material educativo.',
};

export default function TiendaPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const productosFiltrados = getProductosByCategoria(categoriaActiva);

  return (
    <>
      <Section padding="xl">
        <Container>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Instrumentos con alma de acero</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Seleccionados y probados por nuestro equipo.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categorias.map((cat) => (
              <Button
                key={cat}
                variant={categoriaActiva === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCategoriaActiva(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productosFiltrados.map((producto) => (
              <Card key={producto.id} className="h-full overflow-hidden flex flex-col">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={producto.imagen}
                    alt={producto.titulo}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
                <CardHeader className="pb-3">
                  <Badge variant="secondary">{producto.categoria}</Badge>
                  <CardTitle className="text-lg mt-2">{producto.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="text-2xl font-bold">{formatPrice(producto.precio)}</div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full">Ver detalles</Button>
                </CardFooter>
              </Card>
            ))}
            {productosFiltrados.length === 0 && (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                No hay productos en esta categoría.
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}