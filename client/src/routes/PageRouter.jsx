import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import TutorialPage from '../pages/TutorialPage';
import Square from '../components/Square';
import Pythagoras from '../components/Pythagoras';
import Triangle from '../components/Triangle';
import Rectangle from '../components/Rectangle';
import Rhombus from '../components/Rhombus';
import Algebra from '../components/Algebra';




function PageRouter() {
  return (
    <div>

<BrowserRouter>  
     <Routes>
      
      <Route path="/" element={<HomePage />} />
      
     <Route path="Contact" element={<ContactPage />}/>

<Route path="Tutorial" element={<TutorialPage />}/>

<Route path="/square" element={<Square />}/>

<Route path="/triangle" element={<Triangle />}/>

<Route path="/rectangle" element={<Rectangle />}/>

{/* <Route path="/pythagoras" element={<Pythagoras/>}/> */}

<Route path="/rhombus" element={<Rhombus />}/>

  <Route path="/algebra/history" element={<Algebra />} />
 

    </Routes>
</BrowserRouter>
    </div>
  )
}

export default PageRouter

