/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const fs = require('fs')

const del = require("del")
const exec = require("../lib/exec")
const dirs = require("../lib/dirs")
const logger = require('../lib/logger')
const updateDeps = require("./updateDeps")


/**
 * @description delete icons and var folders
 * @returns 
 */
function releaseBackwardsCompatCleanup() {
  return del([
    // Don't bother deleting dist/icons, we want it in gh-pages output
    "icons",
    "vars",
  ])
}

const releaseBackwardsCompat = async () => {
  await releaseBackwardsCompatCleanup()

  await Promise.all([
    new Promise((resolve, reject) => {
      fs.readdir(
        `${dirs.components}/icon/{medium,large,combined}`,
        (err, fileNames) => {
          if (err) {
            reject(err)
            return
          }

          fileNames.forEach((fileName) => {
            fs.copyFile(
              `${dirs.components}/icon/{medium,large,combined}/${fileName}`,
              `icons/${fileName}`,
              (err) => {
                if (err) {
                  reject(err)
                }
              }
            )
          })

          resolve()
        }
      )
    }),
    new Promise((resolve, reject) => {
      fs.readdir(`${dirs.components}/icon/dist`, (err, fileNames) => {
        if (err) {
          reject(err)
          return
        }

        fileNames.forEach((fileName) => {
          if (fileName.startsWith("spectrum-css-icons")) {
            fs.copyFile(
              `${dirs.components}/icon/dist/${fileName}`,
              `dist/icons/${fileName}`,
              (err) => {
                if (err) {
                  reject(err)
                }
              }
            )
          }
        })

        resolve()
      })
    }),
    new Promise((resolve, reject) => {
      fs.readdir(`${dirs.components}/vars/dist`, (err, fileNames) => {
        if (err) {
          reject(err)
          return
        }

        fileNames.forEach((fileName) => {
          fs.copyFile(
            `${dirs.components}/vars/dist/${fileName}`,
            `vars/${fileName}`,
            (err) => {
              if (err) {
                reject(err)
              }
            }
          )
        })
        resolve()
      })
    }),
    new Promise((resolve, reject) => {
      fs.readdir(`${dirs.components}/vars/dist`, (err, fileNames) => {
        if (err) {
          reject(err)
          return
        }

        fileNames.forEach((fileName) => {
          fs.copyFile(
            `${dirs.components}/vars/dist/${fileName}`,
            `dist/vars/${fileName}`,
            (err) => {
              if (err) {
                reject(err)
              }
            }
          )
        })
        resolve()
      })
    }),
  ])
}

let stashRequired = false;
let releaseVersion = null;

const ghPages = async function() {
  try {
    // Get the version number from package.json
    const pkg = JSON.parse(await fs.readFile(`${process.cwd()}/package.json`));
    releaseVersion = pkg.version;

    // Check if the directory is clean
    logger.debug('Checking if directory is clean...');
    const { stdout } = await exec.command(`git diff --name-only`);
    if (stdout) {
      logger.debug('Directory dirty, stashing...');
      stashRequired = true;
      await exec.command('git stash');
    } else {
      logger.debug('Directory clean, continuing...');
    }

    // Checkout the gh-pages branch
    await exec.command('git checkout gh-pages');
    await exec.command('git pull');

    // Copy the contents of the dist folder to the versioned directory
    await exec.command(`cp -r dist ${dirs.topLevel}/${releaseVersion}`);

    // todo: update gh-pages index files if not alpha release
    await exec.command(`git add ${dirs.topLevel}/${releaseVersion}`);
    await exec.command(`git commit -q -m "Deploy version ${releaseVersion}"`);
    await exec.command('git push');

    // Go back to the previous branch
    await exec.command('git checkout -');

    // Pop changes to get Lerna's modification back
    if (stashRequired) {
      await exec.command(`git stash pop`);
    }
  } catch (err) {
    // Handle any errors that may have occurred
    console.error("Error in release " + err);
  }
};

Object.assign(exports, updateDeps)

exports.ghPages = ghPages
exports.releaseBackwardsCompat = releaseBackwardsCompat
exports.releaseBackwardsCompatCleanup = releaseBackwardsCompatCleanup
