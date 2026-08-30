import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop nav style
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  // Mobile nav style (thick + bigger)
  const mobileNavClass = ({ isActive }) =>
    isActive
      ? "nav-link active block py-3 text-lg font-semibold rounded-lg"
      : "nav-link block py-3 text-lg font-semibold rounded-lg hover:bg-gray-100";

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top bar */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink to="/" className="text-2xl md:text-3xl font-extrabold text-black">
            সাকিব হাসান
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-lg font-normal">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/portfolio" className={navClass}>Portfolio</NavLink>
            <NavLink to="/blog" className={navClass}>Blog</NavLink>
            <NavLink to="/booking" className={navClass}>Booking</NavLink>
            <NavLink to="/dashboard" className={navClass}>Dashboard</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>

        </div>
      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-2 text-left">

          <NavLink to="/" end className={mobileNavClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <br />
          <NavLink to="/about" className={mobileNavClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <br />
          <NavLink to="/portfolio" className={mobileNavClass} onClick={() => setIsOpen(false)}>Portfolio</NavLink>
          <br />
          <NavLink to="/blog" className={mobileNavClass} onClick={() => setIsOpen(false)}>Blog</NavLink>
          <br />
          <NavLink to="/booking" className={mobileNavClass} onClick={() => setIsOpen(false)}>Booking</NavLink>
          <br />
            <NavLink to="/dashboard" className={mobileNavClass}>Dashboard</NavLink>
          <br />
          <NavLink to="/contact" className={mobileNavClass} onClick={() => setIsOpen(false)}>Contact</NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;