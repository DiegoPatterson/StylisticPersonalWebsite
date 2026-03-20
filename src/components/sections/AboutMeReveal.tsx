'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { useHandoffScroll } from '@/hooks/useHandoffScroll';
import GlassCard from '@/components/ui/GlassCard';

const AboutMeReveal: FC = () => {
  const scrollProgress = useHandoffScroll(0.4);
  const { theme } = useTheme();

  // TODO: accentColor in light mode uses diamond-600 which is unreadable on light backgrounds
  // Affects "HUMAN PROTOCOL ACTIVATED..." text and all accent labels below
  // Consider using darker color like diamond-800 or diamond-900 for light mode
  const accentColor = theme === 'dark' ? 'gold-leaf' : 'diamond-600';
  const borderColor = theme === 'dark' ? 'border-gold-leaf/20' : 'border-diamond-600/20';
  const cornerBorderColor = theme === 'dark' ? 'border-gold-leaf/60' : 'border-diamond-600/60';
  const cornerHoverColor = theme === 'dark' ? 'border-gold-leaf/20' : 'border-diamond-600/20';
  const bgGradient = theme === 'dark' 
    ? 'from-obsidian-800 to-obsidian-900'
    : 'from-diamond-100 to-diamond-50';
  const bgBorder = theme === 'dark' ? 'border-gold-leaf/30' : 'border-diamond-600/30';
  const scanLineColor = theme === 'dark' ? 'gold-leaf' : 'diamond-600';
  const textColor = theme === 'dark' ? 'text-white' : 'text-diamond-900';
  const secondaryTextColor = theme === 'dark' ? 'text-obsidian-200' : 'text-diamond-900/70';

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
          <div className="grid grid-cols-2 gap-0">
            {/* Left: Profile Image with HUD Border */}
            <motion.div
              className={`relative h-96 lg:h-full min-h-96 flex items-center justify-center p-8 lg:p-12 ${borderColor} border-b lg:border-b-0 lg:border-r`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Image Placeholder with HUD Effects */}
              <div className="relative w-full h-full flex items-center justify-center group">
                {/* Outer HUD Ring */}
                <div className={`absolute inset-0 border-2 ${cornerHoverColor} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Corner Accents */}
                <div className={`absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 ${cornerBorderColor}`} />
                <div className={`absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 ${cornerBorderColor}`} />
                <div className={`absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 ${cornerBorderColor}`} />
                <div className={`absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 ${cornerBorderColor}`} />

                {/* Image Placeholder - Replace with actual image */}
                <motion.div
                  className={`relative w-64 h-64 rounded-lg overflow-hidden bg-gradient-to-br ${bgGradient} ${bgBorder} border flex items-center justify-center`}
                  animate={{ borderColor: theme === 'dark' 
                    ? ['rgba(212,175,55,0.3)', 'rgba(212,175,55,0.6)', 'rgba(212,175,55,0.3)']
                    : ['rgba(122,155,255,0.3)', 'rgba(122,155,255,0.6)', 'rgba(122,155,255,0.3)']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className={`text-7xl font-bold ${accentColor}/75`}>D</div>
                </motion.div>

                {/* Scan Line Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent ${theme === 'dark' ? 'via-gold-leaf/5' : 'via-diamond-600/5'} to-transparent`}
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
                  className={`text-3xl lg:text-4xl font-bold ${textColor} mb-2 tracking-tight`}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  DIEGO.
                </motion.h2>
                <motion.p
                  className={`font-mono text-xs tracking-widest mb-4 ${theme === 'dark' ? 'text-gold-leaf/70' : 'text-diamond-800/70'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className={theme === 'dark' ? 'text-gold-leaf/50' : 'text-diamond-800/40'}>// </span>
                  <span className={theme === 'dark' ? 'text-gold-leaf font-bold' : 'text-diamond-800 font-bold'}>HUMAN PROTOCOL</span>
                  <span className={theme === 'dark' ? 'text-gold-leaf/70' : 'text-diamond-800/70'}> ACTIVATED. </span>
                  <span className={theme === 'dark' ? 'text-gold-leaf font-bold' : 'text-diamond-800 font-bold'}>SPECIALIST</span>
                  <br />
                  <span className={theme === 'dark' ? 'text-gold-leaf/50' : 'text-diamond-800/40'}>// </span>
                  <span className={theme === 'dark' ? 'text-gold-leaf/70' : 'text-diamond-800/70'}>IN </span>
                  <span className={theme === 'dark' ? 'text-gold-leaf font-bold' : 'text-diamond-800 font-bold'}>COMPUTER SCIENCE</span>
                  <span className={theme === 'dark' ? 'text-gold-leaf/70' : 'text-diamond-800/70'}> + </span>
                  <span className={theme === 'dark' ? 'text-gold-leaf font-bold' : 'text-diamond-800 font-bold'}>NLP</span>
                  <span className={theme === 'dark' ? 'text-gold-leaf/70' : 'text-diamond-800/70'}> / </span>
                  <span className={theme === 'dark' ? 'text-gold-leaf font-bold' : 'text-diamond-800 font-bold'}>AI STRATEGY</span>
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
                  <span className={theme === 'dark' ? 'text-gold-leaf font-mono font-bold min-w-24' : 'text-diamond-800 font-mono font-bold min-w-24'}>ROLE:</span>
                  <span className={secondaryTextColor}>CS Student & AI Consultant</span>
                </motion.div>

                <motion.div
                  className="flex items-baseline gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  <span className={theme === 'dark' ? 'text-gold-leaf font-mono font-bold min-w-24' : 'text-diamond-800 font-mono font-bold min-w-24'}>LOCATION:</span>
                  <span className={secondaryTextColor}>Riverside, California, US</span>
                </motion.div>

                <motion.div
                  className="flex items-baseline gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className={theme === 'dark' ? 'text-gold-leaf font-mono font-bold min-w-24' : 'text-diamond-800 font-mono font-bold min-w-24'}>YEAR:</span>
                  <span className={secondaryTextColor}>4th (Senior)</span>
                </motion.div>

                <motion.div
                  className="flex items-baseline gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <span className={theme === 'dark' ? 'text-gold-leaf font-mono font-bold min-w-24' : 'text-diamond-800 font-mono font-bold min-w-24'}>HEIGHT:</span>
                  <span className={secondaryTextColor}>6' 3" (190 cm)</span>
                </motion.div>

                <motion.div
                  className="flex gap-4 pt-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className={theme === 'dark' ? 'text-gold-leaf font-mono font-bold min-w-24' : 'text-diamond-800 font-mono font-bold min-w-24'}>SPECIALTIES:</span>
                  <span className={secondaryTextColor}>
                    NLP, LLMs, Game Design,<br />
                    Cybersecurity Architecture
                  </span>
                </motion.div>

                <motion.div
                  className={`flex items-baseline gap-4 pt-3 ${theme === 'dark' ? 'border-gold-leaf/20' : 'border-diamond-600/20'} border-t`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  <span className={theme === 'dark' ? 'text-gold-leaf font-mono font-bold min-w-24' : 'text-diamond-800 font-mono font-bold min-w-24'}>STATUS:</span>
                  <span className={secondaryTextColor}>Available for Select Engagements</span>
                </motion.div>
              </div>

              {/* Bio */}
              <motion.p
                className={`text-sm leading-relaxed pt-6 ${theme === 'dark' ? 'text-obsidian-300 border-gold-leaf/20' : 'text-diamond-900/80 border-diamond-600/20'} border-t`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className={theme === 'dark' ? 'text-gold-leaf/80' : 'text-diamond-700'}>Engineering robust</span> AI solutions and innovative <span className={theme === 'dark' ? 'text-gold-leaf/80' : 'text-diamond-700'}>game architectures</span>. 
                <span className={theme === 'dark' ? 'text-gold-leaf' : 'text-diamond-700'}>Lead</span> of the Game Design Club. Every project reflects a commitment to 
                <span className={theme === 'dark' ? 'text-gold-leaf italic' : 'text-diamond-700 italic'}> high-end, enterprise-grade solutions</span> pushing the boundaries of modern software engineering.
              </motion.p>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </motion.section>
  );
};

export default AboutMeReveal;
