
import React, { useState } from 'react';
import axios from 'axios';

function Rectangle() {
   const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [area, setArea] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:5000/area/rectangle', {
          length: parseFloat(length),
          width: parseFloat(width),
        });
        setArea(res.data.area);
      } catch (err) {
        console.error(err);
        setArea(null);
      }
    };

  return (
    <div className="container mt-5 text-center">
      <h3 className="mb-4">Finding the area of ​​a rectangle</h3>
      <form onSubmit={handleSubmit} className='w-50 mx-auto'>
        <div className="mb-3">
          <label> Length </label>
          <input type="number" className="form-control" value={length} onChange={(e) => setLength(e.target.value)} placeholder='Enter the length' required />
        </div>
        <div className="mb-3">
          <label>Width </label>
          <input type="number" className="form-control" value={width} onChange={(e) => setWidth(e.target.value)} placeholder='Enter the width' required />
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

export default Rectangle
