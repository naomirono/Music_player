import React from 'react';
import musicIcon from '../assets/musicicon.png';
import { AiOutlinePlayCircle, AiOutlineBarChart, AiOutlineUser } from 'react-icons/ai';
import { MdQueueMusic } from 'react-icons/md';
import { FaCompactDisc } from 'react-icons/fa';
import { IoRadioOutline, IoHeartOutline, IoSearchOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <nav className="bg-gray-700 h-full p-6 text-white fixed top-0 left-0 bottom-0">
      <div className="flex flex-col items-start">
      <div className="flex items-center mb-6">
          <img src={musicIcon} alt="Music Icon" className="w-10 h-10 mr-2" />
          <div className="text-2xl font-bold ">TuneHub</div>
        </div>
        
        <div className="text-lg font-bold mb-2 items-start">LIBRARY</div>

        <div className="flex flex-col items-start space-y-4 ml-2">
          <div className="flex items-center hover:text-turquoise-500">
            <MdQueueMusic className="mr-2" />
            <a href="#" className="text-white hover:text-turquoise-500">Playlist</a>
          </div>
          <div className="flex items-center hover:text-turquoise-500">
            <AiOutlinePlayCircle className="mr-2" />
            <a href="#" className="text-white hover:text-turquoise-500">Songs</a>
          </div>
          <div className="flex items-center hover:text-turquoise-500">
            <FaCompactDisc className="mr-2" />
            <a href="#" className="text-white hover:text-turquoise-500">Albums</a>
          </div>
          <div className="flex items-center hover:text-turquoise-500">
            <AiOutlineUser className="mr-2" />
            <a href="#" className="text-white hover:text-turquoise-500">Artist</a>
          </div>
        </div>

        <div className="text-lg font-bold mt-6 mb-2 items-start">DISCOVER</div>

        <div className="flex flex-col items-start space-y-4 ml-2">
          <div className="flex items-center hover:text-turquoise-500">
            <IoRadioOutline className="mr-2" />
            <a href="#" className="text-white hover:text-turquoise-500">Radio</a>
          </div>
          <div className="flex items-center hover:text-turquoise-500">
            <IoHeartOutline className="mr-2" />
            <a href="#" className="text-white hover:text-turquoise-500">For You</a>
          </div>
          <div className="flex items-center hover:text-turquoise-500">
            <AiOutlineBarChart className="mr-2" />
            <a href="#" className="text-white hover:text-turquoise-500">Top Charts</a>
          </div>
          <div className="flex items-center hover:text-turquoise-500">
            <IoSearchOutline  className="mr-2" />
            <a href="#" className="text-white hover:text-turquoise-500">Browse</a>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Sidebar;
