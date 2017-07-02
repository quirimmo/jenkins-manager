'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe("A test suite", function() {
    beforeEach(function() {

    });
    afterEach(function() {

    });
    it('should fail', function() {
        true.should.be.true;
    });
});