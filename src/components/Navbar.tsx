import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, Moon, Settings, User } from 'lucide-react'
import Link from "next/link"
import React from 'react'


export const Navbar = () => {
  return (
    <nav className='p-4 flex items-center justify-between'>
      {/* left */}
      collapseButton
      {/* right */}
      <div className="flex items-center">
        <Link href="/">Dashboard</Link>
        <Moon />
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
            <DropdownMenuItem variant="destructive">LogOut <LogOut/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


    </nav>

  )
}
