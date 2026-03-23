'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

const Footer: FC = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const borderColor = theme === 'dark' ? 'border-gold-leaf/10' : 'border-diamond-600/10';
  const textColor = theme === 'dark' ? 'text-obsidian-400' : 'text-diamond-700/60';
  const linkColor = theme === 'dark' ? 'text-obsidian-300' : 'text-diamond-700';
  const linkHoverColor = theme === 'dark' ? 'hover:text-gold-leaf' : 'hover:text-diamond-600';
  const activeLinkColor = theme === 'dark' ? 'text-gold-leaf' : 'text-diamond-600';

  const isHomePage = pathname === '/';
  const isContactsPage = pathname === '/contacts';

  return (
    <footer className={`relative border-t ${borderColor} backdrop-blur-sm transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Nav Links */}
          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className={`font-mono text-xs tracking-widest transition-colors ${
                isHomePage ? activeLinkColor : `${textColor} ${linkHoverColor}`
              }`}
            >
              HOME
            </Link>
            <div className={`w-px h-4 ${borderColor}`} />
            <Link
              href="/contacts"
              className={`font-mono text-xs tracking-widest transition-colors ${
                isContactsPage ? activeLinkColor : `${textColor} ${linkHoverColor}`
              }`}
            >
              CONTACTS
            </Link>
          </motion.div>

          {/* Center Divider */}
          <motion.div
            className={`hidden sm:block w-16 h-px ${borderColor}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          {/* Credit */}
          <motion.p
            className={`font-mono text-xs ${textColor}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © 2026 DIEGO.SYS
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
