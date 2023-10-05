import React from "react";
import Image from "../Image/personn2.png";

function Features() {
  return (
    <div className="grid grid-cols-2 py-20 mx-20">
      <div className="col-span-1 flex justify-center items-center">
        <img src={Image} alt="A person" className="h-full " />
      </div>
      <div className="space-y-8 p-5 pt-10 col-span-1 pl-20 pt-30 ">
        <h1 className="font-semibold text-2xl leading-normal">
          We provide Many <br />
          Features You Can Use
        </h1>
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
