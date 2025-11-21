import React from 'react'
import Hero from './components/Hero'
import FeaturesMarquee from './components/FeaturesMarquee'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero />
      <FeaturesMarquee />
      <Footer />
    </div>
  )
}

export default App
