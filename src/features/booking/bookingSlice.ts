import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookingState, Booking } from '../../types';

const initialState: BookingState = {
  bookings: [],
  selectedBooking: null,
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookings: (state: BookingState, action: PayloadAction<Booking[]>) => {
      state.bookings = action.payload;
    },
    addBooking: (state: BookingState, action: PayloadAction<Booking>) => {
      state.bookings.push(action.payload);
    },
    updateBooking: (state: BookingState, action: PayloadAction<Booking>) => {
      const index = state.bookings.findIndex((booking: Booking) => booking.id === action.payload.id);
      if (index !== -1) {
        state.bookings[index] = action.payload;
      }
    },
    setSelectedBooking: (state: BookingState, action: PayloadAction<Booking | null>) => {
      state.selectedBooking = action.payload;
    },
    setLoading: (state: BookingState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state: BookingState, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setBookings,
  addBooking,
  updateBooking,
  setSelectedBooking,
  setLoading,
  setError,
} = bookingSlice.actions;

export default bookingSlice.reducer; 