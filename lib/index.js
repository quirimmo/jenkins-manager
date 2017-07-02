const JenkinsProxy = require('./JenkinsProxy');

let jenkinsProxy = new JenkinsProxy();
jenkinsProxy.queryJenkins('aaaa')
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.error('Error querying jenkins');
    console.error(err);
});