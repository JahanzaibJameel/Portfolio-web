'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    lenisRef.current = new Lenis({
      duration: 0.7,
      autoRaf: true,
      smoothWheel: true,
    });

    lenisRef.current.on('scroll', () => {
      window.dispatchEvent(new Event('scroll'));
    });

    return () => {
      lenisRef.current?.destroy();
    };
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {children}
    </div>
  );
}