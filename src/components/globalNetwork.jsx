import React from "react";
import Image from "../Image/location.png";

function GlobalNetwork() {
  return (
    <div className=" p-2 space-y-10 sm:p-10 md:px-40">
      <div className="text-center sm:px-10">
        <h1 className="font-extrabold text-2xl mb-10">
          Huge Global Network <br /> of Fast VPN
        </h1>
        <p>
          See <span className="font-bold">LaslesVPN</span> everywhere to make it
          easier for you wwhen you move locations.
        </p>
      </div>
      <div>
        <img src={Image} alt="map" className="w-full h-full" />
      </div>
    </div>
  );
}

export default GlobalNetwork;
