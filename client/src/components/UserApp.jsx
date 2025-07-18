
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../components/Register';
import Login from '../components/Login';
import UserHome from '../components/UserHome'

import VideoGallery from '../components/VideoGallery';
import VideoPlayer from '../components/VideoPlayer';



function UserApp() {
  return (
    <> 

     <BrowserRouter>
      <Routes>
        <Route path="/Course" element={<Register />} />
       <Route path="/login" element={<Login />} />
         <Route path="/video" element={<VideoGallery />} />
                 <Route path="/video/:id" element={<VideoPlayer />} />

                 
     </Routes>
     </BrowserRouter>
    

    </>
  );
}

export default UserApp;
