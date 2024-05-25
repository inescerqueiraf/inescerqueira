module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "assets/font": "font",
  });

  // Watch targets
  eleventyConfig.addWatchTarget("./styles");
  eleventyConfig.addWatchTarget("./scripts");
};
