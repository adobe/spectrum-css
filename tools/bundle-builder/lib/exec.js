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

const cp = require('child_process');

function task(taskName, command) {
  var func = function(cb) {
    runCommand(command, cb);
  };

  Object.defineProperty(func, 'name', { value: taskName, writable: false });

  return func;
}

function promise(command, options) {
  return new Promise((resolve, reject) => {
    runCommand(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(stdout);
      }
    }, options);
  });
}

function runCommand(command, cb, options = {}) {
  let commandProcess = cp.exec(command, cb);
  if (options.pipe !== false) {
    commandProcess.stdout.pipe(process.stdout);
    commandProcess.stderr.pipe(process.stderr);
  }
  return commandProcess;
}

exports.promise = promise;
exports.command = runCommand;
exports.task = task;
