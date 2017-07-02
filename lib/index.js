const JenkinsProxy = require('./service/JenkinsProxy');
const JenkinsModel = require('./model/JenkinsModel');

let jenkinsModel = new JenkinsModel();
jenkinsModel.model.URL = 'aaaa';
jenkinsModel.save();

// let jenkinsProxy = new JenkinsProxy();
// jenkinsProxy.queryJenkins('aaaa')
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.error('Error querying jenkins');
//     console.error(err);
// });