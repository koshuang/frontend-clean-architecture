import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Auth } from '@auth/infrastructure/ui/components/Auth';
import { User } from '@cart/infrastructure/ui/components/User';
import { Front } from '@front/infrastructure/ui/components/Front';
import { BasicLayout } from './BasicLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <Front />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
]);

export const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};
