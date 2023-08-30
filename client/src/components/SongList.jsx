// components/SongList.js
import React from 'react';
import SongCard from './SongCard';

const sampleSongs = [
  {
    id: 1,
    title: 'Song Title 1',
    artist: 'Artist 1',
    albumArt: 'url_to_album_art_1',
    audioUrl: 'url_to_audio_1',
  },
  // Add more songs here
];

function SongList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sampleSongs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}

export default SongList;
