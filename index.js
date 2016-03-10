var gitLabel = require("git-label");
var config = require("./config");

// Add and remove packages
gitLabel.find(config.packages_to_add).then(add).catch(console.log);
gitLabel.find(config.packages_to_remove).then(remove).catch(console.log);

// Wrap gitLabel methods
var gitConfig = {
  api   : "https://api.github.com",
  repo  : config.owner + "/" + config.repository,
  token : config.token
};
function add(labels) {
  gitLabel.add(gitConfig, labels)
    .then(console.log)
    .catch(console.log);
}
function remove(labels) {
  gitLabel.remove(gitConfig, labels)
    .then(console.log)
    .catch(console.log);
}
