'use client';

import { useEffect, useState } from 'react';

interface ScrollProgress {
  raw: number; // 0 to 1
  switchboardScale: number; // 1 to 0.9
  switchboardOpacity: number; // 1 to 0.3
  aboutPanelY: number; // 100 to 0 (percent)
  isAboutVisible: boolean;
}

export const useHandoffScroll = (triggerPoint: number = 0.3) => {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    raw: 0,
    switchboardScale: 1,
    switchboardOpacity: 1,
    aboutPanelY: 100,
    isAboutVisible: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercent = scrolled / scrollHeight;

      // Clamp the handoff to the trigger point
      const handsOffStart = triggerPoint - 0.1;
      const handoffEnd = triggerPoint + 0.1;
      const handoffProgress = Math.max(0, Math.min(1, (scrollPercent - handsOffStart) / (handoffEnd - handsOffStart)));

      // Calculate values
      const switchboardScale = 1 - handoffProgress * 0.1; // 1 to 0.9
      const switchboardOpacity = 1 - handoffProgress * 0.7; // 1 to 0.3
      const aboutPanelY = 100 - handoffProgress * 100; // 100 to 0

      setScrollProgress({
        raw: scrollPercent,
        switchboardScale,
        switchboardOpacity,
        aboutPanelY,
        isAboutVisible: handoffProgress > 0.3,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPoint]);

  return scrollProgress;
};
