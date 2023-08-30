// App.js
import React from 'react';
import Header from './components/Header';
import SongList from './components/SongList';
import Player from './components/Player';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <SongList />
        <Player />
      </div>
    </div>
  );
}

export default App;
