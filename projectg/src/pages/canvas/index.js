import React from "react";
import CanvasComponent from "./canvas";
import DisplayWordsComponent from "./drawPrompt";
const Draw = () => {
  return (
    <div className="Game">
      <DisplayWordsComponent />
      <CanvasComponent />
    </div>
  );
};

export default Draw;
