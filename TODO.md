# Future Plans & Feature Roadmap

## 🎨 Theme & Design

### ✨ Diamond Light Mode
**Priority:** HIGH  
**Estimated Effort:** MEDIUM
**Status:** ✅ COMPLETED

Implemented a complete light mode theme that:
- ✅ Replaced dark obsidian background with lighter tones (cream/white/light gray)
- ✅ Swapped gold accent colors for diamond-inspired palette:
  - Bright white/platinum for primary accents
  - Cool silvers and iridescent blues
  - Clear glass-like aesthetic instead of warm gold
- ✅ Maintained glass morphism design with lighter transparency
- ✅ Updated all gradients to reflect light, reflective diamond qualities
- ✅ Added theme toggle in navbar for seamless switching
- ✅ Implemented subtle rainbow refractions in light mode elements

**Changes Made:**
- Created ThemeContext for global theme state management
- Updated Tailwind configuration with diamond color palette
- Modified all components to support dynamic theming
- Implemented CSS variables for theme-aware styling
- Added theme toggle button with smooth transitions

---

## 🚀 Features & Enhancements

### Performance Optimization
**Priority:** MEDIUM
**Estimated Effort:** SMALL
- [x] Dynamic module loading for modals (SpecialtyDetail & ProjectDossier)
- [ ] Lazy load project images/videos
- [ ] Optimize bundle size

### Mobile & Responsiveness
**Priority:** HIGH
**Estimated Effort:** MEDIUM
- [ ] Touch/swipe navigation for projects
- [ ] Optimize modal sizes for mobile
- [ ] Improve scroll interactions on smaller screens
- [ ] Test on various device sizes

### Keyboard Navigation
**Priority:** MEDIUM
**Estimated Effort:** SMALL
- [ ] Arrow keys to navigate project tiles
- [ ] Tab navigation improvements
- [ ] Keyboard focus indicators
- [ ] Screen reader accessibility audit

### Content & Projects
**Priority:** LOW
**Estimated Effort:** VARIABLE
- [ ] Add more projects with media (videos/images)
- [ ] Update project descriptions with links
- [ ] Add case studies or detailed breakdowns
- [ ] Create filterable project gallery

---

## 🐛 Known Issues

None currently tracked - all critical bugs resolved! ✅

---

## 📋 Completed

- ✅ Fixed tiles disappearing on project click (stacking context fix)
- ✅ Project dossier modal rendering
- ✅ Dynamic module loading for modals (reduced initial bundle by 2 KB)

