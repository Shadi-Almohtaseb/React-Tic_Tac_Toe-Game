import React, { useEffect, useRef, useState } from "react";
import Celebrating from "./components/Celebrating";
import Header from "./components/Header";
import Main from "./components/Main";
import WinnerDisplay from "./components/WinnerDisplay";

function App() {
  const arr = ["", "", "", "", "", "", "", "", ""];
  const [state, setState] = useState(true);
  const [xCounter, setXCounter] = useState(0);
  const [oCounter, setOCounter] = useState(0);
  const [clear, setClear] = useState(false);
  const [displayWinnerFlag, setDisplayWinnerFlag] = useState(false);
  const [celebratingFlag, setCelebratingFlag] = useState(false);

  const innerValue = useRef(arr);
  const winner = useRef("");
  const lengthOfArray = useRef(0);

  let arrOfWinners = [];

  //To Inner X and O
  const HandelChange = (index) => {
    if (state) {
      if (
        innerValue.current[index] !== "O" &&
        innerValue.current[index] === ""
      ) {
        innerValue.current[index] = "X";
        setState(!state);
        lengthOfArray.current++;
      }
    } else if (
      innerValue.current[index] !== "X" &&
      innerValue.current[index] === ""
    ) {
      innerValue.current[index] = "O";
      setState(!state);
      lengthOfArray.current++;
    }
  };

  // To Repeat The Game and clear The Inputs
  useEffect(() => {
    if (clear) {
      for (let i = 0; i < 9; i++) {
        innerValue.current[i] = "";
      }
      winner.current = "";
      lengthOfArray.current = 0;
      setClear(false);
      setCelebratingFlag(false);
    }
  }, [clear]);

  // To Increase The Counters Of Winning for X and O
  useEffect(() => {
    if (winner.current === "X") {
      setXCounter((prev) => prev + 1);
    } else if (winner.current === "O") {
      setOCounter((prev) => prev + 1);
    }
    if (winner.current !== "") {
      setDisplayWinnerFlag(true);
      setCelebratingFlag(true);
    }
  }, [state]);

  // To Return The Array of Three Winning Items
  const condition = (n1, n2, n3) => {
    if (
      innerValue.current[n1] === innerValue.current[n2] &&
      innerValue.current[n2] === innerValue.current[n3] &&
      innerValue.current[n1] !== ""
    ) {
      winner.current = innerValue.current[n1];
      arrOfWinners = [n1, n2, n3];
    }
  };

  //To check Who are the three winning items and if it's Draw
  const HandelCheck = () => {
    if (lengthOfArray.current === 9) {
      winner.current = "Draw";
    }
    condition(0, 3, 6);
    condition(1, 4, 7);
    condition(2, 5, 8);
    condition(0, 1, 2);
    condition(3, 4, 5);
    condition(6, 7, 8);
    condition(0, 4, 8);
    condition(2, 4, 6);
  };
  HandelCheck();

  return (
    <>
      {celebratingFlag && winner.current !== "Draw" && (
        <Celebrating winner={winner} />
      )}

      {displayWinnerFlag && (
        <WinnerDisplay
          winner={winner}
          setDisplayWinnerFlag={setDisplayWinnerFlag}
          celebratingFlag={celebratingFlag}
        />
      )}

      <div className=" h-screen bg-gradient-to-r from-sky-500 to-indigo-700">
        <div className="flex items-center justify-center flex-col">
          <Header
            state={state}
            xCounter={xCounter}
            oCounter={oCounter}
            setClear={setClear}
          />
          <Main
            winner={winner}
            innerValue={innerValue}
            arrOfWinners={arrOfWinners}
            HandelChange={HandelChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
