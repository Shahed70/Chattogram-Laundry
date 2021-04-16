import React from "react";
import "./HeroVideo.css";
import wash from "../../../../asset/pexels-rodnae-productions-5592513.mp4";
const HeroVideo = () => {
  return (
   
      <div className="home-video">
        <video autoPlay loop>
          <source src={wash}/>
        </video>
      </div>

  );
};

export default HeroVideo;
