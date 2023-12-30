'use client';

import { useState } from 'react';
import PriceCard from './components/PriceCard';

// type BillingInterval = 'lifetime' | 'year' | 'month';

export default function Pricing() {
  const [selected, setSelected] = useState('');
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Pricing Plans
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
        <div className="mt-12 space-y-4 grid-cols-1 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            return (
              <PriceCard
                key={index}
                plan={plan}
                selected={selected === plan.code}
                setSelected={setSelected}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const pricingPlans = [
  {
    code: 'bp',
    name: 'Basic Plan',
    price: '$4/month/user',
    features: ['Up to 10 graphs', 'Up to 500 chatbot queries', 'Feature 3']
  },
  {
    code: 'pp',
    name: 'Pro Plan',
    price: '$8/month/user',
    features: [
      'Up to 50 graphs',
      'Up to 1000 chatbot queries',
      'Email + live chat support'
    ]
  },
  {
    code: 'ep',
    name: 'Enterprise Plan',
    price: 'Contact for price',
    features: [
      'Unlimited graphs',
      'Ability to upload custom PDFs',
      '24/7 phone + email support'
    ]
  }
];

type SubscriptionPlan = {
  name: string;
  price: string;
  features: string[];
};
