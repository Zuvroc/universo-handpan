import type { Course } from '@/types';

export const cursos: Course[] = [
  {
    id: 'introduccion-handpan',
    nivel: 'Principiante',
    titulo: 'Introducción al Handpan',
    profesor: 'Lucía Ferrer',
    semanas: 6,
    modulos: [
      { numero: '01', titulo: 'Conociendo el instrumento' },
      { numero: '02', titulo: 'Postura y técnica' },
      { numero: '03', titulo: 'Primeros ritmos' },
      { numero: '04', titulo: 'Coordinación' },
      { numero: '05', titulo: 'Improvisación' },
      { numero: '06', titulo: 'Crear tu primera pieza' },
    ],
    destaque: true,
  },
  {
    id: 'groove-polirritmia',
    nivel: 'Intermedio',
    titulo: 'Groove y Polirritmia',
    profesor: 'Tomás Arce',
    semanas: 8,
    modulos: [
      { numero: '01', titulo: 'Subdivisiones' },
      { numero: '02', titulo: 'Ghost notes' },
      { numero: '03', titulo: 'Ritmos en 6/8' },
      { numero: '04', titulo: 'Polirritmia 3:2' },
      { numero: '05', titulo: 'Groove continuo' },
    ],
    destaque: true,
  },
  {
    id: 'composicion-sonora',
    nivel: 'Avanzado',
    titulo: 'Composición Sonora',
    profesor: 'Lucía Ferrer',
    semanas: 10,
    modulos: [
      { numero: '01', titulo: 'Escalas y modos' },
      { numero: '02', titulo: 'Forma musical' },
      { numero: '03', titulo: 'Dinámica' },
      { numero: '04', titulo: 'Narrativa' },
      { numero: '05', titulo: 'Grabación' },
      { numero: '06', titulo: 'Obra final' },
    ],
    destaque: true,
  },
];

export const getCursosDestacados = (): Course[] => cursos.filter((c) => c.destaque);

export const getCursosByNivel = (nivel: Course['nivel']): Course[] =>
  cursos.filter((c) => c.nivel === nivel);