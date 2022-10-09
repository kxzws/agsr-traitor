import { useState } from 'react';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useTypedSelector from '../../../hooks/useTypedSelector';
import { SearchFilter, SearchType } from '../../../types/common';
import { servicesSlice } from '../../../redux/services/slices';
import loupe from '../../../assets/svg/loupe.svg';
import clean from '../../../assets/svg/clean.svg';
import './SearchBar.scss';

const SearchBar = () => {
  const { searchType, searchQuery, searchFilter } = useTypedSelector((state) => state.services);

  const { changeType, changeQuery, changeFilter } = servicesSlice.actions;
  const dispatch = useAppDispatch();

  const [isSystemChecked, setIsSystemChecked] = useState<boolean>(searchType === SearchType.system);
  const [isNameChecked, setIsNameChecked] = useState<boolean>(searchType === SearchType.name);
  const [isMarkChecked, setIsMarkChecked] = useState<boolean>(searchType === SearchType.mark);

  const [searchValue, setSearchValue] = useState<string>(searchQuery);

  const [isAllChecked, setIsAllChecked] = useState<boolean>(searchFilter === SearchFilter.all);
  const [isStandardChecked, setIsStandardChecked] = useState<boolean>(
    searchFilter === SearchFilter.standard
  );

  const handleTypeCheck = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    switch (value) {
      case SearchType.system:
        setIsSystemChecked(true);
        if (isNameChecked) {
          setIsNameChecked(false);
        }
        if (isMarkChecked) {
          setIsMarkChecked(false);
        }

        dispatch(changeType(SearchType.system));
        break;
      case SearchType.name:
        if (isSystemChecked) {
          setIsSystemChecked(false);
        }
        setIsNameChecked(true);
        if (isMarkChecked) {
          setIsMarkChecked(false);
        }

        dispatch(changeType(SearchType.name));
        break;
      case SearchType.mark:
        if (isSystemChecked) {
          setIsSystemChecked(false);
        }
        if (isNameChecked) {
          setIsNameChecked(false);
        }
        setIsMarkChecked(true);

        dispatch(changeType(SearchType.mark));
        break;
      default:
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue((e.target as HTMLInputElement).value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(changeQuery(searchValue));
    }
  };

  const handleCleanClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchValue('');
    dispatch(changeQuery(''));
  };

  const handleSearchClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(changeQuery(searchValue));
  };

  const handleFilterCheck = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    switch (value) {
      case SearchFilter.all:
        setIsAllChecked(true);
        setIsStandardChecked(false);

        dispatch(changeFilter(SearchFilter.all));
        break;
      case SearchFilter.standard:
        setIsAllChecked(false);
        setIsStandardChecked(true);

        dispatch(changeFilter(SearchFilter.standard));
        break;
      default:
    }
  };

  return (
    <div className="search-bar">
      <div className="type-group">
        <label className={`type-group__type ${isSystemChecked ? 'type_checked' : null}`}>
          <input
            type="radio"
            className="type-group__radio"
            id={SearchType.system}
            name="searchType"
            value={SearchType.system}
            onChange={handleTypeCheck}
          />
          Поиск по ИС / ИР
        </label>

        <label className={`type-group__type ${isNameChecked ? 'type_checked' : null}`}>
          <input
            type="radio"
            className="type-group__radio"
            id={SearchType.name}
            name="searchType"
            value={SearchType.name}
            onChange={handleTypeCheck}
          />
          Поиск по наименование
        </label>

        <label className={`type-group__type ${isMarkChecked ? 'type_checked' : null}`}>
          <input
            type="radio"
            className="type-group__radio"
            id={SearchType.mark}
            name="searchType"
            value={SearchType.mark}
            onChange={handleTypeCheck}
          />
          Поиск по метке
        </label>
      </div>

      <div className="search">
        <div className="search-group">
          <img src={loupe} alt="loupe: search" className="search-group__img img_loupe" />
          <input
            type="search"
            className="search-group__input"
            value={searchValue}
            placeholder="Поиск по ИС / ИР"
            onChange={handleInput}
            onKeyDown={handleEnter}
          />
          <button type="button" className="search-group__btn-img" onClick={handleCleanClick}>
            <img src={clean} alt="loupe: search" className="search-group__img img_clean" />
          </button>
        </div>
        <button type="button" className="search__btn" onClick={handleSearchClick}>
          Показать
        </button>
      </div>

      <div className="filter-group">
        <label className={`filter-group__filter ${isAllChecked ? 'filter_checked' : null}`}>
          <input
            type="radio"
            className="filter-group__radio"
            id={SearchFilter.all}
            name="searchFilter"
            value={SearchFilter.all}
            onChange={handleFilterCheck}
          />
          Показать все значения
        </label>

        <label className={`filter-group__filter ${isStandardChecked ? 'filter_checked' : null}`}>
          <input
            type="radio"
            className="filter-group__radio"
            id={SearchFilter.standard}
            name="searchFilter"
            value={SearchFilter.standard}
            onChange={handleFilterCheck}
          />
          Отображать только эталонные значения метаданных
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
