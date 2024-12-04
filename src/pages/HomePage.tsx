import React from 'react';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { Services } from '../components/Services';
import { Courses } from '../components/Courses';
import { Projects } from '../components/Projects';
import { InfiniteTestimonials } from '../components/InfiniteTestimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { ParallaxSection } from '../components/ParallaxSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <Services />
      <ParallaxSection />
      <Courses />
      <Projects />
      <InfiniteTestimonials />
      <FAQ />
      <Contact />
    </>
  );
}