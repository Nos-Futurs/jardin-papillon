module.exports = (ctx) => ({
  plugins: [
    // Add vendor prefixes | https://github.com/postcss/autoprefixer
    require("autoprefixer")(),
    require("cssnano")({
      preset: "default",
    }),
  ],
});
