import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchLoginUser from '../../api/service';
import { ISignInData } from '../../types/interfaces';

const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: ISignInData, { rejectWithValue }) => {
    try {
      const response = await fetchLoginUser(data);
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export default loginUser;
