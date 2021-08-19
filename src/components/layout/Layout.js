import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <main className="text-gray-900">{children}</main>
    </>
  );
};

export default Layout;
