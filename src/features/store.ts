import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import profileReducer from './profile/profileSlice';
import bookingReducer from './booking/bookingSlice';
import messageReducer from './message/messageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    booking: bookingReducer,
    message: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 