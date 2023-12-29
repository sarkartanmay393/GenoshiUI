import { Dispatch, SetStateAction, useState } from 'react';

type PCprops = {
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  plan: {
    code: string;
    name: string;
    price: string;
    features: string[];
  };
};

export default function PriceCard({ selected, setSelected, plan }: PCprops) {
  const mainStyles = `relative transition-all p-6 rounded-lg hover:shadow-[0px_2px_15px_5px_rgb(255,255,255,0.4)] 
  bg-zinc-900 hover:bg-blue-600 border-[1px] ${
    selected ? 'border-blue-600' : 'border-transparent'
  } cursor-default`;

  return (
    <div className={mainStyles} onClick={() => setSelected(plan.code)}>
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold leading-6 text-white">
          {plan.name}
        </h2>
        <ul className="text-zinc-300">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="flex justify-start items-center">
          <span className="text-xl font-extrabold text-white">
            {plan.price.split('/')[0]}
          </span>
          <span className="text-xl font-semibold text-zinc-100 ml-2">
            {plan.price.includes('/user') && plan.price.split('/')[1] + '/'}
            {plan.price.split('/')[2]}
          </span>
        </div>
      </div>
    </div>
  );
}
