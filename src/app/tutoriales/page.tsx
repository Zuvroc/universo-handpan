import { Metadata } from 'next';
import { TutorialGrid } from './TutorialGrid';

export const metadata: Metadata = {
  title: 'Tutoriales',
  description: 'Biblioteca de tutoriales de handpan: técnica, ritmo, melodía, improvisación y meditación.',
};

export default function TutorialesPage() {
  return <TutorialGrid />;
}