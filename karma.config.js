'use strict';

module.exports = function(config) {

    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
            './lib/*.js',
            './lib/*.spec.js'
        ],

        reporters: ['progress'],

        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: false,

        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS']

    });
};