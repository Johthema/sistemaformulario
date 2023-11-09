import React from 'react';
import Header from './header/index';
import Footer from './footer/index';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;