"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { signOut } from "next-auth/react";

export function ProfileMenu() {
  // TODO: Fix Styling
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-2 flex flex-col gap-2 w-[150px]">
        <Link href={"/profile"}>Profile</Link>
        <Button variant={"outline"} onClick={() => signOut()}>
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}
