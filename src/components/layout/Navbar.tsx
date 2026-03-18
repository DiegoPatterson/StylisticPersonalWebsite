'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar: FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalScroll) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const systemStatus = scrollProgress < 50 ? 'NEURAL_NETWORK_ACTIVE' : 'HARDWARE_LAYER_ONLINE';
  const statusColor = scrollProgress < 50 ? '#D4AF37' : '#7dd3fc';

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-obsidian-950/80 to-obsidian-950/0 backdrop-blur-sm border-b border-gold-leaf/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Branding */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <div className="w-8 h-8 border border-gold-leaf/60 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-br from-gold-leaf to-gold-leaf/50 rounded-sm" />
            </div>
          </div>
          <div className="font-mono text-sm tracking-wider">
            <span className="text-gold-leaf">DIEGO</span>
            <span className="text-obsidian-400">.SYS</span>
          </div>
        </motion.div>

        {/* System Status Display */}
        <motion.div
          className="hidden sm:flex items-center gap-2 text-xs font-mono"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColor }} />
          <span style={{ color: statusColor }}>{systemStatus}</span>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div className="hidden sm:flex items-center gap-2">
          <span className="text-xs text-obsidian-400 font-mono">
            {Math.floor(scrollProgress)}%
          </span>
          <div className="w-16 h-1 bg-obsidian-800 rounded-full overflow-hidden border border-gold-leaf/20">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-leaf/40 to-gold-leaf"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
