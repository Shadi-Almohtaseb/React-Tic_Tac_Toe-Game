import React from "react";

const Button = ({ int, winner, arrOfWinners, HandelChange, innerValue }) => {
  const standardStyle = `p-8 px-10 rounded-xl text-white w-[7rem] h-[7rem] text-5xl font-bold cursor-pointer hover:opacity-80`;
  const backGroundStyle = `bg-gradient-to-r from-sky-500 to-indigo-700`;
  const winStyle = `bg-green-500`;

  return (
    <button
      className={`${
        arrOfWinners.includes(int) ? `${winStyle}` : `${backGroundStyle}`
      } ${standardStyle}`}
      disabled={
        winner.current === "X" ||
        winner.current === "O" ||
        winner.current === "Draw"
      }
      onClick={() => HandelChange(int)}
    >
      {innerValue.current[int]}
    </button>
  );
};

export default Button;
