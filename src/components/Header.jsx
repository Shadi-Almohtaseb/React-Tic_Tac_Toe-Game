import React from "react";

const Header = ({ state, oCounter, xCounter, setClear }) => {
  return (
    <div className="mt-20 backdrop-blur-sm bg-white/90 px-16 py-5 rounded-2xl shadow-2xl flex flex-col gap-5">
      <div className="text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold">
        Tic Tac Toe
      </div>
      <span className="text-2xl">
        The role of the{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold">
          {state ? "X" : "O"}
        </span>{" "}
        player
      </span>
      <div className="flex items-center justify-between text-3xl">
        <span className="bg-clip-text text-transparent bg-gradient-to-l from-pink-600 to-red-500 font-bold">
          X: {xCounter}
        </span>
        <button onClick={() => setClear(true)}>🔁</button>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-bold">
          O: {oCounter}
        </span>
      </div>
    </div>
  );
};

export default Header;
