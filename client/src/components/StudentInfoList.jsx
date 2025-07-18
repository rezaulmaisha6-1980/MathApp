
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';

import Navbar from './Navbar';
import Footer from './Footer';



function StudentInfoList() {

const [student, setStudent]= useState([]);
const[ search, setSearch]= useState('');

const componentRef = useRef(); 

useEffect(()=>{
axios.get('http://localhost:5000/api/studentInfo')
.then(res =>setStudent(res.data)); 
}, []);

const filtered = student.filter(s =>
    s.name.toLowerCase().includes(search.toLocaleLowerCase())||
    s.class.toLowerCase().includes(search.toLocaleLowerCase())
); 


 const handlePrint = () => {
    window.print();
  };

//   const handleDownload = () => {
//     const doc = new jsPDF();
    



  return (
<div> 

<Navbar />

    <div className="container mt-4">
      <h2>Student List</h2>
      <input type="text" placeholder="Search by name/class" className="form-control mb-3" onChange={e => setSearch(e.target.value)} />
      <button className="btn btn-success mb-3 me-2" onClick={handlePrint}>Print / Download</button>
      
      <div ref={componentRef}>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Class</th>
              <th>Roll</th>
              <th>Father</th>
              <th>Mother</th>
              <th>Birthday</th>
              <th>Birth Cert</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, idx) => (
              <tr key={idx}>
                <td><img src={`http://localhost:5000/studentInfos/${s.picture}`} width="50" alt="Student" /></td>
                <td>{s.name}</td>
                <td>{s.class}</td>
                <td>{s.roll}</td>
                <td>{s.fatherName}</td>
                <td>{s.motherName}</td>
                <td>{new Date(s.birthday).toLocaleDateString()}</td>
                <td>{s.birthCertificate}</td>
                <td>{s.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

<Footer />

    </div>
  )
}

export default StudentInfoList
