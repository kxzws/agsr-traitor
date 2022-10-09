import { TableData } from '../../api/types';
import { SearchFilter, SearchType } from '../../types/common';

export interface ServicesState {
  data: TableData[];
  searchType: SearchType.name | SearchType.mark | SearchType.system;
  searchQuery: string;
  searchFilter: SearchFilter.all | SearchFilter.standard;
  isLoading: boolean;
  error: Error | null;
}
