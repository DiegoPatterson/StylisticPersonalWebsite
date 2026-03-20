# Bug Log & Todo Tracker

## 🐛 Critical Bug: Tiles Disappear on Project Click

**Status:** ✅ RESOLVED  
**Priority:** HIGH  
**Reported:** 2026-03-18  
**Last Updated:** 2026-03-20
**Fixed By:** Root Cause Analysis - DOM Stacking Context Issue

### Problem Description
When clicking on a project tile from within a specialty detail view, the specialty tiles disappear and don't return when closing the project modal. The entire interaction becomes broken.

**Steps to Reproduce:**
1. Click a specialty card (e.g., "Game Design")
2. Scroll down to a project tile
3. Click the project tile
4. Modal opens
5. ❌ Specialty cards/tiles are no longer visible

### Root Cause Identified
The **ProjectDossier modal was nested inside SpecialtyDetail** in the DOM tree, which had:
- `fixed inset-0 z-50 overflow-y-auto`
- This created a stacking context that prevented ProjectDossier (`z-[60]`) from properly escaping
- The overflow container prevented nested fixed elements from displaying correctly
- Even though z-index was higher, the parent's stacking context was limiting the rendering

### Solution Implemented ✅

**Fix:** Move ProjectDossier rendering to the **top level (HeroSwitchboard)** instead of nesting it inside SpecialtyDetail.

**Changes Made:**

1. **HeroSwitchboard.tsx**
   - Added `ProjectDossier` import
   - Added ProjectDossier conditional rendering at the top level alongside SpecialtyDetail
   - ProjectDossier now renders with proper sibling stacking context (not nested)
   - State management moved to HeroSwitchboard for project selection

2. **SpecialtyDetail.tsx**
   - Removed ProjectDossier import
   - Removed ProjectDossier rendering from AnimatePresence
   - Removed `useState` (no longer needed for project state)
   - Removed unused project tracking logic (`currentProject`, `projectIndex`)
   - Kept clean - now only handles showing specialty header and project tiles

3. **ProjectDossier.tsx**
   - No changes needed - works correctly when properly positioned in DOM

### Result
✅ **ProjectDossier now renders completely outside SpecialtyDetail's stacking context**
- Specialty tiles remain visible when project modal opens
- Modal properly displays above the tiles
- No z-index conflicts
- Clean separation of concerns in component hierarchy
- Build successful with no TypeScript errors

### Technical Details
- DOM hierarchy changed from: `HeroSwitchboard > SpecialtyDetail > ProjectDossier`
- To: `HeroSwitchboard > [SpecialtyDetail] + [ProjectDossier]` (siblings, not nested)
- This allows ProjectDossier to properly break out of SpecialtyDetail's overflow container
- z-index now properly ordered without stacking context constraints

---

## Other Tasks
- [ ] Profile performance once modal rendering is fixed
- [ ] Add keyboard navigation improvements
- [ ] Implement touch/swipe support for mobile
