'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;
    setPosition({ x: offsetX * 0.3, y: offsetY * 0.3 });
  };

  return (
    <button
      ref={ref}
      className={`group relative rounded-full bg-white/5 border border-white/10 px-6 py-3 font-medium text-white transition-all duration-300 ${className || ''}`}
      onMouseEnter={() => setPosition({ x: 0, y: 0 })}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      type="button"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <motion.div
        style={{ x: position.x, y: position.y }}
        className="flex items-center justify-center relative z-10 transition-transform duration-200"
      >
        {children}
      </motion.div>
    </button>
  );
}