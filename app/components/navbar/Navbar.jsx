"use client";
import { IoMenu } from "react-icons/io5";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import links from "./list/links";
import { useContext, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import { AuthModalContext } from "@/app/contexts/authModalContext";

// Button Style
const buttonDefaultStyle =
  "text-white text-sm flex gap-2 items-center justify-center py-2 px-6 rounded-full w-full";

// Scroll Nav Style
const scrollNavStyle = "bg-white w-full z-40 transition-all";

const Navbar = ({isScroll}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleMenu = () => setIsMenuOpened(!isMenuOpened);
  const {setIsAuthModal} = useContext(AuthModalContext);
  const toggleModal = () => setIsAuthModal(true);
  const scrollCondition = isScroll ? "fixed top-0" : "absolute";

  return (
    <div className={`${scrollNavStyle} ${scrollCondition}`}>
      <div className="defaultpadding_navbar relative border-b-[1px] border-gray-100">
        {/* Mobile & Tablet Menu */}
        <MobileMenu isMenuOpened={isMenuOpened} />

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
              onClick={toggleModal}
            >
              Go to LMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
