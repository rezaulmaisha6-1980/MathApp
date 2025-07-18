
import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';

import Square from '../components/Square';

function Area_Routers() {
  return (
    <div>
      
 <Link to="/square" className="btn btn-outline-primary mx-5 mt-3"> বর্গের ক্ষেত্রফল</Link>



 <Routes>
      
    
      <Route path="/square" element={<Square />} />
      
     
    </Routes>



    </div>
  )
}

export default Area_Routers
