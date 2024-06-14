import React from 'react';
import backgroundImage from './background1.png';
import { Outlet } from "react-router-dom";

const backgroundImageStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  opacity: 1,
};


const Layout = ({ children }) => {
  return (
    <div style={backgroundImageStyle}>
      <Outlet />
    </div>
  );
};

export default Layout;