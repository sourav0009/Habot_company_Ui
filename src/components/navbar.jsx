import React, { useState } from 'react';

const Navbar = () => {
  // State to manage the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-black md:h-20 h-16 shadow">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <img
          className="w-28 md:w-44 md:h-20 h-16  ml-5 md:ml-24"
          src="./h-logo.png"
          alt="Logo"
        />

        {/* Hamburger Menu Button - Visible on Mobile */}
        <button
          className="md:hidden mr-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-8 h-8 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Dropdown Menu - Visible on Mobile when Hamburger is Clicked */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <li className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100">
              Find Suppliers
            </li>
            <li className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100">
            Find Service Tags
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <button className="w-full text-left border border-green-600 text-green-400 font-bold py-1 px-2 rounded-md">
                Login/Sign Up
              </button>
            </li>
          </ul>
        )}

        {/* Nav Links - Visible only on Medium and Larger Screens */}
        <div className="hidden md:flex items-center space-x-10 mr-20">
          <h1 className="hover:text-green-600">Find Suppliers</h1>
          <h1 className="hover:text-green-600 flex">Find Service Tags
            <svg  width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0866 5.99996L8.41991 10.6666L3.75324 5.99996" stroke="#6D6E71" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </h1>
          <button className="border border-green-600 text-green-400 font-bold p-2 w-48 rounded-md hover:bg-green-100">
            Login/Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
