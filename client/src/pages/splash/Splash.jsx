import React from 'react';
import logo from '../../assets/musicicon.png'; 
import '../../splash.css'; // Import your CSS file

const Splash = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#3f51b5]">
      <img src={logo} alt="Logo" className="logo-animation mb-4" style={{ width: '210px' }} />
      <h1 className="text-5xl font-bold text-white mb-8">Tune<span className='text-[#1699c8]'>Hub</span></h1>
    </div>
  );
};

export default Splash;
