import React from "react";
import Logo from "../Image/logo.png";

function Navbar() {
  return (
    <div className="grid grid-cols-4 mt-10 p-5 mx-20">
      <div className="col-span-1">
        <img src={Logo} alt="Image" />
      </div>
      <div className="col-span-2 flex items-center pl-10 text-gray-800 text-md">
        <ul className="flex gap-10">
          <li className="list">About</li>
          <li className="list">Features</li>
          <li className="list">Pricing</li>
          <li className="list">Testimonials</li>
          <li className="list">Help</li>
        </ul>
      </div>
      <div className="col-span-1 flex justify-end font-bold">
        <a href="#" className="flex text-center items-center">
          Sign In
        </a>
        <a
          href="#"
          className="border border-solid border-red-500 rounded-3xl ml-10 px-7 flex text-center items-center text-red-500"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Navbar;
