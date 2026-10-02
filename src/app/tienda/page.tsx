import { Metadata } from 'next';
import { ProductGrid } from './ProductGrid';

export const metadata: Metadata = {
  title: 'Tienda',
  description: 'Handpans, mini handpans, tongue drums, udus, accesorios y material educativo.',
};

export default function TiendaPage() {
  return <ProductGrid />;
}