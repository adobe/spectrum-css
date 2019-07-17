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

const colors = require('colors');
const logger = require('gulplog');
const path = require('path');
const dirs = require('../lib/dirs');
const depUtils = require('../lib/depUtils');

function chdir(dir) {
  process.chdir(dir);
  logger.debug(`Working directory changed to ${dir.magenta}`);
}

/*
  Run the specified gulp task for the given package
*/
function runPackageTask(package, task, callback) {
  // Drop org
  package = package.split('/').pop();

  let packageDir = path.join(dirs.packages, package)
  var gulpfile = path.join(packageDir, 'gulpfile.js');

  chdir(packageDir);

  var tasks = require(`${gulpfile}`);

  if (tasks[task]) {
    logger.warn(`Starting '${package.yellow}:${task.yellow}'...`);

    tasks[task](function(err) {
      chdir(dirs.topLevel);

      if (err) {
        logger.error(`Error running '${package.yellow}:${task.yellow}': ${err}`);

        callback(err);
      }
      else {
        logger.warn(`Finished '${package.yellow}:${task.yellow}'`);

        callback();
      }
    });
  }
  else {
    var err = new Error(`Task '${package.yellow}:${task.yellow}' not found!`);
    logger.error(err);

    chdir(dirs.topLevel);

    callback(err);
  }
}

/*
  Build all packages
*/
async function buildPackages() {
  return new Promise(async (resolve, reject) => {
    let packages = await depUtils.getFolderDependencyOrder(dirs.packages);

    function getNextPackage() {
      return packages.shift();
    }

    function processPackage() {
      var package = getNextPackage();

      if (package) {
        runPackageTask(package, 'build', function(err) {
          processPackage();
        });
      }
      else {
        logger.warn('Build complete!'.bold.green);
        resolve();
      }
    }

    // Kick off a gulp build for each package
    processPackage();
  });
}

exports.buildPackages = buildPackages;
exports.runPackageTask = runPackageTask;
