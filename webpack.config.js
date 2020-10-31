const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-webpack.bundle.js'
    },
    module: {
        rules: [
            {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
            },
            {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
          }
    
      
        ],
    },
    devServer: {
        port: 9000,
        clientLogLevel: "error",
        open: true,
    },
};