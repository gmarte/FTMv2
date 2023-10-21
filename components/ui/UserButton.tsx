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
  <DropdownMenuTrigger><Avatar name="Giancarlo Mars" round color="#0055D1" size="50" />        </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem><Button onClick={() => logOut}>Logout</Button></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  );
}

export default UserButton