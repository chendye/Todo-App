/**
 * Created by onlycrazy on 16/5/25.
 */
var webpack = require('webpack');

const uglifyJS = new webpack.optimize.UglifyJsPlugin({compress : false});

module.exports = {
    devtools : 'source-map',
    entry : {
        client : "./src/components/app.js"
    },
    output : {
        path : './assets/js',
        filename : '[name].js'
    },
    module : {
        loaders : [
            {test :  /\.js/, loader : 'babel'}
        ]
    },
    // plugins : [ uglifyJS ]
};