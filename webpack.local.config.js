// DEV Webpack configuration used to build the service worker

const path = require("path");
const Dotenv = require("dotenv-webpack");

const webBuildTargetFolder = path.join(__dirname, "src");
const targetServiceWorkerFilename = "service-worker.js";

module.exports = {
  target: "node",
  mode: "none",
  // WARNING: commented out to disable source maps
  //devtool: 'inline-source-map',
  entry: {
    index: path.join(__dirname, "src", "service-worker.ts"),
  },
  resolve: { extensions: [".js", ".ts"] },
  output: {
    path: webBuildTargetFolder,
    filename: targetServiceWorkerFilename,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          onlyCompileBundledFiles: true,
        },
      },
    ],
  },
  plugins: [new Dotenv()],
};
