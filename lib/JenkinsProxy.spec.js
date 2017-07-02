'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

const JenkinsProxy = require('./JenkinsProxy');

describe('JenkinsProxy Tests', function() {

    describe('constructor', function() {

        it('should instantiate the object correctly', function() {
            let jenkinsProxy = new JenkinsProxy();
            jenkinsProxy.should.be.defined;
        });

    });

});