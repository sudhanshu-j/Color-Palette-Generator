const container = document.querySelector(".container"); // Selects the container element where color boxes will be added
const refreshBtn = document.querySelector(".refresh-btn"); // Selects the refresh button

const maxPaletteBoxes = 30; // Sets the maximum number of color boxes to generate

const generatePalette = () => {
  container.innerHTML = ""; // Clears the container content to start fresh

  for (let i = 0; i < maxPaletteBoxes; i++) {
    // Loops to create 30 color boxes
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16); // Generates a random hex color code
    randomHex = `#${randomHex.padStart(6, "0")}`; // Pads hex code with leading zeros if needed

    const color = document.createElement("li"); // Creates a new list item element for each color
    color.classList.add("color"); // Adds the class 'color' for styling
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>`; // Sets color box background and hex value text

    color.addEventListener("click", () => copyColor(color, randomHex)); // Adds click event to copy the color hex code
    container.appendChild(color); // Appends the color element to the container
  }
};

generatePalette(); // Calls the function to initially generate the color palette

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value"); // Selects the hex value element inside the clicked color box

  /* Copying the hex value, updating the text to 'Copied', and then reverting back to hex value after 1 second */
  navigator.clipboard
    .writeText(hexVal) // Writes the hex value to the clipboard
    .then(() => {
      colorElement.innerText = "Copied"; // Updates text to "Copied" on successful copy
      setTimeout(() => (colorElement.innerText = hexVal), 1000); // Resets text back to hex value after 1 second
    })
    .catch(() => alert("Failed to copy the color code!")); // Shows alert if copy fails
};

refreshBtn.addEventListener("click", generatePalette); // Adds click event to refresh button to regenerate the palette
