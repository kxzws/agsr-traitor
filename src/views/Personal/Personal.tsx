import './Personal.scss';
import SearchBar from './SearchBar.scss/SearchBar';
import Table from './Table/Table';

const Personal = () => {
  return (
    <section className="personal">
      <div className="center-cont">
        <h3 className="personal__title">Личный кабинет</h3>

        <SearchBar />

        <Table />
      </div>
    </section>
  );
};

export default Personal;
