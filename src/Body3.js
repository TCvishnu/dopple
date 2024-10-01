import React from "react";
import play from "./images/play.svg"; // Importing the play.svg image
import he from "./images/he.png"; // Importing a sample image
import hee from "./images/hee.png";
import heee from "./images/heeee.png";
import heeee from "./images/hee3.png";

export default function Body3() {
  return (
    <div className="flex flex-col items-center justify-start mt-10">
      {/* Header */}
      <div className="w-full h-20 bg-green-500 flex items-center justify-center">
        <h1 className="text-xl font-bold text-white">
          Listen to New Meditations Every Day
        </h1>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="flex overflow-x-auto space-x-6 mt-5 w-full px-5 hide-scrollbar">
        {/* Card 1 */}
        <div className="bg-white relative p-6 rounded-sm shadow-lg flex-shrink-0 w-48 h-28 flex flex-col items-center justify-center">
          <img src={he} alt="Meditation Thumbnail" className="w-48 h-20" />
          <img src={play} alt="Play icon" className="w-8 h-8 absolute top-8" />
          <p className="text-sm mt-2">Meditate 20mins</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white relative p-6 rounded-sm shadow-lg flex-shrink-0 w-48 h-28 flex flex-col items-center justify-center">
          <img src={hee} alt="Meditation Thumbnail" className="w-48 h-20" />
          <img src={play} alt="Play icon" className="w-8 h-8 absolute top-8" />
          <p className="text-sm mt-2">Relax 15mins</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white relative p-6 rounded-sm shadow-lg flex-shrink-0 w-48 h-28 flex flex-col items-center justify-center">
          <img src={heee} alt="Meditation Thumbnail" className="w-48 h-20" />
          <img src={play} alt="Play icon" className="w-8 h-8 absolute top-8" />
          <p className="text-sm mt-2">Focus 10mins</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white relative p-6 rounded-sm shadow-lg flex-shrink-0 w-48 h-28 flex flex-col items-center justify-center">
          <img src={heeee} alt="Meditation Thumbnail" className="w-48 h-20" />
          <img src={play} alt="Play icon" className="w-8 h-8 absolute top-8" />
          <p className="text-sm mt-2">Breathe 5mins</p>
        </div>
      </div>
    </div>
  );
}
