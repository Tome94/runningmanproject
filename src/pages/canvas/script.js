document.addEventListener('DOMContentLoaded', function () {
  console.log("Script is running.");

  
  // Get references to the canvas and save button
  const canvas = document.getElementById('myCanvas');
  const saveButton = document.getElementById('saveButton');

  // Get the canvas context
  const ctx = canvas.getContext('2d');

  // Array containing the URLs of the 12 images (replace with your image URLs)
  const imageUrls = [
      '../blankCanvas/blank0.jpg',
      '../blankCanvas/blank1.jpg',
      '../blankCanvas/blank2.jpg',
      '../blankCanvas/blank3.jpg',
      '../blankCanvas/blank4.jpg',
      '../blankCanvas/blank5.jpg',
      '../blankCanvas/blank6.jpg',
      '../blankCanvas/blank7.jpg',
      '../blankCanvas/blank8.jpg',
      '../blankCanvas/blank9.jpg',
      '../blankCanvas/blank10.jpg',
      '../blankCanvas/blank11.jpg',
      // Add the rest of the image URLs here
  ];

  // Function to draw and save the canvas image
  function drawAndSaveImage(imageUrl) {
      const image = new Image();
      image.src = imageUrl;
      image.onload = function () {
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          saveCanvasImage();
      };
  }

  // Function to save the canvas image
  function saveCanvasImage() {
      // Get the data URL of the canvas image (default is PNG format)
      const dataURL = canvas.toDataURL();

      // You can now save the dataURL on the server or locally
      // For server-side saving, you can send the dataURL as a base64-encoded image to the server.
      // For local saving, you can create a link to download the image.

      // Example of saving locally (create a link and click it to download)
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'canvas_image.png'; // You can specify a different filename and extension if needed.
      link.click();
  }

  // Loop through the array and draw each image
  let currentIndex = 0;
  function drawNextImage() {
      if (currentIndex < imageUrls.length) {
          drawAndSaveImage(imageUrls[currentIndex]);
          currentIndex++;
          setTimeout(drawNextImage, 15000); // 15000 milliseconds = 15 seconds
      }
  }

  // Start the process when the page loads
  drawNextImage();

  // Handle the click event on the Save button
  saveButton.addEventListener('click', function () {
      saveCanvasImage();
  });
});
