import React from "react";

function Subscription() {
  return (
    <div
      className="bg-white mx-5 grid p-5 space-y-8 sm:grid-cols-2 lg:mx-20 
    lg:rounded-md lg:px-20 lg:py-10 shadow-xl"
    >
      <div className="grid">
        <h1 className="font-extrabold text-xl sm:text-2xl mb-5">
          Subscribe Now for
          <br /> Get Special Features!{" "}
        </h1>
        <p>Let's subscribe with us and find the fun.</p>
      </div>
      <div className="flex sm:justify-end">
        <button className="font-bold px-10 py-3  bg-red-500 rounded-xl text-white ">
          Subscribe now
        </button>
      </div>
    </div>
  );
}

export default Subscription;
