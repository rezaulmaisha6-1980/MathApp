
// client/src/StudentApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AddStudent from '../components/AddStudent';
import StudentList from '../components/StudentList';

const StudentApp = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/students');
      setStudents(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStudentAdded = (newStudent) => {
    setStudents([newStudent, ...students]);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Student Management</h1>
      
      <AddStudent onStudentAdded={handleStudentAdded} />
      
      {/* {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : students.length > 0 ? ( */}
        <StudentList students={students} />
      {/* ) : (
        <div className="alert alert-info">No students found. Add a new student!</div>
      )} */}
    </div>
  );
};

export default StudentApp;