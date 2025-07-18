

import React, { useState } from 'react';
import axios from 'axios';


function Triangle() {
  const [base, setBase] = useState('');
    const [height, setHeight] = useState('');
    const [area, setArea] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:5000/area/triangle', {
          base: parseFloat(base),
          height: parseFloat(height),
        });
        setArea(res.data.area);
      } catch (err) {
        console.error(err);
        setArea(null);
      }
    };

  return (
    <div className="container mt-5 text-center rounded-3 " style={{backgroundColor:"#fde"}}>
      <h3 className="mb-4 ">Finding the area of ​​a triangle</h3>
      <form onSubmit={handleSubmit} className='w-50 mx-auto'>
        <div className="mb-3">
          <label> Base</label>
          <input type="number" className="form-control" value={base} onChange={(e) => setBase(e.target.value)} placeholder='Enter the base' required />
        </div>
        <div className="mb-3">
          <label>Height</label>
          <input type="number" className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} placeholder='Enter the height' required />
        </div>
        <button type="submit" className="btn btn-primary">Calculate</button>
      </form>
      {area !== null && (
        <div> 
        <div className="alert alert-success mt-3">
          Area: {area}
        </div>
       <div>
        <button className='btn btn-outline-info '> <a href="/Tutorial" className='text-decoration-none' > Go to tutorial page </a></button>
       </div>
       </div>
      )}
    </div>

    
  )

  
}

export default Triangle
