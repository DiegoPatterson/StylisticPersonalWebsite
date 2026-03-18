# 🚀 Diego's Portfolio - Quick Start Guide

## Installation & Running

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages:
- next@14
- react@18
- framer-motion@10
- tailwindcss@3
- lucide-react (for icons)

### Step 2: Run Development Server
```bash
npm run dev
```

The portfolio will be live at **http://localhost:3000** 🎉

### Step 3: Open in Browser
Visit `http://localhost:3000` and scroll to see the interactive handoff animation!

---

## Project Structure at a Glance

```
src/
├── app/
│   ├── page.tsx              ← Main page (composition)
│   ├── layout.tsx            ← Root layout with fonts
│   └── globals.css           ← Global styles
├── components/
│   ├── layout/Navbar.tsx     ← Top nav with status bar
│   ├── ui/
│   │   ├── NeuralBackground.tsx    ← Canvas animation
│   │   └── GlassCard.tsx           ← Reusable glass container
│   └── sections/
│       ├── HeroSwitchboard.tsx     ← 4 specialty cards
│       └── AboutMeReveal.tsx       ← About me panel
└── hooks/
    └── useHandoffScroll.ts   ← Scroll logic
```

---

## Key Features to Explore

### 🎬 The Handoff Animation
Scroll down slowly to see:
1. Hero cards fade and scale down (40% scroll)
2. About panel slides up from bottom
3. System status changes in navbar

### ✨ Neural Background
- Golden moving nodes
- Animated connecting lines
- Responsive to window size
- Pulses continuously

### 🎨 Glass Morphism Cards
- Obsidian with blur effect
- Gold borders with hover effects
- Smooth animations
- Interactive on hover

### 📱 Responsive Design
- Works on mobile (stack-based)
- Tablet optimized (2-column grid)
- Desktop (full interactive experience)

---

## Customization

### Update Profile Information
Edit **src/components/sections/AboutMeReveal.tsx**:
- Replace `<div>D</div>` with actual profile image
- Update bio text
- Change education/specializations

### Change Colors
Edit **tailwind.config.ts**:
```typescript
gold: {
  leaf: "#D4AF37"  // Change to your color
}
```

### Modify Specialties
Edit **src/components/sections/HeroSwitchboard.tsx**:
- Update the `specialties` array
- Change icons from lucide-react
- Adjust descriptions

---

## Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

Then follow the prompts - it's a one-click deploy! ✨

---

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Changes not showing?
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: Stop (Ctrl+C) and `npm run dev`

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Need Help?

Check the [README.md](README.md) for full documentation including:
- Component details
- Animation explanations
- Tech stack info
- License

**Enjoy your luxury portfolio! 🌟**
