import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Auth } from '../../../../auth/infrastructure/ui/components/Auth';
import { User } from '../../../../cart/infrastructure/ui/components/User';
import { Front } from '../../../../front/infrastructure/ui/components/Front';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/',
    element: <Front />,
  },
]);

export const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};
