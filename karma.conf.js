/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T02:36:40+01:00
* @Email:  me@andreeray.se
* @Filename: karma.conf.js
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T02:42:51+01:00
*/

var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack','sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    })
}
