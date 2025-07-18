
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar'


function Login() {
  const [form, setForm] = useState({ emailOrPhone: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', form);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/video');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div> 

<Navbar />

    <div className="container"> 
    <form onSubmit={handleSubmit} className='bg-info rounded-3  login-form'>

      <div className="row">

      <h2 className='text-center mt-5 shadow-sm  mx-auto rounded-3 p-1 text-primary '>Login</h2>

      <div className="col-md-12"> 
      <input className='form-control mt-5 w-75 mx-auto'  name="emailOrPhone" placeholder="Email or Phone" onChange={handleChange} required />
</div>


<div className="col-md-12">
      <input className='form-control mt-4 w-75 mx-auto' name="password" type="password" placeholder="Password" onChange={handleChange} required />
</div>


<div className="col-md-12">
<button className='btn btn-outline-dark login-button mt-4  mb-5' type="submit">Login</button>
</div>


      </div>
    </form>
 
</div>

<Footer />

</div>
  );
}

export default Login;
