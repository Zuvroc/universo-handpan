import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { EventsTeaser } from '@/components/home/EventsTeaser';
import { CommunityTeaser } from '@/components/home/CommunityTeaser';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <EventsTeaser />
      <CommunityTeaser />
    </>
  );
}