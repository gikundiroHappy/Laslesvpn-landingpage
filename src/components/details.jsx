import React from "react";
import { laslesVpnData } from "../constant";
import "font-awesome/css/font-awesome.min.css";

function Details() {
  return (
    <div className="bg-white shadow-xl grid grid-cols-3 p-5 mx-20">
      {laslesVpnData.map((details, index) => (
        <div
          key={details.id}
          className="flex justify-center items-center gap-10 m-2"
        >
          <div>
            <i
              className={`fa ${details.icon} text-red-500 bg-red-100 py-3 px-5 text-2xl rounded-full`}
            ></i>
          </div>
          <div>
            <h1 className="font-extrabold text-xl">{details.number}</h1>
            <h2>{details.name}</h2>
          </div>
          {index !== 2 && (
            <span className="block w-0.5 h-32 bg-gray-200 relative ml-20"></span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Details;
