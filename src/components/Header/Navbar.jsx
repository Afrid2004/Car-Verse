import { LogIn, Menu, User, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuLinks = (
    <>
      <NavLink to="/" className="text-[17px] hover:text-[#405FF2]">
        Home
      </NavLink>
      <NavLink to="/fdsfd" className="text-[17px] hover:text-[#405FF2]">
        Cars
      </NavLink>
      <NavLink to="/fsdfdfdf" className="text-[17px] hover:text-[#405FF2]">
        About Us
      </NavLink>
      <NavLink to="/fdsfdsfdsf" className="text-[17px] hover:text-[#405FF2]">
        Blogs
      </NavLink>
    </>
  );
  const logInSignUpBtn = (
    <>
      <a href="#">
        <button className="flex items-center gap-1">
          <User /> Log In
        </button>
      </a>
      <a href="#">
        <button className="flex items-center gap-1">
          <LogIn /> Sign Up
        </button>
      </a>
    </>
  );
  return (
    <nav>
      <div className="container">
        <div className="flex justify-between items-center relative">
          <div className="left-logo">
            <Link to="/">
              <img
                src="images/logo-black.png"
                className="max-w-[150px]"
                alt="logo"
              />
            </Link>
          </div>
          <div className="menu-right">
            <div className="destop-menu flex items-center">
              <div className="flex gap-8 hidden md:flex">
                <ul className="flex items-center gap-6 activeLink">
                  {menuLinks}
                </ul>
                <div className="flex items-center gap-2">{logInSignUpBtn}</div>
              </div>
              <button
                onClick={() => setMenu(!menu)}
                className="menu-open-close flex md:hidden cursor-pointer"
              >
                {menu ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          <div
            className={`mobile-menu md:hidden absolute transition-all duration-300 ease-in-out origin-top-right ${menu ? "scale-100 opacity-100" : "scale-0 opacity-0"} w-full top-[50px] border border-gray-200 rounded-md p-4 bg-white`}
          >
            <ul className="flex flex-col gap-4 activeLink">{menuLinks}</ul>
            <div className="flex flex-col gap-4 mt-3">{logInSignUpBtn}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
