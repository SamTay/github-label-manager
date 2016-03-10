var gitLabel = require('git-label');

// Configuration
var REPO = "github-label-manager", // repo to modify
    TOKEN = "", // add personal github token
    OWNER = "SamTay", // user or organization
    PACKAGE_ADD = 'packages/samtay/*.json', // glob for new labels to add
    PACKAGE_REMOVE = 'packages/default.json'; // glob for labels to remove

// Add and remove packages
gitLabel.find(PACKAGE_ADD).then(add).catch(console.log);
gitLabel.find(PACKAGE_REMOVE).then(remove).catch(console.log);

var config = {
  api   : "https://api.github.com",
  repo  : OWNER + "/" + REPO,
  token : TOKEN
};
function add(labels) {
  gitLabel.add(config, labels)
    .then(console.log)
    .catch(console.log);
}
function remove(labels) {
  gitLabel.remove(config, labels)
    .then(console.log)
    .catch(console.log);
}
