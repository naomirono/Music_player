import React from 'react';
import logo from '../../assets/musicicon.png'; 

const Splash = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#3f51b5]">
    <img src={logo} alt="Logo" className="mb-4" style={{ width: '210px' }} />
    <h1 className="text-5xl font-bold text-white mb-8">TuneHub</h1>
  </div>
  );
};

export default Splash;
