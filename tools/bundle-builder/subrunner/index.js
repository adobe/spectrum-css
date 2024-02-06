/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fs = require("fs");
const path = require("path");

const colors = require("colors");
const logger = require("gulplog");
const dirs = require("../lib/dirs");
const depUtils = require("../lib/depUtils");

function chdir(dir) {
	process.chdir(dir);
	logger.debug(`Working directory changed to ${dir.magenta}`);
}

/*
  Run the specified gulp task for the given package
*/
function runComponentTask(packageDir, task, callback) {
	// Drop org
	packageName = packageDir.split("/").pop();

	var gulpfile = path.join(packageDir, "gulpfile.js");

	if (!fs.existsSync(gulpfile)) {
		logger.warn(`No gulpfile found for ${packageName.yellow}`);
		callback();
		return;
	}

	let cwd = process.cwd();

	chdir(packageDir);

	var tasks = require(gulpfile);

	if (tasks[task]) {
		logger.warn(`Starting '${packageName.yellow}:${task.yellow}'...`);

		tasks[task](function (err) {
			chdir(cwd);

			if (err) {
				logger.error(
					`Error running '${packageName.yellow}:${task.yellow}': ${err}`
				);

				callback(err);
			} else {
				logger.warn(`Finished '${packageName.yellow}:${task.yellow}'`);

				callback();
			}
		});
	} else {
		var err = new Error(
			`Task '${packageName.yellow}:${task.yellow}' not found!`
		);
		logger.error(err);

		chdir(cwd);

		callback(err);
	}
}

/*
  Run a task on every component in dependency order
*/
async function runTaskOnAllComponents(task) {
	const components = await depUtils
		.getFolderDependencyOrder(dirs.components)
		.then((result) =>
			// Turn the package names into a path to the component directory
			result.map((component) => path.dirname(require.resolve(`${component}/package.json`)))
		)
		.catch(console.error);

	return runTaskOnPackages(task, components);
}

/*
  Run a task on every package
*/
function runTaskOnPackages(task, packages) {
	return new Promise(async (resolve, reject) => {
		let packageCount = packages.length;

		function getNextPackage() {
			return packages.shift();
		}

		function processPackage() {
			var packageDir = getNextPackage();

			if (packageDir) {
				runComponentTask(packageDir, task, function (err) {
					if (err) {
						if (!process.env.FORCE) {
							process.exit(1);
						}
					}
					processPackage();
				});
			} else {
				logger.warn(`${task} ran on ${packageCount} packages!`.bold.green);
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
	return runTaskOnAllComponents("build");
}

exports.buildComponents = buildComponents;
exports.runComponentTask = runComponentTask;
exports.runTaskOnPackages = runTaskOnPackages;
exports.runTaskOnAllComponents = runTaskOnAllComponents;
