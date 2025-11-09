import React from 'react';
import { Wallet, BarChart3, Shield, Smartphone, Activity } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Smart Accounts',
    desc: 'Multi-currency wallets with real-time FX and instant card issuing.'
  },
  {
    icon: BarChart3,
    title: 'Revenue Analytics',
    desc: 'Live dashboards to track sales, subscriptions, and payouts.'
  },
  {
    icon: Shield,
    title: 'Bank‑grade Security',
    desc: '2FA, device trust, and tokenized payments by default.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    desc: 'Beautiful, responsive experience across all devices.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything to run your money operations</h2>
          <p className="mt-3 text-gray-600">Tools for digital banking, e‑commerce, and subscription businesses in one cohesive system.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white flex items-center justify-center shadow">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600">Learn more →</div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-gray-100 bg-gradient-to-tr from-gray-50 to-white p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium">
                <Activity size={14} />
                Uptime last 90 days: 99.99%
              </div>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">Built for reliability and scale</h3>
              <p className="mt-1 text-gray-600">Our global infrastructure delivers fast responses and robust failover so your money always moves.</p>
            </div>
            <a href="#pricing" className="inline-flex h-11 items-center justify-center rounded-lg bg-gray-900 text-white px-5 font-medium hover:bg-gray-800 transition">Start free</a>
          </div>
        </div>
      </div>
    </section>
  );
}
