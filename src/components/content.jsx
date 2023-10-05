import React from "react";
import Image from "../Image/person.png";

function Content() {
  return (
    <div className="grid grid-cols-2 py-10 mx-20">
      <div className="space-y-10 p-5 pt-10">
        <h1 className="font-semibold text-5xl leading-normal">
          Want anything to be easy with
          <span className="font-extrabold"> LaslesVPN</span>
        </h1>
        <p className="text-sm leading-loose">
          Provide a network for all yoyr needs with ease and fun using Lasles
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
      <div className="bg-red-100">
        <img src={Image} alt="A Person on a laptop" className="h-full w-full" />
      </div>
    </div>
  );
}

export default Content;
