import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

interface Props {}

export const BasicLayout: FC<Props> = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
