import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default Root;
