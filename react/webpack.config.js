const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: 'source-map', // Para fazer o debug melhor, mais fácil para ler os arquivos, assim vc consegue colocar debug no Browser
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // dist - Pasta gerada
        filename: 'bundle.js'                  // bundle.js - Arquivo gerado
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        })
    ]
};
