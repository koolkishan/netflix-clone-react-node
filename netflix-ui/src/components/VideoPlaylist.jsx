import React from 'react';

function VideoPlaylist({videos, onVideoSelect}) {
  if (!videos || videos.length === 0) {
    return <p>Playlist vazia</p>;
  }

  return (
    <div className="video-playlist">
      {videos.map((video, index) => (
        <div key={index} onClick={() => onVideoSelect(video)}>
          <img src={video.thumbnail} alt={video.title} />
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoPlaylist;
