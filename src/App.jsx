import React from 'react'
import Hero from './components/Hero'
import FeaturesMarquee from './components/FeaturesMarquee'
import About from './components/About'
import Sections from './components/Sections'
import Steps from './components/Steps'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero />
      <FeaturesMarquee />
      <About />
      <Sections />
      <Steps />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
