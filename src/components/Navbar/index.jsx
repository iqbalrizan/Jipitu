import React, { useState } from 'react';
import "./style.css";
import logoJipitu from "../../assets/images/logo-jipitu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="text-white font-bold text-xl">
            <img src={logoJipitu} alt="Logo" />
          </a>        
        </div>

        {isOpen && (
          <div className="absolute top-16 right-0 w-48 bg-gray-900 text-white p-4 rounded-lg shadow-lg navbar-mobile">
            <ul className="flex flex-col space-y-3">
              <li>
                <a href="/" className="block px-4 py-2 rounded hover:bg-gray-700 transition">Home</a>
              </li>
              <li>
                <a href="#why-us" className="block px-4 py-2 rounded hover:bg-gray-700 transition">Why Us</a>
              </li>
              <li>
                <a href="#our-template" className="block px-4 py-2 rounded hover:bg-gray-700 transition">Our Template</a>
              </li>
              <li>
                <a href="#faq" className="block px-4 py-2 rounded hover:bg-gray-700 transition">FAQ</a>
              </li>
            </ul>
          </div>
        )}

        <div className="md:flex navbar-menu">
          <ul className="md:flex navbar-list-menu">
            <li>
              <a href="/" className="text-white">Home</a>
            </li>
            <li>
              <a href="#why-us" className="text-white">Why Us</a>
            </li>
            <li>
              <a href="#our-template" className="text-white">Our Template</a>
            </li>
            <li>
              <a href="#faq" className="text-white">FAQ</a>
            </li>
            <li>
              <a href="https://wa.me/6281268110311" className="button-1">CONTACT US</a>
            </li>
          </ul>
        </div>
        <button
          className="ml-4 sm:hidden text-white focus:outline-none focus:text-white btn-mobile-hide"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
