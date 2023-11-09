"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Avatar from "react-avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUserStore } from "@/store/UserStore";
 

function UserButton( { user } : {user: User | null }) {  
  //subscription

  const [ logOut ] = useUserStore((state) => [
    state.logOut,    
  ]);
  console.log(user);
  console.log(user?.session);
 if (!user)
    return (
        <>
            <Link href='/auth/login'>
            <Button variant={"outline"} >
                Log in
            </Button>
            </Link>
            <Link href='/auth/signup'>
            <Button variant={"outline"}>
                Sign up
            </Button>
            </Link>
        </>
    ); 
  return (
  <DropdownMenu>
  <DropdownMenuTrigger><Avatar name={user.name} round color="#0055D1" size="45" /></DropdownMenuTrigger>  
  <DropdownMenuContent>
    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>    
    <DropdownMenuItem onClick={() => logOut()}><Link href='/'>Logout</Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  );
}

export default UserButton