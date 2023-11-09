'use client';

import React from 'react'
import { Button } from './ui/button'
import { useUserStore } from '@/store/UserStore';

function CheckOutButton() {

  const [ user ] = useUserStore((state) => [
    state.user,    
]);
console.log(JSON.stringify(user));

  const createCheckOutSession =async () => {
    // stripe
  }
  return (
    <div className='flex flex-col space-y-2'>
      <button onClick={() => createCheckOutSession()} className='mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm
            hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
            cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white'>
        Sign up
      </button>
    </div>
  )
}

export default CheckOutButton