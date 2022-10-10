import { authInstance, tableDataInstance } from './instance';
import { ISignInData } from '../types/interfaces';
import { TableData, UserCard } from './types';
import { SearchFilter, SearchType } from '../types/common';

// const ROWS_LIMIT = 10;
const ROWS_LIMIT = null;

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

export const fetchTableData = async (
  searchType: SearchType.name | SearchType.mark | SearchType.system,
  searchQuery: string,
  searchFilter: SearchFilter.all | SearchFilter.standard
): Promise<TableData[]> => {
  try {
    const QUERY_URL = 'elServices';
    const response = await tableDataInstance.get(QUERY_URL, {
      params: {
        infSystemNameRU_like: searchType === SearchType.name ? searchQuery.trim() : null,
        mark_like: searchType === SearchType.mark ? searchQuery.trim() : null,
        name_like: searchType === SearchType.system ? searchQuery.trim() : null,
        standard: searchFilter === SearchFilter.all ? null : 'true',
        _limit: ROWS_LIMIT,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
