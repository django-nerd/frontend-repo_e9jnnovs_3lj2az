import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    caption: 'For side projects and testing',
    features: [
      'Virtual cards',
      '1,000 API requests/mo',
      'Basic analytics',
      'Community support'
    ]
  },
  {
    name: 'Growth',
    price: '$29',
    caption: 'For growing online businesses',
    features: [
      'Physical + virtual cards',
      '100k API requests/mo',
      'Advanced analytics',
      'Priority support'
    ]
  },
  {
    name: 'Scale',
    price: 'Custom',
    caption: 'For platforms and enterprises',
    features: [
      'Interchange revenue share',
      'Unlimited API',
      'Dedicated SSO',
      '24/7 success team'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free, then scale with plans that flex as you grow.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-600">{t.caption}</p>
                </div>
                <div className="text-3xl font-semibold text-gray-900">{t.price}<span className="text-base font-normal text-gray-500">{t.price !== 'Custom' ? '/mo' : ''}</span></div>
              </div>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 text-emerald-600"><Check size={18} /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full h-11 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">Choose {t.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
