'use client';

import type { ReactNode, FC } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: FC<GlassCardProps> = ({ children, className = '', hoverEffect = true, ...motionProps }) => {
  return (
    <motion.div
      className={`
        relative rounded-xl overflow-hidden
        bg-gradient-to-br from-obsidian-900/40 to-obsidian-950/60
        backdrop-blur-md border border-gold-leaf/20
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        transition-smooth
        ${hoverEffect ? 'hover:border-gold-leaf/40 hover:shadow-[0_8px_32px_rgba(212,175,55,0.2)]' : ''}
        ${className}
      `}
      whileHover={hoverEffect ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...motionProps}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-leaf/30 to-gold-leaf/0" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
