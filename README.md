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

### Installation

To install the dependencies for WARP, use the following command:

```npm install sharp yargs```

This will fetch the necessary libraries and allow you to utilize the full functionality of the tool.
