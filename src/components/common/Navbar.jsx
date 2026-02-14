import React, { useState } from "react";
import LOGO from "../../assets/LOGO.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-10 h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={LOGO}
            alt="EyeCare Logo"
            className="h-16 w-16 object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-md font-semibold">
          <li className="cursor-pointer hover:text-[#FF6B35]">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-[#FF6B35]">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-[#FF6B35]">
            <a href="#services">Services</a>
          </li>
          <li className="cursor-pointer hover:text-[#FF6B35]">
            <a href="#doctor">Doctor</a>
          </li>
          <li className="cursor-pointer hover:text-[#FF6B35]">
            <a href="#appointment">Contact</a>
          </li>
        </ul>

        {/* Call Button - Desktop */}
        <div className="hidden md:block">
          <a href="tel:+918112669394">
            <button className="bg-[#FF6B35] px-6 py-2 rounded-full text-white font-semibold flex items-center gap-2">
              <i className="ri-phone-fill"></i>
              Call Now
            </button>
          </a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <i
              className={`ri-${open ? "close-line" : "menu-line"} text-2xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
            <li onClick={() => setOpen(false)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#about">About</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#services">Services</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#doctor">Doctor</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#appointment">Contact</a>
            </li>

            <a
              href="tel:+918112669394"
              className="bg-[#FF6B35] px-6 py-3 w-1/2 rounded-full text-white font-semibold flex items-center gap-2 justify-center"
            >
              <i className="ri-phone-fill"></i>
              Call Now
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
