'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.82,
      smoothWheel: true,
      autoRaf: true,
      gestureOrientation: 'vertical',
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <div className="overflow-x-hidden">{children}</div>;
}