
import React from 'react'
import info from '../data/More_Info'; 

function MoreInfo() {
  return (
    <div>
      <div className="container more-info">
<h2 className='moreinfo-heading  mt-5 mb-4 text-primary '>For more communication </h2>
<div className="row">

{ info.map((data)=>(

<div className="col-md-4">
 
<div className="card mb-4 info-card">
    <img src= {data.photo} class="card-img-top classification-image" alt="..."/>
    <div className="card-body">
<h3 className="card-title "> {data.name} </h3>
<p className=' card-desgination text-center'> {data.designation}</p>
<p className=' card-phone text-center'> {data.phono} </p>


    </div>

</div>

</div>



))}


</div>



      </div>

    </div>
  )
}

export default MoreInfo
