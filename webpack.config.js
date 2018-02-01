const path = require('path');
module.exports = {
    entry: "./js/oauth.js",
    output: {
        path: path.join(__dirname, "js"),
        filename: "oauth.bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".js", "json"],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./')
          ]
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3000,
        historyApiFallback: true
      },
    watch: true
}