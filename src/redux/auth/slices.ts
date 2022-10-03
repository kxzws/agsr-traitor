import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userCard } from '../../api/types';
import loginUser from './thunks';
import { AuthState } from './types';

const initialState: AuthState = {
  accessToken: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.accessToken = null;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<userCard>) => {
        state.accessToken = action.payload.accessToken;
        state.isLoading = false;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});

export default authSlice.reducer;
