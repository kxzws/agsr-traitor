import { NavLink } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import bell from '../../assets/svg/bell.svg';
import person from '../../assets/svg/person.svg';
import arrowDown from '../../assets/svg/arrow_down.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="center-cont">
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="logo: Registres" className="header__img-logo" />
        </NavLink>

        <nav className="links">
          <ul className="links__list">
            <li className="links__item">
              <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}>
                Меню
              </NavLink>
            </li>
            <li className="links__item">
              <NavLink to="/qa" className={({ isActive }) => (isActive ? 'active' : '')}>
                Вопросы и ответы
              </NavLink>
            </li>
            <li className="links__item">
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                Об АИС
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="auth">
          <button type="button" className="auth__icon icon_notification">
            <img src={bell} alt="notification bell" />
          </button>
          <div className="auth__line" />
          <div className="auth__login-cont">
            <NavLink to="/personal" className="auth__icon icon_person">
              <img src={person} alt="auth person" />
            </NavLink>
            <NavLink to="/login" className="auth__link">
              Вход в аккаунт
            </NavLink>
            <button type="button" className="auth__button button_arrow">
              <img src={arrowDown} alt="auth list" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
