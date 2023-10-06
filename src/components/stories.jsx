import React from "react";
import { customerDetail } from "../constant";

function Stories() {
  return (
    <div className="space-y-20">
      <div className="text-center sm:px-10">
        <h1 className="font-extrabold text-2xl mb-10">
          Trusted by Thousands of <br /> Happy Customer
        </h1>
        <p>
          These are the stories of our customers who have joined us with great{" "}
          <br />
          pleasure when using this crazy feature
        </p>
      </div>
      <div className="grid md:grid-cols-2 md:mx-1 xl:grid-cols-3 xl:px-10">
        {customerDetail.map((detail) => (
          <div
            className="grid p-8 mx-1 border-2 border-gray-300 rounded-xl my-5 sm:mx-20 
            md:mx-5 md:p-3 hover:border-red-400"
            key={detail.id}
          >
            <div className="grid sm:grid-cols-2">
              <div className="sm:flex gap-5 text-xl md:gap-2 ">
                <img
                  src={detail.image}
                  alt="a person"
                  className="w-full h-full sm:rounded-full sm:w-32 h-32 object-cover"
                />
                <div className="mt-3 text-sm sm:mt-10">
                  <h2 className="font-bold ">{detail.name}</h2>
                  <p>{detail.location}</p>
                </div>
              </div>
              <div className="flex items-center justify-end mt-5 md:mt-10">
                <p>
                  {detail.number}{" "}
                  <span>
                    {" "}
                    <i className={`fa ${detail.star} text-yellow-500 px-2`}></i>
                  </span>
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
