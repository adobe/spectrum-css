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

const fsp = require('fs').promises;
const gulp = require('gulp');
const logger = require('gulplog');
const del = require('del');

const exec = require('../lib/exec');
const dirs = require('../lib/dirs');

function releaseBackwardsCompatCleanup() {
  return del([
    // Don't bother deleting dist/icons, we want it in gh-pages output
    'icons',
    'vars'
  ]);
};

let releaseBackwardsCompat = gulp.parallel(
  gulp.series(
    releaseBackwardsCompatCleanup,

    gulp.parallel(
      function releaseBackwardsCompat_copyUIIcons() {
        return gulp.src(
          `${dirs.components}/icon/{medium,large,combined}/**`
        )
          .pipe(gulp.dest('icons/'));
      },
      function releaseBackwardsCompat_copyUIIconSprites() {
        return gulp.src(
          `${dirs.components}/icon/dist/spectrum-css-icons*.svg`
        )
          .pipe(gulp.dest('dist/icons/'));
      },
      function releaseBackwardsCompat_copyRootVars() {
        return gulp.src(
          `${dirs.components}/vars/dist/*`
        )
          .pipe(gulp.dest('vars/'));
      },
      function releaseBackwardsCompat_copyDistVars() {
        return gulp.src(
          `${dirs.components}/vars/dist/*`
        )
          .pipe(gulp.dest('dist/vars/'));
      }
    )
  )
);

let stashRequired = false;
let releaseVersion = null;
let ghPages = gulp.series(
  async function getVersion(cb) {
    let pkg = JSON.parse(await fsp.readFile(`${process.cwd()}/package.json`));
    releaseVersion = pkg.version;
  },
  // Stash changes (package.json is modified by Lerna)
  function checkStatus(cb) {
    logger.debug('Checking if directory is clean...');
    exec.command(`git diff --name-only`, function(err, stdout, stderr) {
      if (stdout) {
        logger.debug('Directory dirty, stashing...');
        stashRequired = true;
        exec.command('git stash', cb, { pipe: false });
      }
      else {
        logger.debug('Directory clean, continuing...');
        cb(err);
      }
    }, { pipe: false });
  },
  exec.task('checkoutPages', `git checkout gh-pages`),
  exec.task('pullPages', 'git pull'),
  function copyPages(cb) {
    exec.command(`cp -r dist ${dirs.topLevel}/${releaseVersion}`, cb);
  },
  // todo: update gh-pages index files if not alpha release
  function addPages(cb) {
    exec.command(`git add ${dirs.topLevel}/${releaseVersion}`, cb);
  },
  function commitPages(cb) {
    exec.command(`git commit -q -m "Deploy version ${releaseVersion}"`, cb);
  },
  exec.task('pushPages', 'git push'),
  // Go back to the previous branch
  exec.task('checkoutBranch', 'git checkout -'),
  // Pop changes to get Lerna's modification back
  function popStash(cb) {
    if (stashRequired) {
      exec.command(`git stash pop`, cb, { pipe: false });
    }
    else {
      cb();
    }
  }
);

const updateDeps = require('./updateDeps');
Object.assign(exports, updateDeps);

exports.ghPages = ghPages;
exports.releaseBackwardsCompat = releaseBackwardsCompat;
exports.releaseBackwardsCompatCleanup = releaseBackwardsCompatCleanup;
