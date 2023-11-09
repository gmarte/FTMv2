'use client';

import PricingCards from '@/components/PricingCards';
import { useUserStore } from '@/store/UserStore'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Register() {
    const router = useRouter();  

    const [ user ] = useUserStore((state) => [
        state.user,    
  ]);

  useEffect(() => {
    // You'll need to replace this with however you're determining logged-in status.
    // This could be checking for a token in localStorage, a global state, etc.    

    if (!user) {
      // If not logged in, redirect to the login page
      router.push('auth/login');
    }
  }, [router]);

  return (
    <div className='isolate overflow-hidden bg-gray-900'>
      <div className='mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8'>
        <div className='mx-auto max-w-4xl'>          
          <p className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            Let's handle your membership for you, {" "}
            <br className='hidden sm:inline lg:hidden' />
            {user?.name}
          </p>
        </div>
        <div className='relative mt-6'>
          <p className='mx-auto max-w-2xl text-lg leading-8 text-white/60'>
            Were 99% sure we have a plan to match 100% of your needs
          </p>
        </div>
        <div className='flow-root pb-24 sm:pb-32'>
          <div className='mt-8'>
            <PricingCards redirect={false} />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Register