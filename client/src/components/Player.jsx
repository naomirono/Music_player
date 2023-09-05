import React, { useState, useRef } from 'react';

function Player({ selectedSong }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

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

  const handleLoadedMetadata = () => {
    setCurrentTime(0);
  };

  return (
    <div className="bg-white p-4 shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-2">{selectedSong.title}</h2>
      <p className="text-gray-600 mb-4">{selectedSong.artist}</p>
      <audio
        ref={audioRef}
        src={selectedSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata} // Add this line
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
              style={{
                width: `${
                  audioRef.current.duration
                    ? (currentTime / audioRef.current.duration) * 100
                    : 0
                }%`,
              }}
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
