
import React from 'react';
import axios from 'axios'
import { useState } from 'react';

function EmployeesForm() {
    const [formData, setFormData]= useState({
        name:'',
        degination:'',
        email:'',
        phone:''
    }); 

    const handleChange=(e)=>{

        setFormData({...formData,[e.target.name]: e.target.value});
    }; 

    const handleSubmit= async(e)=>{
e.preventDefault(); 
try {
    const res= await axios.post('http://localhost:5000/api/employees',formData);
    // alert(res.data);
    alert(` Employees are added`); 
    setFormData(''); 

} catch (error) {
    res.status(500).json({message:' no employees'}); 
}
    }; 


  return (
    <div >
      <div className="container rounded-3 mb-5"> 

        <div className="employees-form"> 

<form onSubmit={handleSubmit} >

<h1 className='text-center mt-5 mb-4 fw-bold '> Added 
            Employees Form </h1>
            <hr className=' text-danger  border-5' / >

<input className='form-control ' type="text" name ="name" placeholder='Name'  onChange={handleChange}   required  />

<input className='form-control mt-3' type="text" name ="degination" placeholder='Degination'  onChange={handleChange}   required  />


<input className='form-control mt-3' type="email" name ="email" placeholder='Email'  onChange={handleChange}   required  />

<input className='form-control mt-3 mb-3 ' type=" number" name ="phone" placeholder='Phone Number'  onChange={handleChange}   required  />

<button type="submit" className='btn btn-outline-primary  d-block mx-auto'> Employees Added </button>

</form>
</div>
</div>

    </div>
  )
}

export default EmployeesForm
