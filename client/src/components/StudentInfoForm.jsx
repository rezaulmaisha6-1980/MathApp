

import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar' 
import Footer from './Footer';

function StudentInfoForm() {

  // const navigate = useNavigate();
const [formData, setFormData] = useState({
    name:'',
    class:'',
    roll:'',
    fatherName:'',
    motherName:'',
    birthday:'',
    birthCertificate:'',
    mobile:''
}); 

const [picture, setPicture]= useState(null); 

const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value}); 
}

const handleSubmit= async(e)=>{
    e.preventDefault(); 
    const data = new FormData(); 
    Object.entries(formData).forEach(([Key,value])=> data.append(Key,value));
    data.append('picture', picture); 

    await axios.post('http://localhost:5000/api/studentInfo', data); 
 alert('Student Added'); 
    // navigate('/StudentInfoList')

   
}


  return (
    <div> 

{/* <Navbar /> */}

   <div className="container rounded-3 mt-5" >
      
      <div className="student-form mb-5"> 
      <form onSubmit={handleSubmit} className=' ' >
<h1 className='text-center mb-4 shadow-sm rounded-3 text-dark fw-bolder text-decoration-underline'>Student Iformation Form </h1>

        <input name="name" placeholder="Name" onChange={handleChange} className="form-control mb-2 mt-3" />
        <input name="class" placeholder="Class" onChange={handleChange} className="form-control mb-2" />
        <input name="roll" placeholder="Roll" onChange={handleChange} className="form-control mb-2" />
        <input name="fatherName" placeholder="Father Name" onChange={handleChange} className="form-control mb-2" />
        <input name="motherName" placeholder="Mother Name" onChange={handleChange} className="form-control mb-2" />
        <input name="birthday" type="date" onChange={handleChange} className="form-control mb-2" />
        <input name="birthCertificate" placeholder="Birth Certificate No." onChange={handleChange} className="form-control mb-2" />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} className="form-control mb-2" />
        <input type="file" onChange={e => setPicture(e.target.files[0])} className="form-control mb-3" />

        <button type="submit" className="btn btn-outline-dark d-block mx-auto mb-5">Submit</button>

      </form>
</div>
    </div>

{/* <Footer /> */}

</div>

  )
}

export default StudentInfoForm
