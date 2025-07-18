
import React from 'react'
import TrigonomaticRull from './TrigonomaticRull'
import GeometryRull from './GeometryRull'

function AlgebraRull() {
  return (
    <div>
      
<div className="container algebra-container">

<div className="row">

    <h1 className='text-center shadow rounded-3 text-info p-2 mb-3 text-nowrap mb-5'>
    Mathematical formulas
</h1>
<div className="col-md-8">



    <div className="image-rull">
        <h3 className="rull-heading">
            বিভিন্ন সেটের নাম এবং এর প্রতীক সমূহ:
        </h3>
<img src="images/al1.jpg " className='img-fluid  rull-image' alt=""  />
    </div>


 <div className="image-rull">
        <h3 className="rull-heading">
            বর্গ নির্ণয়ের সূত্র::
        </h3>
<img src="images/al2.jpg " className='img-fluid rull-image' alt=""  />
    </div>

 <div className="image-rull">
        <h3 className="rull-heading">
            মান নির্ণয়ের সূত্র:
        </h3>
<img src="images/al3.jpg " className='img-fluid rull-image' alt=""  />
    </div>


 <div className="image-rull">
        <h3 className="rull-heading">
            উৎপাদক নির্ণয়ের সূত্র:
        </h3>
<img src="images/al4.jpg " className='img-fluid rull-image' alt=""  />
    </div>


 <div className="image-rull">
        <h3 className="rull-heading">
            ঘন নির্ণয়ের সূত্র:
        </h3>
<img src="images/al5.jpg " className='img-fluid rull-image' alt=""  />
    </div>


 <div className="image-rull">
        <h3 className="rull-heading">
            শক্তির সূচক বা ঘাত নির্ণয়ের সূত্র:
        </h3>
<img src="images/al6.jpg " className='img-fluid rull-image' alt=""  />
    </div>


 <div className="image-rull">
        <h3 className="rull-heading">
         
 লগারিদম নির্ণয়ের সূত্র:
        </h3>
<img src="images/al7.jpg " className='img-fluid rull-image' alt=""  />
    </div>
</div>

<div className="col-md-4">


<TrigonomaticRull />

<GeometryRull />
</div>





</div>







</div>




    </div>
  )
}

export default AlgebraRull
