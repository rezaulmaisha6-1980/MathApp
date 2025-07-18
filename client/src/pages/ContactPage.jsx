
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import MoreInfo from '../components/MoreInfo'
import ContactUs from '../components/ContactUs'


function ContactPage() {
  return (
    
    <div  className='bg-light mt-3'>
    <Navbar />
    
<Contact />
<MoreInfo />
<ContactUs />
    <Footer />


    </div>
    
  )
}

export default ContactPage
