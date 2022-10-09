import { TableData } from '../api/types';

export interface ISignInData {
  login: string;
  password: string;
}

export interface ITableProps {
  data: TableData[];
  loadData: () => void;
  isLoading: boolean;
}
