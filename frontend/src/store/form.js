import { create } from 'zustand';
import useExplorationStore from './index';

const useFormStore = create((set) => ({

    numberOfGuests: 1,

    setNumberOfGuests: (guests) => set({ numberOfGuests:guests }),

    typeOfroom : 'Executive',
    setTypeOfRoom: (type) => set({ typeOfroom: type }),
    
    getExplorationState: () => useExplorationStore.getState().currentExploration,
}));

export default useFormStore;
