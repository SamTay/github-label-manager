# github-label-manager
> Simplified label manager via json packages

This is basically a slim wrapper over [jasonbellamy/git-label](https://github.com/jasonbellamy/git-label). It oversimplifies
the usage so that you can change a couple configuration values (such as user, repository, token, etc.) and
immediately swap out profiles (i.e., packages) of git labels. This is useful for starting repositories, managing label packages,
and trying out new packages.

### Getting Started
```
git clone git@github.com:SamTay/github-label-manager.git
cd github-label-manager
npm install
```

### Usage
There should be no code changes necessary. To use this manager, simply modify the ``config.json``:
```json
{
  "repository": "github-label-manager",
  "owner": "SamTay",
  "token": "YOUR_GITHUB_TOKEN_HERE",
  "packages_to_add": "packages/samtay/*.json",
  "packages_to_remove": "packages/default.json"
}
```
and then run ``node .``. With the configuration above, if your github token had access to this repository, the manager would delete the default labels and add all the labels found under the ``packages/samtay/`` directory.
