import { create } from 'zustand';

const useFormStore = create((set) => ({
  numberOfGuests: 1,
  setNumberOfGuests: (guests) => set({ numberOfGuests: guests }),

  typeOfRoom: 'Exclusive',
  setTypeOfRoom: (type) => set({ typeOfRoom: type }),

  checkInDate: null,
  checkOutDate: null,
  setCheckInDate: (date) => set({ checkInDate: date }),
  setCheckOutDate: (date) => set({ checkOutDate: date }),

  includeBreakfast: false,
  setIncludeBreakfast: (value) => set({ includeBreakfast: value }),
}));

export default useFormStore;