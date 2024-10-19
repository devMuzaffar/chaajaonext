"use client";
import { IoMenu } from "react-icons/io5";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import links from "./links";
import { useState } from "react";

// Button Style
const buttonDefaultStyle =
  "text-white text-sm flex gap-2 items-center justify-center py-2 px-6 rounded-full w-full";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

  return (
    <div className="defaultpadding relative border-b-[1px] border-gray-100">
      {/* Mobile & Tablet Menu */}
      <div
        className={`absolute bg-primary w-full top-16 left-0 overflow-hidden transition-all sm:top-20 md:hidden ${
          isMenuOpened ? "h-52" : "h-0"
        }`}
      >
        <div className="p-5">
          <ul className="text-white text-sm font-semibold space-y-7">
            {links.map((item, index) => (
              <li key={index}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex flex-col items-center justify-between gap-6 sm:gap-2 md:flex-row">
        {/* Left Logo & Links */}
        {/* // Logo & Hamburger */}
        <div className="w-full flex items-center px-2 justify-between md:w-1/2">
          {/* Logo */}
          <img
            className="w-24 xs:w-32 sm:w-60 md:w-40"
            src="./assets/logo.png"
            alt=""
          />

          {/* Hamburger Icon */}
          <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
            <IoMenu size={24} />
          </div>

          {/* Links - Desktop */}
          <ul className="hidden gap-8 text-sm font-semibold lg:flex">
            {links.map((item, index) => (
              <li key={index}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="grid grid-cols-2 gap-1 justify-center w-full xs:grid-cols-3 md:w-max md:gap-2">
          <button className={`${buttonDefaultStyle} bg-black `}>
            <FaPhoneAlt />
            Call
          </button>
          <button className={`${buttonDefaultStyle} bg-green-500 `}>
            <FaWhatsapp />
            Chat
          </button>
          <button
            className={`${buttonDefaultStyle} bg-primary col-span-2 xs:col-span-1`}
          >
            Go to LMS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
