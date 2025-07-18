
import React from 'react'

function ArithmeticRull() {
  return (
    <div>
      
<div className="container arithmetic-container">

<div className="row row-cols-1 row-cols-md-1 g-4">
  <h3 className=' text-center text-primary shadow rounded-3 '> পাটি গণিতের প্রয়োজনীয় সূত্রাবলীঃ </h3>
  <div className="col-md-6">
    <div className="card arith-card " >
      <img src="images/arithmetic.jpg" className="card-img-top img-fluid arithe_img" alt="images/arithmetic.jpg"/>
      <div className="card-body">
        <h5 className="card-title arithe-title">বিয়ােগের সূত্রাবলি</h5>
        <p className="card-text text-nowrap arith-para"> 
             ১. বিয়ােজন-বিয়োজ্য =বিয়োগফল। <br/>

              ২.বিয়ােজন=বিয়ােগফ + বিয়ােজ্য <br/>
              ৩.বিয়ােজ্য=বিয়ােজন-বিয়ােগফল
  </p>
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="card arith-card ">
      <img src="images/arithmetic.jpg" className="card-img-top arithe_img" alt="images/arithmetic.jpg"/>
      <div className="card-body">
        <h5 className="card-title arithe-title">গুণের সূত্রাবলি</h5>
        <p className="card-text arith-para">
১.গুণফল =গুণ্য × গুণক <br/>
২.গুণক = গুণফল ÷ গুণ্য<br/>
৩.গুণ্য= গুণফল ÷ গুণক</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card arith-card ">
      <img src="images/arithmetic.jpg" className="card-img-top arithe_img" alt="images/arithmetic.jpg"/>
      <div className="card-body">
        <h5 className="card-title arithe-title">ভাগের সূত্রাবলি</h5>
        <div className='d-flex justify-content-between'> 
        <p className="card-text arith-para">
* নিঃশেষে বিভাজ্য না হলে। <br/>
১.ভাজ্য= ভাজক × ভাগফল + ভাগশেষ।<br/>
২.ভাজ্য= (ভাজ্য— ভাগশেষ) ÷ ভাগফল।<br/>
৩.ভাগফল = (ভাজ্য — ভাগশেষ)÷ ভাজক।<br/>
</p>
<p className="card-text arith-para">
* নিঃশেষে বিভাজ্য হলে। <br/>
৪.ভাজক= ভাজ্য÷ ভাগফল।<br/>
৫.ভাগফল = ভাজ্য ÷ ভাজক।<br/>
 ৬.ভাজ্য = ভাজক × ভাগফল।
</p>
</div>
      </div>
    </div>
  </div>

  <div className="col-sm-6 ">
    <div className="card arith-lg-card ">
      <img src="images/arithmetic.jpg" className="card-img-top arithe_img" alt="images/arithmetic.jpg"/>
      <div className="card-body">
        <h5 className="card-title arithe-title">গড় নির্ণয়</h5>
        <p className="card-text arith-para">
১.গড় = রাশি সমষ্টি /রাশি সংখ্যা<br/>
২.রাশির সমষ্টি = গড় ×রাশির সংখ্যা<br/>
৩.রাশির সংখ্যা = রাশির সমষ্টি ÷ গড়<br/>
৪.আয়ের গড় = মােট আয়ের পরিমাণ / মােট লােকের সংখ্যা<br/>
৫.সংখ্যার গড় = সংখ্যাগুলাের যােগফল /সংখ্যার পরিমান বা সংখ্যা<br/> 
৬.ক্রমিক ধারার গড় =শেষ পদ +১ম পদ /2</p>
      </div>
    </div>
  </div>

<div className="col-md-6">
    <div className="card arith-lg-card">
      <img src="images/arithmetic.jpg" className="card-img-top arithe_img" alt="images/arithmetic.jpg"/>
      <div className="card-body">
        <h5 className="card-title arithe-title">লাভ-ক্ষতির এবং ক্রয়-বিক্রয়ের সূত্রাবলী</h5>
        <p className="card-text arith-para">
১. লাভ = বিক্রয়মূল্য-ক্রয়মূল্য<br/>
২.ক্ষতি = ক্রয়মূল্য-বিক্রয়মূল্য<br/>
৩.ক্রয়মূল্য = বিক্রয়মূল্য-লাভ<br/>
অথবা<br/>
ক্রয়মূল্য = বিক্রয়মূল্য + ক্ষতি<br/>
৪.বিক্রয়মূল্য = ক্রয়মূল্য + লাভ<br/>
অথবা<br/>
বিক্রয়মূল্য = ক্রয়মূল্য-ক্ষতি</p>
      </div>
    </div>
  </div>

<div className="col-md-6 d-block mx-auto mb-5">
    <div className="card arith-lg-card   ">
      <img src="images/arithmetic.jpg" className="card-img-top arithe_img" alt="images/arithmetic.jpg"/>
      <div className="card-body">
        <h5 className="card-title arithe-title">সুদকষার পরিমান নির্নয়ের সূত্রাবলী</h5>
        <p className="card-text arith-para">
১. সুদ = (সুদের হার×আসল×সময়) ÷১০০<br/>
২. সময় = (100× সুদ)÷ (আসল×সুদের হার)<br/>
৩. সুদের হার = (100×সুদ)÷(আসল×সময়)<br/>
৪. আসল = (100×সুদ)÷(সময়×সুদের হার)<br/>
৫. আসল = (100×(সুদ-মূল))÷(100+সুদের হার×সময় )<br/>
৬. সুদাসল = আসল + সুদ<br/>
৭. সুদাসল = আসল ×(1+ সুদের হার)× সময় |[চক্রবৃদ্ধি সুদের ক্ষেত্রে]।</p>
      </div>
    </div>
  </div> 


</div>
</div>
    </div>
  )
}

export default ArithmeticRull
