"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, Moon, Settings, Sun, User } from 'lucide-react'
import Link from "next/link"
import React from 'react'
import { Button } from "./ui/button"
import { useTheme } from "next-themes"


export const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className='p-4 flex items-center justify-between'>
      {/* left */}
      collapseButton
      {/* right */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        {/* Dark system */}
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-10 h-10">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="w-10 h-10 rounded-full object-cover"
              />
              <AvatarFallback className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 font-medium">
                CN
              </AvatarFallback>
            </Avatar>

          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">LogOut <LogOut /></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


    </nav>

  )
}
