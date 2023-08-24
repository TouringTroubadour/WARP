# WARP

## WebP Advanced Reformatting Processor

Tired of downloading images only for them to be stored in WebP format?
Well, whine no more! Use WARP to convert those pesky WebP images into other formats!

### WARP Usage Options:

#### Basic

--version:
    Show the version number.

-h, --help:
    Show available options and usage guide.

#### Image Processing

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

#### Advanced Image Manipulation

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

### Dependencies

This tool relies on several Node.js libraries to function. Here's a brief overview of each dependency and its role in WARP:

1. **Sharp** (<https://sharp.pixelplumbing.com/>):
   - **Role**: Responsible for the image processing tasks such as resizing, blurring, converting formats, and applying various other transformations.
   - **Reason for Choosing**: Sharp is a high-performance image processing library. It's versatile, fast, and supports a wide array of image manipulations making it suitable for this tool.

2. **Yargs** (<https://yargs.js.org/>):
   - **Role**: Helps in parsing command-line arguments and generating elegant user interfaces.
   - **Reason for Choosing**: Yargs is a comprehensive tool for building CLI applications. It provides helpful utilities for defining commands, options, and generating help messages. It's particularly beneficial for ensuring a smooth user experience.

### Installation from Repository

If you're cloning the repository to use or develop WARP, you'll first need to install its dependencies:

```bash
npm install sharp yargs
```

This command fetches the necessary libraries, allowing you to utilize the full functionality of the tool directly from the source code.

---

### Using the Standalone Release

For users who want a plug-and-play solution without the need to manage dependencies, we provide a standalone executable:

1. Navigate to the `./bin` directory.
2. Download and save the appropriate executable for your operating system.
3. Use it directly from the console by navigating to its location and invoking it.

#### Adding the Executable to Your PATH

By adding the standalone executable to your system's PATH, you can invoke the tool from any location in the console:

- **Windows**:
    1. Right-click on `This PC` or `Computer` on the desktop or in File Explorer.
    2. Click `Properties`.
    3. Choose `Advanced system settings` on the left.
    4. Select `Environment Variables`.
    5. In the System Variables section, find and select the `Path` variable. Click `Edit`.
    6. In the Edit window, click `New` and paste the full path to the directory where you saved the executable.

- **macOS and Linux**:
    1. Open a terminal.
    2. Edit your shell's profile script (e.g., `~/.bashrc`, `~/.zshrc`, etc.) with a text editor of your choice, like `nano` or `vim`.
    3. Add the following line to the end of the file, replacing `/path/to/directory` with the full path to the directory where you saved the executable:

    ```bash
    export PATH="$PATH:/path/to/directory"
    ```

    4. Save the file and close the editor.
    5. Reload your profile script (e.g., `source ~/.bashrc` or `source ~/.zshrc`).

After adding the executable to your PATH, you can invoke WARP from any location in your terminal or console.


### The Boring Stuff (License)

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
