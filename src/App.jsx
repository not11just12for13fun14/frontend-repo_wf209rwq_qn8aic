import React from 'react'
import Header from './components/Header'
import BackToTop from './components/BackToTop'
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
      <Header />
      <Hero />
      <FeaturesMarquee />
      <About />
      <Sections />
      <Steps />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
