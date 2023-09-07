import React from 'react';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Music Player</div>
          <div className="space-x-4">
            <a href="#" className="text-white hover:text-turquoise-500">Home</a>
            <a href="#" className="text-white hover:text-turquoise-500">Library</a>
            <a href="#" className="text-white hover:text-turquoise-500">Playlists</a>
            <a href="#" className="text-white hover:text-turquoise-500">Search</a>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 rounded"
              placeholder="Search..."
            />
            <div className="text-turquoise-500">
              <i className="fas fa-user-circle text-xl"></i>
            </div>
            <button className="bg-turquoise-500 border border-[#4DB6AC] text-white px-3 py-1 rounded">Sign Up</button>
            <button className="bg-turquoise-500 border border-[#4DB6AC] text-white px-3 py-1 rounded">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
