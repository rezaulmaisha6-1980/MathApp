
// src/components/VideoGallery.js
import React from "react";
import { useNavigate } from "react-router-dom";
import videoData from "../data/VideoData";
import Navbar from "./Navbar";
import Footer from "./Footer";

const VideoGallery = () => {
  const navigate = useNavigate();

  const handleVideoClick = (id) => {
    navigate(`/video/${id}`);
  };

const handleMouseOver = (e) => {
    e.target.play();
  };

  const handleMouseOut = (e) => {
    e.target.pause();
    e.target.currentTime = 0; // শুরু থেকে শুরু করবে
  };





  return (
    <div> 
        <Navbar />
    <div className="container mt-5">
      <h2 className="mb-4">Video Gallery</h2>
      <div className="row ">
        {videoData.map((video) => (
          <div className="col-md-4" key={video.id}>
            <div className="card " onClick={() => handleVideoClick(video.id)} style={{ cursor: 'pointer' }}>
              <video className="card-img-top" src={video.name}    muted
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} />
              <div className="card-body">
                <h5 className="card-title text-center">{video.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
</div>

  );
};

export default VideoGallery;
