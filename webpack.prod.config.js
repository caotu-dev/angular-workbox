// PROD Webpack configuration used to build the service worker
/* eslint-env es6 */

const webpackDevConfig = require("./webpack.dev.config");

module.exports = Object.assign({}, webpackDevConfig, {
  mode: "production",
});
