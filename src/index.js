const sharp = require("sharp");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const path = require("path");
const fs = require("fs");

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 -s [source] -f [format] -q [quality] --overwrite")
  .option("s", {
    alias: "source",
    describe: "Source image path",
    type: "string",
    demandOption: true,
  })
  .option("f", {
    alias: "format",
    describe: "Output format (e.g., png, jpeg, webp)",
    type: "string",
    default: "png",
  })
  .option("q", {
    alias: "quality",
    describe: "Quality for the output image (1-100)",
    type: "number",
    default: 90,
  })
  .option("overwrite", {
    describe: "Overwrite the file if it already exists",
    type: "boolean",
    default: false,
  })
  .option("scale", {
    describe:
      "Scale the image (percentage). Value should be between -300 to 300.",
    type: "number",
    default: 100,
    check: (value) => value >= -300 && value <= 300,
  })
  .option("blur", {
    describe: "Apply blur effect (0 to 100).",
    type: "number",
    default: 0,
    check: (value) => value >= 0 && value <= 100,
  })
  .option("sharpen", {
    describe: "Sharpen the image (0 to 100).",
    type: "number",
    default: 0,
    check: (value) => value >= 0 && value <= 100,
  })
  .option("greyscale", {
    describe: "Convert the image to greyscale.",
    type: "boolean",
    default: false,
  })
  .option("invert", {
    describe: "Invert the RGB values of the image.",
    type: "boolean",
    default: false,
  })
  .option("brightness", {
    describe: "Adjust brightness (0 to 100).",
    type: "number",
    default: 100,
    check: (value) => value >= 0 && value <= 100,
  })
  .option("contrast", {
    describe: "Adjust contrast (-100 to 100).",
    type: "number",
    default: 0,
    check: (value) => value >= -100 && value <= 100,
  })
  .option("saturation", {
    describe: "Adjust saturation (-100 to 100).",
    type: "number",
    default: 0,
    check: (value) => value >= -100 && value <= 100,
  })
  .option("flip", {
    describe: "Flip the image vertically",
    type: "boolean",
    default: false,
  })
  .option("flop", {
    describe: "Flop the image horizontally",
    type: "boolean",
    default: false,
  })
  .help("h")
  .alias("h", "help").argv;

const generateOutputName = (input, format) => {
  const dir = path.dirname(input);
  const baseName = path.basename(input, path.extname(input));
  let outputName = `${baseName}.${format}`;
  let counter = 1;

  while (!argv.overwrite && fs.existsSync(path.join(dir, outputName))) {
    outputName = `${baseName}(${counter}).${format}`;
    counter++;
  }

  return path.join(dir, outputName);
};

const destinationPath = generateOutputName(argv.source, argv.format);

let image = sharp(argv.source);

// Using the .metadata() method to get image dimensions before resizing
image.metadata().then((info) => {
  // Scaling
  if (argv.scale !== 100) {
    const scaleFactor = argv.scale / 100.0;
    image = image.resize({
      width: Math.round(scaleFactor * info.width),
      height: Math.round(scaleFactor * info.height),
    });
  }

  // Blur
  if (argv.blur > 0) {
    image = image.blur(argv.blur / 100.0);
  }

  // Sharpening
  if (argv.sharpen > 0) {
    image = image.sharpen(argv.sharpen / 100.0);
  }

  // Greyscale
  if (argv.greyscale) {
    image = image.greyscale();
  }

  // Invert
  if (argv.invert) {
    image = image.negate();
  }

  // Flip
  if (argv.flip) {
    image = image.flip();
  }

  // Flop
  if (argv.flop) {
    image = image.flop();
  }

  // Brightness (Sharp doesn't have a direct brightness function, but we can emulate it with gamma)
  if (argv.brightness !== 100) {
    const gammaValue = 1 + (argv.brightness - 100) / 200;
    image = image.gamma(gammaValue);
  }

  // Contrast, Saturation
  image = image.modulate({
    brightness: 1, // not modified here, we're using gamma for brightness
    saturation: 1 + argv.saturation / 100.0,
    hue: 1, // not modified
  });

  if (argv.contrast !== 0) {
    const contrastFactor = (argv.contrast + 100) / 100.0;
    image = image.linear([contrastFactor, 128 * (1 - contrastFactor)]);
  }

  // Save the transformed image
  image
    .toFormat(argv.format, { quality: argv.quality })
    .toFile(destinationPath, (err, info) => {
      if (err) {
        console.error("Error saving the image:", err);
      } else {
        console.log(`Image saved to ${destinationPath}`);
      }
    });
});
