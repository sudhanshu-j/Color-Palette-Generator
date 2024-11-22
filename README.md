# Color Palette Generator

This is a simple **Color Palette Generator** that allows users to view a random selection of color boxes, each displaying a unique color and its corresponding hex code. Users can copy the hex code of any color by clicking on the respective color box. Additionally, there's a refresh button to regenerate the palette with a new set of random colors.


## Table of Contents

- [Features](#features)

- [Demo](#demo)

- [Technologies Used](#technologies-used)

- [Project Structure](#project-structure)

- [Installation](#installation)

- [Usage](#usage)

- [Code Analysis](#code-analysis)

- [Contributing](#contributing)

## Features

## Features

- **Random Color Generation**: Generates a set of 30 random color boxes with unique hex codes.

- **Copy Color Hex Code**: Click any color box to copy its hex code to the clipboard.

- **Refresh Palette**: Regenerate the color palette with new random colors by clicking the "Refresh" button.

- **Responsive Design**: The page adjusts gracefully for different screen sizes, with optimized layout for mobile devices.


## Demo

You can view a live demo of this project by visiting the [live demo link](#).


## Technologies Used

- **HTML**: Structuring the layout and content of the webpage

- **CSS**: Styling the layout with custom font, colors, and effects

- **JavaScript**: Handling color generation, copy-to-clipboard functionality, and interactions

## Project Structure
```bash
color-palette-generator/
├── index.html         # The main HTML file
├── style.css          # The CSS file for styling the page
├── script.js          # The JavaScript file for generating the palette and handling interactions
```

## Installation

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/color-palette-generator.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd color-palette-generator
   ```

3. **Open the `index.html` file in your browser:**

    ` Simply double-click on the index.html file to open the project in your browser.

## Usage

- Open the app to view the generated color palette.

- Click on any color box to copy its hex code to the clipboard.

- Use the "Refresh" button to generate a new palette.

## Code Analysis

### HTML

This is the main HTML file where the color palette is displayed. It contains:

- A container`(<ul>)`that holds all color boxes.

- A button to refresh the palette.

### CSS

The CSS file applies styling to give the app its visual layout and effects:

- **Font**: Google Font (Mukta) is imported for consistent typography.

- **Flexbox Layout**: `.container` uses Flexbox for responsive grid layout of color boxes.

- **Color Boxes**: Styled with padding, shadow, and rounded corners.

- **Hover and Active States**: Hover effects to slightly brighten colors, and active state on color boxes for click feedback.

- **Media Query**: Adjusts layout for screens smaller than 500px, making the app mobile-friendly.

### JavaScript

The JavaScript file provides the app's interactive functionality:

- **Random Color Generation**: Generates random hex color codes using `Math.random()` and applies these as background colors to color boxes.

- **Copy to Clipboard**: Clicking a color box copies the hex color code to the clipboard and briefly shows "Copied" feedback.

- **Palette Refresh**: Clicking the "Refresh" button calls the `generatePalette` function to replace the current colors with a new set.

## How It Works

### 1. Random Color Generation:

- The JavaScript code generates a random hex color by converting a random integer to a hexadecimal string.

- This color is applied as the background color of each color box (`<li>` element) in the palette.

### 2. Copy Color Hex Code:

- When a color box is clicked, the hex code of that color is copied to the clipboard using the Clipboard API (`navigator.clipboard.writeText`).

- The hex code temporarily changes to "Copied" for 1 second to indicate successful copying.

### 3. Refresh Button:

- Clicking the refresh button regenerates the palette by calling the `generatePalette` function again.

- This function clears the container and generates a new set of random colors.

### 4. Responsive Design:

- The layout is responsive, ensuring the color boxes are properly displayed on both desktop and mobile devices.

- For smaller screen sizes, the number of columns in the palette adjusts, and the font size of the text decreases for better readability.

## Demo

Click on any color box to copy its hex code. You can also click the Refresh button to generate a new set of colors.

## Contributing
Contributions are welcome! If you find a bug or have suggestions for improvements, feel free to open an issue or submit a pull request.

1. **Fork the repository.**

2. **Create a new branch:**
```bash
   (git checkout -b feature-branch).
```

3. **Make your changes and commit them:**
   ```bash
    (git commit -am 'Add new feature').
   ```

4.**Push to the branch:** 
```bash
(git push origin feature-branch).
```

5. **Open a pull request.**
