import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableData } from '../../api/types';
import { SearchFilter, SearchType } from '../../types/common';
import getTableData from './thunks';
import { ServicesState } from './types';

const initialState: ServicesState = {
  data: [],
  searchType: SearchType.system,
  searchQuery: '',
  searchFilter: SearchFilter.all,
  isLoading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    changeType(
      state,
      action: PayloadAction<SearchType.name | SearchType.mark | SearchType.system>
    ) {
      state.searchType = action.payload;
    },
    changeQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    changeFilter(state, action: PayloadAction<SearchFilter.all | SearchFilter.standard>) {
      state.searchFilter = action.payload;
    },
  },
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
