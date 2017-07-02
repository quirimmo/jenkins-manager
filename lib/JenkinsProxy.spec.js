'use strict';

const testsFramework = require('./test-framework');
const JenkinsProxy = require('./JenkinsProxy');

describe('JenkinsProxy Tests', function() {

    describe('constructor', function() {

        it('should instantiate the object correctly', function() {
            let jenkinsProxy = new JenkinsProxy();
            jenkinsProxy.should.be.defined;
            jenkinsProxy.queryJenkins.should.be.defined;
        });

    });

    
    describe('queryJenkins', function() {

        it('should return a promise fulfilled', function() {
            let jenkinsProxy = new JenkinsProxy();
            jenkinsProxy.queryJenkins().should.be.fulfilled;
        });

    });

});