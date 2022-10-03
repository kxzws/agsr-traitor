import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import loginUser from '../../redux/auth/thunks';
import { ISignInData } from '../../types/interfaces';
import arrowLeft from '../../assets/svg/arrow_left.svg';
import closedEye from '../../assets/svg/closed_eye.svg';
import openedEye from '../../assets/svg/opened_eye.svg';
import './SignIn.scss';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInData>();

  const { isAuth, isLoading, error } = useTypedSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const toggleVisibility = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible((prev) => !prev);
  };

  const onSubmit: SubmitHandler<ISignInData> = async (data) => {
    // email: correct1gmail.com
    // pass: test1234

    // email: correct2gmail.com
    // pass: test1111

    // email: correct3gmail.com
    // pass: test1122

    await dispatch(loginUser(data));
    setIsAlert(true);
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

        <form action="#" className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="auth-form__title">Вход</h2>

          <p className="auth-form__label">Логин</p>
          <input
            type="text"
            className={`auth-form__input input-login ${errors.login ? 'incorrect' : null}`}
            placeholder="Введите логин"
            {...register('login', { required: true, minLength: 3 })}
          />
          <p className={`auth-form__error ${errors.login ? null : 'none'}`}>Неправильный логин</p>

          <p className="auth-form__label">Пароль</p>
          <div className="input-wrapper">
            <input
              type={isVisible ? 'text' : 'password'}
              className={`auth-form__input input-password ${errors.password ? 'incorrect' : null}`}
              placeholder="Введите пароль"
              {...register('password', { required: true, minLength: 4 })}
            />
            <button type="button" className="btn-visibility" onClick={toggleVisibility}>
              <img
                src={isVisible ? openedEye : closedEye}
                alt="password visibility"
                className="btn-img"
              />
            </button>
          </div>
          <p className={`auth-form__error ${errors.password ? null : 'none'}`}>
            Неправильный пароль
          </p>

          <button type="submit" className="auth-form__btn btn_submit">
            {isLoading ? <CircularProgress color="inherit" /> : 'Вход'}
          </button>
          <button type="button" className="auth-form__btn">
            Авторизация с использованием ЕС ИФЮЛ
          </button>
        </form>

        <Alert
          severity={error ? 'error' : 'success'}
          icon={
            error ? (
              <HighlightOffIcon fontSize="large" sx={{ height: '32px', width: '32px' }} />
            ) : (
              <CheckCircleOutlineIcon fontSize="large" sx={{ height: '32px', width: '32px' }} />
            )
          }
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={() => {
                setIsAlert(false);
              }}
              sx={{ marginRight: '8px' }}
            >
              <CloseIcon fontSize="medium" />
            </IconButton>
          }
          sx={{
            py: 0,
            px: '12px',
            height: '56px',
            width: '370px',
            position: 'fixed',
            right: '2%',
            bottom: '5%',
            zIndex: '3',
            display: isAlert ? 'flex' : 'none',
            alignItems: 'center',
            fontFamily: 'inherit',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '19px',
            letterSpacing: 'initial',
            backgroundColor: '#FFF',
            boxShadow: '0px 15px 40px rgba(59, 61, 65, 0.12)',
            borderRadius: '5px',
          }}
        >
          {error ? 'Ошибка авторизации' : 'Авторизация прошла успешно'}
        </Alert>
      </div>
    </section>
  );
};

export default SignIn;
