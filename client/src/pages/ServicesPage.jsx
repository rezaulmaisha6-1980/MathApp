
import React from 'react'
import { Link } from "react-router-dom";
import StudentInfoForm from '../components/StudentInfoForm';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';



function ServicesPage() {
  return (
    <div className='container'>
      <div className="row"> 
<Navbar />

<div className="col-md-4 mt-5 "> 

<div class="d-flex align-items-start">
  <div class="nav flex-column  nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" data-bs-toggle='v-pills-tab'>

    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><Link to="/StudentInfoList"> Student Information </Link></button>



    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"> <Link to="/Leave"> Leave </Link></button>

    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>

    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
    





  </div>


  
  {/* <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div> */}
</div>
</div>

<div className=" col-md-8 "> 

<StudentInfoForm />


</div>

<Footer />
</div>







      





    </div>
  )
}

export default ServicesPage
