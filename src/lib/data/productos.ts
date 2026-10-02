import type { Product } from '@/types';

export const productos: Product[] = [
  {
    id: 'handpan-kurd-d3',
    categoria: 'Handpans',
    titulo: 'Handpan Kurd D3 · 9 notas',
    precio: 1450000,
    imagen: '/assets/hero-Ch2ef_ai.jpg',
  },
  {
    id: 'handpan-celtic-f3',
    categoria: 'Handpans',
    titulo: 'Handpan Celtic F#3 · 10 notas',
    precio: 1690000,
    imagen: '/assets/hero-Ch2ef_ai.jpg',
  },
  {
    id: 'mini-handpan-amara',
    categoria: 'Mini handpans',
    titulo: 'Mini handpan Amara',
    precio: 620000,
    imagen: '/assets/hero-Ch2ef_ai.jpg',
  },
  {
    id: 'tongue-drum-14',
    categoria: 'Tongue drums',
    titulo: 'Tongue drum 14"',
    precio: 185000,
    imagen: '/assets/hero-Ch2ef_ai.jpg',
  },
  {
    id: 'funda-rigida-hardcase',
    categoria: 'Accesorios',
    titulo: 'Funda rígida Hardcase',
    precio: 210000,
    imagen: '/assets/hero-Ch2ef_ai.jpg',
  },
  {
    id: 'soporte-madera',
    categoria: 'Accesorios',
    titulo: 'Soporte de madera',
    precio: 68000,
    imagen: '/assets/hero-Ch2ef_ai.jpg',
  },
  {
    id: 'udu-ceramica',
    categoria: 'Udus',
    titulo: 'Udu de cerámica',
    precio: 140000,
    imagen: '/assets/hero-Ch2ef_ai.jpg',
  },
  {
    id: 'cuaderno-tabs',
    categoria: 'Material educativo',
    titulo: 'Cuaderno de tabs',
    precio: 22000,
    imagen: '/assets/hero-Ch2ef_ai.jpg',
  },
];

export const categorias = [
  'Todos',
  'Handpans',
  'Mini handpans',
  'Tongue drums',
  'Accesorios',
  'Udus',
  'Material educativo',
] as const;

export const getProductosByCategoria = (categoria: string): Product[] =>
  categoria === 'Todos' ? productos : productos.filter((p) => p.categoria === categoria);