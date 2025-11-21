import React from 'react'

export default function CTA() {
  return (
    <section id="get-started" className="relative bg-black text-white">
      <div className="absolute inset-0 opacity-30" style={{background:'radial-gradient(circle at 30% 50%, #fff 0%, transparent 40%), radial-gradient(circle at 70% 30%, #fff 0%, transparent 40%)'}} />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="rounded-2xl border border-white/20 p-10 md:p-14 backdrop-blur-sm bg-white/5">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to feel a little lighter?</h2>
          <p className="mt-4 text-neutral-200 max-w-2xl">Start with a simple check-in. One minute a day is enough to build momentum.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#mood" className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium transition-colors hover:opacity-90">Begin a mood log</a>
            <a href="#community" className="inline-flex items-center rounded-full border border-white px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white hover:text-black">Meet the community</a>
          </div>
        </div>
      </div>
    </section>
  )
}
