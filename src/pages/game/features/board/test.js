import { useSelector } from 'react-redux';

// ... other imports

const Test = () => {
  const canvasDrawings = useSelector(state => state.canvasDrawings);
console.log(canvasDrawings)
  // Now you can use the canvasDrawings array in your component
  // For example, you can map over it to display the saved drawings
  const drawingsList = canvasDrawings.map((imageData, index) => (
    <img key={index} src={imageData} alt={`Drawing ${index}`} />
  ));

  return (
    <div>
      {drawingsList}
    </div>
  );
};
export default Test