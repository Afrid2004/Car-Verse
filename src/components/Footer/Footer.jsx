import React from "react";
import { Link, NavLink } from "react-router";
import { footerMenu } from "../../../public/bodyData/BodyData";
import { Heart } from "lucide-react";

const Footer = () => {
  const menu = footerMenu.map((menu, index) => {
    return (
      <>
        <NavLink key={index} className="text-[15px]" to={menu.menuPath}>
          {menu.menuTitle}
        </NavLink>
      </>
    );
  });

  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="footer-container">
        <div className="footer-topper h-12.5 bg-white rounded-br-4xl rounded-bl-4xl"></div>
        <div className="footer-second border-b border-b-[#23283b] py-8 md:py-12">
          <div className="container">
            <div className="footer-second-content flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="left">
                <Link to="/" className="mb-3 block">
                  <img
                    className="max-w-[150px]"
                    src="images/logo-white.png"
                    alt="logo-white"
                  />
                </Link>
                <p>Receive pricing updates, shopping tips & more!</p>
              </div>
              <div className="right w-full flex justify-end">
                <form className="w-full md:max-w-[400px]">
                  <div className="bg-secondary rounded-full p-2 flex gap-2 justify-between items-center">
                    <input
                      className="outline-none ps-4 w-full"
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                    <button
                      type="submit"
                      className="btn-primary rounded-full px-6 py-2 shrink-0"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-third border-b border-b-[#23283b] py-8 md:py-12">
          <div className="container">
            <div className="footer-menu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
              <div className="div-1">
                <div className="menu-title">
                  <h4 className="font-medium text-[20px] mb-6">Company</h4>
                </div>
                <div className="menuOne flex flex-col gap-2">
                  {menu.slice(0, 6)}
                </div>
              </div>
              <div className="div-2">
                <div className="menu-title">
                  <h4 className="font-medium text-[20px] mb-6">Quick Links</h4>
                </div>
                <div className="menuOne flex flex-col gap-2">
                  {menu.slice(6, 10)}
                </div>
              </div>
              <div className="div-3">
                <div className="menu-title">
                  <h4 className="font-medium text-[20px] mb-6">Our brands</h4>
                </div>
                <div className="menuOne flex flex-col gap-2">
                  {menu.slice(10, 18)}
                </div>
              </div>
              <div className="div-3">
                <div className="menu-title">
                  <h4 className="font-medium text-[20px] mb-6">
                    Our Mobile App
                  </h4>
                </div>
                <div>
                  <div className="app-logo mb-6">
                    <a className="playstore mb-3 block" href="#">
                      <div className="bg-[#161c30] flex gap-5 items-center w-fit py-4 px-8 rounded-2xl">
                        <img
                          src="images/playstore.png"
                          className="w-5"
                          alt="playstore"
                        />
                        <div className="app-info">
                          <p className="text-[12px]">Download on the</p>
                          <h4 className="text-[17px] font-medium">
                            Play Store
                          </h4>
                        </div>
                      </div>
                    </a>
                    <a className="appstore" href="#">
                      <div className="bg-[#161c30] flex gap-5 items-center w-fit py-4 px-8 rounded-2xl">
                        <img
                          src="images/appstore.png"
                          className="w-5"
                          alt="appstore"
                        />
                        <div className="app-info">
                          <p className="text-[12px]">Download on the</p>
                          <h4 className="text-[17px] font-medium">App Store</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="contact">
                    <h4 className="font-medium text-[20px] mb-6">
                      Contact With Us
                    </h4>
                    <div className="social flex gap-5">
                      <a href="#">
                        <img src="images/facebook.png" alt="facebook" />
                      </a>
                      <a href="#">
                        <img src="images/twitter.png" alt="twitter" />
                      </a>
                      <a href="#">
                        <img src="images/instagram.png" alt="instagram" />
                      </a>
                      <a href="#">
                        <img src="images/linkedin.png" alt="linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-6">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center text-[15px]">
              <div className="footer-left opacity-75 mb-3 md:mb-0">
                <p>
                  © {year}{" "}
                  <a href="https://carverce.vercel.app">carverce.vercel.app</a>.
                  All rights reserved.
                </p>
              </div>
              <div className="footer-right">
                <p className="flex items-center gap-1">
                  <span className="opacity-75 flex items-center gap-1">
                    Made with <Heart className="w-4" /> Design & Developed by
                  </span>
                  <a
                    className="text-primary hover:underline"
                    href="https://faisalafrid.vercel.app"
                    target="_blank"
                  >
                    Afrid.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
