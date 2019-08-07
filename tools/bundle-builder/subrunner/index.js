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
function runComponentTask(package, task, callback) {
  // Drop org
  package = package.split('/').pop();

  let componentsDir = path.join(dirs.components, package)
  var gulpfile = path.join(componentsDir, 'gulpfile.js');

  chdir(componentsDir);

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
function runTaskOnAllComponents(task) {
  return new Promise(async (resolve, reject) => {
    let components;
    try {
      components = await depUtils.getFolderDependencyOrder(dirs.components);
    }
    catch (err) {
      return reject(err);
    }

    let packageCount = components.length;

    function getNextPackage() {
      return components.shift();
    }

    function processPackage() {
      var package = getNextPackage();

      if (package) {
        runComponentTask(package, task, function(err) {
          processPackage();
        });
      }
      else {
        logger.warn(`${task} ran on ${packageCount} components!`.bold.green);
        resolve();
      }
    }

    // Kick off a gulp build for each package
    processPackage();
  });
}

/*
  Build all components
*/
function buildComponents() {
  return runTaskOnAllComponents('build');
}

exports.buildComponents = buildComponents;
exports.runComponentTask = runComponentTask;
exports.runTaskOnAllComponents = runTaskOnAllComponents;
