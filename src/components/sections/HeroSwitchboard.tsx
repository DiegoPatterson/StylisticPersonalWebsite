'use client';

import type { ReactNode, FC } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Network, Gamepad2, Shield } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SpecialtyDetail from '@/components/sections/SpecialtyDetail';
import ProjectDossier from '@/components/sections/ProjectDossier';
import { useHandoffScroll } from '@/hooks/useHandoffScroll';

interface Project {
  id: string;
  title: string;
  number: string;
  status: string;
  stack: string[];
  role: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
}

interface SpecialtyItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  details: string;
  tags: string[];
  projects: Project[];
  layoutId: string;
}

const specialties: SpecialtyItem[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & CONSULTING',
    subtitle: 'Strategic AI Implementation',
    description: 'Bridging the gap between complex logic and business strategy.',
    accent: 'from-gold-leaf/30 to-transparent',
    details: 'Designing and implementing cutting-edge AI systems that transform business operations. From strategy consulting to deployment, I bridge the gap between technical complexity and business objectives.',
    tags: ['Machine Learning', 'Strategy', 'Implementation'],
    layoutId: 'card-ai-consulting',
    projects: [
      {
        id: 'ai-1',
        title: 'Enterprise AI Strategy Framework',
        number: '01',
        status: 'COMPLETED',
        stack: ['Python', 'TensorFlow', 'FastAPI'],
        role: 'AI Architect & Lead Consultant',
        description: 'Architected and deployed an enterprise-grade AI consulting framework for strategic business intelligence. Integrated machine learning pipelines with business analytics for actionable insights.',
      },
      {
        id: 'ai-2',
        title: 'Predictive Analytics Engine',
        number: '02',
        status: 'COMPLETED',
        stack: ['PyTorch', 'PostgreSQL', 'Dashboards'],
        role: 'Lead Developer',
        description: 'Built a real-time predictive analytics engine processing 10M+ data points daily. Reduced forecasting error by 40% through advanced ensemble methods.',
      },
    ],
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: 'GAME DESIGN',
    subtitle: 'Creative Leadership',
    description: 'Lead, Designer, Developer. President, CS Game Design Club.',
    accent: 'from-purple-400/30 to-transparent',
    details: 'Leading the Game Design Club with a focus on innovative game mechanics, player experience design, and full-stack game development. From concept to deployment.',
    tags: ['Game Mechanics', 'UX Design', 'Leadership'],
    layoutId: 'card-game-design',
    projects: [
      {
        id: 'game-1',
        title: 'Isometric Puzzle Adventure',
        number: '03',
        status: 'IN_DEVELOPMENT',
        stack: ['Unity', 'C#', 'Blender'],
        role: 'Lead Game Designer & Developer',
        description: 'Leading development of an atmospheric isometric puzzle game. Designed innovative mechanics combining environmental storytelling with cognitive challenges.',
      },
      {
        id: 'game-2',
        title: 'Multiplayer Strategy Game',
        number: '04',
        status: 'PROTOTYPE',
        stack: ['Godot', 'GDScript', 'Networking'],
        role: 'Game Architect',
        description: 'Prototyping a turn-based multiplayer strategy game with dynamic terrain systems. Focus on emergent gameplay and competitive balance.',
      },
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'CYBERSECURITY',
    subtitle: 'Defensive Architecture',
    description: 'Architecture, Auditing, Defensive Strategy. Security First.',
    accent: 'from-red-400/30 to-transparent',
    details: 'Building secure systems from the ground up. Comprehensive security auditing, threat analysis, and architecture design with zero-trust principles.',
    tags: ['Architecture', 'Auditing', 'Threat Analysis'],
    layoutId: 'card-cybersecurity',
    projects: [
      {
        id: 'sec-1',
        title: 'Zero-Trust Security Framework',
        number: '05',
        status: 'COMPLETED',
        stack: ['Kubernetes', 'HashiCorp Vault', 'eBPF'],
        role: 'Security Architect',
        description: 'Designed and implemented a zero-trust security architecture for enterprise infrastructure. Reduced unauthorized access attempts by 95% through advanced threat detection.',
      },
      {
        id: 'sec-2',
        title: 'Penetration Testing Suite',
        number: '06',
        status: 'COMPLETED',
        stack: ['Python', 'Metasploit', 'Burp Suite'],
        role: 'Lead Security Researcher',
        description: 'Developed comprehensive penetration testing methodology and automation suite. Identified and remediated critical vulnerabilities across 50+ systems.',
      },
    ],
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'NLP & AI DEVELOPMENT',
    subtitle: 'Language Models & Automation',
    description: 'Natural Language Processing, LLM fine-tuning, automated insights.',
    accent: 'from-cyan-400/30 to-transparent',
    details: 'Developing sophisticated NLP systems and fine-tuning large language models. Focus on practical applications in automation and intelligent analysis.',
    tags: ['NLP', 'LLMs', 'Fine-tuning'],
    layoutId: 'card-nlp',
    projects: [
      {
        id: 'nlp-1',
        title: 'Custom LLM Fine-tuning Pipeline',
        number: '07',
        status: 'COMPLETED',
        stack: ['Hugging Face', 'PyTorch', 'Claude API'],
        role: 'ML Engineer & NLP Specialist',
        description: 'Built production-grade LLM fine-tuning pipeline for domain-specific applications. Achieved 92% accuracy on specialized NLP tasks with 40% inference speedup.',
      },
      {
        id: 'nlp-2',
        title: 'Semantic Document Analysis Tool',
        number: '08',
        status: 'COMPLETED',
        stack: ['Transformers', 'Vector DB', 'FastAPI'],
        role: 'Lead Developer',
        description: 'Developed semantic search and document analysis tool processing 100K+ documents. Enabled intelligent knowledge extraction and relationship mapping.',
      },
    ],
  },
];

