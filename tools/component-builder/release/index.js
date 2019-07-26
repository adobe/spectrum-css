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
const gulp = require('gulp');
const cp = require('child_process');
const logger = require('gulplog');
const path = require('path');
const fs = require('fs');
const semver = require('semver');
const inq = require('inquirer');

function handleChildProcess(cb) {
  return function (error, stdout, stderr) {
    if (error) {
      logger.error(stderr);
      cb(error);
    }
    else {
      logger.info(stdout);
      cb();
    }
  }
}

function getPackage() {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
}

function bumpVersion(cb) {
  function doVersionBump() {
    // bump version, commit, and tag
    cp.exec(`echo "npm version ${releaseVersion}"`, handleChildProcess(cb));
  }

  var package = getPackage();

  // The version we'll actually release
  var releaseVersion = null;

  // Potential versions
  var patchVersion = semver.inc(package.version, 'patch');
  var minorVersion = semver.inc(package.version, 'minor');
  var majorVersion = semver.inc(package.version, 'major');
  var preVersion = semver.inc(package.version, 'prerelease', 'beta');
  var preMajorVersion = semver.inc(package.version, 'premajor', 'beta');
  var preMinorVersion = semver.inc(package.version, 'preminor', 'beta');
  var prePatchVersion = semver.inc(package.version, 'prepatch', 'beta');

  var choices = [
    {
      name: `patch - ${patchVersion}`,
      value: patchVersion
    },
    {
      name: `minor - ${minorVersion}`,
      value: minorVersion
    },
    {
      name: `major - ${majorVersion}`,
      value: majorVersion
    }
  ];

  if (package.version.match('-beta')) {
    choices = [
      {
        name: `prerelease - ${preVersion}`,
        value: preVersion
      },
      {
        name: `release - ${patchVersion}`,
        value: patchVersion
      }
    ];
  }

  choices = choices.concat([
    {
      name: `prepatch - ${prePatchVersion}`,
      value: prePatchVersion
    },
    {
      name: `preminor - ${preMinorVersion}`,
      value: preMinorVersion
    },
    {
      name: `premajor - ${preMajorVersion}`,
      value: preMajorVersion
    }
  ]);

  inq.prompt([{
    type: 'list',
    name: 'version',
    message: 'What version would you like?',
    choices: choices
  }])
  .then(function(res) {
    // Use command-line arguments, if provided
    releaseVersion = res.version;

    doVersionBump();
  });
}

let publishRelease = gulp.series(
  // push current branch
  (cb) => { cp.exec('echo "git push origin HEAD"', handleChildProcess(cb)); },
  // publish to npm
  (cb) => { cp.exec('echo "npm publish --dry-run"', handleChildProcess(cb)); }
);

exports.bumpVersion = bumpVersion;
exports.publishRelease = publishRelease;
