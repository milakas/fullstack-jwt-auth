import { FC, useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const GuestLayout: FC = observer(() => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  if (store.isAuth) {
    return <Navigate to="/users" />;
  }

  if (store.isLoading) {
    return <div>...Загрузка</div>;
  }

  return (
    <div id="guestLayout">
      <Outlet />
    </div>
  );
});

export default GuestLayout;
