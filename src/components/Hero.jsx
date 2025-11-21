import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-white text-black overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle vignette and gradient overlays for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80"></div>
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(0,0,0,0.08),transparent)]"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-xs tracking-wider">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white"></span>
            MINIMAL WELLNESS PLATFORM
          </div>
          <h1 className="mt-5 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            LUMINA
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-700">
            Mental wellbeing and general health, brought together in a calm, monochrome space. Clean design. Smart insights. Gentle motion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="group inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded-full hover:opacity-90 transition">
              Explore Features
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#community" className="inline-flex items-center gap-2 px-5 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
