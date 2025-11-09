import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs text-white backdrop-blur">
            <Rocket size={14} />
            Modern fintech platform
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold leading-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]">
            Manage money, cards, and commerce in one place
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-xl">
            A clean, minimalist hub for digital banking, e‑commerce payouts, and card issuing — designed to be fast, secure, and delightful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#features" className="inline-flex h-11 items-center justify-center rounded-lg bg-white text-gray-900 px-5 font-medium shadow-sm hover:shadow transition">Explore features</a>
            <a href="#pricing" className="inline-flex h-11 items-center justify-center rounded-lg bg-gray-900/80 text-white px-5 font-medium hover:bg-gray-900 transition">See pricing</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
    </section>
  );
}
