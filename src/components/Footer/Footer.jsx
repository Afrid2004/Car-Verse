import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="footer-container">
        <div className="footer-topper h-[50px] bg-white rounded-br-4xl rounded-bl-4xl"></div>
        <div className="footer-second">
          <div className="container">
            <div className="footer-second-content flex justify-between items-center">
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
              <div className="right">
                <form>
                  <div className="bg-secondary rounded-full p-2 flex gap-2 justify-between items-center">
                    <input
                      className="outline-none ps-4"
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                    <button
                      type="submit"
                      className="btn-primary rounded-full px-6 py-2"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
