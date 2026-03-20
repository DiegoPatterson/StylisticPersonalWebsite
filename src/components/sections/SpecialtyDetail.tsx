'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import ProjectDossier from '@/components/sections/ProjectDossier';

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

interface SpecialtyDetailProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  details: string;
  tags: string[];
  projects: Project[];
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  selectedProjectId: string | null;
  layoutId: string;
}

const SpecialtyDetail: FC<SpecialtyDetailProps> = ({
  icon,
  title,
  subtitle,
  details,
  tags,
  projects,
  onClose,
  onSelectProject,
  selectedProjectId,
  layoutId,
}) => {
  const currentProject = projects.find((p) => p.id === selectedProjectId);
  const projectIndex = projects.findIndex((p) => p.id === selectedProjectId);
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle click on background to close modal
  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the background, not on content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      layoutId={layoutId}
      className="fixed inset-0 z-50 overflow-y-auto bg-obsidian-950 backdrop-blur-2xl"
      onClick={handleBackgroundClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Fixed Close Button - Top Right */}
      <motion.button
        onClick={onClose}
        className="fixed top-20 right-8 z-40 text-gold-leaf/60 hover:text-gold-leaf transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Close (ESC)"
      >
        <X className="w-8 h-8" />
      </motion.button>

      {/* Back Button - Top Left */}
      <motion.button
        onClick={onClose}
        className="fixed top-20 left-8 z-40 flex items-center gap-2 text-gold-leaf/60 hover:text-gold-leaf transition-colors font-mono text-sm tracking-wider"
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        title="Go back (ESC)"
      >
        <ChevronLeft className="w-5 h-5" />
        BACK
      </motion.button>

      {/* Specialty Header - First Tile (Full viewport height) */}
      <motion.section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 pt-24 border-b border-gold-leaf/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="w-full max-w-3xl">
          <motion.div
            className="flex items-start gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="inline-block p-4 rounded border border-gold-leaf/30 text-gold-leaf text-4xl flex-shrink-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              {icon}
            </motion.div>
            <div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-3 font-mono tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {title}
              </motion.h1>
              <motion.p
                className="text-gold-leaf text-base font-mono tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {subtitle}
              </motion.p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-obsidian-200 text-lg leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {details}
          </motion.p>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {tags.map((tag, idx) => (
              <motion.span
                key={idx}
                className="px-4 py-2 rounded border border-gold-leaf/40 text-gold-leaf text-sm font-mono tracking-wider uppercase bg-gold-leaf/5 hover:bg-gold-leaf/10 hover:border-gold-leaf/60 transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll CTA */}
          <motion.div
            className="text-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-sm text-gold-leaf font-mono tracking-widest uppercase">
              ↓ Scroll to View Projects
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Tiles - Stacked Vertically */}
      {projects.map((project, idx) => (
        <motion.section
          key={project.id}
          className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 border-b border-gold-leaf/20 cursor-pointer group"
          onClick={(e) => {
            e.stopPropagation();
            onSelectProject(project.id);
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-full max-w-4xl">
            {/* Project Card */}
            <GlassCard className="p-8 md:p-12 h-full flex flex-col hover:border-gold-leaf/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all">
              {/* Project Number & Status */}
              <motion.div
                className="flex items-center justify-between mb-8"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: false }}
              >
                <span className="text-gold-leaf font-mono text-2xl font-bold tracking-wider">
                  #{project.number}
                </span>
                <span
                  className={`text-sm font-mono tracking-widest px-4 py-2 rounded border ${
                    project.status === 'COMPLETED'
                      ? 'border-green-500/50 text-green-400 bg-green-500/5'
                      : project.status === 'IN_DEVELOPMENT'
                        ? 'border-blue-500/50 text-blue-400 bg-blue-500/5'
                        : 'border-yellow-500/50 text-yellow-400 bg-yellow-500/5'
                  }`}
                >
                  {project.status}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif group-hover:text-gold-leaf transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: false }}
              >
                {project.title}
              </motion.h2>

              {/* Divider */}
              <motion.div
                className="h-px bg-gradient-to-r from-gold-leaf/30 to-transparent mb-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.2 }}
                style={{ originX: 0 }}
                viewport={{ once: false }}
              />

              {/* Role */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: false }}
              >
                <p className="text-gold-leaf/70 font-mono text-xs mb-3 tracking-widest uppercase">
                  Your Role
                </p>
                <p className="text-obsidian-200 text-lg">{project.role}</p>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: false }}
              >
                <p className="text-gold-leaf/70 font-mono text-xs mb-3 tracking-widest uppercase">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-sm px-3 py-2 rounded border border-gold-leaf/30 text-gold-leaf/80 hover:text-gold-leaf hover:border-gold-leaf/60 transition-all"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      viewport={{ once: false }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-obsidian-200 text-base leading-relaxed mb-8 flex-grow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: false }}
              >
                {project.description}
              </motion.p>

              {/* View Details CTA */}
              <motion.div
                className="text-gold-leaf text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                &gt;&gt; CLICK TO EXPAND_DOSSIER
              </motion.div>
            </GlassCard>
          </div>
        </motion.section>
      ))}

      {/* Scroll Spacer for better UX */}
      <div className="h-12" />

      {/* Project Dossier Modal - Nested within Specialty Detail */}
      <AnimatePresence>
        {currentProject && (
          <ProjectDossier
            project={currentProject}
            layoutId={layoutId}
            onClose={() => onSelectProject('')}
            onNext={
              projectIndex < projects.length - 1
                ? () => onSelectProject(projects[projectIndex + 1].id)
                : undefined
            }
            onPrev={
              projectIndex > 0
                ? () => onSelectProject(projects[projectIndex - 1].id)
                : undefined
            }
            hasNext={projectIndex < projects.length - 1}
            hasPrev={projectIndex > 0}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpecialtyDetail;
