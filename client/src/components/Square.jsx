
import React, { useState } from 'react';
import axios from 'axios';

function Square() {

    const [side, setSide] = useState('');
    // const [height, setHeight] = useState('');
    const [area, setArea] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:5000/area/square', {
          side: parseFloat(side),
        //   height: parseFloat(height),
        });
        setArea(res.data.area);
      } catch (err) {
        console.error(err);
        setArea(null);
      }
    };

  return (
    <div className="container mt-5 text-center">
      <h3 className="mb-4">Finding the area of ​​a square</h3>
      <form onSubmit={handleSubmit} className=' w-50 mx-auto'>
        <div className="mb-3">
          <label>Base</label>
          <input type="number" className="form-control" value={side} onChange={(e) => setSide(e.target.value)} placeholder='Enter the base' required />
        </div>
        {/* <div className="mb-3">
          <label>উচ্চতা (Height)</label>
          <input type="number" className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} required />
        </div> */}
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

export default Square
