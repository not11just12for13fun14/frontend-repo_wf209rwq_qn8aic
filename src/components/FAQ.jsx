import React from 'react'

const faqs = [
  {q: 'Is LUMINA a medical tool?', a: 'No. It is a wellness companion for reflection and habit support, not a diagnostic tool.'},
  {q: 'Do I need an account?', a: 'You can start without one. Accounts unlock syncing across devices.'},
  {q: 'Is my data private?', a: 'We keep your information encrypted and never sell your data.'},
  {q: 'Does it work offline?', a: 'Core logging works offline and syncs when you are back online.'},
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-white text-black border-t border-black/10">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">Questions, answered</h2>
        <div className="mt-10 divide-y divide-black/10">
          {faqs.map((f, i) => (
            <details key={i} className="group">
              <summary className="cursor-pointer list-none py-5 flex items-start justify-between">
                <span className="text-lg font-medium">{f.q}</span>
                <span className="ml-6 text-neutral-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pb-5 text-neutral-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
