import React from 'react';
import musicIcon from '../assets/music1.png'

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={musicIcon} alt="Music Icon" className="w-8 h-8 mr-2" />
          <div className="text-2xl font-bold">Music Player</div>
        </div>

          <div className="space-x-4">
            <a href="#" className="text-white hover:text-turquoise-500">Home</a>
            <a href="#" className="text-white hover:text-turquoise-500">Library</a>
            <a href="#" className="text-white hover:text-turquoise-500">Playlists</a>
            <a href="#" className="text-white hover:text-turquoise-500">Search</a>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 rounded mr-6"
              placeholder="Search..."
            />
            
            <button className="bg-turquoise-500 border border-[#4DB6AC] text-white px-3 py-1 rounded">Sign Up</button>
            <button className="bg-turquoise-500 border border-[#4DB6AC] text-white px-3 py-1 rounded">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
