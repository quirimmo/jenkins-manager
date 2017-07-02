'use strict';

const testsFramework = require('./../utility/test-framework');
const JenkinsProxy = require('./JenkinsProxy');
const request = require('request');

describe('JenkinsProxy Tests', function() {

    describe('constructor', function() {

        it('should instantiate the object correctly', function() {
            let jenkinsProxy = new JenkinsProxy();
            jenkinsProxy.should.be.defined;
            jenkinsProxy.queryJenkins.should.be.defined;
        });

    });

    
    describe('queryJenkins', function() {

        beforeEach(function(){
            // const options = {
            //     headers: JENKINS_HEADERS,
            //     url: jenkinsURL,
            //     method: 'GET'
            // };
            // request(options, onRequestCallback.bind(this, resolve, reject));
            sinon.stub(request, 'get');
            // .yields(null, null, JSON.stringify({login: "bulkan"}));
        });

        it('should call the request get', function(done) {
            let jenkinsProxy = new JenkinsProxy();
            jenkinsProxy.queryJenkins();
            request.get.called.should.be.equal(true);
            // jenkinsProxy.queryJenkins().should.be.fulfilled.notify(done);
        });

        it('should reject the promise if the jenkins URL is wrong', function(done) {
            let jenkinsProxy = new JenkinsProxy();
            let fakeURL = 'fakeURL';
            jenkinsProxy.queryJenkins(fakeURL).should.be.rejected;
            jenkinsProxy.queryJenkins(fakeURL).should.be.rejectedWith(Error, `Invalid URI "${fakeURL}"`).notify(done);
        });

    });

});