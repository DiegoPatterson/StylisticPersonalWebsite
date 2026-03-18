'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useHandoffScroll } from '@/hooks/useHandoffScroll';
import GlassCard from '@/components/ui/GlassCard';

const AboutMeReveal: FC = () => {
  const scrollProgress = useHandoffScroll(0.4);

  return (
    <motion.section
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 z-30 mb-20"
      style={{
        opacity: scrollProgress.isAboutVisible ? 1 : 0,
        pointerEvents: scrollProgress.isAboutVisible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-6xl">
        <GlassCard className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Profile Image with HUD Border */}
            <motion.div
              className="relative h-96 lg:h-full min-h-96 flex items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gold-leaf/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Image Placeholder with HUD Effects */}
              <div className="relative w-full h-full flex items-center justify-center group">
                {/* Outer HUD Ring */}
                <div className="absolute inset-0 border-2 border-gold-leaf/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold-leaf/60" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold-leaf/60" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold-leaf/60" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold-leaf/60" />

                {/* Image Placeholder - Replace with actual image */}
                <motion.div
                  className="relative w-64 h-64 rounded-lg overflow-hidden bg-gradient-to-br from-obsidian-800 to-obsidian-900 border border-gold-leaf/30 flex items-center justify-center"
                  animate={{ borderColor: ['rgba(212,175,55,0.3)', 'rgba(212,175,55,0.6)', 'rgba(212,175,55,0.3)'] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-7xl font-bold text-gold-leaf/40">D</div>
                </motion.div>

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-leaf/5 to-transparent"
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Right: Information Panel */}
            <motion.div
              className="p-8 lg:p-12 flex flex-col justify-between"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Header */}
              <div className="mb-8">
                <motion.h2
                  className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  DIEGO.
                </motion.h2>
                <motion.p
                  className="text-gold-leaf font-mono text-xs tracking-widest mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  // HUMAN PROTOCOL ACTIVATED. SPECIALIST <br />
                  IN COMPUTER SCIENCE, NLP, & AI STRATEGY.
                </motion.p>
              </div>

              {/* Key Information */}
              <div className="space-y-5 mb-8 text-sm">
                <motion.div
                  className="flex items-baseline gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-gold-leaf font-mono font-bold min-w-24">ROLE:</span>
                  <span className="text-obsidian-200">CS Student & AI Consultant</span>
                </motion.div>

                <motion.div
                  className="flex items-baseline gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  <span className="text-gold-leaf font-mono font-bold min-w-24">LOCATION:</span>
                  <span className="text-obsidian-200">Riverside, California, US</span>
                </motion.div>

                <motion.div
                  className="flex items-baseline gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="text-gold-leaf font-mono font-bold min-w-24">YEAR:</span>
                  <span className="text-obsidian-200">4th (Senior)</span>
                </motion.div>

                <motion.div
                  className="flex items-baseline gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <span className="text-gold-leaf font-mono font-bold min-w-24">HEIGHT:</span>
                  <span className="text-obsidian-200">6' 3" (190 cm)</span>
                </motion.div>

                <motion.div
                  className="flex gap-4 pt-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="text-gold-leaf font-mono font-bold min-w-24">SPECIALTIES:</span>
                  <span className="text-obsidian-200">
                    NLP, LLMs, Game Design,<br />
                    Cybersecurity Architecture
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-baseline gap-4 pt-3 border-t border-gold-leaf/20"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  <span className="text-gold-leaf font-mono font-bold min-w-24">STATUS:</span>
                  <span className="text-obsidian-200">Available for Select Engagements</span>
                </motion.div>
              </div>

              {/* Bio */}
              <motion.p
                className="text-obsidian-300 text-sm leading-relaxed border-t border-gold-leaf/20 pt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Engineering robust AI solutions and innovative game architectures. 
                Lead of the Game Design Club. Every project reflects a commitment to 
                high-end, enterprise-grade solutions pushing the boundaries of modern software engineering.
              </motion.p>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </motion.section>
  );
};

export default AboutMeReveal;
