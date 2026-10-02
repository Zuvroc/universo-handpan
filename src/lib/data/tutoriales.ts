import type { Tutorial } from '@/types';

export const tutoriales: Tutorial[] = [
  {
    id: 'golpe-dedo-tono-limpio',
    nivel: 'Principiante',
    categoria: 'Técnica',
    titulo: 'Golpe de dedo y tono limpio',
    duracion: '8 min',
  },
  {
    id: 'primer-ritmo-re-menor',
    nivel: 'Principiante',
    categoria: 'Ritmo',
    titulo: 'Tu primer ritmo en Re menor',
    duracion: '12 min',
  },
  {
    id: 'melodias-escala-kurd',
    nivel: 'Intermedio',
    categoria: 'Melodía',
    titulo: 'Melodías con la escala Kurd',
    duracion: '15 min',
  },
  {
    id: 'improvisar-desde-silencio',
    nivel: 'Intermedio',
    categoria: 'Improvisación',
    titulo: 'Improvisar desde el silencio',
    duracion: '18 min',
  },
  {
    id: 'slaps-percusion-borde',
    nivel: 'Avanzado',
    categoria: 'Percusión',
    titulo: 'Slaps y percusión en el borde',
    duracion: '14 min',
  },
  {
    id: 'meditacion-sonora-guiada',
    nivel: 'Principiante',
    categoria: 'Meditación',
    titulo: 'Meditación sonora guiada',
    duracion: '20 min',
  },
];

export const niveles = ['Todos', 'Principiante', 'Intermedio', 'Avanzado'] as const;

export const categorias = [
  'Todos',
  'Técnica',
  'Ritmo',
  'Melodía',
  'Improvisación',
  'Percusión',
  'Meditación',
] as const;

export const getTutorialesFiltrados = (
  nivel: string,
  categoria: string
): Tutorial[] =>
  tutoriales.filter((t) => {
    const matchNivel = nivel === 'Todos' || t.nivel === nivel;
    const matchCategoria = categoria === 'Todos' || t.categoria === categoria;
    return matchNivel && matchCategoria;
  });