import React from "react";
import Image from "../Image/person.png";

function Content() {
  return (
    <div className="grid md:grid-cols-2 lg:py-10 lg:mx-20 sm:grid-cols-1">
      <div className="space-y-10 p-5 pt-10">
        <h1 className="font-semibold text-3xl leading-normal lg:text:5xl">
          Want anything to be easy with
          <span className="font-extrabold"> LaslesVPN</span>
        </h1>
        <div className="md:hidden">
          <img
            src={Image}
            alt="A Person on a laptop"
            className="h-full w-full"
          />
        </div>
        <p className="text-sm leading-loose">
          Provide a network for all your needs with ease and fun using Lasles
          VPN discover interesting features from us
        </p>
        <div>
          <a
            href="#"
            className="bg-red-500 text-white font-bold py-3 px-10 rounded-md shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="hidden md:block ">
        <img src={Image} alt="A Person on a laptop" className="h-full w-full" />
      </div>
    </div>
  );
}

export default Content;
