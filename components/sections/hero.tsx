'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, Download, Github, Linkedin } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { heroData, SITE_CONFIG } from '@/lib/data';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

function HeroSceneFallback() {
  return (
    <div
      className="relative h-[390px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.14),transparent_35%),linear-gradient(180deg,rgba(2,6,23,0.96),rgba(4,6,19,1))] md:h-[500px] lg:h-[560px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 m-auto h-40 w-40 rotate-45 rounded-[2rem] border border-cyan-200/30 bg-cyan-300/10 shadow-[0_0_80px_rgba(103,232,249,0.18)]" />
    </div>
  );
}

const HeroScene = dynamic(() => import('@/components/three/hero-scene'), {
  ssr: false,
  loading: HeroSceneFallback,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const timeoutId = window.setTimeout(() => setSceneReady(true), 700);
    return () => window.clearTimeout(timeoutId);
  }, [reducedMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });

  const bgY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : -120]);
  const sceneY = useTransform(smoothProgress, [0, 1], [0, reducedMotion ? 0 : 72]);
  const sceneScale = useTransform(smoothProgress, [0, 1], [1, reducedMotion ? 1 : 0.94]);

  return (
    <section ref={sectionRef} id="hero" className="relative isolate overflow-hidden pb-16 pt-8 md:pb-20 md:pt-12 lg:pb-24">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.2),transparent_20%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.18),transparent_25%),linear-gradient(180deg,#030712_0%,#09090b_35%,#09090b_100%)]"
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,rgba(15,23,42,0.0),rgba(15,23,42,0.3))]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
            {heroData.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.18 }}
            className="font-display text-[clamp(3.2rem,7vw,6.4rem)] font-semibold leading-[0.86] tracking-[-0.06em] text-white"
          >
            {heroData.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.28 }}
            className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg"
          >
            {heroData.subheading}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
            className="mt-5 max-w-lg text-sm uppercase tracking-[0.18em] text-slate-400"
          >
            {heroData.brand}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {heroData.pillars.map((pillar) => (
              <motion.span
                key={pillar}
                whileHover={{ y: -2, scale: 1.02 }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-300"
              >
                {pillar}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.56 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#38bdf8_0%,#8b5cf6_50%,#f472b6_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(96,165,250,0.25)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(168,85,247,0.2)]"
            >
              Let&apos;s build something
              <ArrowDownRight size={16} />
            </motion.a>
            <motion.a
              href={SITE_CONFIG.resume}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-white/20 hover:bg-white/8"
            >
              <Download size={15} />
              View resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            className="mt-10 flex items-center gap-4 text-sm text-slate-400"
          >
            <motion.a whileHover={{ y: -2 }} href={SITE_CONFIG.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-full border border-white/10 bg-white/5 p-2.5 transition-colors hover:border-cyan-400/40 hover:text-white">
              <Github size={16} />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="rounded-full border border-white/10 bg-white/5 p-2.5 transition-colors hover:border-cyan-400/40 hover:text-white">
              <Linkedin size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: sceneY, scale: sceneScale }}
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.2 }}
          className="w-full max-w-[22rem] md:max-w-xl lg:max-w-[34rem]"
        >
          {sceneReady ? (
            <HeroScene scrollProgress={smoothProgress} reducedMotion={reducedMotion} />
          ) : (
            <HeroSceneFallback />
          )}
        </motion.div>
      </div>
    </section>
  );
}