
import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import VideoGallery from "../components/VideoGallery";
import VideoPlayer from "../components/VideoPlayer";

function VideoRouter() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/video" element={<VideoGallery />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter> 


    </div>
  )
}

export default VideoRouter
