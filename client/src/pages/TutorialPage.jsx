
import React from 'react'

import { Link } from "react-router-dom";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AlgebraRull from '../components/AlgebraRull';

import ArithmeticRull from'../components/ArithmeticRull';

function TutorialPage() {
  return (

    <div>
      <Navbar />

<div className="container">
<h2 className='text-center mt-5 shadow bg-info '> Determining the area of ​​various geometric shapes</h2>
</div>


        <div className="container">
          <div className=' row gap-3'>
            <div className="col-md-3 mt-5 text-center ">
 <Link to="/square" className=' fs-3 border p-2 border-info border-3 rounded-3 btn-outline-danger text-decoration-none text-nowrap p-3 '>Area of ​​a square</Link>
 </div>
           
           <div className="col-md-3 mt-5 text-center ">
<Link to="/triangle" className=' fs-3 border p-2 border-info border-3 rounded-3 btn-outline-dark text-decoration-none text-nowrap p-3  '>Area of a​Triangle</Link>
</div>
           
        <div className="col-md-3 mt-5 text-center ">
<Link to="/rectangle" className=' fs-3 border p-2 border-info border-3 rounded-3 btn-outline-info text-decoration-none text-nowrap p-3  '>Area of a​ Rectangle </Link>
        </div>  

          {/* <Link to="/pythagoras">Pythagoras</Link>
           */}
          </div>
          </div> 
          
<div className="container mb-5 mt-3">
<div className="row gap-3">

<div className="col-md-3 mt-5 text-center ">
{/* <Link to="/rhombus" className=' fs-3 border p-2 border-info border-3 rounded-3 btn-outline-info text-decoration-none text-nowrap p-3  '>Area of a​ Rhombus </Link> */}
</div>

<div className="col-md-3 mt-5 text-center ">
<Link to="/rhombus" className=' fs-3 border p-2 border-info border-3 rounded-3 btn-outline-primary text-decoration-none text-nowrap p-3  '>Area of a​ Rhombus </Link>
</div>

<div className="col-md-3 mt-5 text-center ">
{/* <Link to="/rhombus" className=' fs-3 border p-2 border-info border-3 rounded-3 btn-outline-info text-decoration-none text-nowrap p-3  '>Area of a​ Rhombus </Link> */}
</div>

 </div>
</div>
       
<AlgebraRull />

<ArithmeticRull />

      <Footer />

    </div>

  )
 
}

export default TutorialPage
