
import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';

import Square from '../components/Square';

import Pythagoras from '../components/Pythagoras';




function AreaRouter() {
  return (
    <div className="container">
        {/* <div className="row">
            <div className="col-md-4">  */}
    <nav className="mb-4 ">
      

      <Link to="/square" className="btn btn-outline-primary mx-5 mt-3"> বর্গের ক্ষেত্রফল</Link>
      <Link to="/pythagoras" target='_blank'><img src=" ./images/phytha.jpg " className=" img-fluid w-25" alt="" srcset="" /> <span> Pythagoras</span></Link>

    </nav>

   

  
 <Routes>
      
    
      <Route path="/square" element={<Square />} />
      <Route path="/pythagoras" element={<Pythagoras />} />
     
    </Routes>





  </div>
  )
}

export default AreaRouter
