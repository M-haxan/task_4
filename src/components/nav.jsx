import MenuIcon from '@mui/icons-material/Menu';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from 'react';
//import Sidebar from './components/Sidebar';

export default function Nav() {
   const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    return(
        <>
           <nav className="border border-[#E0E1E6] fixed top-0 left-0 bg-white h-15 w-full flex items-center justify-between px-4">
  {/* Left */}
  <div className="flex items-center block lg:hidden">
    <MenuIcon className="lg:hidden h-6 m-2" />
    <img className="h-6" src="logo.png" alt="logo" />
  </div>
    <div className="hidden lg:flex items-center gap-2">
      <img className="h-8" src="logo.png" alt="logo" />
      <h1 className="text-xl font-bold text-[#757C91]">Phonix</h1>
    </div>

  {/* Center (Search) */}
  <div className="relative w-48 md:w-60 lg:w-72 hidden sm:block">
    <SearchIcon className="absolute left-2 top-4 transform -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      className="border border-[#CBD0DD] rounded-full w-full h-8 pl-10"
      placeholder="Search..."
    />
  </div>

  {/* Right */}
  <div className="flex items-center gap-2 shrink-0">
    <WbSunnySharpIcon sx={{ color: '#EA8F33' }} />
    <SearchSharpIcon sx={{ color: '#666970' }} />
    <NotificationsNoneOutlinedIcon sx={{ color: '#666970' }} />
    <AppsIcon sx={{ color: '#666970' }} />
    <img src="prof.png" className="h-6 rounded-full lg:block" alt="profile" />
  </div>
</nav>


        </>
    )
}