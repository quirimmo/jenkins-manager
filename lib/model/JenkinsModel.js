'use strict';

const fs = require('fs');
const MODEL_PATH = './../data/jenkins.json';

class JenkinsModel {

    constructor() {
        this.model = require(MODEL_PATH);
    }

    save() {
        return new Promise((resolve, reject) => {
            fs.writeFile('./lib/data/jenkins.json', JSON.stringify(this.model, null, 4), 'utf8', onWriteFile.bind(this, resolve, reject));
        });

        function onWriteFile(resolve, reject, err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        }
    }

};

module.exports = JenkinsModel;