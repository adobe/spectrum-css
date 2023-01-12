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

// const colors = require('colors');
const path = require('path');
const dirs = require('../lib/dirs');
const depUtils = require('../lib/depUtils');
const logger = require('../lib/logger');

function chdir(dir) {
  process.chdir(dir);
  logger.debug(`Working directory changed to ${dir.magenta}`);
}

function runComponentTask(packageDir, task, callback) {
  // Drop org
  const packageName = packageDir.split('/').pop();

  const indexFile = path.join(packageDir, 'index.js');

  const cwd = process.cwd();

  chdir(packageDir);

  const tasks = require(`${indexFile}`);

  if (tasks[task]) {
    logger.warn(`Starting '${packageName.yellow}:${task.yellow}'...`);

    tasks[task]((err) => {
      chdir(cwd);

      if (err) {
        logger.error(`Error running '${packageName.yellow}:${task.yellow}': ${err}`);

        callback(err);
      }
      else {
        logger.warn(`Finished '${packageName.yellow}:${task.yellow}'`);

        callback();
      }
    });
  }
  else {
    const err = new Error(`Task '${packageName.yellow}:${task.yellow}' not found!`);
    logger.error(err);

    chdir(cwd);

    callback(err);
  }
}

/*
  Run a task on every package
*/
function runTaskOnPackages(task, packages) {
  return new Promise(async (resolve, reject) => {
    const packageCount = packages.length;

    function getNextPackage() {
      return packages.shift();
    }

    function processPackage() {
      const packageDir = getNextPackage();

      if (packageDir) {
        runComponentTask(packageDir, task, (err) => {
          if (err) {
            if (!process.env.FORCE) {
              process.exit(1);
            }
          }
          processPackage();
        });
      }
      else {
        logger.warn(`${task} ran on ${packageCount} packages!`.bold.green);
        resolve();
      }
    }

    processPackage();
  });
}

/*
  Run a task on every component in dependency order
*/
async function runTaskOnAllComponents(task) {
  let components = await depUtils.getFolderDependencyOrder(dirs.components);

  components = components.map((component) => path.join(dirs.components, component.split('/').pop()));

  return runTaskOnPackages(task, components);
}

/*
  Build all components
*/
function buildComponents() {
  return runTaskOnAllComponents('build');
}

exports.buildComponents = buildComponents;
exports.runComponentTask = runComponentTask;
exports.runTaskOnPackages = runTaskOnPackages;
exports.runTaskOnAllComponents = runTaskOnAllComponents;
