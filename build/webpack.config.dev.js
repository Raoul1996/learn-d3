const config = require("./webpack.config.base")
module.exports = {
  ...config,
  mode: "development",
  output: {
    chunkFilename: "static/js/[name].[chunkhash].js",
    filename: "static/js/bundle.js",
    publicPath: "/"
  },
}
