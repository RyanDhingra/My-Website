import React from 'react';
import './Background.css'; // Optional for custom styles
import bg from "../../assets/videos/bg_vid.webm"

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={bg} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;