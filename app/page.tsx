import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import EditorialStory from '@/components/sections/editorial-story';
import Philosophy from '@/components/sections/philosophy';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import SmoothScroll from '@/components/layout/smooth-scroll';
import FloatingNav from '@/components/layout/floating-nav';
import CustomCursor from '@/components/effects/custom-cursor';
import ScrollProgress from '@/components/effects/scroll-progress';
import CommandPalette from '@/components/ui/command-palette';
import { SITE_CONFIG } from '@/lib/data';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    jobTitle: 'Frontend Engineer',
    description: SITE_CONFIG.description,
    sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <div className="noise" />
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav />
      <SmoothScroll>
        <CommandPalette />
        <main>
          <Hero />
          <About />
          <EditorialStory />
          <Philosophy />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}