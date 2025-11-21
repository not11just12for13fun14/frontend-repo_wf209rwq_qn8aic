import React from 'react'

const sections = [
  {
    id: 'mood',
    title: 'Mood tracker',
    body: 'Log your emotional state with a few taps and watch patterns unfold over time.'
  },
  {
    id: 'meal',
    title: 'Meal tracker',
    body: 'See how nutrition correlates with energy, focus, and mood swings.'
  },
  {
    id: 'osr',
    title: 'OSR analysis',
    body: 'Objective Self Reflection: convert your journal into insights you can act on.'
  },
  {
    id: 'image',
    title: 'Image analysis',
    body: 'Snapshot your plate or your day—computer vision fills in the details.'
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness',
    body: 'Short, calm practices that fit into breaks—not your whole day.'
  },
  {
    id: 'chatbot',
    title: 'AI coach',
    body: 'A grounded, gentle conversational guide for reflection and planning.'
  },
  {
    id: 'reports',
    title: 'Your report',
    body: 'Weekly snapshots summarize trends without overwhelming details.'
  },
  {
    id: 'test',
    title: 'Mental test',
    body: 'Light, optional check-ins—not diagnoses—to understand your baseline.'
  },
  {
    id: 'community',
    title: 'Community',
    body: 'Quiet spaces for encouragement and sharing small wins.'
  },
]

export default function Sections() {
  return (
    <section id="features" className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="group rounded-2xl border border-black/10 p-6 bg-white hover:bg-black hover:text-white transition-colors shadow-[0_8px_40px_-20px_rgba(0,0,0,0.4)]">
              <div className="text-xl font-semibold">{s.title}</div>
              <p className="mt-2 text-neutral-600 group-hover:text-neutral-200">{s.body}</p>
              <div className="mt-6 text-sm underline underline-offset-4">Learn more</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
