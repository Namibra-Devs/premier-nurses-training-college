const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");

(async () => {
  const files = await imagemin(["src/images/*.{jpg,jpeg,png,svg}"], {
    destination: "dist/images",
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
      imageminSvgo(),
    ],
  });

  console.log("Images optimized:", files);
})();
