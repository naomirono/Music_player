import React, { useState } from 'react';
import { FiSearch, FiCheck } from 'react-icons/fi'; 

const TopBar = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = (e) => {
    setIsTyping(e.target.value !== ''); 
  };

  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="relative flex items-center ml-60">
        <div className="absolute left-0 pl-3 top-1/2 transform -translate-y-1/2 text-white">
           <div className={isTyping ? 'bg-turquoise-500 p-1 rounded-full' : ''}>
               {isTyping ? <FiCheck /> : <FiSearch />}
           </div>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white p-2 pl-10 rounded-3xl w-[600px]"
          onChange={handleTyping}
        />
      </div>
      <div className="flex items-center mr-6">
        <button className="bg-turquoise-500 border border-[#4DB6AC] text-white px-3 py-1 rounded mr-3">Sign Up</button>
        <button className="bg-turquoise-500 border border-[#4DB6AC] text-white px-3 py-1 rounded">Login</button>
      </div>
    </div>
  );
};

export default TopBar;
