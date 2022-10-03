import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserCard } from '../../api/types';
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
        state.isAuth = false;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserCard>) => {
        state.accessToken = action.payload.accessToken;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});

export default authSlice.reducer;
