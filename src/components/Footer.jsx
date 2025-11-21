import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black/10">
      <div className="container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold tracking-tight">LUMINA</div>
        <p className="text-sm text-neutral-600">Minimal wellbeing, maximum clarity. © {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#community" className="hover:underline">Community</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
