// components/SongCard.js
import React from 'react';

function SongCard({ song }) {
  return (
    <div className="bg-white p-4 shadow-md">
      <img src={song.albumArt} alt={song.title} className="w-full h-auto" />
      <h2 className="text-lg font-semibold">{song.title}</h2>
      <p className="text-gray-600">{song.artist}</p>
    </div>
  );
}

export default SongCard;
