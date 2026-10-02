import type { Membership } from '@/types';

export const membresias: Membership[] = [
  {
    id: 'mensual',
    nombre: 'Mensual',
    precio: 45000,
    periodo: '/mes',
    features: [
      '4 clases grupales',
      'Comunidad',
      'Tutoriales',
      'Beneficios en tienda',
    ],
    cta: 'Consultar',
  },
  {
    id: 'premium',
    nombre: 'Premium',
    precio: 78000,
    periodo: '/mes',
    features: [
      'Todo lo del plan Mensual',
      'Cursos completos',
      'Eventos especiales',
      'Material exclusivo',
      '15% en tienda',
    ],
    destacado: true,
    cta: 'Consultar',
  },
  {
    id: 'presencial',
    nombre: 'Alumno presencial',
    precio: 60000,
    periodo: '/mes',
    features: [
      '8 clases presenciales',
      'Instrumento en el estudio',
      'Seguimiento personal',
    ],
    cta: 'Consultar',
  },
];

export const alquilerInfo = {
  titulo: 'Alquiler de instrumentos',
  descripcion: 'Handpans disponibles por mes, con seña reintegrable.',
  cta: 'Consultar',
  href: '/contacto',
};