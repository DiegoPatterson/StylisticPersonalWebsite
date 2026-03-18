'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

const NeuralBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize nodes - increased count for more density
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 100000);
    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 2 + 0.8,
      opacity: Math.random() * 0.6 + 0.2,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const animate = () => {
      timeRef.current += 1;

      // Clear canvas with fade effect for motion trails
      ctx.fillStyle = 'rgba(5, 5, 5, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle animated background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, 'rgba(5, 5, 5, 0.02)');
      bgGradient.addColorStop(0.5, 'rgba(10, 10, 10, 0.02)');
      bgGradient.addColorStop(1, 'rgba(5, 5, 5, 0.02)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;

      // Update and draw nodes
      nodes.forEach((node: Node) => {
        // Update position with smoother acceleration
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += 0.02;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Calculate pulse for dynamic glow
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const dynamicRadius = node.radius * (0.8 + pulse * 0.4);
        const dynamicOpacity = node.opacity * (0.6 + pulse * 0.4);

        // Draw outer glow with multiple layers for more intensity
        for (let i = 3; i >= 1; i--) {
          const glowGradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            dynamicRadius * (2 + i)
          );
          glowGradient.addColorStop(0, `rgba(212, 175, 55, ${dynamicOpacity * 0.4 / i})`);
          glowGradient.addColorStop(1, `rgba(212, 175, 55, 0)`);

          ctx.fillStyle = glowGradient;
          ctx.fillRect(
            node.x - dynamicRadius * (2 + i),
            node.y - dynamicRadius * (2 + i),
            dynamicRadius * (4 + i * 2),
            dynamicRadius * (4 + i * 2)
          );
        }

        // Draw node core with brighter appearance
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.min(1, dynamicOpacity * 1.6)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, dynamicRadius, 0, Math.PI * 2);
        ctx.fill();

        // Add inner bright core
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.8, dynamicOpacity * 0.8)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, dynamicRadius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby nodes with enhanced visibility
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.35;
            
            // Main connection line
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
            ctx.lineWidth = 1 + (1 - distance / 200) * 1.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Glow line for extra effect
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.5})`;
            ctx.lineWidth = 4 + (1 - distance / 200) * 2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Add pulsing wave effect every few frames
      if (timeRef.current % 120 === 0) {
        const randomIdx = Math.floor(Math.random() * nodes.length);
        const sourceNode = nodes[randomIdx];
        
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sourceNode.x, sourceNode.y, 30, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default NeuralBackground;
