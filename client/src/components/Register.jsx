
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import UserHome from '../components/UserHome'

function Register() {
  const [form, setForm] = useState({ name: '', emailOrPhone: '', password: '', rePassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.rePassword) return alert("Passwords don't match");

    try {
      await axios.post('http://localhost:5000/api/users/register', form);
      alert('Registered successfully');
      navigate('/login');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
  

  
<div >
  <Navbar />

<div className="container register-container mt-4" >

  <div className="register-form mb-5">

    <form onSubmit={handleSubmit}>
 
<h2 className=' register-heading text-center rounded-3  shadow-sm mt-5'>Register</h2>

<input className='form-control ' name="name" placeholder="Name" onChange={handleChange} required />

<input className='form-control  mt-3' name="emailOrPhone" placeholder="Email or Phone" onChange={handleChange} required />
      
<input className='form-control  mt-3'
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        onChange={handleChange}
        required
      />
  

  <input className='form-control  mt-3'
        name="rePassword"
        type={showPassword ? 'text' : 'password'}
        placeholder="Re-enter Password"
        onChange={handleChange}
        required
      />
  

<label className='form-check-label mt-2 '>
        <input className='form-check-input ' type="checkbox" onChange={() => setShowPassword(!showPassword)} /> Show Password
</label>

<UserHome />

<button type="submit" className='btn btn-outline-info d-block mx-auto'>Register</button>

 
    </form>
    </div>
 </div>
   
<Footer />

</div>
   
  );
}

export default Register;
