const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3001/',
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
        port: 3001,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'product',
            filename: 'remoteEntry.js',
            remotes: {
                shell: 'home@http://localhost:3000/remoteEntry.js',
                product: 'product@http://localhost:3001/remoteEntry.js',
                user: 'user@http://localhost:3002/remoteEntry.js',
            },
            exposes: {
                './App': './src/App',
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new HtmlWebPackPlugin({
            template: path.resolve('public/index.html'),
            favicon: 'public/favicon.ico',
        }),
    ],
};
