import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTableData } from '../../api/service';

const getTableData = createAsyncThunk('services/getTableData', async (_, { rejectWithValue }) => {
  try {
    const response = await fetchTableData();
    return response;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export default getTableData;
