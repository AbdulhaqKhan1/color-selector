const display = document.getElementById('display');
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const alphaSlider = document.getElementById('alpha');
const copyButton = document.querySelector('.copy');
const colorDisplay = document.querySelector("#colorDisplay")

const updateColor = () => {
  const rgbaColor = getColorCode();
  display.colorDisplay = rgbaColor;
  display.style.backgroundColor = rgbaColor;
}

const getColorCode = () => {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  const a = alphaSlider.value;
  const colorCode = `rgb(${r}, ${g}, ${b}, ${a})`;
  return colorCode;
}

// Function to copy the color code to clipboard
const copyToClipboard = () => {
  const colorCode = getColorCode();
  navigator.clipboard.writeText(colorCode).then(() => {
    alert('Color code copied to clipboard: ' + colorCode);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Add event listener to the copy button
copyButton.addEventListener('click', copyToClipboard);

// Add event listeners to the sliders to update the color display in real-time
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
alphaSlider.addEventListener('input', updateColor);

// Initial color update
updateColor();
