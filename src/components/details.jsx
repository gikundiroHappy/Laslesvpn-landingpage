import React from "react";
import { laslesVpnData } from "../constant";
import "font-awesome/css/font-awesome.min.css";

function Details() {
  return (
    <div className="bg-white shadow-xl grid xl:grid-cols-3 p-5 mx-5 md:grid-cols-3 xl:mx-20 sm:grid-cols-2 text-center">
      {laslesVpnData.map((details, index) => (
        <div
          key={details.id}
          className="md:flex justify-center items-center gap-10 m-2 block mb-10"
        >
          <div>
            <i
              className={`fa ${details.icon} text-red-500 bg-red-100 py-3 px-5 text-2xl rounded-full mb-5 md:mt-5 `}
            ></i>
          </div>
          <div>
            <h1 className="font-extrabold text-xl">{details.number}</h1>
            <h2>{details.name}</h2>
          </div>
          {index !== 2 && (
            <span className="hidden w-0.5 h-20 bg-gray-200 relative ml-20 mt-0 xl:block"></span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Details;
