# Bug Log & Todo Tracker

## 🐛 Critical Bug: Tiles Disappear on Project Click

**Status:** 🔴 UNRESOLVED  
**Priority:** HIGH  
**Reported:** 2026-03-18  
**Last Updated:** 2026-03-18

### Problem Description
When clicking on a project tile from within a specialty detail view, the specialty tiles disappear and don't return when closing the project modal. The entire interaction becomes broken.

**Steps to Reproduce:**
1. Click a specialty card (e.g., "Game Design")
2. Scroll down to a project tile
3. Click the project tile
4. Modal opens
5. ❌ Specialty cards/tiles are no longer visible

### What We've Tried

#### Attempt 1: Transform Context Fix
**Theory:** SpecialtyDetail modal was inside HeroSwitchboard's transformed parent, causing it to inherit scale/opacity transforms.

**Changes Made:**
- Moved `<SpecialtyDetail>` rendering outside of `<motion.section>` with scroll transforms
- Wrapped component return in fragment `<>` to allow modal outside transformed section
- Reverted modal state back into HeroSwitchboard (kept local state management)

**Files Modified:**
- `src/components/sections/HeroSwitchboard.tsx` - Restructured return statement
- `src/app/page.tsx` - Kept simple (no changes needed)

**Result:** ❌ Still broken after clean build and recompile

### Next Investigation Steps

- [ ] Check if SpecialtyDetail is actually being rendered at the top level
- [ ] Verify z-index stacking context (z-50 vs z-[60])
- [ ] Review overflow properties on parent containers
- [ ] Check if HeroSwitchboard scroll animations are hiding content
- [ ] Debug with React DevTools - inspect DOM structure when modal is open
- [ ] Look at SpecialtyDetail's background/backdrop - might be covering the page
- [ ] Check if scroll lock is preventing proper rendering
- [ ] Consider moving modal rendering to `page.tsx` instead (true top-level)

### Additional Notes
- Build completes successfully, no TypeScript errors
- No console errors visible
- The issue happens consistently on first project click
- This blocks the entire portfolio demo flow

### Possible Root Causes to Investigate
1. SpecialtyDetail backdrop (`fixed inset-0 z-50`) might be covering everything
2. Scroll lock logic (`document.body.style.overflow = 'hidden'`) causing layout shift
3. Modal not truly escaping the component hierarchy
4. Animation/transition causing render issues
5. CSS stacking context problem from parent transforms still active

---

## Other Tasks
- [ ] Profile performance once modal rendering is fixed
- [ ] Add keyboard navigation improvements
- [ ] Implement touch/swipe support for mobile
