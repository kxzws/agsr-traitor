import { Link } from 'react-router-dom';
import notFound from '../../assets/svg/not_found.svg';
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="center-cont">
        <img src={notFound} alt="page is not found" className="not-found__img" />
        <div className="not-found__descr">
          <h3 className="not-found__title">Страница не найдена</h3>
          <p className="not-found__descr">
            Страница, на которую вы пытаетесь попасть,
            <br />
            не существует или была удалена.
          </p>
          <Link to="/" className="not-found__link">
            Перейдите на Главную страницу
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
