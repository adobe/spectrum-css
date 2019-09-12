const semver = require('semver');
const path = require('path');
const fsp = require('fs').promises;
const gulp = require('gulp');
const exec = require('../lib/exec');

async function readPackage(dir) {
  return JSON.parse(await fsp.readFile(path.join(dir || '' , 'package.json')));
}

async function writePackage(pkg, dir) {
  return (await fsp.writeFile(path.join(dir || '' , 'package.json'), JSON.stringify(pkg, null, 2)));
}

let releaseTypeToCommitType = {
  'major': 'BREAKING CHANGE',
  'premajor': 'feat', // hope these don't happen?
  'minor': 'feat',
  'preminor': 'feat',
  'patch': 'fix',
  'prepatch': 'fix',
  'prerelease': 'fix' // hope these don't happen?
};

async function analyzeComponents(bundlePackage) {
  let updates = [];

  // This package is always kept up to date with breaking changes
  let allowBreakingChanges = bundlePackage.name === '@spectrum-css/spectrum-css';

  for (let [depName, requiredDepVersion] of Object.entries(bundlePackage.devDependencies)) {
    if (depName.startsWith('@spectrum-css/')) {
      // Don't require.resolve here, we want to check what's actually in the repo
      let depPath = path.join('..', '..', 'components', depName.replace('@spectrum-css/', ''));

      let depPackage = await readPackage(depPath);

      // Check if the dep matches the package entry
      if (semver.satisfies(depPackage.version, requiredDepVersion) || allowBreakingChanges) {
        let exactRequiredDepVersion = requiredDepVersion.replace('^', '');
        let releaseType = semver.diff(exactRequiredDepVersion, depPackage.version);

        if (releaseType) {
          let commitType = releaseTypeToCommitType[releaseType];
          if (semver.inc(exactRequiredDepVersion, 'major') === depPackage.version) {
            // We've gone from prerelease to major
            // diff does not catch this https://github.com/npm/node-semver/issues/288
            // in the case of 2.0.0 components, this is a non-breaking feature
            // in the future, it won't be. this code should be changed to consider this a breaking change
            commitType = 'feat';
          }

          console.log(`Updating ${depPackage.name} to ${depPackage.version} due to ${commitType} commit (release type ${releaseType})!`);

          updates.push({
            name: depPackage.name,
            oldVersion: exactRequiredDepVersion,
            version: depPackage.version,
            type: commitType,
            releaseType: releaseType
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

function updateDep(pkg, update) {
  pkg.devDependencies[update.name] = `^${update.version}`;
}

let typePriority = {
  'patch': 0,
  'minor': 1,
  'major': 2
};

async function updateDeps() {
  let pkg = await readPackage();
  let updates = (await analyzeComponents(pkg)).filter(Boolean);

  if (!updates.length) {
    console.log(`Not updating dependencies for ${pkg.name}, no changes since last release`);
    return;
  }

  let type = 'patch';
  let message = '';
  let breaking = '';
  for (let update of updates) {
    // Release commit should have the type of the most impactful change
    if (typePriority[update.releaseType] > typePriority[type]) {
      type = update.releaseType;
    }
    updateDep(pkg, update);
    let messageString = ` - ${update.type}: update ${update.name} from ${update.oldVersion} to ${update.version}\n`;

    if (update.releaseType === 'major') {
      breaking += messageString;
    }
    else {
      message += messageString;
    }
  }

  // Increment the version of the package
  let increment = type;

  if (pkg.version.match(/-(alpha)|(beta)/)) {
    increment = 'prerelease';
  }

  pkg.version = semver.inc(pkg.version, increment);

  message = `chore(release): release ${pkg.name}@${pkg.version}\n\n${breaking}${message}`;

  await writePackage(pkg);

  await exec.promise(`git commit package.json -m "${message}"`);
  await exec.promise(`git tag "${pkg.name}@${pkg.version}"`);
}

module.exports = updateDeps;
