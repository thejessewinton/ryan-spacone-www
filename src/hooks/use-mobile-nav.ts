import { create } from 'zustand'

export interface MobileNavState {
  isMobileNavOpen: boolean
  toggleMobileNav: () => void
}

export const useMobileNav = create<MobileNavState>((set) => ({
  isMobileNavOpen: false,
  toggleMobileNav: () =>
    set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
}))
