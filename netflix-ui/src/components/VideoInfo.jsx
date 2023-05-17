import React from 'react';

function VideoInfo({video}) {
  // Default values for placeholder
  const defaultTitle = "Casa de Paz";
  const defaultDescription = "Parte 1 da Casa de Paz";

  return (
    <div className="video-info">
      <h2>{video ? video.title : defaultTitle}</h2>
      <p>{video ? video.description : defaultDescription}</p>
      {/* Here you can add a component or functionality for displaying and adding comments */}
    </div>
  );
}

export default VideoInfo;
