const path = require('path'); 
const Dotenv = require('dotenv-webpack');

module.exports = { 
  mode: process.env.ENVIRONMENT || 'development',
  entry: "./src/index.js", 
  output: { 
    "path": path.resolve(__dirname, 'dist'), 
    "filename": "bundle.js" 
  }, 
  plugins: [
    new Dotenv()
  ],
  module: { 
    rules: [ 
      { 
        test: /\.css$/, 
        use: [ "style-loader", "css-loader" ] 
      }, 
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: { 
          "loader": "babel-loader", 
        } 
      }, 
    ]

  }
};