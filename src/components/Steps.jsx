import React from 'react'

const steps = [
  {title: 'Track', desc: 'Capture your mood, meals, and habits in seconds.'},
  {title: 'Reflect', desc: 'AI-guided prompts help you see patterns clearly.'},
  {title: 'Adjust', desc: 'Small, consistent nudges keep you on course.'},
  {title: 'Evolve', desc: 'Turn insight into calm, sustainable change.'},
]

export default function Steps() {
  return (
    <section id="how" className="bg-white text-black border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">A simple rhythm</h2>
        <p className="mt-4 text-center text-neutral-600 max-w-2xl mx-auto">Everything in LUMINA follows a steady cadence—so you can too.</p>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-black/10 p-6 bg-white shadow-[0_8px_30px_-20px_rgba(0,0,0,0.4)]">
              <div className="text-xs uppercase tracking-widest text-neutral-500">Step {i+1}</div>
              <div className="mt-3 text-xl font-medium">{s.title}</div>
              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
