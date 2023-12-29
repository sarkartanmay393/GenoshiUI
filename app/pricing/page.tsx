'use client';

type BillingInterval = 'lifetime' | 'year' | 'month';

export default function Pricing() {
  return (
    <section className="bg-black">
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
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-6 text-white">
                  {plan.name}
                </h2>
                <ul className="mt-4 text-zinc-300">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="mt-8">
                  <span className="text-xl font-extrabold white">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-zinc-100">
                    /month/user
                  </span>
                </p>
                <button className="block w-full py-2 mt-8 text-md font-semibold text-center text-white rounded-md hover:bg-zinc-900">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    name: 'Basic Plan',
    price: '$4/month/user',
    features: [
      'Up to 10 graphs',
      'Up to 500 chatbot queries',
      'Feature 3'
      // Add more features as needed
    ]
  },
  {
    name: 'Pro Plan',
    price: '$8/month/user',
    features: [
      'Up to 50 graphs',
      'Up to 1000 chatbot queries',
      'Email + live chat support'
      // Add more features as needed
    ]
  },
  {
    name: 'Enterprise Plan',
    price: 'Contact for price',
    features: [
      'Unlimited graphs',
      'Ability to upload custom PDFs',
      '24/7 phone + email support'
      // Add more features as needed
    ]
  }
];

// Define a type for the subscription plan
type SubscriptionPlan = {
  name: string;
  price: string;
  users: string;
  graphs: string;
  chatbotQueries: string;
  support?: string;
};

// Define the types for each subscription plan
type BasicPlan = SubscriptionPlan & {
  name: 'Basic Plan';
  price: '$4/month/user';
  graphs: 'Up to 10 graphs';
  chatbotQueries: 'Up to 500 chatbot queries';
};

type ProPlan = SubscriptionPlan & {
  name: 'Pro Plan';
  price: '$8/month/user';
  graphs: 'Up to 50 graphs';
  chatbotQueries: 'Up to 1000 chatbot queries';
  support: 'Email + live chat support';
};

type EnterprisePlan = SubscriptionPlan & {
  name: 'Enterprise Plan';
  price: 'Contact for price';
  graphs: 'Unlimited graphs';
  chatbotQueries: 'Ability to upload custom PDFs';
  support: '24/7 phone + email support';
};

// Usage
const basicPlan: BasicPlan = {
  name: 'Basic Plan',
  price: '$4/month/user',
  users: '1',
  graphs: 'Up to 10 graphs',
  chatbotQueries: 'Up to 500 chatbot queries'
};

const proPlan: ProPlan = {
  name: 'Pro Plan',
  price: '$8/month/user',
  users: '1',
  graphs: 'Up to 50 graphs',
  chatbotQueries: 'Up to 1000 chatbot queries',
  support: 'Email + live chat support'
};

const enterprisePlan: EnterprisePlan = {
  name: 'Enterprise Plan',
  price: 'Contact for price',
  users: '1+',
  graphs: 'Unlimited graphs',
  chatbotQueries: 'Ability to upload custom PDFs',
  support: '24/7 phone + email support'
};
