import { Jimp, intToRGBA } from "jimp";

async function analyze() {
  try {
    const image = await Jimp.read("public/PARADISE CREW.png");
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const colorCounts = {};

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const idx = image.getPixelIndex(x, y);
        const r = image.bitmap.data[idx];
        const g = image.bitmap.data[idx + 1];
        const b = image.bitmap.data[idx + 2];
        const a = image.bitmap.data[idx + 3];

        if (a > 50) {
          const hex =
            "#" +
            [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
          // skip mostly white and mostly black
          if (r > 240 && g > 240 && b > 240) continue;
          if (r < 15 && g < 15 && b < 15) continue;

          colorCounts[hex] = (colorCounts[hex] || 0) + 1;
        }
      }
    }

    const sorted = Object.entries(colorCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    console.log("Top colors:", sorted);
  } catch (err) {
    console.error(err);
  }
}
analyze();
