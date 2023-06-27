import { FC, useContext, useEffect } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';

const cn = 'login-signup';

const DefaultLayout: FC = observer(() => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (!store.isAuth) {
    return <Navigate to="/login" />;
  }

  if (store.isLoading) {
    return <div>...Загрузка</div>;
  }

  return (
    <div id="defaultLayout">
      <div className={`${cn} animated fadeInDown`}>
        <div className={`${cn}__wrap`}>
          {!store.user.isActivated && (
            <div className={`${cn}__alert`}>
              <p style={{ textAlign: 'center' }}>
                Аккаунт ожидает подтверждения. Проверьте вашу электронную почту.
              </p>
            </div>
          )}
          <button className={`${cn}__btn`} onClick={() => store.logout()}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
});

export default DefaultLayout;
