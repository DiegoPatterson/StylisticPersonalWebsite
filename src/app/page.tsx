'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import NeuralBackground from '@/components/ui/NeuralBackground';
import HeroSwitchboard from '@/components/sections/HeroSwitchboard';
import AboutMeReveal from '@/components/sections/AboutMeReveal';

const Home: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative w-full overflow-x-hidden bg-obsidian-950">
      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Switchboard Section */}
      <HeroSwitchboard />

      {/* About Me Reveal Section */}
      <AboutMeReveal />

      {/* Extra scroll space for effect */}
      <div className="relative h-96 z-10" />
    </main>
  );
};

export default Home;
