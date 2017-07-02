'use strict';

const testsFramework = require('./../utility/test-framework');
const JenkinsModel = require('./JenkinsModel');

describe('JenkinsModel Tests', function() {

    describe('constructor', function() {

        it('should instantiate the object correctly', function() {
            let jenkinsModel = new JenkinsModel();
            jenkinsModel.should.be.defined;
            jenkinsModel.save.should.be.defined;
            jenkinsModel.model.should.be.defined;
        });

    });

    describe('save', function() {

        it('should correctly return a promise', function(done) {
            let jenkinsModel = new JenkinsModel();
            jenkinsModel.save().should.be.fulfilled.notify(done);
        });

    });

});