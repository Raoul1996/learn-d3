const { devMode } = require("./utils")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
        test: /\.js$/
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      // {
      //   test: /\.(csv|tsv)$/,
      //   loader: "csv-loader"
      // },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      },
      {
        loader: "file-loader",
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.(sa|sc|c)ss$/],
        options: {
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "static/css/[name].css" : "static/css/[name].[hash].css",
      chunkFilename: devMode ? "static/css/[id].css" : "static/css/[id].[hash].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.scss.html",
      inject: true,
      minify: devMode && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ],
  // performance: {
  //   hints: "warning", // enum
  //   maxAssetSize: 200000, // int (in bytes),
  //   maxEntrypointSize: 400000, // int (in bytes)
  //   assetFilter: function(assetFilename) {
  //     // Function predicate that provides asset filenames
  //     return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
  //   }
  // },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
}
