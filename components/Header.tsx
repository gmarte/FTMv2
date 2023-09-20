"use client"; 

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { ArrowUturnDownIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import logo from '@/assets/FTM_LOGO.png';
import Avatar from 'react-avatar';
import { useBoardStore } from '@/store/BoardStore';
import fetchSuggestions from '@/lib/fetchSuggestions';
import { account } from '@/appwrite';


function Header() {
  const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  const fetchUser = async () => {
    try {      
      const data = await account.get();      
      setUserDetails(data);   
      console.log(JSON.stringify(userDetails));
    } catch (error) {
      console.log("the error that happened:", error);
      return Login();
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const Login = () => {
    try {
      const response = account.createOAuth2Session(
        "google",
        "http://localhost:3000",
        "http://localhost:3000/auth"
      );
      console.log(response);
    } catch (error) {
      console.error("Failed to create OAuth session:", error);
    }
  };



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
    <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl mb-5'>
      <div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1]  rounded-md filter blur-3xl opacity-50 -z-50' />
      <Image
          src={logo}
          alt="FAMILY TASK MANAGER"       
          width={300} 
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
      <p className='text-2xl font-bold dark:text-gray-300'>FAMILY TASK MANAGER</p>
      <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
        {/* search box */}
        <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
          <MagnifyingGlassIcon className='h6 w-6 text-gray-400' />
          <input type='text' placeholder='Search' value={searchString} onChange={(e) => setSearchString(e.target.value)} className='flex-1 outline-none p-2' />
          <button type='submit' hidden>Search</button>
        </form>
        {/* avatar */}     
        <Avatar name="Giancarlo Mars" round color="#0055D1" size="50" />
        {/* <span color='#0055D1'>GM</span>          */}
      </div>      
     </div>
     {/* <div className='flex items-center justify-center px-5 py-2 md:py-5'>
        <p className='flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
          <UserCircleIcon className={`inline-block h10 w-10 text-[#0055D1] mr-1 ${
            loading && "animate-spin"
          }`
        } />
        {
          suggestion && !loading
          ? suggestion 
          : "GPT is sumarizing your tasks for the day..."
        }          
        </p>
      </div> */}
  </header>
  );  
}

export default Header
