'use client';

import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { tutoriales, niveles, categorias, getTutorialesFiltrados } from '@/lib/data/tutoriales';

const nivelStyles: Record<string, string> = {
  Principiante: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Intermedio: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Avanzado: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
};

export function TutorialGrid() {
  const [nivelActivo, setNivelActivo] = useState('Todos');
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const filtrados = getTutorialesFiltrados(nivelActivo, categoriaActiva);

  return (
    <Section padding="xl">
      <Container>
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Biblioteca sonora</h1>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {niveles.map((nivel) => (
            <Button
              key={nivel}
              variant={nivelActivo === nivel ? 'default' : 'outline'}
              size="sm"
              onClick={() => setNivelActivo(nivel)}
              className={nivelStyles[nivel] || ''}
            >
              {nivel}
            </Button>
          ))}
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((tutorial) => (
            <Card key={tutorial.id} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className={nivelStyles[tutorial.nivel]}>
                    {tutorial.nivel}
                  </Badge>
                  <Badge variant="outline">{tutorial.categoria}</Badge>
                </div>
                <CardTitle className="text-xl">{tutorial.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{tutorial.duracion}</span>
                  <Button variant="outline" size="sm">Ver tutorial</Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filtrados.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No hay tutoriales que coincidan con los filtros seleccionados.
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}