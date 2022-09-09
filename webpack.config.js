const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      // new Dotenv(),
    ],
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: "/",
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
              // options: {
              //   modules: {
              //     localIdentName: isDevelopment
              //       ? "[name]__[local]"
              //       : "[hash:base64:5]",
              //     exportLocalsConvention: "dashes",
              //   },
              // },
            },
            // {
            //   loader: "sass-loader",
            //   options: {
            //     sourceMap: isDevelopment,
            //   },
            // },
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
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
    },
  };
};
