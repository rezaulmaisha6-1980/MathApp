import React, { useState,useEffect } from 'react'
import axios from 'axios';
import info from '../data/More_Info';



function EmployeesList() {
const [ employees, setEmployees]= useState([]);


useEffect(() => {
    fetchEmployees();
  }, []);

 const fetchEmployees = async (e) => {
    try {
      const res = await axios.get('http://localhost:5000/api/employees');
      setEmployees(res.data);
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <div className="container"> 
    <div className="row">
      {employees.map(data => (
        <div key={data._id} className="col-md-4 mb-4 ">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center bg-info rounded-3">
              <h5 className="card-title">{data.name}</h5>
                <h5 className="card-title">{data.degination}</h5>
<h5 className="card-title">{data.email}</h5>
<h5 className="card-title">{data.phone}</h5>


              {/* <p className="card-text text-muted small">
                Added: {new Date(student.createdAt).toLocaleDateString()}
              </p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
 
</div>

  )
}

export default EmployeesList
