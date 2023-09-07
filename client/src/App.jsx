// components/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import SongList from './components/SongList';
import Player from './components/Player';

function App() {
  const [selectedSong, setSelectedSong] = useState(null); // or initialize with a default song

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <SongList onSongSelect={setSelectedSong} />
        <Player selectedSong={selectedSong} />
      </div>
    </div>
  );
}

export default App;
