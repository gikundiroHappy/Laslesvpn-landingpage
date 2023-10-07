import React from "react";
import Image from "../Image/logo.png";

function Footer() {
  return (
    <div className="grid grid-cols-1 p-5 sm:grid-cols-2 lg:grid-cols-6 bg-gray-50 lg:px-20 space-y-10">
      <div className="lg:col-span-3 space-y-8 sm:mt-10 lg:px-20">
        <img src={Image} alt="" />
        <p>
          <span className="font-bold">LasLesVPN</span> is a private virtual
          network that has unique features and has high security.
        </p>
        <div className="lg:col-span-1">
          <span
            className="bg-white text-red-400 text-md rounded-full px-4 py-2 mx-3 
          border-2 border-solid border-red-400"
          >
            <i className="fa fa-facebook"></i>
          </span>
          <span
            className="bg-white text-red-400 text-md rounded-full px-4 py-2 mx-3 
          border-2 border-solid border-red-400"
          >
            <i className="fa fa-twitter"></i>
          </span>
          <span
            className="bg-white text-red-400 text-md rounded-full px-4 py-2 mx-3 
          border-2 border-solid border-red-400"
          >
            <i className="fa fa-instagram"></i>
          </span>
        </div>
        <p>@2020LaslesVPN</p>
      </div>
      <div className="lg:col-span-1 space-y-4 sm:ml-20 lg:ml-0">
        <h1 className="font-bold">Product</h1>
        <ul className="space-y-3">
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Server</a>
          </li>
          <li>
            <a href="#">Countries</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-1 space-y-4">
        <h1 className="font-bold">Engage</h1>
        <ul className="space-y-3">
          <li>
            <a href="#">LaslesVPN?</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of service</a>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-1 space-y-4 sm:ml-20 lg:ml-0">
        <h1 className="font-bold">Earn Moneny</h1>
        <ul className="space-y-3">
          <li>
            <a href="#">Affiliate</a>
          </li>
          <li>
            <a href="#">Become Partner</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
