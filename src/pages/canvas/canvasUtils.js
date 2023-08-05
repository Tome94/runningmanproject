export const startDrawing = (isDrawing, setIsDrawing, setLastX, setLastY, e) => {
  setIsDrawing(true);
  setLastX(e.nativeEvent.offsetX);
  setLastY(e.nativeEvent.offsetY);
};

export const draw = (isDrawing, isEraserMode, lastX, lastY, setLastX, setLastY, e, canvas) => {
  if (!isDrawing) return;

  const context = canvas.getContext('2d');
  const currentX = e.nativeEvent.offsetX;
  const currentY = e.nativeEvent.offsetY;

  if (isEraserMode) {
    context.clearRect(currentX - 10, currentY - 10, 20, 20);
  } else {
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(currentX, currentY);
    context.stroke();
    setLastX(currentX);
    setLastY(currentY);
  }
};

export const stopDrawing = (setIsDrawing) => {
  setIsDrawing(false);
};

export const clearCanvas = (canvasRef) => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
};
