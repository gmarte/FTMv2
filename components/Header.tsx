"use client"; 

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { ArrowUturnDownIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import logo from '@/assets/FTM_LOGO.png';
import { useBoardStore } from '@/store/BoardStore';
import fetchSuggestions from '@/lib/fetchSuggestions';
import { account } from '@/appwrite';
import { useUserStore } from '@/store/UserStore';
import DarkModeToogle from './ui/DarkModeToogle';
import UserButton from './ui/UserButton';
import Link from 'next/link';


function Header() {
  const [ user, setUser, setSession ] = useUserStore((state) => [
    state.user,
    state.setUser,
    state.setSession,
  ]);
  console.log(user);
  const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  const fetchUser = async () => {
    try {      
      console.log(JSON.stringify(user));
      const data = await account.getSession("current");    
      if (data) { 
        setUser(await account.get()); 
      }
      setSession(data);   
      console.log(JSON.stringify(data));
    } catch (error) {
      console.log("the error that happened:", error);
      return error;
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);  


  const [board,searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");

  useEffect(() => {
    if(board.columns.size ===0) return;
    setLoading(true);

    const fetchSuggestionsFunc = async () => {
      const suggestion = await fetchSuggestions(board);
      setSuggestion(suggestion);
      setLoading(false);          
    }

    fetchSuggestionsFunc();

  }, [board]);
  return (
  <header>
    <div className=' mx-auto max-w-7xl flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl mb-5'>
      <div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1]  rounded-md filter blur-3xl opacity-50 -z-50' />
      <Link href='/'>
      <Image        
          src={logo}
          alt="FAMILY TASK MANAGER"       
          width={300} 
          height={100}
          className="w-20 md:w-28 pb-10 md:pb-0 object-contain"
      />
      </Link>
      <Link href='/'>
      {/* <h1 className="scroll-m-20 ml-2 text-4xl font-extrabold tracking-wider lg:text-4xl"> */}
      <h1 className='ml-2 text-4xl font-extrabold tracking-wider sm:text-6xl'>
      Family Task Manager
      </h1>
      </Link>
      <div className='flex items-center space-x-5 flex-1 justify-end w-full'>                        
        { user ? (
          <>
            <form className='flex items-center space-x-5 bg-white rounded-md p-1 shadow-md flex-1 md:flex-initial'>
              <MagnifyingGlassIcon className='h6 w-6 text-gray-400' />
              <input type='text' placeholder='Search' value={searchString} onChange={(e) => setSearchString(e.target.value)} className='flex-1 outline-none p-1' />
              <button type='submit' hidden>Search</button>
            </form>            
          </>
        ) : (
          <Link href='/pricing'>Pricing</Link>
        ) }              
        <DarkModeToogle />  
        <UserButton user={user} />         
      </div>      
     </div>     
  </header>
  );  
}

export default Header
