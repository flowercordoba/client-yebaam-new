/* eslint-disable prettier/prettier */
import { FC, ReactNode, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AppPage from './features/AppPage';
import Error from './features/error/Error';
import Home from './features/home/components/Home';
import ProtectedRoute from './features/ProtectedRoute';
import CreateStories from './features/stories/components/CreateStories';
import UserProfile from './features/user/components/profile/UserProfile';

const Layout = ({ backgroundColor = '#fff', children }: { backgroundColor: string; children: ReactNode }): JSX.Element => (
  <div style={{ backgroundColor }} className="flex flex-grow">
    {children}
  </div>
);

const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <AppPage />
    },

    {
      path: '/',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <Home />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/user/:username', // Nueva ruta dinámica para el perfil del usuario
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <UserProfile />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },

    {
      path: '/stories/create',  // Declara la nueva ruta
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <CreateStories />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },


    {
      path: '*',
      element: (
        <Suspense>
          <Error />
        </Suspense>
      )
    }
  ];

  return useRoutes(routes);
};

export default AppRouter;
