
import React from 'react'
import Navbar from '../components/Navbar'
import HistoryOfMathe from '../components/HistoryOfMathe'
import Footer from '../components/Footer'
import ClassificationOfMathe from '../components/ClassificationOfMathe'
import MainCard from '../components/MainCard'


function HomePage() {
  return (
    <div>
      <Navbar />
      <div className='mt-5'>
 <HistoryOfMathe />
      </div>
 
  <MainCard />
<ClassificationOfMathe />
  <Footer />





    </div>
  )
}

export default HomePage
