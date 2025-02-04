import { create } from 'zustand';

const useStore = create((set) => ({
  // State to hold the current exploration
  currentExploration: "Hotel", // 'hotel' or 'club house'

  // Action to update the current exploration
  setExploration: (explorationType) => set({ currentExploration: explorationType }),

}));

export default useStore;
