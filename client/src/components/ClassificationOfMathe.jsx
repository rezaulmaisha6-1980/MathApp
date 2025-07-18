
import React from 'react';
import { useNavigate } from 'react-router-dom';
import mathClassificationData from '../data/ClassificationOfMathe';

function ClassificationOfMathe() {

  const navigate =useNavigate(); 

  const handleClick=()=>{
    navigate('/Algebra/history')
  }

  return (
    <div>
      <div className="container mb-5">
      <h2 className=" text-center text-info  p-2 m-2 mt-5  "> Classification Mathematics</h2>
        <div className="row">
          
            {mathClassificationData.map((data)=>(
<div className="col-md-3">
<div class="card mt-3" >
  <img src= {data.photo} class="card-img-top classification-image" alt="..."/>
  <div class="card-body ">
    <h5 class="card-title classification-name text-center mb-3"> {data.mathName}</h5>
    {/* <p class="card-text  classification-description">{data.description}</p> */}
    <button 
    type="button" 
    class="btn btn-primary" 
    // data-bs-toggle="popover" 
    // data-bs-placement="bottom"
    //  data-bs-animation="true"
    // title={data.mathName}
  
    // data-bs-content={ data.description}



    
    onClick={handleClick}
  >
    More learn 
  </button>
  </div>
</div>



</div>


            ))





            }
        </div>
      </div>

      

    </div>
  )
}

export default ClassificationOfMathe
