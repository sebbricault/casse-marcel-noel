var Encore = require("@symfony/webpack-encore");

Encore
  // Build
  .setOutputPath("public/build/")
  .setPublicPath("/build")
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  // Typescript + React
  .addEntry("app", "./assets/app.js")
  .enableReactPreset()
  .enableTypeScriptLoader()

  // Enable single runtime chunk
  .enableSingleRuntimeChunk();

module.exports = Encore.getWebpackConfig();
