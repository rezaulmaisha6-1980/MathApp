

import React, { useState } from 'react';
import axios from 'axios';


function Rhombus() {
  const [sd, setSd] = useState('');
    const [ld, setLd] = useState('');
    const [area, setArea] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:5000/area/rhombus', {
          sd: parseFloat(sd),
          ld: parseFloat(ld),
        });
        setArea(res.data.area);
      } catch (err) {
        console.error(err);
        setArea(null);
      }
    };

  return (
    <div className="container mt-5 text-center">
      <h3 className="mb-4">Finding the area of ​​a triangle</h3>
      <form onSubmit={handleSubmit} className='w-50 mx-auto'>
        <div className="mb-3">
          <label> Small diagonal </label>
          <input type="number" className="form-control" value={sd} onChange={(e) => setSd(e.target.value)} placeholder='Enter the small diagonal' required />
        </div>
        <div className="mb-3">
          <label> Long diagonal</label>
          <input type="number" className="form-control" value={ld} onChange={(e) => setLd(e.target.value)} placeholder='Enter the long diagonal' required />
        </div>
        <button type="submit" className="btn btn-primary">Calculate</button>
      </form>
      {area !== null && (
        <div className="alert alert-success mt-3">
          Area: {area}
        </div>
      )}
    </div>
  )
}

export default Rhombus
