import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTableData } from '../../api/service';
import { SearchFilter, SearchType } from '../../types/common';

const getTableData = createAsyncThunk(
  'services/getTableData',
  async (
    data: {
      searchType: SearchType.name | SearchType.mark | SearchType.system;
      searchQuery: string;
      searchFilter: SearchFilter.all | SearchFilter.standard;
    },
    { rejectWithValue }
  ) => {
    try {
      const { searchType, searchQuery, searchFilter } = data;
      const response = await fetchTableData(searchType, searchQuery, searchFilter);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export default getTableData;
