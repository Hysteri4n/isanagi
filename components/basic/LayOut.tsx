import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

// @ts-ignore
export default function LayOut({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
