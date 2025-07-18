
import React from 'react'
import algebraData from '../data/AlgebraData'

function Algebra() {
  return (
    <div>
        <div className="container">
<h1 className='text-center p-1 border border-3 border-dark  rounded-3 mt-5'> About Algebric History </h1>

{algebraData.map((data)=>(
    <h2 style={{textAlign:' justify'}} className='mt-5' > {data.description}</h2>
))

}
        </div>
      
    </div>
  )
}

export default Algebra
