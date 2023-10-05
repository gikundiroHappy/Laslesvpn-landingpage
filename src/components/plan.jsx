import React from "react";
import { planDetails } from "../constant";
import Image from "../Image/plan.png";

function Plan() {
  return (
    <div className="bg-gray-50 py-5 px-20">
      <div className="text-center space-y-7 pt-20">
        <h1 className="font-bold text-2xl">Choose Your Plan</h1>
        <p className="text-sm">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div className="grid grid-cols-3">
        {planDetails.map((data) => (
          <div
            key={data.id}
            className="bg-white border-2 border-solid border-gray-300 m-10 p-10 rounded-lg 
            group hover:border-red-500 transition duration-300 ease-in-out"
          >
            <div className="flex justify-center">
              <img src={Image} alt="plan box" />
            </div>
            <h1 className="font-bold text-center py-5">{data.title}</h1>
            <ul>
              {data.list.map((item) => (
                <li key={item.id} className="list-none text-sm leading-10">
                  <i className="fa fa-check text-green-700 mr-5"></i>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="mt-20">
              <h3 className="font-bold text-center p-3">{data.status}</h3>
              <button
                className="border-2 border-solid border-red-500 rounded-3xl ml-10 px-10 
              py-1 font-bold flex text-center items-center text-red-500 group-hover:bg-red-500 
              group-hover:border-red-500 group-hover:text-white transition duration-300 ease-in-out"
              >
                {data.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plan;
