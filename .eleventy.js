const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "assets/font": "font",
  });

  // Watch targets
  eleventyConfig.addWatchTarget("./styles");
  eleventyConfig.addWatchTarget("./scripts");

  eleventyConfig.addShortcode("icon", function (icon) {
    switch (icon) {
      case "file":
        return `
        <div class="icon file-icon">
          <div class="folded-corner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          <div>
            <div class="line">
              <div class="whitespace"></div>
              <div class="whitespace"></div>
              <div class="whitespace"></div>
              <div class="whitespace"></div>
            </div>
            <div class="line">
              <div class="whitespace"></div>
              <div class="whitespace"></div>
              <div class="whitespace"></div>
            </div>
            <div class="line">
              <div class="whitespace"></div>
              <div class="whitespace"></div>
              <div class="whitespace"></div>
            </div>
          </div>
        </div>
        `;

      case "monitor":
        return `
    <div class="icon monitor-icon">	  
      <div class="screen">
        <div class="line">
          <div class="whitespace"></div>
          <div class="whitespace"></div>
          <div class="whitespace"></div>
          <div class="whitespace"></div>
          <div class="whitespace"></div>
        </div>
      
        <div class="line">
          <div class="whitespace"></div>
          <div class="whitespace"></div>
          <div class="whitespace"></div>
          <div class="whitespace"></div>
        </div>
      
        <div class="line">
          <div class="whitespace"></div>
          <div class="whitespace"></div>
        </div>
      
        <div class="line">
          <div class="whitespace"></div>
          <div class="whitespace"></div>
          <div class="whitespace"></div>
        </div>
      
        <div class="corners">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      
      <div class="slot"></div>
      
      <div class="base"></div>

      <div class="corners">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
	  </div>
    `;
    }
  });

  eleventyConfig.addFilter("renderRichText", (value) =>
    documentToHtmlString(value)
  );

  eleventyConfig.addFilter("isVideo", function (contentType) {
    return contentType.startsWith("video");
  });
};
