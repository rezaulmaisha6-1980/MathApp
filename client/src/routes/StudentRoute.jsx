
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import StudentForm from '../components/StudentInfo/StudentForm';
import StudentList from '../components/StudentInfo/StudentList';
import ServicesPage from '../pages/ServicesPage';




const StudentRoute = () => (
  
  <div> 
<ServicesPage />

<Routes>
  
      <Route path="/services" element={<StudentForm />} />
      <Route path="/studentinfo" element={<StudentList />} />




    </Routes>
  </div>
    
  
);

export default StudentRoute;
