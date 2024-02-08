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
const fsp = require("fs").promises;
const path = require("path");
const pug = require("pug");
const data = require("gulp-data");
const rename = require("gulp-rename");
const yaml = require("js-yaml");
const through = require("through2");
const ext = require("replace-ext");

const sitePath = path.join(__dirname, "../../../site");
const util = require(`${sitePath}/util`);

async function readJSONFile(filepath) {
	return JSON.parse(await fsp.readFile(filepath));
}

async function getDependencies(packagePath = "") {
	let package = await readJSONFile(path.join(packagePath, "package.json"));

	let dependencies = [];

	if (package.devDependencies) {
		dependencies = Object.keys(package.devDependencies);

		dependencies = dependencies
			.filter((dep) => {
				return (
					dep.indexOf("@spectrum-css") === 0 &&
					dep !== "@spectrum-css/bundle-builder" &&
					dep !== "@spectrum-css/component-builder" &&
					dep !== "@spectrum-css/component-builder-simple"
				);
			})
			.map((dep) => dep.split("/").pop());
	}

	return dependencies;
}

function buildDocs_html() {
	return new Promise(async (resolve, reject) => {
		let dependencies;
		let package;
		try {
			package = await readJSONFile("package.json");
			dependencies = await getDependencies();
		} catch (err) {
			return reject(err);
		}

		const packageName = package.name.split("/").pop();

		const dnaVars = readJSONFile(
			path.join(
				path.dirname(require.resolve("@spectrum-css/vars")),
				"..",
				"dist",
				"spectrum-metadata.json"
			)
		);

		gulp
			.src(["metadata/*.yml"], { allowEmpty: true })
			.pipe(
				rename((file) => {
					file.basename = packageName;
				})
			)
			.pipe(
				data(() => ({
					dependencies: dependencies,
					dnaVars: dnaVars,
					pkg: package,
					util,
				}))
			)
			.pipe(
				through.obj(function compilePug(file, _, cb) {
					const data = {
						component: yaml.load(String(file.contents)),
						...(file.data ?? {})
					};

					file.path = ext(file.path, ".html");

					try {
						const templatePath = `${sitePath}/templates/individualComponent.pug`;
						let compiled = pug.renderFile(templatePath, data);
						file.contents = Buffer.from(compiled);
					} catch (e) {
						return cb(e);
					}
					cb(null, file);
				})
			)
			.pipe(gulp.dest(path.join(__dirname, "../../../dist/")))
			.on("end", resolve)
			.on("error", reject);
	});
}

exports.buildDocs = buildDocs_html;
exports.buildDocs_html = gulp.series(buildDocs_html);
