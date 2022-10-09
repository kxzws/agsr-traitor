import { authInstance, tableDataInstance } from './instance';
import { ISignInData } from '../types/interfaces';
import { TableData, UserCard } from './types';

const ROWS_LIMIT = 10;

export const fetchLoginUser = async (data: ISignInData): Promise<UserCard> => {
  try {
    const QUERY_URL = 'login';
    const { login, password } = data;
    const user = {
      email: login,
      password,
    };
    const response = await authInstance.post(QUERY_URL, user);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchTableData = async (): Promise<TableData[]> => {
  try {
    const QUERY_URL = 'elServices';
    const response = await tableDataInstance.get(QUERY_URL, { params: { _limit: ROWS_LIMIT } });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
