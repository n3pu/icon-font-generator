module.exports = {
  name: 'icons',
  inputDir: './icons', // (required)
  outputDir: './dist', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['scss', 'css', 'json', 'html'],
  // Use a custom Handlebars template
  templates: {
    scss: './custom-tp.scss.hbs'
  },
};