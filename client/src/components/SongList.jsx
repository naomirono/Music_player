import React from 'react';
import SongCard from './SongCard';

const sampleSongs = [
  {
    id: 1,
    title: 'Song Title 1',
    artist: 'Artist 1',
    albumArt: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/albumart1.jpeg',
    audioUrl: 'https://soundcloud.com/afrobeatgod/timaya-ft-buju-cold-outside?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },

  {
    id: 2,
    title: 'Song Title 1',
    artist: 'Artist 1',
    albumArt: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/albumart1.jpeg',
    audioUrl: 'https://soundcloud.com/afrobeatgod/timaya-ft-buju-cold-outside?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
  {
    id: 3,
    title: 'Song Title 1',
    artist: 'Artist 1',
    albumArt: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/albumart1.jpeg',
    audioUrl: 'https://soundcloud.com/afrobeatgod/timaya-ft-buju-cold-outside?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
  {
    id: 4,
    title: 'Song Title 1',
    artist: 'Artist 1',
    albumArt: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/albumart1.jpeg',
    audioUrl: 'https://soundcloud.com/afrobeatgod/timaya-ft-buju-cold-outside?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
  {
    id: 5,
    title: 'Song Title 1',
    artist: 'Artist 1',
    albumArt: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/albumart1.jpeg',
    audioUrl: 'https://soundcloud.com/afrobeatgod/timaya-ft-buju-cold-outside?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
  {
    id: 6,
    title: 'Song Title 1',
    artist: 'Artist 1',
    albumArt: 'https://myretrobucket.s3.eu-north-1.amazonaws.com/albumart1.jpeg',
    audioUrl: 'https://soundcloud.com/afrobeatgod/timaya-ft-buju-cold-outside?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
];

function SongList({ onSongSelect }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sampleSongs.map((song) => (
          <SongCard key={song.id} song={song} onSongSelect={onSongSelect} />
        ))}
      </div>
    );
  }
  
  export default SongList;
