import { createBrowserRouter, Navigate } from 'react-router-dom';
import GuestLayout from './layouts/GuestsLayout';
import DefaultLayout from './layouts/DefaultLayout';
import Login from './views/Login';
import Signup from './views/Signup';
import NotFound from './views/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/login" />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/users',
    element: <DefaultLayout />,
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