interface SpecialtyItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  details: string;
  tags: string[];
  projects: Project[];
  layoutId: string;
}

const HeroSwitchboard: FC = () => {
  const scrollProgress = useHandoffScroll(0.4);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const currentSpecialty = specialties.find((s) => s.layoutId === selectedSpecialty);

  return (
    <>
      {/* Hero Section with Scroll-Triggered Scaling */}
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 z-20"
      style={{
        scale: scrollProgress.switchboardScale,
        opacity: scrollProgress.switchboardOpacity,
      }}
      transition={{ duration: 0.1 }}
    >
      <div className="w-full max-w-6xl">
        {/* Header - System Status */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter"
            variants={cardVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-leaf via-gold-leaf to-gold-leaf/70">
              DIEGO.
            </span>
          </motion.h1>
          
          <motion.p
            className="text-gold-leaf font-mono text-xs md:text-sm tracking-widest uppercase mb-8"
            variants={cardVariants}
          >
            // SYSTEM STATUS: OPERATIONAL. MULTI-DISCIPLINARY CS & AI CONSULTANT
          </motion.p>

          <motion.div
            className="h-px w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-gold-leaf/60 to-transparent"
            variants={cardVariants}
          />
        </motion.div>

        {/* Grid of Specialty Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              onClick={() => {
                setSelectedSpecialty(specialty.layoutId);
              }}
              className="cursor-pointer"
              layoutId={specialty.layoutId}
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between hover:border-gold-leaf/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                {/* Icon and Title */}
                <div className="mb-6">
                  <motion.div
                    className={`inline-block p-3 rounded border border-gold-leaf/30 mb-4 text-gold-leaf`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {specialty.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-1 font-mono tracking-wide">
                    {specialty.title}
                  </h3>
                  <p className="text-gold-leaf/60 text-xs font-mono">
                    {specialty.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-obsidian-300 text-xs leading-relaxed flex-grow">
                  {specialty.description}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  className="mt-6 h-0.5 bg-gradient-to-r from-gold-leaf/60 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ originX: 0 }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll CTA */}
        <motion.div
          className="text-center mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-xs text-gold-leaf font-mono tracking-widest uppercase">
            ↓ Scroll to Reveal Hardware Layer
          </p>
        </motion.div>
      </div>
    </motion.section>

    {/* Specialty Detail Modal - Rendered OUTSIDE transformed parent */}
    <AnimatePresence>
      {currentSpecialty && (
        <SpecialtyDetail
          icon={currentSpecialty.icon}
          title={currentSpecialty.title}
          subtitle={currentSpecialty.subtitle}
          details={currentSpecialty.details}
          tags={currentSpecialty.tags}
          projects={currentSpecialty.projects}
          layoutId={currentSpecialty.layoutId}
          selectedProjectId={selectedProjectId}
          onSelectProject={(projectId) => {
            setSelectedProjectId(projectId);
          }}
          onClose={() => {
            setSelectedSpecialty(null);
            setSelectedProjectId(null);
          }}
        />
      )}
    </AnimatePresence>

    {/* Project Dossier Modal - Rendered at top level to escape SpecialtyDetail stacking context */}
    <AnimatePresence>
      {selectedProjectId && currentSpecialty && (
        <ProjectDossier
          project={currentSpecialty.projects.find((p) => p.id === selectedProjectId)!}
          layoutId={currentSpecialty.layoutId}
          onClose={() => setSelectedProjectId(null)}
          onNext={() => {
            const currentIndex = currentSpecialty.projects.findIndex((p) => p.id === selectedProjectId);
            if (currentIndex < currentSpecialty.projects.length - 1) {
              setSelectedProjectId(currentSpecialty.projects[currentIndex + 1].id);
            }
          }}
          onPrev={() => {
            const currentIndex = currentSpecialty.projects.findIndex((p) => p.id === selectedProjectId);
            if (currentIndex > 0) {
              setSelectedProjectId(currentSpecialty.projects[currentIndex - 1].id);
            }
          }}
          hasNext={
            currentSpecialty.projects.findIndex((p) => p.id === selectedProjectId) <
            currentSpecialty.projects.length - 1
          }
          hasPrev={currentSpecialty.projects.findIndex((p) => p.id === selectedProjectId) > 0}
        />
      )}
    </AnimatePresence>
    </>
  );
};

export default HeroSwitchboard;
