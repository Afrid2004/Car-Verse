import { LogIn, Menu, ShoppingCart, User, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  //const [isScrooling, setScrooling] = useState(false);
  const menuLinks = (
    <>
      <NavLink to="/" className="text-[17px] hover:text-[#405FF2]">
        Home
      </NavLink>
      <NavLink to="/vehicles" className="text-[17px] hover:text-[#405FF2]">
        Vehicles
      </NavLink>
      <NavLink to="/fsdfdfdf" className="text-[17px] hover:text-[#405FF2]">
        About Us
      </NavLink>
      <NavLink to="/fdsfdsfdsf" className="text-[17px] hover:text-[#405FF2]">
        Blogs
      </NavLink>
      <NavLink
        to="/cart"
        className="text-[17px] hover:text-[#405FF2] flex items-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" /> Cart
      </NavLink>
    </>
  );
  const logInSignUpBtn = (
    <>
      <a href="#">
        <button className="flex items-center gap-1 btn-primary px-4 py-2 rounded-4xl">
          <User /> Log In
        </button>
      </a>
    </>
  );

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 100 ? setScrooling(true) : setScrooling(false);
  //   });
  // }, []);
  return (
    <nav
      className={`fixed top-0  w-full text-black transition-all duration-300 backdrop-blur-[50px] bg-white/70 z-100`}
    >
      <div className="container h-16 flex items-center justify-center">
        <div className="flex justify-between items-center relative w-full">
          <div className="left-logo">
            <Link to="/">
              <img
                src="/images/logo-black.png"
                className="max-w-37.5"
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
            className={`mobile-menu md:hidden absolute transition-all duration-300 ease-in-out origin-top-right ${menu ? "scale-100 opacity-100" : "scale-0 opacity-0"} w-full top-[50px] border border-gray-200 rounded-md p-4 bg-white text-black`}
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
