const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = () => {
  let isDevelopment = process.env.NODE_ENV === "development";

  return {
    mode: isDevelopment ? "development" : "production",
    entry: "./src/index.js",
    devtool: isDevelopment ? "inline-source-map" : false,
    devServer: {
      port: 3010,
      open: true,
      allowedHosts: "all",
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Shopping Cart",
        template: "./src/template.html",
      }),
      new MiniCssExtractPlugin(),
      // new BundleAnalyzerPlugin(),
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "images/[hash][ext][query]",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          include: path.resolve(__dirname, "src"),
          sideEffects: true,
          use: [
            isDevelopment
              ? "style-loader"
              : {
                  loader: MiniCssExtractPlugin.loader,
                },
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              presets: [
                "@babel/preset-env",
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic",
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
    },
  };
};
