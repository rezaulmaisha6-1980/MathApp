
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-info rounded-3">
    
      <button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <a className="navbar-brand" href="#"> <span className="text-warning">Mathe</span><sup className=" border   border-danger border-3 rounded-pill text-dark text-bold">App</sup> </a>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
{/* <Link to="/" target='_blank'>Home</Link> */}



          <li className="nav-item ">
            <a className="nav-link " href="Contact">Contact</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link " href="Services">Services</a>
          </li>

          <li className="nav-item ">
            <a className="nav-link " href="Course">Course</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link " href="Tutorial">Tutorial</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search"  placeholder=" Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
   
  </nav>
   </div>
  )
}

export default Navbar
