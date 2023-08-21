import React, { useRef, useState, useEffect } from 'react';
import { startDrawing, draw, stopDrawing, clearCanvas } from './canvasUtils';
import { Link } from 'react-router-dom';
import { startMatch } from '../game/features/turns/turn';
import { useDispatch, useSelector } from 'react-redux';
import { addCanvasDrawing } from './canvasDrawingSlice';
import { setImage } from '../game/features/board/boardSlice';

const CanvasComponent = ({ startTimer, intervalRef, remainingTime }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEraserMode, setIsEraserMode] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const canvasDrawings = useSelector(state => state.canvasDrawings);
  const handleMouseDown = (e) => {
    if (!isDrawing) {
      startDrawing(isDrawing, setIsDrawing, setLastX, setLastY, e);
      
      if (!isTimerStarted) {
        startTimer(); // Start the timer on the first mousedown
        setIsTimerStarted(true); // Set the timer started flag to true
      }
    }
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
    
    dispatch(addCanvasDrawing(imageData));
  };

  const dispatch = useDispatch();
  
  const startGameHandler = () => {
    // Add action dispatch below
    dispatch(startMatch());
    dispatch(setImage(canvasDrawings))
  };

  useEffect(() => {
    const currentIntervalRef = intervalRef.current; // Capture the current value
    return () => {
      clearInterval(currentIntervalRef); // Clear the interval on unmount
    };
  }, [intervalRef]); // Make sure to include intervalRef in the dependency array
  
  const saveAndClearCanvas = () => {
    saveCanvasDrawing(); // Save the canvas drawing
    toggleClearCanvas(); // Clear the canvas
  };

  // This useEffect runs whenever the timer reaches 1
  useEffect(() => {
    if (remainingTime === 1) {
      saveAndClearCanvas();
    }
  }, [remainingTime]);


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

      <div className='playButton'>
        <Link to='/game' className='button-link' onClick={startGameHandler}>
          <h2>Next</h2>
        </Link>
      </div>
    </div>
  );
};

export default CanvasComponent;
