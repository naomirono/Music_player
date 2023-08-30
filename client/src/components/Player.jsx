import React, { useState, useRef } from 'react';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const sampleSong = {
    title: 'Sample Song',
    artist: 'Sample Artist',
    audioUrl: 'url_to_audio_sample',
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="bg-white p-4 shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-2">{sampleSong.title}</h2>
      <p className="text-gray-600 mb-4">{sampleSong.artist}</p>
      <audio
        ref={audioRef}
        src={sampleSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="flex items-center justify-center">
        <button
          onClick={togglePlay}
          className="bg-blue-500 text-white rounded-full p-2 mr-4"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="flex-1">
          <div className="bg-gray-300 h-2 relative">
            <div
              className="bg-blue-500 h-2 absolute"
              style={{ width: `${(currentTime / audioRef.current.duration) * 100}%` }}
            ></div>
          </div>
        </div>
        <span className="ml-4">
          {`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)}`}
        </span>
      </div>
    </div>
  );
}

export default Player;
