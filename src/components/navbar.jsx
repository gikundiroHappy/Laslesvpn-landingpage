import React from "react";
import Logo from "../Image/logo.png";

function Navbar() {
  return (
    <div
      className="grid grid-cols-2 mt-10 p-1 mx-1 sm:grid-cols-2 sm:mx-20 sm:p-5 
    lg:grid-cols-4 lg:mx-20"
    >
      <div className="sm col-span-1">
        <img src={Logo} alt="Image" />
      </div>
      <div
        className="hidden  lg:col-span-2 lg:flex lg:items-center lg:pl-10 lg:text-gray-800 
      sm:text-md "
      >
        <ul className="flex gap-10 lg:gap-5 lg:text-sm">
          <li className="list">About</li>
          <li className="list">Features</li>
          <li className="list">Pricing</li>
          <li className="list">Testimonials</li>
          <li className="list">Help</li>
        </ul>
      </div>
      <div className=" hidden lg:col-span-1 lg:flex lg:justify-end lg:font-bold">
        <a href="#" className="flex text-center items-center text:2xl ">
          Sign In
        </a>
        <a
          href="#"
          className="border border-solid border-red-500 rounded-3xl 
          px-7 flex text-center items-center text-red-500 sm:ml-10 lg:ml-3"
        >
          Sign Up
        </a>
      </div>
      <div className="flex justify-end items-center mr-5 text-lg text-red-500 lg:hidden sm:mr-1">
        <span>
          <i class="fa fa-bars"></i>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
