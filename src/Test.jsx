import React from 'react';

export default function Test() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold">Test Page</h1>
        <p className="mt-2 text-neutral-600">This is a simple test route to verify routing works.</p>
        <a href="/" className="mt-6 inline-block px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition">Back to Home</a>
      </div>
    </div>
  );
}
