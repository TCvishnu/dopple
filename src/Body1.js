import React from "react";
import GirlImg from "./images/girlpp.png";
import NavBar from "./NavBar";

export default function () {
  return (
    <div className="w-full h-60 flex flex-col items-center relative">
      <NavBar />
      <img src={GirlImg} className="w-full h-60" />
    </div>
  );
}
