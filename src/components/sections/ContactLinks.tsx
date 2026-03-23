'use client';

import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  description?: string;
}

const ContactItem: FC<ContactItemProps> = ({ icon, label, value, href, description }) => {
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? 'text-obsidian-300' : 'text-diamond-700';
  const labelColor = theme === 'dark' ? 'text-obsidian-500' : 'text-diamond-600/60';
  const descColor = theme === 'dark' ? 'text-obsidian-400' : 'text-diamond-700/70';
  const iconColor = theme === 'dark' ? 'text-gold-leaf' : 'text-diamond-600';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <GlassCard className="p-6 backdrop-blur-md cursor-pointer">
        <div className="flex items-start gap-4">
          <div className={`text-3xl ${iconColor} flex-shrink-0 mt-1`}>
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className={`text-xs font-mono tracking-wider ${labelColor} mb-1`}>
              {label}
            </div>
            <div className={`text-lg font-semibold ${textColor} break-all`}>
              {value}
            </div>
            {description && (
              <div className={`text-sm ${descColor} mt-2`}>
                {description}
              </div>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.a>
  );
};

const ContactLinks: FC = () => {
  const { theme } = useTheme();

  const headingColor = theme === 'dark' ? 'text-obsidian-100' : 'text-diamond-900';
  const subtextColor = theme === 'dark' ? 'text-obsidian-400' : 'text-diamond-700/70';
  const accentColor = theme === 'dark' ? 'text-gold-leaf' : 'text-diamond-600';

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${headingColor}`}>
            Let's <span className={accentColor}>Connect</span>
          </h1>
          <p className={`text-lg ${subtextColor}`}>
            Ready to collaborate, discuss ideas, or just say hello?
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Email */}
          <motion.div variants={itemVariants}>
            <ContactItem
              icon="✉️"
              label="EMAIL"
              value="diego@example.com"
              href="mailto:diego@example.com"
              description="Fastest way to reach me"
            />
          </motion.div>

          {/* LinkedIn */}
          <motion.div variants={itemVariants}>
            <ContactItem
              icon="💼"
              label="LINKEDIN"
              value="diego-patterson"
              href="https://linkedin.com/in/diego-patterson"
              description="Professional network"
            />
          </motion.div>

          {/* GitHub */}
          <motion.div variants={itemVariants}>
            <ContactItem
              icon="🔧"
              label="GITHUB"
              value="diegopatterson"
              href="https://github.com/diegopatterson"
              description="Check out my projects"
            />
          </motion.div>

          {/* Twitter/X */}
          <motion.div variants={itemVariants}>
            <ContactItem
              icon="𝕏"
              label="TWITTER"
              value="@diego_dev"
              href="https://twitter.com/diego_dev"
              description="Tech thoughts & updates"
            />
          </motion.div>
        </motion.div>

        {/* Alternative Contact Section */}
        <motion.div
          className="mt-16 pt-12 border-t"
          style={{
            borderColor: theme === 'dark' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(122, 155, 255, 0.1)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 text-center">
            <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>
              Prefer Email?
            </h2>
            <p className={`${subtextColor} mb-6`}>
              Send me a message directly. I typically respond within 24-48 hours.
            </p>
            <motion.a
              href="mailto:diego@example.com"
              className={`inline-block px-8 py-3 rounded-lg font-semibold transition-all ${
                theme === 'dark'
                  ? 'bg-gold-leaf/20 text-gold-leaf border border-gold-leaf/40 hover:bg-gold-leaf/30'
                  : 'bg-diamond-600/20 text-diamond-600 border border-diamond-600/40 hover:bg-diamond-600/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLinks;
