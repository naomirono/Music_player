import React from 'react';
import HeroImage from '../assets/music1.png';

const Hero = () => {
  return (
    <div className="bg-gray-800 p-4 flex items-center ml-48 h-[300px]">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">Song Title</h2>
        <button className="bg-turquoise-500 text-white px-4 py-2 rounded-full">
          Play
        </button>
      </div>
      <div className="w-1/2 ml-8"> 
        <img
          src={HeroImage}
          alt="Song Cover"
          className="w-full h-auto max-h-[150px]" 
        />
      </div>
    </div>
  );
};

export default Hero;
