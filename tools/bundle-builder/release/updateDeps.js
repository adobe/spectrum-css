const gitSemverTags = require('git-semver-tags');
const semver = require('semver');
const path = require('path');
const fsp = require('fs').promises;
const gulp = require('gulp');
const exec = require('../lib/exec');

function getLastTag(bundlePackage) {
  return new Promise((resolve, reject) => {
    // Find the last release of this bundle
    gitSemverTags({
      lernaTags: true,
      package: bundlePackage.name
    }, (err, tags) => {
      if (tags) {
        let lastTag = tags.shift();
        resolve(lastTag);
      }
      else {
        reject(new Error('Could not find last tag!'))
      }
    });
  });
}

async function getPackage(dir) {
  return JSON.parse(await fsp.readFile(path.join(dir || '' , 'package.json')));
}

let releaseTypeToCommitType = {
  'major': 'feat', // hope these don't happen
  'premajor': 'feat', // hope these don't happen
  'minor': 'feat',
  'preminor': 'feat',
  'patch': 'fix',
  'prepatch': 'fix',
  'prerelease': 'fix' // hope these don't happen
};

async function analyzeComponents(bundlePackage, lastTag) {
  let updates = [];

  for (let [depName, requiredDepVersion] of Object.entries(bundlePackage.devDependencies)) {
    if (depName.startsWith('@spectrum-css/')) {
      let depPath = path.join('..', '..', 'components', depName.replace('@spectrum-css/', ''));

      let depPackage = await getPackage(depPath);

      // Check if the dep matches the package entry
      if (semver.satisfies(depPackage.version, requiredDepVersion)) {
        let exactRequiredDepVersion = requiredDepVersion.replace('^', '');
        let releaseType = semver.diff(exactRequiredDepVersion, depPackage.version);

        if (releaseType) {
          let commitType = releaseTypeToCommitType[releaseType];
          console.log(`Updating ${depPackage.name} to ${depPackage.version}!`);

          updates.push({
            name: depPackage.name,
            version: depPackage.version,
            type: commitType
          });
        }
      }
      else {
        console.error(`Skipping ${depName}: found ${depPackage.version} in monorepo, but bundle requires ${requiredDepVersion}`);
      }
    }
  }

  return updates;
}

function findUpdates() {
  let bundlePackage;
  let lastTag;
  return getPackage()
    .then(package => {
      bundlePackage = package;
      return getLastTag(bundlePackage);
    })
    .then(tag => {
      lastTag = tag;
      return analyzeComponents(bundlePackage, lastTag);
    });
}

function updateDeps() {
  return findUpdates()
    .then(changedDependencies => {
      let promises = [];
      for (let dependency of changedDependencies.filter(Boolean)) {
        let message = `${dependency.type}: update ${dependency.name} to ${dependency.version}`;

        let promise = exec.promise(`rm -rf package-lock.json`)
          .then(() => {
            return exec.promise(`npm install --save-dev ${dependency.name}@${dependency.version}`);
          })
          .then(() => {
            return exec.promise(`rm -rf package-lock.json`);
          })
          .then(() => {
            return exec.promise(`git commit package.json -m "${message}"`);
          });

        promises.push(promise);
      }

      return Promise.all(promises);
    });
}

module.exports = updateDeps;
