# WARP

## WebP Advanced Reformatting Processor

Tired of downloading images only for them to be stored in WebP format?
Well, whine no more! Use WARP to convert those pesky WebP images into other formats!

---

## WARP Usage Options

### Basic

--version:
Show the version number.

-h, --help:
Show available options and usage guide.

### Image Processing

-s, --source [path_to_image]:
Set the source image path (Required).

-f, --format [format]:
Define the output format (e.g., png, jpeg, webp).
Default: png.

-q, --quality [value]:
Determine the quality for the output image (1-100).
Default: 90.

--overwrite:
Decide whether to overwrite the file if it already exists.
Default: false.

### Advanced Image Manipulation

--scale [percentage]:
Rescale the image. Acceptable values range from -300 to 300%.
Default: 100.

--blur [value]:
Add blur effect (0 to 100%).
Default: 0.

--sharpen [value]:
Sharpen the image (0 to 100%).
Default: 0.

--greyscale:
Convert the image to greyscale.
Default: false.

--invert:
Invert the RGB values of the image.
Default: false.

--brightness [value]:
Adjust the image brightness (0 to 100%).
Default: 100.

--contrast [value]:
Modify image contrast, ranging from -100 to 100.
Default: 0.

--saturation [value]:
Alter the saturation level between -100 and 100.
Default: 0.

--flip:
Vertically flip the image.
Default: false.

--flop:
Horizontally flip (or mirror) the image.
Default: false.

---

## Dependencies

This tool relies on several Node.js libraries to function. Here's a brief overview of each dependency and its role in WARP:

1. **Sharp** (<https://sharp.pixelplumbing.com/>):

   - **Role**: Responsible for the image processing tasks such as resizing, blurring, converting formats, and applying various other transformations.
   - **Reason for Choosing**: Sharp is a high-performance image processing library. It's versatile, fast, and supports a wide array of image manipulations making it suitable for this tool.

2. **Yargs** (<https://yargs.js.org/>):
   - **Role**: Helps in parsing command-line arguments and generating elegant user interfaces.
   - **Reason for Choosing**: Yargs is a comprehensive tool for building CLI applications. It provides helpful utilities for defining commands, options, and generating help messages. It's particularly beneficial for ensuring a smooth user experience.

---

## Installation

### Prerequisites

Before you begin, make sure you have the following:

1. **Git**: Install Git on your system. You can download it from [https://git-scm.com/](https://git-scm.com/).
2. **Node.js and npm**: Install Node.js and npm (Node Package Manager) from [https://nodejs.org/](https://nodejs.org/).

### Step 1: Clone the GitHub Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository using the `cd` command.
3. Clone the GitHub repository using the following command:

   ```bash
   git clone https://github.com/TouringTroubadour/WARP.git
   ```

### Step 2: Install Dependencies from package.json

1. With the terminal open in the repository's directory, run the following command to install the required dependencies:
  
  ```bash
  npm install
  ```
  
  This command reads the package.json file and installs all the specified dependencies.

### Step 3: Run the JavaScript File

1. Navigate to the directory containing the JavaScript file you want to run.
2. Run the JavaScript file using Node.js For example:

  ```bash
  node warp.js
  ```

  Congratulations! You've successfully cloned a GitHub repository, installed dependencies, and run a JavaScript file.

---

## The Boring Stuff (License)

MIT License

Copyright (c) [2023]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
