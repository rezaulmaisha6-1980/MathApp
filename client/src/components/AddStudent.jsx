
// client/src/components/AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = ({ onStudentAdded }) => {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/students', { name, fatherName });
      onStudentAdded(res.data);
      setName('');
      setFatherName(''); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Add New Student</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

<div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Father Name"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              required
            />
          </div>




          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Student'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;