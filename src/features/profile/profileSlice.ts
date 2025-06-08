import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileState, CustomerProfile, AccountantProfile } from '../../types';

const initialState: ProfileState = {
  customerProfile: null,
  accountantProfile: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateCustomerProfile: (state: ProfileState, action: PayloadAction<CustomerProfile>) => {
      state.customerProfile = action.payload;
    },
    updateAccountantProfile: (state: ProfileState, action: PayloadAction<AccountantProfile>) => {
      state.accountantProfile = action.payload;
    },
    setLoading: (state: ProfileState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state: ProfileState, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  updateCustomerProfile,
  updateAccountantProfile,
  setLoading,
  setError,
} = profileSlice.actions;

export default profileSlice.reducer; 