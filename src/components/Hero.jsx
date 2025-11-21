import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Lazy-load Spline so a failure there never blocks initial render
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function ErrorBoundary({ children, fallback }) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const handler = () => setHasError(true);
    window.addEventListener('error', handler);
    window.addEventListener('unhandledrejection', handler);
    return () => {
      window.removeEventListener('error', handler);
      window.removeEventListener('unhandledrejection', handler);
    };
  }, []);
  if (hasError) return fallback || null;
  return children;
}

export default function Hero() {
  const [canUseWebGL, setCanUseWebGL] = useState(true);
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setCanUseWebGL(false);
    } catch {
      setCanUseWebGL(false);
    }
  }, []);

  // Gentle entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative min-h-[100vh] w-full bg-white text-black overflow-hidden flex items-center">
      {/* Animated gradient rings backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[140vmin] rounded-full bg-[conic-gradient(from_0deg,transparent_0_60%,rgba(0,0,0,0.12)_60_62%,transparent_62_100%)] animate-[spin_18s_linear_infinite]" />
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 size-[100vmin] rounded-full bg-[conic-gradient(from_180deg,transparent_0_70%,rgba(0,0,0,0.08)_70_72%,transparent_72_100%)] animate-[spin_24s_linear_infinite]" />
      </div>

      {/* Spline brain scene or graceful fallback */}
      <div className="absolute inset-0">
        {canUseWebGL ? (
          <ErrorBoundary fallback={<div className="h-full w-full bg-[radial-gradient(80%_80%_at_50%_40%,rgba(0,0,0,0.06),transparent)]" />}> 
            <Suspense fallback={<div className="h-full w-full bg-[radial-gradient(80%_80%_at_50%_40%,rgba(0,0,0,0.06),transparent)]" />}> 
              {/* Brain-focused scene */}
              <Spline.default scene="https://prod.spline.design/zJf2x7zAZwR24o8D/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <div className="h-full w-full bg-white">
            {/* Fallback: animated radial halo mimicking brain aura */}
            <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_45%,rgba(0,0,0,0.12),transparent)]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[60vmin] rounded-full border border-black/10" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[70vmin] rounded-full border border-black/10 animate-pulse" />
          </div>
        )}
      </div>

      {/* Vignette for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <motion.div
        className="relative z-10 container mx-auto px-6 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-xs tracking-wider shadow"> 
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            LUMINA • MENTAL WELLNESS
          </div>
          <motion.h1
            className="mt-5 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A calmer mind starts here
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-neutral-700"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Minimalist space. Brain-first visuals. Gentle motion guiding you to better habits—without the noise.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <a href="#features" className="group inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded-full hover:opacity-90 transition">
              Explore Features
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Get Started
            </a>
          </motion.div>
          {!canUseWebGL && (
            <p className="mt-4 text-sm text-neutral-500">Interactive brain animation unavailable on this device. Showing a soft animated backdrop instead.</p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
