'use strict';

const request = require('request');

// const JENKINS_URL = 'http://localhost:8080/';
const JENKINS_URL = 'http://localhost:8080/job/folder-test/job/multi-configuration-project/config.xml';
const JENKINS_HEADERS = {
    'Content-Type': 'application/xml',
    'Authorization': 'Basic cXVpcmltbW86cXVpcmlub0A4Ng=='
};


class JenkinsProxy {

    constructor() {

    }

    queryJenkins() {
        const options = {
            headers: JENKINS_HEADERS,
            url: JENKINS_URL,
            method: 'GET'
        };

        let promise = new Promise((resolve, reject) => {
            request(options, onRequestCallback.bind(this, resolve, reject));
        });
        return promise;

        function onRequestCallback(resolve, reject, error, response, body) {
            if (response.statusCode >= 200 && response.statusCode < 400) {
                resolve(body);
            } else {
                reject(error);
            }
        }
    }

};

module.exports = JenkinsProxy;