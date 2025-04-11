import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurMission from '../components/OurMission'
import OurVision from '../components/OurVision'
import OurServices from '../components/OurServices'
import ContactUs from '../components/ContactUs'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <OurMission />
      <OurVision />
      <OurServices />
      <ContactUs />
    </div>
  )
}

export default HomePage
