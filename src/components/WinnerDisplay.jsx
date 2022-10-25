import React from "react";
import Celebrating from "./Celebrating";

const WinnerDisplay = ({ winner, setDisplayWinnerFlag, celebratingFlag }) => {
  return (
    <div className="absolute h-full w-full grid place-items-center bg-slate-800 bg-opacity-70 z-10">
      <div className="w-[35rem] h-80 bg-white rounded-xl p-5 flex flex-col">
        {celebratingFlag && winner.current !== "Draw" && (
          <Celebrating winner={winner} />
        )}
        {winner.current === "Draw" ? (
          <div className="flex items-center justify-center flex-col">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-6xl">
              {winner.current}
            </span>
            <span className="mt-8 text-4xl mb-5">Try Again 🙃</span>
            <span className="text-xl">
              I know it could be a tedious process, but it's worth a try
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <span className="text-4xl font-semibold text-center flex flex-col gap-4">
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${
                  winner.current === "X"
                    ? "from-pink-600 to-red-500"
                    : "from-blue-500 to-violet-500"
                } font-bold text-6xl`}
              >
                {winner.current}
              </span>
              is The Winner
            </span>
            <span className="text-2xl font-semibold text-center mt-8">
              keep it up 👍🔝
            </span>
          </div>
        )}
        <button
          onClick={() => setDisplayWinnerFlag(false)}
          className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-400 duration-200 text-white text-2xl mt-10"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WinnerDisplay;
