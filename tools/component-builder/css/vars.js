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

const gulp = require("gulp");
const through = require("through2");
const logger = require("gulplog");
const fsp = require("fs").promises;
const path = require("path");

const varUtils = require("./lib/varUtils");

function bakeVars() {
	return gulp
		.src(["dist/index-vars.css"], {
			allowEmpty: true,
		})
		.pipe(
			through.obj(async function doBake(file, enc, cb) {
				let pkg = JSON.parse(await fsp.readFile(path.join("package.json")));
				let pkgName = pkg.name.split("/").pop();
				let classNames = varUtils.getClassNames(file.contents, pkgName);

				// Find all custom properties used in the component
				let variableList = varUtils.getVarsFromCSS(file.contents);

				// Get vars defined inside of the component
				let componentVars = varUtils.getVarsDefinedInCSS(file.contents);

				// Get vars in ALL components
				let vars = await varUtils.getAllComponentVars();

				// Get literally all of the possible vars (even overridden vars that are different between themes/scales)
				let allVars = await varUtils.getAllVars();

				// For each color stop and scale, filter the variables for those matching the component
				let errors = [];
				let usedVars = {};
				variableList.forEach((varName) => {
					if (varName.indexOf("spectrum-global") !== -1) {
						logger.warn(
							`⚠️  ${pkg.name} directly uses global variable ${varName}`
						);
					} else if (
						!allVars[varName] &&
						!varName.startsWith("--mod") &&
						!varName.startsWith("--highcontrast")
					) {
						if (componentVars.indexOf(varName) === -1) {
							errors.push(`${pkg.name} uses undefined variable ${varName}`);
						} else {
							logger.warn(
								`🔶 ${pkg.name} uses locally defined variable ${varName}`
							);
						}
					} else {
						usedVars[varName] = vars[varName];
					}
				});

				if (errors.length) {
					return cb(new Error(errors.join("\n")), file);
				}

				let contents = varUtils.getVariableDeclarations(classNames, usedVars);
				let newFile = file.clone({ contents: false });
				newFile.path = path.join(file.base, `vars.css`);
				newFile.contents = Buffer.from(contents);

				cb(null, newFile);
			})
		)
		.pipe(gulp.dest("dist/"));
}

exports.bakeVars = bakeVars;
