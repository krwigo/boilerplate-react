const path = require("path");
module.exports = {
  mode: "development",
  // mode: "production",
  entry: [
    path.resolve(__dirname, "index.html"),
    path.resolve(__dirname, "frontend.js"),
  ],
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        //
        test: /\.html$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
      {
        //
        test: /\.js$/i,
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es2015",
        },
      },
      {
        //
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    allowedHosts: "all",
    // historyApiFallback: true,
    // allowedHosts: "all",
    // proxy: {
    //   "/": {
    //     target: "https://fixme",
    //     changeOrigin: true,
    //   },
    // },
  },
  performance: {
    hints: false,
    // maxEntrypointSize: 512000,
    // maxAssetSize: 512000,
  },
  // optimization: {
  //   minimize: false,
  // },
  // stats: {
  //   logging: "info",
  //   warnings: true,
  // },
  // plugins: [
  // ],
};
