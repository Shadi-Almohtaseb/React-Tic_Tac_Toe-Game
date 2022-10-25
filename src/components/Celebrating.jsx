import React from "react";
import Confetti from "react-confetti";

const Celebrating = ({ winner }) => {
  return (
    <div>
      <Confetti colors={[winner.current === "X" ? "red" : "blue", "white"]} />
    </div>
  );
};

export default Celebrating;
