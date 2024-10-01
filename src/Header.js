import React from "react";

export default function Header() {
  return (
    <div className="h-28 w-full bg-[#f8eed7] flex flex-col gap-2 items-center justify-center ">
      <h1 className=" text-black">The Shine App is a part</h1>
      <button className="px-4 py-2 text-black font-semibold rounded-lg bg-[#f7ba6b]">
        Learn More
      </button>
    </div>
  );
}
