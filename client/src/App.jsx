// components/App.js
import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Splash from './pages/splash/Splash';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';


function App() {

  return (
    <div className="bg-gray-800 min-h-screen">
      {/* <Splash/>  */}
      <Sidebar/>
      <TopBar/>
      <Hero/>
    </div>
  );
}

export default App;
