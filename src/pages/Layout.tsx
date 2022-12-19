import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const Layout: FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex h-[86vh]">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};
