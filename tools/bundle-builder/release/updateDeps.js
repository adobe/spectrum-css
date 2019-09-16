/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const semver = require('semver');
const path = require('path');
const fsp = require('fs').promises;
const gulp = require('gulp');
const logger = require('gulplog');
const conventionalChangelog = require('gulp-conventional-changelog');
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

          logger.info(`Updating ${depPackage.name} to ${depPackage.version} due to ${commitType} commit (release type ${releaseType})!`);

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
        logger.warn(`Skipping ${depName}: found ${depPackage.version} in monorepo, but bundle requires ${requiredDepVersion}`);
      }
    }
  }

  return updates;
}

function updateDep(pkg, update) {
  pkg.devDependencies[update.name] = `^${update.version}`;
}

function isPrerelease(version) {
  return version.match(/-(alpha)|(beta)/);
}

let typePriority = {
  'patch': 0,
  'minor': 1,
  'major': 2
};

function generateChangelog() {
  return new Promise(async (resolve, reject) => {
    let pkg = await readPackage();
    logger.info(`Generating changelog for ${pkg.name}@${pkg.version}...`);

    await exec.promise(`touch CHANGELOG.md`);

    gulp.src('CHANGELOG.md')
      .pipe(conventionalChangelog({
        preset: 'spectrum',
        lernaPackage: pkg.name,
        transform: function (commit, cb, stream) {
          // Break release commits into their requisite features
          if (commit.type === 'chore' && commit.scope === 'release') {
            let commits = commit.body.split('\n');
            commits.map(string => {
              let [type, header] = string.split(': ');
              let subject = header;

              // Replace version numbers with changelogs
              subject = subject.replace(/^update (.*?) from (.*?) to (.*?)$/, (match, package, from, to) => {
                let componentName = package.replace('@spectrum-css/', '');
                return `**${componentName}**: update [${package}](/components/${componentName}) from [${from}](/components/${componentName}/CHANGELOG.md#user-content-${from}) to [${to}](/components/${componentName}/CHANGELOG.md#user-content-${to})`;
              });

              return Object.assign({}, commit, {
                type: type,
                scope: null,
                subject: null,
                header: subject,
                body: subject
              });
            }).forEach((subCommit) => {
              // Each new commit we broke out should get pushed onto the stream
              this.push(subCommit);
            });
          }
          cb(null);
        }
      }, {
        // context goes here
        docsLink: `${pkg.homepage}${pkg.version}/docs/`
      }, {
        // git-raw-commits options go here
        path: process.cwd()
      }, {
        // conventional-commits-parser options go here
      }, {
        // conventional-changelog-writer options go here
      }))
      .pipe(gulp.dest('./'))
      .on('finish', resolve)
      .on('error', reject);
  });
}

async function updateAndTagRelease() {
  let pkg = await readPackage();
  let updates = (await analyzeComponents(pkg)).filter(Boolean);

  if (!updates.length) {
    logger.warn(`Not updating dependencies for ${pkg.name}, no changes since last release`);
    return;
  }

  let count = {
    'major': 0,
    'minor': 0,
    'patch': 1
  };
  let type = 'patch';
  let message = '';
  let breaking = '';
  let hasPreDeps = false;
  for (let update of updates) {
    if (isPrerelease(update.version)) {
      hasPreDeps = true;
    }

    // Release commit should have the type of the most impactful change
    if (typePriority[update.releaseType] > typePriority[type]) {
      type = update.releaseType;
    }
    updateDep(pkg, update);
    let messageString = `${update.releaseType === 'major' ? 'BREAKING CHANGE' : update.type}: update ${update.name} from ${update.oldVersion} to ${update.version}\n`;

    count[update.releaseType]++;

    if (update.releaseType === 'major') {
      breaking += messageString;
    }
    else {
      message += messageString;
    }
  }

  logger.info(`Found ${count.patch} fixes, ${count.minor} features, and ${count.major} breaking changes`);

  if (isPrerelease(pkg.version) && !hasPreDeps) {
    let newVersion = `${semver.major(pkg.version)}.${semver.minor(pkg.version)}.${semver.patch(pkg.version)}`;
    logger.info(`Current release ${pkg.version} is a pre-release, but all components are proper! Bumping to ${newVersion}...`);
    pkg.version = newVersion;
  }
  else {
    // Increment the version of the package
    let increment = type;

    // Do a pre-release if the existing release is a pre-release
    if (isPrerelease(pkg.version) && hasPreDeps) {
      increment = 'prerelease';
    }

    pkg.version = semver.inc(pkg.version, increment);
    logger.info(`Bumping to ${pkg.version} (${increment})...`);
  }

  message = `chore(release): release ${pkg.name}@${pkg.version}\n\n${breaking}${message}`;

  await writePackage(pkg);

  await exec.promise(`git commit package.json -m "${message}"`);

  await generateChangelog();

  await exec.promise(`git add CHANGELOG.md`);
  await exec.promise(`git commit --amend --no-edit`);

  await exec.promise(`git tag "${pkg.name}@${pkg.version}"`);
  logger.info(`Created tag ${pkg.version}...`);
}

exports.generateChangelog = generateChangelog;
exports.updateAndTagRelease = updateAndTagRelease;
