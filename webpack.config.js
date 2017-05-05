var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: ['./js/myApiDocument.js', './js/forCSS.js'],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    
    module:{
//***************************************************************************//
        loaders: [
            {
            test: /\.css$/,
            use:[{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
            ]},
//***************************************************************************//
            {
              	test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
//***************************************************************************//            
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: "file-loader?name=/img/[name].[ext]"
            },
//***************************************************************************//
            {
    	       test: /\.js$/,
    	       enforce: 'pre',
    	       exclude: /(node_modules|bower_components|\.spec\.js)/,
    	       use: [{
                    loader: 'eslint-loader',
                    options: {
                        failOnWarning: false,
                        failOnError: false
            	   }
        	   }]
    	   },
        ]
    }
}