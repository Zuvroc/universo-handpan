import type { SiteConfig, NavLink } from '@/types';

export const siteConfig: SiteConfig = {
  hero: {
    titulo: 'El sonido que <em>nos reúne</em>',
    subtitulo:
      'Aprendé handpan con profesores dedicados, explorá cursos a tu ritmo y encontrate con una comunidad que vibra en la misma frecuencia.',
    ctaPrincipal: 'Empezar a tocar',
    ctaSecundario: 'Ver próximos eventos',
    imagen: '/assets/hero-Ch2ef_ai.jpg',
  },
  stats: {
    alumnos: '320+',
    profesores: '12',
    cursos: '40',
  },
  footer: {
    nombre: 'UNIVERSO HANDPAN',
    descripcion: 'Escuela, comunidad y tienda alrededor del sonido del acero.',
    ubicacion: 'Buenos Aires, Argentina',
    email: 'hola@universohandpan.com',
  },
  navigation: {
    links: [
      { label: 'Escuela', href: '/escuela' },
      { label: 'Cursos', href: '/cursos' },
      { label: 'Tutoriales', href: '/tutoriales' },
      { label: 'Eventos', href: '/eventos' },
      { label: 'Tienda', href: '/tienda' },
      { label: 'Comunidad', href: '/comunidad' },
      { label: 'Profesores', href: '/profesores' },
      { label: 'Nosotros', href: '/nosotros' },
    ] as NavLink[],
  },
};

export const navLinks = siteConfig.navigation.links;