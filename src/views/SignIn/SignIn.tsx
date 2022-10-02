import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/svg/arrow_left.svg';
import closedEye from '../../assets/svg/closed_eye.svg';
import openedEye from '../../assets/svg/opened_eye.svg';
import './SignIn.scss';

const SignIn = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsVisible((prev) => !prev);
  };

  return (
    <section className="sign-in">
      <div className="center-cont">
        <Link to="/" className="sign-in__link">
          <div className="arrow-wrapper">
            <img src={arrowLeft} alt="arrow: return to the home page" className="sign-in__img" />
          </div>{' '}
          Вернуться на главную
        </Link>

        <form action="#" className="auth-form">
          <h2 className="auth-form__title">Вход</h2>

          <p className="auth-form__label">Логин</p>
          <input type="text" className="auth-form__input input-login" placeholder="Введите логин" />

          <p className="auth-form__label">Пароль</p>
          <div className="input-wrapper">
            <input
              type={isVisible ? 'text' : 'password'}
              className="auth-form__input input-password"
              placeholder="Введите пароль"
            />
            <button type="button" className="btn-visibility" onClick={toggleVisibility}>
              <img
                src={isVisible ? openedEye : closedEye}
                alt="password visibility"
                className="btn-img"
              />
            </button>
          </div>

          <button type="submit" className="auth-form__btn btn_submit">
            Вход
          </button>
          <button type="button" className="auth-form__btn">
            Авторизация с использованием ЕС ИФЮЛ
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
