import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='py-12 sm:py-10 lg:pb-4'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-7xl text-center'>
                {/* <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
                    Enabling parents and involving kids through gamified task management                    
                </h1> */}
                {/* <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300'>
                    Enabling parents and involving kids through gamified task management.                    
                <span className='text-indigo-600 dark:text-indigo-500'>
                     Empower your kids to take charge of their tasks and responsibilities with our easy-to-use task management app. Say goodbye to the hassle of managing household chores and hello to a more productive and rewarding family life.
                </span>
                </p> */}
            </div>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Link 
                href='/auth/login' 
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Get started
                </Link>
                <Link 
                href='/pricing'
                className='text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300'>
                    View Pricing <span aria-hidden="true">→</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero