'use client';

import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Testimonials from '@/components/sections/testimonials';
import OpenSource from '@/components/sections/open-source';
import Achievements from '@/components/sections/achievements';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import SmoothScroll from '@/components/layout/smooth-scroll';
import FloatingNav from '@/components/layout/floating-nav';
import CustomCursor from '@/components/effects/custom-cursor';
import ScrollProgress from '@/components/effects/scroll-progress';
import CommandPalette from '@/components/ui/command-palette';

export default function Home() {
  return (
    <>
      <div className="noise" />
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav />
      <SmoothScroll>
        <CommandPalette />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <OpenSource />
        <Achievements />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  );
}