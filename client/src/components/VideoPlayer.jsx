

// src/components/VideoPlayer.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import videoData from "../data/VideoData";
import Navbar from "./Navbar";
import Footer from "./Footer";


const VideoPlayer = () => {
  const { id } = useParams();

  // Initialize with video based on URL
  const [currentVideo, setCurrentVideo] = useState(() =>
    videoData.find(video => video.id === parseInt(id))
  );

  useEffect(() => {
    // Update when URL param changes (e.g., on first load or manual refresh)
    const selectedVideo = videoData.find(video => video.id === parseInt(id));
    if (selectedVideo) {
      setCurrentVideo(selectedVideo);
    }
  }, [id]);

  const handleVideoChange = (video) => {
    setCurrentVideo(video); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    
    // dynamically update current video
  };

  const otherVideos = videoData.filter(video => video.id !== currentVideo?.id);

  if (!currentVideo) return <p>Video not found</p>;

 const handleMouseOver = (video) => {
    video.target.play();
  };

  const handleMouseOut = (video) => {
    video.target.pause();
    video.target.currentTime = 0; // শুরু থেকে শুরু করবে
  };








  return (

<div> 
<Navbar />

    <div className="container mt-5">
   <div className="row ">
    <div className="col-md-7 mt-2 mb-5"> 
      
      <video className="w-100" src={currentVideo.name}  controls  style={{ cursor: 'pointer' }}   onMouseOver={handleMouseOver}  />
<h2>{currentVideo.title}</h2>

</div>

<div className="col-md-5"> 
      <h4  >Other Videos</h4>
   
        {otherVideos.map((video) => (
          <div  key={video.id}>
            <div
              className="card"
              onClick={() => handleVideoChange(video)}
              style={{ cursor: 'pointer' }}
            >
              <video className="card-img-top" src={video.name} muted onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} />
              <div className="card-body">
                <h6 className="card-title text-center">{video.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
    <Footer />
</div>

  );
};

export default VideoPlayer;
