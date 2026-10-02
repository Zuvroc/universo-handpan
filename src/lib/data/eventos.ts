import type { Event } from '@/types';

export const eventos: Event[] = [
  {
    id: 'masterclass-respiracion-pulso',
    tipo: 'Masterclass',
    fecha: '18 Oct',
    titulo: 'Masterclass: Respiración y Pulso',
    ubicacion: 'Estudio Palermo',
    precio: '$25.000',
    vacantes: 6,
    total: 20,
    imagen: '/assets/evento-B0bRXrX4.jpg',
  },
  {
    id: 'circulo-atardecer',
    tipo: 'Encuentro',
    fecha: '26 Oct',
    titulo: 'Círculo de Handpan al Atardecer',
    ubicacion: 'Reserva Costanera',
    precio: 'Libre',
    vacantes: 22,
    total: 40,
    imagen: '/assets/evento-B0bRXrX4.jpg',
  },
  {
    id: 'concierto-metales-respiran',
    tipo: 'Concierto',
    fecha: '9 Nov',
    titulo: 'Concierto: Metales que Respiran',
    ubicacion: 'Centro Cultural Recoleta',
    precio: '$18.000',
    vacantes: 48,
    total: 150,
    imagen: '/assets/evento-B0bRXrX4.jpg',
  },
  {
    id: 'workshop-afinacion',
    tipo: 'Workshop',
    fecha: '23 Nov',
    titulo: 'Workshop de Afinación',
    ubicacion: 'Taller Universo',
    precio: '$40.000',
    vacantes: 3,
    total: 12,
    imagen: '/assets/evento-B0bRXrX4.jpg',
  },
];

export const getEventosProximos = (): Event[] => eventos;