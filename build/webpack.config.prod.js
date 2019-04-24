const config = require("./webpack.config.base")
module.exports = {
  ...config,
  mode: "production",
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: "/"
  },
}
