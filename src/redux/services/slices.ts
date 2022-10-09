import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableData } from '../../api/types';
import getTableData from './thunks';
import { ServicesState } from './types';

const initialState: ServicesState = {
  data: [],
  isLoading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTableData.pending, (state) => {
        state.data = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTableData.fulfilled, (state, action: PayloadAction<TableData[]>) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getTableData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});

export default servicesSlice.reducer;
