import React from "react";
import cube from "../assets/cube.png"; // Path to the cube image

export default function Cube({ miningActive, progress }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={cube}
        alt="Cube"
        className={`w-44 h-44 object-cover transition-all duration-500 ${
          miningActive ? "animate-slow-rotate" : ""
        }`}
        style={{
          filter: `brightness(${0.25 + progress * 0.75})`, // Start dim at 25% and brighten to 100% with progress
        }}
      />
    </div>
  );
}
