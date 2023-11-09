import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import CheckOutButton from './CheckOutButton';

const tiers = [
  {
    name: "Starter",
    id: '',
    href: '#',
    priceMonthly: null,
    description: "Get started with our free plan designed to help families organize tasks and motivate kids",
    features: [
      "Create and assign tasks to your children",
      "Monitor your children's task completion progress.",
      "Assign rewards for completed tasks.",
      "Kids can earn badges for completing tasks.",
      "Access a simple dashboard to view task lists and progress.",
    ]
  },
  {
    name: "PRO",
    id: 'pro_id',
    href: '#',
    priceMonthly: "9.99",
    description: "Pro Pack for enhanced task management and customization ",
    features: [
      "Enjoy all the features included in the Starter Pack.",
      "Set up complex task schedules and priorities.",
      "Implement a points-based rewards system.",
      "Create custom rewards tailored to your family.",
      "Detailed Dashboard & Analytics.",
      "Calendar Integration.",
      "Receive priority customer support.",
    ]
  }
]

function PricingCards({redirect} : { redirect: Boolean }) {
  return (
    <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 '>
      {tiers.map((tier) => (
        <div
        key={tier.id}
        className='flex flex-col justify-between items-start rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10'
        >
         <div>
          <h3 
          id={tier.id + tier.name}
          className='text-base font-semibold leading-7 text-indigo-600'>
             {tier.name}
          </h3> 
          <div className='mt-4 flex items-baseline gap-x-2'>
            {tier.priceMonthly ? (
              <>
                <span className='text-5xl font-bold tracking-tight text-gray-900'>{tier.priceMonthly}</span>
                <span className='text-base font-semibold leading-7 text-gray-600'>/month</span>
              </>
            ):(
              <span className='text-5xl font-bold tracking-tight text-gray-900'>Free</span>
            )}

          </div>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            {tier.description}
          </p>
          <ul
          role='list'
          className='mt-10 space-y-4 text-sm leading-6 text-gray-600'>
            {tier.features.map((feature) => (
              <li key={feature} className='flex gap-x-3'>
                <CheckIcon className='h-6 w-5 flex-non text-indigo-600' />
                {feature}
              </li>
            ))}
          </ul>
         </div>
         {redirect ? (
            <Link href='/register'
            className='mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm
            hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
            cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white'>
              Get started today
            </Link>
         ) : (
            tier.id && <CheckOutButton />         
         )}
        </div>
      ))}
    </div>
  );
}

export default PricingCards