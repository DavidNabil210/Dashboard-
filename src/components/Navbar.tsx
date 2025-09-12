import { Moon } from 'lucide-react'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='p-4 flex items-center justify-between'>
      {/* left */}
       collapseButton
       {/* right */}
      <div className="flex items-center">
         <link href="/">Dashboard</link>
      <Moon/>
      </div>
      
    </nav>
    
  )
}
