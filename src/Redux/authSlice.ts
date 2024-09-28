import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: null,
    refreshToken:  null,
    id : null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload.user;
    },
    clearUserData: (state) => {
      state.user = null;
    },
  },
});

export const { setUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;
