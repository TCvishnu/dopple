import React, { useState, useEffect } from "react";
import phn1 from "./images/phn1.png";
import phn2 from "./images/phn2.png";
import phn3 from "./images/phn3.png";

export default function Body2() {
  const images = [phn1, phn2, phn3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="flex h-92 w-full bg-slate-100 px-2">
      <div className="w-1/2 flex flex-col justify-start items-start pl-10">
        <h2 className="text-xl font-bold mb-6">Start your mental health</h2>
        <ul className="space-y-4 text-xs">
          <li>Daily Meditations</li>
          <li>Sleep Tracking and Analysis</li>
          <li>Step Counter & Activity Tracking</li>
          <li>Calorie and Nutrient Tracker</li>
          <li>Blood Oxygen Level Monitoring</li>
          <li>Guided Meditation & Relaxation</li>
          <li>Hydration Reminder</li>
        </ul>
      </div>
      <div className="w-1/2 flex justify-start items-start">
        <img
          src={images[currentImageIndex]}
          alt="Phone"
          className="w-80 rounded-3xl h-92"
        />
      </div>
    </div>
  );
}
