'use client';

import type { FC } from 'react';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  number: string;
  status: string;
  stack: string[];
  role: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
}

interface ProjectDossierProps {
  project: Project;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
  layoutId: string;
}

const ProjectDossier: FC<ProjectDossierProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
  layoutId,
}) => {
  // NOTE: Scroll locking is handled by parent SpecialtyDetail modal
  // Do not override parent's scroll lock to avoid conflicts

  return (
    <motion.div
      layoutId={layoutId}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/40"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full max-w-7xl max-h-[90vh] bg-obsidian-950/95 backdrop-blur-2xl border border-gold-leaf/30 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 0 30px rgba(212, 175, 55, 0.15), inset 0 0 1px rgba(212, 175, 55, 0.1)',
        }}
      >
        {/* Scanline Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.03) 2px, rgba(212, 175, 55, 0.03) 4px)',
            zIndex: 10,
          }}
        />

        {/* Header */}
        <motion.div
          className="relative z-20 flex items-center justify-between p-8 border-b border-gold-leaf/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div>
            <motion.p
              className="text-gold-leaf font-mono text-xs tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <TypewriterText text={`[ ${project.number} ] // ${project.title.toUpperCase()}_DOSSIER`} />
            </motion.p>
          </div>

          <motion.button
            onClick={onClose}
            className="text-gold-leaf/60 hover:text-gold-leaf transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="font-mono text-sm">[ ESC ]</div>
          </motion.button>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="relative z-20 p-8 overflow-y-auto max-h-[calc(90vh-120px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Visual Column (7 cols) */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <div
                className="relative w-full bg-gradient-to-br from-obsidian-800 to-obsidian-900 rounded-lg overflow-hidden border border-gold-leaf/40"
                style={{
                  aspectRatio: '16 / 9',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(212, 175, 55, 0.05)',
                }}
              >
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : project.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gold-leaf/30 font-mono text-sm">
                    [MEDIA_PLACEHOLDER]
                  </div>
                )}
              </div>
            </motion.div>

            {/* Data Column (5 cols) */}
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              {/* Project Name */}
              <motion.h2
                className="text-4xl font-bold text-gold-leaf font-serif tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                {project.title}
              </motion.h2>

              {/* Technical Brief */}
              <motion.div
                className="space-y-3 text-sm font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <div className="flex gap-4 border-l border-gold-leaf/40 pl-4 text-obsidian-300">
                  <span className="text-gold-leaf font-bold min-w-28">STATUS:</span>
                  <span>{project.status}</span>
                </div>
                <div className="flex gap-4 border-l border-gold-leaf/40 pl-4 text-obsidian-300">
                  <span className="text-gold-leaf font-bold min-w-28">STACK:</span>
                  <span>{project.stack.join(' / ')}</span>
                </div>
                <div className="flex gap-4 border-l border-gold-leaf/40 pl-4 text-obsidian-300">
                  <span className="text-gold-leaf font-bold min-w-28">ROLE:</span>
                  <span>{project.role}</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-obsidian-300 leading-relaxed text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                {project.description}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Footer */}
        {(hasNext || hasPrev) && (
          <motion.div
            className="relative z-20 flex items-center justify-between px-8 py-6 border-t border-gold-leaf/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.3 }}
          >
            <motion.button
              onClick={onPrev}
              disabled={!hasPrev}
              className={`font-mono text-sm ${
                hasPrev
                  ? 'text-gold-leaf/60 hover:text-gold-leaf cursor-pointer'
                  : 'text-obsidian-600 cursor-not-allowed'
              } transition-colors`}
              whileHover={hasPrev ? { scale: 1.1 } : {}}
              whileTap={hasPrev ? { scale: 0.95 } : {}}
            >
              &lt;&lt; PREVIOUS
            </motion.button>

            <motion.button
              onClick={onNext}
              disabled={!hasNext}
              className={`font-mono text-sm ${
                hasNext
                  ? 'text-gold-leaf/60 hover:text-gold-leaf cursor-pointer'
                  : 'text-obsidian-600 cursor-not-allowed'
              } transition-colors`}
              whileHover={hasNext ? { scale: 1.1 } : {}}
              whileTap={hasNext ? { scale: 0.95 } : {}}
            >
              NEXT &gt;&gt;
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

// Typewriter Effect Component
interface TypewriterTextProps {
  text: string;
  speed?: number;
}

const TypewriterText: FC<TypewriterTextProps> = ({ text, speed = 30 }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

export default ProjectDossier;
