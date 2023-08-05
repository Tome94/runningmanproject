import React, { useRef, useState, useEffect } from 'react';
import { startDrawing, draw, stopDrawing, clearCanvas } from './canvasUtils';
import { Link } from 'react-router-dom';
import { startMatch } from '../game/features/turns/turn';
import { useDispatch } from 'react-redux';

const CanvasComponent = ({ startTimer, intervalRef }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  const handleMouseDown = (e) => {
    startDrawing(isDrawing, setIsDrawing, setLastX, setLastY, e);
    startTimer(); // Start the timer on mousedown
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

  const toggleClearCanvas = () => {
    clearCanvas(canvasRef);
  };

  const saveCanvasDrawing = () => {
    // Your code to capture and save the canvas drawing goes here
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const imageData = canvas.toDataURL(); // Get the base64 encoded image data
    // Now, you can do whatever you want with the captured drawing data, e.g., send it to a server, save it in state, etc.
    console.log('Drawing saved:', imageData);
  };

  const dispatch = useDispatch();
  const startGameHandler = () => {
    // Add action dispatch below
    dispatch(startMatch());
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current); // Clear the interval on unmount
    };
  }, [intervalRef]); // Empty dependency array ensures the effect runs only once (on component mount)

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
        <button onClick={toggleEraserMode} className='draw-erase'>
          {isEraserMode ? 'Draw' : 'Erase'}
        </button>
        <button onClick={toggleClearCanvas} className='Clear-canvas'>
          Clear Drawing
        </button>
        <button onClick={saveCanvasDrawing}>Save Drawing</button>
      </div>

      <footer>
        <Link to='/game' className='button-link' onClick={startGameHandler}>
          <h2>Next</h2>
        </Link>
      </footer>
    </div>
  );
};

export default CanvasComponent;
