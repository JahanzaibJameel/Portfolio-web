'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hover = true, onClick }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'glass border',
          hover && 'glass-hover',
          className,
        )}
        onClick={onClick}
        whileHover={hover ? { scale: 1.02, rotateX: 5, rotateY: -5 } : undefined}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {children}
      </motion.div>
    );
  },
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;