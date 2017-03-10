/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: webpack.config.js
* @Last modified by:   andreeray
* @Last modified time: 2017-03-06T22:45:06+01:00
*/



var webpack = require('webpack')

module.exports = {
    entry: [
        './app/entry.jsx'
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components'
        ],
        alias: {
            actions: 'app/actions/actions',
            reducers: 'app/reducers/reducers',
            store: 'app/store/store'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheep-module-eval-source-map'
}
