import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white text-black">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{backgroundImage:'radial-gradient(circle at 20% 20%, #000 1px, transparent 1px), radial-gradient(circle at 80% 60%, #000 1px, transparent 1px)', backgroundSize:'24px 24px'}} />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">LUMINA is a calm space for your mind</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Minimal by design, focused by intent. LUMINA helps you track mood, meals, and habits while offering AI-guided reflections and mindful exercises. Everything is monochrome for clarity—no noise, just what matters.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#community" className="inline-flex items-center rounded-full border border-black px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black hover:text-white">Join the community</a>
              <a href="#features" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium transition-colors hover:opacity-90">Explore features</a>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] w-full rounded-2xl border border-black/10 bg-gradient-to-br from-white to-neutral-100 p-6 shadow-[0_8px_40px_-20px_rgba(0,0,0,0.4)]">
              <div className="h-full w-full rounded-xl border border-black/10 bg-white p-6 grid grid-cols-3 gap-3">
                {Array.from({length:9}).map((_,i)=> (
                  <div key={i} className="rounded-lg border border-black/10 bg-neutral-50 h-20" />
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-500">Designed for focus. Built for your daily rhythm.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
