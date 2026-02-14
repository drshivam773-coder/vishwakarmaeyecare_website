import React from 'react'
import Navbar from './components/common/Navbar'
import HeroSection from './components/HeroSection'
import BasicIntroduction from './components/BasicIntroduction'
import About from './components/About'
import Collage from './components/Collage'
import BookAppointment from './components/BookAppointment'
import Faq from './components/Faq'
import Doctor from './components/Doctor'
import Footer from './components/common/Footer'
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
    <div className='overflow-hidden'>
      <Navbar />
      <HeroSection />
      <BasicIntroduction />
      <About />
      <Collage />
      <Doctor />
      <BookAppointment />
      <Faq />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
    </>
  )
}

export default App