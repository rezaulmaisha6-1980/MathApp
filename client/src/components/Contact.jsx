
// import React from 'react'
import axios from "axios";
import React, {useState}  from "react"; 


const Contact = () => {

const [formData, setFormData]= useState({
name:"",
email:"",
message:""

}); 

// const [status, setStatus]= useState(" ")

const handleChange =(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value}); 
}

const handleSubmit =  async (e)=>{
e.preventDefault();
try {
    const contactRespond= await axios.post("http://localhost:5000/contact",formData ); 

    setStatus(" Message sent successfully!"); 

    setFormData({name:"", email:"", message:""})
    

} catch (error) {
    setStatus(" Failed to send message. Try again");
}
}

  return (
   <> 

      <div className="container contact-page  text-center w-50 mt-5">
<h2>Contact Form</h2>
<form  className=' row g-3 mb-5 mt-3 form_contact'onSubmit={ handleSubmit} >

<div class="col-md-12">
    <label for="name" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="name" value={formData.name} placeholder='Enter your full name' name='name' onChange={handleChange} required />
  </div>

<div class="col-md-12">
    <label for="email" class="form-label">Email addres</label>
    <input type="email" class="form-control" id="email" value={formData.email} placeholder='Enter your email' name='email' onChange={handleChange} required />
  </div>

<div class="col-md-12">
    <label for="message" class="form-label">Email addres</label>
    <textarea type="text " class="form-control" id="message" value={formData.message} placeholder="Write your message" name='message' onChange={handleChange} required />
  </div>

<button type="submit" className=' btn btn-info'>Send Message </button>
</form>

{/* { status && <p className=" mt-5"> {status}</p>} */}

      </div>



   </>
  )
}

export default Contact
