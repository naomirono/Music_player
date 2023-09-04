// components/SongCard.js
import React from 'react';

function SongCard({ song, onSongSelect }) {
  const handleSongSelect = () => {
    onSongSelect(song);
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <img src={song.albumArt} alt={song.title} className="w-full h-auto" />
      <h2 className="text-lg font-semibold">{song.title}</h2>
      <p className="text-gray-600">{song.artist}</p>
      <button
        onClick={handleSongSelect}
        className="mt-2 bg-blue-500 text-white rounded-full p-2"
      >
        Play
      </button>
    </div>
  );
}

export default SongCard;
