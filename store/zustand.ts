import { create } from 'zustand'

type LanguageStore = {
    language: string,
    setES: () => void,
    setEN: () => void,
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    language: 'EN',
    setES: () => set((state) => ({ language: 'ES' })),
    setEN: () => set((state) => ({ language: 'EN' })),
}));