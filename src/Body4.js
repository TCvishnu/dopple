import React from "react";
import girlLaydown from "./images/Screenshot 2024-10-01 at 6.21.17 PM.png";

export default function Body4() {
  return (
    <div className=" h-screen w-full flex items-center justify-center flex-col">
      {/* Quote */}
      <div className=" ">
        <div className="text-lg font-semibold">
          <span className="text-yellow-500">"</span>
          <p>Meditation is the key to a peaceful mind.</p>
          <span className="text-yellow-500">"</span>
        </div>
      </div>

      <button className="px-4 py-2 text-black font-semibold rounded-lg text-sm bg-[#f7ba6b]">
        Learn More About us
      </button>
      {/* Background Image */}
      <img src={girlLaydown} alt="Girl laying down" className="mt-4" />
    </div>
  );
}
