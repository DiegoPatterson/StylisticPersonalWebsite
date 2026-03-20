'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';


const Navbar: FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

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
  const statusColor = scrollProgress < 50 
    ? (theme === 'dark' ? '#D4AF37' : '#7a9bff')
    : (theme === 'dark' ? '#7dd3fc' : '#00d4ff');
  const accentColor = theme === 'dark' ? 'gold-leaf' : 'diamond-600';
  const bgGradientFrom = theme === 'dark' ? 'from-obsidian-950/80' : 'from-diamond-100/80';
  const bgGradientTo = theme === 'dark' ? 'to-obsidian-950/0' : 'to-diamond-100/0';
  const borderColor = theme === 'dark' ? 'border-gold-leaf/10' : 'border-diamond-600/20';
  const textSecondary = theme === 'dark' ? 'text-obsidian-400' : 'text-diamond-900/60';
  const logoColor = theme === 'dark' ? 'text-gold-leaf' : 'text-diamond-800';
  const progressBgColor = theme === 'dark' ? 'bg-obsidian-800' : 'bg-diamond-200';
  const progressBorderColor = theme === 'dark' ? 'border-gold-leaf/20' : 'border-diamond-600/20';
  const progressGradient = theme === 'dark' 
    ? 'from-gold-leaf/40 to-gold-leaf'
    : 'from-diamond-600/40 to-diamond-600';
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-b ${bgGradientFrom} ${bgGradientTo} backdrop-blur-sm border-b ${borderColor} transition-all duration-300`}
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
            <div className={`w-8 h-8 border ${theme === 'dark' ? 'border-gold-leaf/60' : 'border-diamond-600/60'} rounded-sm flex items-center justify-center`}>
              <div className={`w-4 h-4 bg-gradient-to-br ${theme === 'dark' ? 'from-gold-leaf to-gold-leaf/50' : 'from-diamond-600 to-diamond-500'} rounded-sm`} />
            </div>
          </div>
          <div className="font-mono text-sm tracking-wider">
            <span className={logoColor}>DIEGO</span>
            <span className={textSecondary}>.SYS</span>
          </div>
        </motion.div>
        {/* System Status Display */}
        <motion.div
          className={`hidden sm:flex items-center gap-2 text-xs font-mono ${theme === 'dark' ? 'text-obsidian-300' : 'text-diamond-900/70'}`}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColor }} />
          <span style={{ color: statusColor }}>{systemStatus}</span>
        </motion.div>
        <motion.div className="flex items-center gap-4">
          {/* Scroll Progress */}
          <div className="hidden sm:flex items-center gap-2">
            <span className={`text-xs font-mono ${textSecondary}`}>
              {Math.floor(scrollProgress)}%
            </span>
            <div className={`w-16 h-1 ${progressBgColor} rounded-full overflow-hidden border ${progressBorderColor}`}>
              <motion.div
                className={`h-full bg-gradient-to-r ${progressGradient}`}
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full border transition-all duration-300 flex items-center px-1 ${
              theme === 'dark'
                ? 'bg-obsidian-800 border-gold-leaf/30 hover:border-gold-leaf/60'
                : 'bg-diamond-200 border-diamond-600/30 hover:border-diamond-600/60'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <motion.div
              className={`w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                theme === 'dark'
                  ? 'bg-gold-leaf/60 translate-x-0'
                  : 'bg-diamond-600 translate-x-6'
              }`}
              animate={{
                x: theme === 'dark' ? 0 : 24,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <span className="text-xs">
                {theme === 'dark' ? '🌙' : '☀️'}
              </span>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
