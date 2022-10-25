import React from "react";
import Button from "./Button";

const Main = ({ innerValue, setClear, HandelChange, winner, arrOfWinners }) => {
  const arrayOfButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <div className="mt-3 bg-slate-200 h-[28rem] w-[28rem] p-8 pm-16 flex items-center justify-center flex-wrap gap-5 rounded-xl ">
        {arrayOfButtons.map((items) => (
          <Button
            key={items}
            int={items}
            arrOfWinners={arrOfWinners}
            winner={winner}
            HandelChange={HandelChange}
            innerValue={innerValue}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
