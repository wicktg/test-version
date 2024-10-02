import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Tickets from "./components/Tickets";
import Cube from "./components/Cube"; // Import the Cube component

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Track if mining has started
  const [tickets] = useState(Math.floor(Math.random() * 100) + 1);
  const [balance, setBalance] = useState(100); // Default points balance is 100
  const [minedAmount, setMinedAmount] = useState(0); // Points mined
  const canBeMined = 41; // Maximum points that can be mined
  const [isClaimable, setIsClaimable] = useState(false); // Flag to activate the claim button
  const [miningActive, setMiningActive] = useState(false); // Track if mining is running

  // Progress to control the cube's brightness (0 = fully dim, 1 = fully bright)
  const [progress, setProgress] = useState(1); // Initially cube is fully bright

  // Handle button click to start mining
  const handleStart = () => {
    setHasStarted(true); // Mark mining as started
    setIsClicked(true); // Trigger button click animation
    setMinedAmount(0); // Reset mined amount at the start
    setProgress(0); // Dim the cube to start the mining process
    setIsClaimable(false); // Ensure claim button is disabled initially
    setMiningActive(true); // Start the mining process
    setTimeout(() => {
      setIsClicked(false); // Reset click state after animation
    }, 300);
  };

  // Handle click for the Play Game button
  const handleClick = () => {
    console.log("Play Game button clicked!");
    setIsClicked(true); // Simulate click effect
    setTimeout(() => {
      setIsClicked(false); // Reset click effect
    }, 300);
  };

  // Mining logic
  useEffect(() => {
    if (hasStarted && minedAmount < canBeMined) {
      setMiningActive(true); // Start mining, activate cube dimming
      const interval = setInterval(() => {
        setMinedAmount((prev) => Math.min(prev + 0.1, canBeMined)); // Increment mined amount by 0.1 per second
        setProgress((prev) => Math.min(prev + 0.0025, 1)); // Gradually brighten the cube as points are mined
      }, 1000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    } else if (minedAmount >= canBeMined) {
      setMiningActive(false); // Mining is done, cube is fully bright
      setIsClaimable(true); // Enable claim button when mining is complete
    }
  }, [hasStarted, minedAmount]);

  // Reset progress and claim the mined points
  const handleClaim = () => {
    if (isClaimable) {
      setBalance((prevBalance) => prevBalance + minedAmount); // Add mined amount to balance
      setMinedAmount(0); // Reset mined amount
      setProgress(1); // Reset cube brightness to fully bright
      setIsClaimable(false); // Disable claim button
      setHasStarted(false); // Reset back to start state for next mining cycle
    }
  };

  return (
    <>
      <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none animate-scrolling-background"></div>

        {/* TopNavbar Container */}
        <div className="relative z-10">
          <div className="px-5 py-3">
            <TopNavbar />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center justify-center flex-grow space-y-4">
            {/* Balance centered above the cube */}
            <div
              className="balance-container text-white flex flex-col items-center absolute"
              style={{
                top: "10%",
                left: "50%",
                transform: "translate(-50%, 50%)",
              }}
            >
              <span className="text-3xl font-semibold font-pixel sm:text-4xl md:text-5xl">
                {balance.toFixed(2)}
              </span>
            </div>

            {/* Cube Container */}
            <div
              className="cube-container flex justify-center items-center absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -115%)",
              }}
            >
              {/* Pass the progress state to the Cube component */}
              <Cube miningActive={miningActive} progress={progress} />
            </div>

            {/* Start/Claim Button */}
            <div
              className="claim-button-container flex justify-center items-center absolute"
              style={{
                bottom: "20%",
                left: "50%",
                transform: "translate(-50%, -110%)",
              }}
            >
              {/* Wrapping button in a fixed-height container */}
              <div className="flex justify-center items-center h-24">
                <button
                  type="button"
                  onClick={hasStarted ? handleClaim : handleStart} // Start mining or claim mined points
                  className={`${
                    hasStarted
                      ? isClaimable
                        ? "bg-white text-black"
                        : "bg-slate-800 text-white opacity-30"
                      : "bg-white text-black"
                  } focus:outline-none font-medium rounded-full text-sm sm:text-lg px-6 py-3 flex flex-col items-center space-y-2 transition-opacity duration-150`}
                  disabled={hasStarted && !isClaimable} // Disable CLAIM button until mining completes
                >
                  <span className="font-pixel text-lg sm:text-xl">
                    {hasStarted ? "CLAIM" : "START"}{" "}
                    {/* Change label from Start to Claim */}
                  </span>
                  {hasStarted && (
                    <span className="font-pixel text-xs sm:text-sm">
                      {minedAmount.toFixed(2)} / {canBeMined}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Play Button and Tickets */}
          <div className="flex justify-center mb-24 px-4">
            <div className="bg-slate-800 rounded-lg p-6 shadow-lg w-full max-w-md">
              <div className="flex flex-col items-center space-y-2">
                <button
                  type="button"
                  onClick={handleClick}
                  className={`text-white bg-slate-700 focus:outline-none font-medium rounded-full text-sm sm:text-lg px-6 py-3 flex items-center space-x-2 transition-opacity duration-150 ${
                    isClicked ? "opacity-50" : "opacity-100"
                  }`}
                >
                  <PlayArrowIcon />
                  <span className="font-pixel">PLAY GAME</span>
                </button>

                <Tickets tickets={tickets} />
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="w-full">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
