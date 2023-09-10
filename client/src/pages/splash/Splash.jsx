import React from 'react';
import logo from '../../assets/musicicon.png'; 

const Splash = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800">
    <img src={logo} alt="Logo" className="mb-4" style={{ width: '100px' }} />
    <h1 className="text-4xl font-bold text-white mb-8">Music Player</h1>
  </div>
  );
};

export default Splash;
