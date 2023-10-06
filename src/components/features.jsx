import React from "react";
import Image from "../Image/personn2.png";

function Features() {
  return (
    <div className="grid md:grid-cols-2 py-10 mx-1 sm:grid-cols-1 lg:mx-20">
      <div className="col-span-1 flex justify-center items-center hidden md:block">
        <img src={Image} alt="A person" className="h-full " />
      </div>
      <div className="space-y-8 p-5 pt-0 col-span-1 pl-10 pt-30 sm:pl-20 sm:pt-10">
        <h1 className="font-semibold text-2xl leading-normal">
          We provide Many <br />
          Features You Can Use
        </h1>
        <div className="col-span-1 flex justify-center items-center md:hidden">
          <img src={Image} alt="A person" className="h-full " />
        </div>
        <p className="text-sm leading-loose">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className="space-y-5 text-sm">
          <li>
            <span className="text-white bg-green-700 rounded-full px-1 mr-5">
              <i className="fa fa-check"></i>
            </span>{" "}
            Powerfull online protection.
          </li>
          <li>
            {" "}
            <span className="text-white text-1 bg-green-700 rounded-full px-1 mr-5">
              <i className="fa fa-check"></i>
            </span>
            Internet without borders.
          </li>
          <li>
            {" "}
            <span className="text-white bg-green-700 rounded-full px-1 mr-5">
              <i className="fa fa-check"></i>
            </span>
            Supercharged VPN
          </li>
          <li>
            {" "}
            <span className="text-white bg-green-700 rounded-full px-1 mr-5">
              <i className="fa fa-check"></i>
            </span>
            no specific time limits
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
