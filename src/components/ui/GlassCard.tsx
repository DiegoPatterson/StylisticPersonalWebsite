//# BLOCK: Glass Card Component
'use client';

import type { ReactNode, FC } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

//# SUBBLOCK1: Component Props Interface
interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: FC<GlassCardProps> = ({ children, className = '', hoverEffect = true, ...motionProps }) => {
  const { theme } = useTheme();

  //# SUBBLOCK2: Theme-Aware Styling Variables
  const bgGradient = theme === 'dark'
  //# SUBBLOCK2: Border and Shadow Styling
    ? 'from-obsidian-900/40 to-obsidian-950/60'
    : 'from-diamond-100/60 to-diamond-50/80';
  
  const borderColor = theme === 'dark' ? 'border-gold-leaf/20' : 'border-diamond-600/20';
  const hoverBorder = theme === 'dark' ? 'hover:border-gold-leaf/40' : 'hover:border-diamond-600/40';
  const shadowColor = theme === 'dark'
    ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
    : 'shadow-[0_8px_32px_rgba(122,155,255,0.1)]';
  const hoverShadow = theme === 'dark'
    ? 'hover:shadow-[0_8px_32px_rgba(212,175,55,0.2)]'
    : 'hover:shadow-[0_8px_32px_rgba(122,155,255,0.2)]';
//# SUBBLOCK2: Render Component Structure
  
  return (
    <motion.div
      className={`
        relative rounded-xl overflow-hidden
        bg-gradient-to-br ${bgGradient}
        backdrop-blur-md border ${borderColor}
        ${shadowColor}
        transition-smooth
        ${hoverEffect ? `${hoverBorder} ${hoverShadow}` : ''}
        ${className}
      `}
      whileHover={hoverEffect ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...motionProps}
    >{/* SUBBLOCK3: Animated Border Gradient Layer */}
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${
          theme === 'dark'
            ? 'from-gold-leaf/30 to-gold-leaf/0'
            : 'from-diamond-600/30 to-diamond-600/0'
        }`} />
      </div>
{/* SUBBLOCK3: Content Wrapper */}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
