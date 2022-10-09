import { TableData } from '../../api/types';

export interface ServicesState {
  data: TableData[];
  isLoading: boolean;
  error: Error | null;
}
