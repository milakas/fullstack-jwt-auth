import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const cn = 'login-signup';

const Signup = observer(() => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  useEffect(() => {
    store.clearErrorsMsg();
  }, []);

  return (
    <div className={`${cn} animated fadeInDown`}>
      <div className={`${cn}__wrap`}>
        <h2>{store.isAuth ? 'Авторизован' : 'Не авторизован'}</h2>
        <h1 className={`${cn}__title`}>Регистрация</h1>
        {store.errorsMsg && (
          <div className={`${cn}__alert`}>
            <p>{store.errorsMsg}</p>
          </div>
        )}
        <input
          className={`${cn}__input`}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Почта"
        />
        <input
          className={`${cn}__input`}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
        />
        <button
          className={`${cn}__btn`}
          onClick={() => store.signup(email, password)}>
          Зарегистрироваться
        </button>
        <p className="message">
          Есть аккаунт? <Link to="/login">Войдите</Link>
        </p>
      </div>
    </div>
  );
});

export default Signup;
