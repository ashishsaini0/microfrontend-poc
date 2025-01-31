const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3001,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    open: true,
  },
  output: {
    publicPath: 'http://localhost:3001/', // Ensure this is valid
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", 
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
          }
        }
      },
      {
        test: /\.module\.css$/, // For CSS modules
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // Enables CSS Modules
            },
          },
        ],
      },
      {
        test: /\.css$/, // For global CSS files
        exclude: /\.module\.css$/, // Exclude module-specific CSS files
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "chat",
      filename: "remoteEntry.js", // Expose this file
      exposes: {
        './ChatApp': './src/ChatApp', // Adjust this path based on your actual code
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, eager: true, requiredVersion: '^18.0.0' },
      },
    }),    
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
