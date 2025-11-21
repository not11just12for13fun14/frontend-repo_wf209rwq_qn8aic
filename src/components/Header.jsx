import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const link = 'px-4 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition ${scrolled ? 'backdrop-blur bg-white/70 border-b border-black/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="text-xl font-bold tracking-tight">LUMINA</a>
        <nav className="hidden md:flex items-center gap-1">
          <a href="#features" className={link}>Features</a>
          <a href="#about" className={link}>About</a>
          <a href="#how" className={link}>How it works</a>
          <a href="#faq" className={link}>FAQ</a>
          <a href="#get-started" className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition">Get started</a>
        </nav>
      </div>
    </header>
  );
}
