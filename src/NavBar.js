import React from "react";
import logo from "./images/logo.png";

export default function NavBar() {
  return (
    <nav className="bg-white bg-opacity-50 w-full text-black p-4 absolute">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt=" " className="size-12" />

        <ul className="flex space-x-6 text-xs">
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#shine" className="hover:text-gray-400">
              Shine at work
            </a>
          </li>

          <li>
            <a href="#podcast" className="hover:text-gray-400">
              Podcast
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
