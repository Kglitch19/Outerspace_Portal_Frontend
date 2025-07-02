import React from 'react';
// import Header from '../common/Component/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;