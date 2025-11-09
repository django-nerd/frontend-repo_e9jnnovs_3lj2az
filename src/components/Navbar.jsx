import React from 'react';
import { CreditCard, ShieldCheck, PieChart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-teal-400 flex items-center justify-center text-white shadow-lg">
              <CreditCard size={18} />
            </div>
            <span className="font-semibold text-gray-900 tracking-tight">FlowMoney</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <a href="#security" className="hover:text-gray-900 transition flex items-center gap-1"><ShieldCheck size={16}/>Security</a>
            <a href="#analytics" className="hover:text-gray-900 transition flex items-center gap-1"><PieChart size={16}/>Analytics</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex h-10 px-4 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">Sign in</button>
            <button className="inline-flex h-10 px-4 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition shadow-sm">Get started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
