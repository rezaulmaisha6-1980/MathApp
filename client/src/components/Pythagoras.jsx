
import React from 'react'

import pythagoras from '../data/PythagorasData'

function Pythagoras() {
  return (
    <div>
      
      <div className="container">
<div className="row">

<div className="col-md-6">

<div class="card famus-card" >
  <img src={pythagoras.photo} class="card-img-top famus-images" alt="..."/>
  <div class="card-body">
    <h2 class="card-title text-center text-primary shadow-lg"> {pythagoras.name}</h2>
    <p class="card-text famus-description">{pythagoras.description} </p>
    
  </div>
</div>



</div>


</div>

</div>


      </div>
    
  )
}

export default Pythagoras
