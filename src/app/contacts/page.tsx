'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import ContactLinks from '@/components/sections/ContactLinks';

const ContactsPage: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const bgColor = theme === 'dark' ? 'bg-obsidian-950' : 'bg-diamond-50';

  return (
    <main className={`relative w-full overflow-x-hidden ${bgColor}`}>
      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Navigation Component */}
      <Navbar />

      {/* Contact Links Section */}
      <div className="relative z-10 pt-20">
        <ContactLinks />
      </div>

      {/* Extra scroll space for effect */}
      <div className="relative h-96 z-10" />

      {/* Footer Navigation */}
      <Footer />
    </main>
  );
};

export default ContactsPage;
