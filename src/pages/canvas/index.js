import React, { useState, useRef } from "react";
import CanvasComponent from "./canvas";
import DisplayWordsComponent from "./drawPrompt";

const Draw = () => {
  const intervalRef = useRef(null);
  const [remainingTime, setRemainingTime] = useState(10);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime === 1 ? 10 : prevTime - 1;
      });
      
    }, 1000);
    
  };

  return (
    <div className="Game">
      <DisplayWordsComponent remainingTime={remainingTime} />
      <CanvasComponent startTimer={startTimer} intervalRef={intervalRef} remainingTime={remainingTime}/>
    </div>
  );
};

export default Draw;
