import React, { FC, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const cn = 'login-signup';

const Login: FC = observer(() => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  useEffect(() => {
    store.clearErrorsMsg();
  }, []);

  return (
    <div className={`${cn} animated fadeInDown`}>
      <div className={`${cn}__wrap`}>
        <h1 className={`${cn}__title`}>Авторизация</h1>
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
          placeholder="Email"
        />
        <input
          className={`${cn}__input`}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
        />
        <button
          onClick={() => store.login(email, password)}
          className={`${cn}__btn`}>
          Войти
        </button>
        <p className="message">
          Нет аккаунта? <Link to="/signup">Зарегистрируйтесь</Link>
        </p>
      </div>
    </div>
  );
});

export default Login;
