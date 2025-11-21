import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Brain, Salad, Gauge, Image as ImageIcon, Lotus, Bot, FileBarChart2, ClipboardCheck, Users, Gamepad2 } from 'lucide-react';

const items = [
  { label: 'User Mood Tracker', icon: Brain },
  { label: 'Meal Tracker', icon: Salad },
  { label: 'OSR Analysis', icon: Gauge },
  { label: 'Image Analysis', icon: ImageIcon },
  { label: 'Mindfulness', icon: Lotus },
  { label: 'AI Chatbot', icon: Bot },
  { label: 'Your Report', icon: FileBarChart2 },
  { label: 'Mental Test', icon: ClipboardCheck },
  { label: 'Community', icon: Users },
  { label: 'Health Game', icon: Gamepad2 },
];

function Box({ label, Icon }) {
  return (
    <div className="relative h-40 w-64 md:h-44 md:w-72 flex-shrink-0 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0">
        <div className="absolute -inset-[1px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.25),transparent_40%,rgba(0,0,0,0.35),transparent_70%)] animate-[spin_8s_linear_infinite]" />
      </div>
      <div className="relative z-10 h-full w-full bg-white/90 backdrop-blur-sm border border-black/10">
        <div className="h-full w-full grid place-items-center text-center p-6">
          <Icon className="w-7 h-7 text-black mb-2" />
          <p className="text-sm md:text-base font-medium text-black">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesMarquee() {
  const doubled = useMemo(() => [...items, ...items], []);

  return (
    <section id="features" className="relative bg-white text-black py-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything in one calm place</h2>
          <p className="text-neutral-600 mt-2">Boxes glide continuously with a subtle glow, all in a crisp black-and-white theme.</p>
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-4 md:gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          style={{ width: 'max-content' }}
        >
          {doubled.map((it, idx) => (
            <Box key={idx} label={it.label} Icon={it.icon} />
          ))}
        </motion.div>

        {/* subtle gradient edges to mask loop seams */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
