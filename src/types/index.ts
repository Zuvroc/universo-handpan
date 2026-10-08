export interface CourseModule {
  numero: string;
  titulo: string;
}

export interface Course {
  id: string;
  nivel: 'Principiante' | 'Intermedio' | 'Avanzado';
  titulo: string;
  profesor: string;
  semanas: number;
  modulos: CourseModule[];
  imagen?: string;
  destaque?: boolean;
}

export interface Event {
  id: string;
  tipo: 'Masterclass' | 'Encuentro' | 'Concierto' | 'Workshop';
  fecha: string;
  titulo: string;
  ubicacion: string;
  precio: string;
  vacantes: number;
  total: number;
  imagen?: string;
}

export interface Product {
  id: string;
  categoria: 'Handpans' | 'Mini handpans' | 'Tongue drums' | 'Accesorios' | 'Udus' | 'Material educativo';
  titulo: string;
  precio: number;
  imagen: string;
  descripcion?: string;
}

export interface Tutorial {
  id: string;
  nivel: 'Principiante' | 'Intermedio' | 'Avanzado';
  categoria: 'Técnica' | 'Ritmo' | 'Melodía' | 'Improvisación' | 'Percusión' | 'Meditación';
  titulo: string;
  duracion: string;
  videoUrl?: string;
}

export interface Teacher {
  id: string;
  inicial: string;
  nombre: string;
  rol: string;
  especialidad: string;
  bio: string;
  foto?: string;
}

export interface Membership {
  id: string;
  nombre: string;
  precio: number;
  periodo: string;
  features: string[];
  destacado?: boolean;
  cta: string;
}

export interface SiteConfig {
  hero: {
    titulo: string;
    tituloDestaque: string;
    subtitulo: string;
    ctaPrincipal: string;
    ctaSecundario: string;
    imagen: string;
  };
  stats: {
    alumnos: string;
    profesores: string;
    cursos: string;
  };
  footer: {
    nombre: string;
    descripcion: string;
    ubicacion: string;
    email: string;
  };
  navigation: {
    links: NavLink[];
  };
}

export interface NavLink {
  label: string;
  href: string;
}