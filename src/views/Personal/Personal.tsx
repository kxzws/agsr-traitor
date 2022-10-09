import { useCallback } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import getTableData from '../../redux/services/thunks';
import SearchBar from './SearchBar/SearchBar';
import Table from './Table/Table';
import './Personal.scss';

const Personal = () => {
  const { data, searchType, searchQuery, searchFilter, isLoading } = useTypedSelector(
    (state) => state.services
  );

  const dispatch = useAppDispatch();

  const loadData = useCallback(() => {
    dispatch(getTableData({ searchType, searchQuery, searchFilter }));
  }, [dispatch, searchType, searchQuery, searchFilter]);

  return (
    <section className="personal">
      <div className="center-cont">
        <h3 className="personal__title">Личный кабинет</h3>

        <SearchBar />

        <Table data={data} loadData={loadData} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default Personal;
