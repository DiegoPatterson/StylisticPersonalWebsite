# 🎯 Diego's AI Consultant Portfolio

A high-end luxury tech portfolio featuring a sci-fi HUD aesthetic with obsidian glass layers and a golden neural network background. Built with Next.js, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Neural Background**: Animated canvas with moving golden nodes and pulsing connecting lines
- **Glass Morphism UI**: Obsidian cards with backdrop blur and gold-to-transparent borders
- **Sticky Navbar**: System status indicator with scroll progress tracking
- **Interactive Hero Switcher**: Four-pillar specialty grid (AI Consulting, NLP, Game Design, Cybersecurity)
- **Scroll-Triggered Handoff**: Smooth transition from hero section to about panel
- **Animated About Panel**: Slides up from bottom with HUD-style profile border
- **Responsive Design**: Optimized for desktop, tablet, and mobile

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles & animations
├── components/
│   ├── layout/
│   │   └── Navbar.tsx      # Sticky system status bar
│   ├── ui/
│   │   ├── NeuralBackground.tsx    # Canvas-based neural network
│   │   └── GlassCard.tsx           # Reusable glass morphism card
│   └── sections/
│       ├── HeroSwitchboard.tsx     # Four-pillar interactive grid
│       └── AboutMeReveal.tsx       # Hardware layer profile section
└── hooks/
    └── useHandoffScroll.ts # Scroll-to-transition logic
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
```bash
cd "c:\personal fun\Personal Website"
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## 🎨 Customization

### Profile Information
Edit [src/components/sections/AboutMeReveal.tsx](src/components/sections/AboutMeReveal.tsx) to update:
- Profile image (replace placeholder with actual image)
- Bio text
- Education details
- Specializations
- Location and height

### Colors & Theme
Modify [tailwind.config.ts](tailwind.config.ts) to adjust:
- Primary gold color: Update `gold.leaf` value
- Background obsidian tones
- Custom animations

### Specialty Cards
Edit [src/components/sections/HeroSwitchboard.tsx](src/components/sections/HeroSwitchboard.tsx):
- Add/remove specialty items
- Change icons (using Lucide-React)
- Modify descriptions and accents

## 🎬 Animation Details

### Scroll Handoff Effect
The portfolio features a sophisticated scroll-triggered interaction:
1. **Hero Section** (0-40% scroll): Cards remain at 100% scale and opacity
2. **Transition Zone** (30%-50% scroll): Hero scales to 90% and fades to 30%
3. **About Panel** (40%+ scroll): Panel slides up from bottom and locks in place

Controlled via [src/hooks/useHandoffScroll.ts](src/hooks/useHandoffScroll.ts)

### Neural Network Animation
The background canvas animates continuously with:
- Moving golden nodes with velocity physics
- Pulsing connections between nearby nodes
- Responsive to window resizing
- ~20 nodes adaptive to screen size

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Animations**: Framer Motion 10+
- **Styling**: Tailwind CSS 3+
- **Icons**: Lucide-React
- **Fonts**: Inter, Space Mono, Poppins (Google Fonts)
- **Language**: TypeScript

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Hosting
The `next.config.js` is optimized for SSG and SSR. Deploy the build output to any Next.js-compatible hosting platform.

## 💡 Key Components

### useHandoffScroll Hook
Custom hook that calculates scroll-based animations:
- Returns scroll progress (0-1)
- Calculates switchboard scale/opacity
- Determines about panel Y position
- Tracks visibility states

### GlassCard Component
Reusable glass morphism container with:
- Backdrop blur effect
- Gold border gradient
- Hover animations
- Motion wrapper support

### NeuralBackground
Canvas-based animated background featuring:
- Particle physics simulation
- Dynamic connection lines
- Golden glow effects
- Responsive re-sizing

## 📄 License

This portfolio is custom-built for Diego. Feel free to use as a template for your own projects.

---

**Built with ❤️ and Golden Lines ✨**
