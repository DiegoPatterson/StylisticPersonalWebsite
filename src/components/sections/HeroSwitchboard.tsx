'use client';

import type { ReactNode, FC } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Network, Gamepad2, Shield, X } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { useHandoffScroll } from '@/hooks/useHandoffScroll';

interface SpecialtyItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  details: string;
  tags: string[];
}

const specialties: SpecialtyItem[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & CONSULTING',
    subtitle: 'Strategic AI Implementation',
    description: 'Bridging the gap between complex logic and business strategy.',
    accent: 'from-gold-leaf/30 to-transparent',
    details: 'Designing and implementing cutting-edge AI systems that transform business operations. From strategy consulting to deployment, I bridge the gap between technical complexity and business objectives.',
    tags: ['Machine Learning', 'Strategy', 'Implementation'],
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: 'GAME DESIGN',
    subtitle: 'Creative Leadership',
    description: 'Lead, Designer, Developer. President, CS Game Design Club.',
    accent: 'from-purple-400/30 to-transparent',
    details: 'Leading the Game Design Club with a focus on innovative game mechanics, player experience design, and full-stack game development. From concept to deployment.',
    tags: ['Game Mechanics', 'UX Design', 'Leadership'],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'CYBERSECURITY',
    subtitle: 'Defensive Architecture',
    description: 'Architecture, Auditing, Defensive Strategy. Security First.',
    accent: 'from-red-400/30 to-transparent',
    details: 'Building secure systems from the ground up. Comprehensive security auditing, threat analysis, and architecture design with zero-trust principles.',
    tags: ['Architecture', 'Auditing', 'Threat Analysis'],
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'NLP & AI DEVELOPMENT',
    subtitle: 'Language Models & Automation',
    description: 'Natural Language Processing, LLM fine-tuning, automated insights.',
    accent: 'from-cyan-400/30 to-transparent',
    details: 'Developing sophisticated NLP systems and fine-tuning large language models. Focus on practical applications in automation and intelligent analysis.',
    tags: ['NLP', 'LLMs', 'Fine-tuning'],
  },
];

const HeroSwitchboard: FC = () => {
  const scrollProgress = useHandoffScroll(0.4);
  const [selectedSpecialty, setSelectedSpecialty] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 z-20"
      style={{
        scale: scrollProgress.switchboardScale,
        opacity: scrollProgress.switchboardOpacity,
      }}
      transition={{ duration: 0.1 }}
    >
      <div className="w-full max-w-6xl">
        {/* Header - System Status */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter"
            variants={cardVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-leaf via-gold-leaf to-gold-leaf/70">
              DIEGO.
            </span>
          </motion.h1>
          
          <motion.p
            className="text-gold-leaf font-mono text-xs md:text-sm tracking-widest uppercase mb-8"
            variants={cardVariants}
          >
            // SYSTEM STATUS: OPERATIONAL. MULTI-DISCIPLINARY CS & AI CONSULTANT
          </motion.p>

          <motion.div
            className="h-px w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-gold-leaf/60 to-transparent"
            variants={cardVariants}
          />
        </motion.div>

        {/* Grid of Specialty Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedSpecialty(index)}
              className="cursor-pointer"
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between hover:border-gold-leaf/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                {/* Icon and Title */}
                <div className="mb-6">
                  <motion.div
                    className={`inline-block p-3 rounded border border-gold-leaf/30 mb-4 text-gold-leaf`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {specialty.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-1 font-mono tracking-wide">
                    {specialty.title}
                  </h3>
                  <p className="text-gold-leaf/60 text-xs font-mono">
                    {specialty.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-obsidian-300 text-xs leading-relaxed flex-grow">
                  {specialty.description}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  className="mt-6 h-0.5 bg-gradient-to-r from-gold-leaf/60 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ originX: 0 }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll CTA */}
        <motion.div
          className="text-center mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-xs text-gold-leaf font-mono tracking-widest uppercase">
            ↓ Scroll to Reveal Hardware Layer
          </p>
        </motion.div>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedSpecialty !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6 py-20 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpecialty(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="p-8 md:p-12">
                {/* Close Button */}
                <motion.button
                  className="absolute top-6 right-6 text-gold-leaf/60 hover:text-gold-leaf transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSpecialty(null)}
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Icon and Title */}
                  <div className="mb-8">
                    <motion.div
                      className="inline-block p-4 rounded border border-gold-leaf/30 mb-6 text-gold-leaf text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {specialties[selectedSpecialty].icon}
                    </motion.div>
                    <h2 className="text-4xl font-bold text-white mb-2 font-mono tracking-wide">
                      {specialties[selectedSpecialty].title}
                    </h2>
                    <p className="text-gold-leaf text-sm font-mono tracking-widest mb-6">
                      {specialties[selectedSpecialty].subtitle}
                    </p>
                    <motion.div
                      className="h-1 w-24 bg-gradient-to-r from-gold-leaf to-transparent rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </div>

                  {/* Detailed Description */}
                  <motion.p
                    className="text-obsidian-300 text-base leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {specialties[selectedSpecialty].details}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {specialties[selectedSpecialty].tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className="px-4 py-2 rounded border border-gold-leaf/40 text-gold-leaf text-xs font-mono tracking-wider uppercase bg-gold-leaf/5 hover:bg-gold-leaf/10 hover:border-gold-leaf/60 transition-all"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default HeroSwitchboard;
