import { useSelector } from 'react-redux';

// ... other imports

const Test = () => {
  const canvasDrawings = useSelector(state => state.canvasDrawings);

  // Now you can use the canvasDrawings array in your component
  // For example, you can map over it to display the saved drawings
  const drawingsList = canvasDrawings.map((drawingData, index) => (
    <img key={index} src={drawingData} alt={`Drawing ${index}`} />
  ));

  return (
    <div>
      {drawingsList}
    </div>
  );
};
export default Test