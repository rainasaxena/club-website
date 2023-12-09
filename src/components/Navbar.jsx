import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  const links = [
    { href: '/#about-container', label: 'About' },
    { href: '/#events-container', label: 'Event' },
    { href: '/#team-container', label: 'Team' },
    { href: '/#gallery-container', label: 'Gallery' },
    { href: '/#join-us', label: 'Join Us' },
    { href: '/', label: 'Study' },
  ];

  return (
    <div id="navbar-container" className='flex flex-row items-center h-[85px] bg-blue'>
      <div className="hidden md:flex flex-4 h-[60px] w-[60px] m-9 rounded-md">
        <img src={logo} alt="" />
      </div>


      <div className="flex flex-1 flex-row justify-center">
        <ul className='flex flex-row space-x-10'>
          {
            links.map((item) => (
              <li><a href={item.href} className='mr-2 font-semibold text-grey md:text-2xl sm:text-sm5'>{item.label}</a></li>
            ))
          }
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar