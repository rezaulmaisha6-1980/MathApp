
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";

import StudentInfoForm from '../components/StudentInfoForm'

import StudentInfoList from '../components/StudentInfoList'
import ServicesPage from '../pages/ServicesPage';
import LeaveSample from '../components/LeaveSample';


function StudentInfoRouter() {
<Link to="/StudentInfoList" className=' fs-3 border p-2 border-info border-3 rounded-3 btn-outline-danger text-decoration-none text-nowrap p-3 '>StudentInfoList</Link>

  return (
    <div>



      <BrowserRouter>   
      <Routes>  
<Route path='/Services' element ={<ServicesPage />} />

<Route path='/StudentInfoList' element ={<StudentInfoList />} />

<Route path='/Leave' element ={<LeaveSample/>} />


      </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default StudentInfoRouter
