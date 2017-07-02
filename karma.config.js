'use strict';

module.exports = function(config) {

    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
            './lib/*.js',
            './lib/*.spec.js'
        ],

        reporters: ['progress', 'coverage'],

        preprocessors: {
            'lib/**/!(*.spec.js)': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        port: 9876,
        colors: true,
        autoWatch: true,
        singleRun: false,

        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS']

    });
};