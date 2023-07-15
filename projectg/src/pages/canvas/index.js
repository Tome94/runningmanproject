import React, { useRef, useState } from 'react';
import { startDrawing, draw, stopDrawing, clearCanvas} from './canvasUtils';
import { Link } from 'react-router-dom';
import { startMatch } from '../game/features/turns/turn';
import { useDispatch } from 'react-redux';
const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  const handleMouseDown = (e) => {
    startDrawing(isDrawing, setIsDrawing, setLastX, setLastY, e);
  };

  const handleMouseMove = (e) => {
    draw(isDrawing, isEraserMode, lastX, lastY, setLastX, setLastY, e, canvasRef.current);
  };

  const handleMouseUp = () => {
    stopDrawing(setIsDrawing);
  };

  const handleMouseOut = () => {
    stopDrawing(setIsDrawing);
  };

  const toggleEraserMode = () => {
    setIsEraserMode(!isEraserMode);
  };
  const toggleClearCanvas =()=>{
    clearCanvas(canvasRef)
  }
  const dispatch = useDispatch();
  const startGameHandler = () => {
    // Add action dispatch below
    dispatch(startMatch())
  };

  return (
    <div className='canvas'>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
      />
      <div>
        <button onClick={toggleEraserMode} className="draw-erase">
          {isEraserMode ? "Draw" : 'Erase'}
        </button>
        <button onClick={toggleClearCanvas} className="Clear-canvas">
          Clear Drawing
        </button>
      </div>
      <footer>
        <Link to="/game" className='button-link' onClick={startGameHandler}>
          <h2>Next</h2>
        </Link>
      </footer>
    </div>
  );
};

export default CanvasComponent;
