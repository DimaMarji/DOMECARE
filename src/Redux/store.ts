import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import servicesSlice from './servicesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    services: servicesSlice,
  },
});


