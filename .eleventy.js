module.exports = function(eleventyConfig) {

eleventyConfig.addPassthroughCopy("images");

eleventyConfig.addPassthroughCopy("css");



return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // jako šablonovací jazyk zvolíme Nunjucks`
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
};
