import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const links = [
    { href: "/#about-container", label: "About" },
    { href: "/#events-container", label: "Event" },
    {
      
      label: "Team",
      dropdown: true,
      dropdownLinks: [
        { href: "/#team-member1", label: "Founding" },
        { href: "/#team-member2", label: "Board" },
        { href: "/#team-member2", label: "FFCS-21" },
        { href: "/#team-member2", label: "FFCS-22" },
      ],
    },
    { href: "/#gallery-container", label: "Gallery" },
    { href: "/#join-us", label: "Join Us" },
    { href: "/", label: "Study" },
  ];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="h-14 w-screen md:h-20 bg-blue">
        <div className="p-5">
          <div className="flex items-center justify-center">
            <ul className="text-xs md:text-3xl font-bold flex gap-3 md:gap-10 text-grey">
              {links.map((item) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <div className="relative">
                      <a href={item.href} onClick={toggleDropdown}>
                        {item.label}
                      </a>
                      {showDropdown && (
                        <ul className="flex flex-col gap-2 md:gap-3 p-3 h-max w-24 md:w-28 text-sm md:text-lg absolute mt-0 bg-darkblue shadow-md rounded-md">
                          {item.dropdownLinks.map((dropdownItem) => (
                            <li key={dropdownItem.label}>
                              <a href={dropdownItem.href}>{dropdownItem.label}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// // import { FiChevronDown } from 'react-icons/fi';

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const links = [
//     { href: "/#about-container", label: "About" },
//     { href: "/#events-container", label: "Event" },
//     {
//       href: "/#team-container",
//       label: "Team",
//       dropdown: true,
//       dropdownLinks: [
//         { href: "/#team-member1", label: "Member 1" },
//         { href: "/#team-member2", label: "Member 2" },
//         { href: "/#team-member2", label: "Member 2" },
//         { href: "/#team-member2", label: "Member 2" },
//         // Add more team members as needed
//       ],
//     },
//     { href: "/#gallery-container", label: "Gallery" },
//     { href: "/#join-us", label: "Join Us" },
//     { href: "/", label: "Study" },
//   ];

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <>
//       <div className="h-14 w-screen md:h-20 bg-blue">
//         <div className="p-5">
//         <div className="flex items-center justify-center">
//           <ul className="text-xs md:text-3xl font-bold flex gap-2 md:gap-10 text-grey">
//             {links.map((item) => (
//               <a href = {item.href}><li key={item.label}>{item.label}</li></a>
//             ))}
//           </ul>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// <div id="navbar-container" className='flex flex-row items-center h-[85px] bg-blue'>
//   <div className="hidden md:flex flex-4 h-[60px] w-[60px] m-9 rounded-md">
//     <img src={logo} alt="" />
//   </div>

//   <div className="flex flex-1 flex-row justify-center">
//     <ul className='flex flex-row space-x-10'>
//       {links.map((item) => (
//         <li key={item.label}>
//           {item.dropdown ? (
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="font-semibold text-grey md:text-2xl sm:text-sm5"
//               >
//                 {item.label}
//               </button>
//               {showDropdown && (
//                 <div className="h-40 w-36 absolute z-10 text-xl bg-darkblue text-grey font-bold py-2 px-4 rounded-md">
//                   {item.dropdownLinks.map((link) => (
//                     <a key={link.label} href={link.href} className="block py-1 hover:text-gray-300">{link.label}</a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ) : (
//             <a href={item.href} className='font-semibold text-grey md:text-2xl sm:text-sm5'>{item.label}</a>
//           )}
//         </li>
//       ))}
//     </ul>
//   </div>
// </div>
