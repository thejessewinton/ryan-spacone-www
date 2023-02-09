import { create } from "zustand";

export interface LightboxState {
  isOpen: boolean;
  toggleOpen: () => void;
  currentImage: number;
  setCurrentImage: (index: number) => void;
}

export const useLightbox = create<LightboxState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  currentImage: 0,
  setCurrentImage: (index: number) => set(() => ({ currentImage: index })),
}));
