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

const path = require("path");

const gulp = require("gulp");
const gulpPostcss = require("gulp-postcss");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const through = require("through2");

const processors = require("./processors").processors;

const postcss = require("postcss");

const dirs = {
	root: path.join(__dirname, "../.."),
	components: path.join(__dirname, "../../components"),
	site: path.join(__dirname, ".."),
	publish: path.join(__dirname, "../../dist"),
};

/**
 * Determines the package name from a file path
 * @param {string} filePath
 * @returns {string}
 */
function getPackageFromPath(filePath) {
	return filePath.match(`(components|@spectrum-css)\/(.*?)\/`)?.[2];
}

function getVarsFromCSS(css) {
	const variableList = new Set();
	postcss.parse(css).walkDecls((decl) => {
		const matches = decl.value.match(/var\(.*?\)/g);
		if (!matches) return;
		matches.forEach(function (match) {
			const varName = match.replace(/var\((--[\w\-]+),?.*?\)/, "$1").trim();
			variableList.add(varName);
		});
	});
	return [...variableList];
}

function getVarsDefinedInCSS(css) {
	const variableList = new Set();
	postcss.parse(css).walkDecls((decl) => {
		if (!decl.prop.startsWith("--")) return;
		variableList.add(decl.prop);
	});
	return [...variableList];
}

function getVarValues(css) {
	const variables = {};
	postcss.parse(css).walkDecls((decl) => {
		variables[decl.prop] = decl.value;
	});
	return variables;
}

function getClassNames(contents, pkgName) {
	const classNames = new Set();

	postcss.parse(contents).walkRules((rule) => {
		if (pkgName === "page") return;

		rule.selectors.forEach((fullSelector) => {
			// Skip compound selectors, they may not start with the component itself
			if (fullSelector.match(/~|\+/)) return true;

			const selector = fullSelector.split(" ").shift();
			if (rule.type === "rule") {
				const matches = selector.match(/^\.spectrum-[\w]+/);
				if (matches) classNames.add(matches[0]);
			}
		});
	});

	return [...classNames];
}

const varDir = path.join(
	path.dirname(
		require.resolve("@spectrum-css/vars", {
			paths: [process.cwd(), path.join(process.cwd(), "../../")],
		})
	),
	".."
);
const coreTokensFile = require.resolve("@spectrum-css/tokens", {
	paths: [process.cwd(), path.join(process.cwd(), "../../")],
});

function getVariableDeclarations(classNames, vars) {
	let varNames = Object.keys(vars);
	if (varNames.length) {
		return `
${classNames.map((className) => `${className}`).join(",\n")} {
${varNames.map((varName) => `  ${varName}: ${vars[varName]};`).join("\n")}
}
`;
	}

	return "";
}

function getAllVars() {
	return new Promise((resolve, reject) => {
		let variableList;

		gulp
			.src([
				`${varDir}/css/themes/*.css`,
				`${varDir}/css/scales/*.css`,
				`${varDir}/css/components/*.css`,
				`${varDir}/css/globals/*.css`,
				`${varDir}/custom.css`,
				coreTokensFile,
			], {
				allowEmpty: true,
			})
			.pipe(concat("everything.css"))
			.pipe(
				through.obj(function getAllVars(file, enc, cb) {
					variableList = getVarValues(file.contents.toString());

					cb(null, file);
				})
			)
			.on("finish", () => {
				resolve(variableList);
			})
			.on("error", reject);
	});
}

function getAllComponentVars() {
	return new Promise((resolve, reject) => {
		let variableList;

		gulp
			.src([
				`css/components/*.css`,
				`css/globals/*.css`,
				`custom.css`,
			], {
				cwd: varDir,
				allowEmpty: true,
				absolute: true,
			})
			.pipe(concat("everything.css"))
			.pipe(
				through.obj(function getAllVars(file, enc, cb) {
					variableList = getVarValues(file.contents.toString());

					cb(null, file);
				})
			)
			.on("finish", () => {
				resolve(variableList);
			})
			.on("error", reject);
	});
}

function bakeVars () {
	return gulp
		.src(["dist/index-vars.css"], { allowEmpty: true })
		.pipe(
			through.obj(async function doBake(file, _, cb) {
				const pkgName = getPackageFromPath(file.path);
				const pkg = require(path.join(dirs.components, pkgName, "package.json")) ?? {};
				const classNames = getClassNames(file.contents, pkgName);

				// Find all custom properties used in the component
				const variableList = getVarsFromCSS(file.contents);

				// Get vars defined inside of the component
				const componentVars = getVarsDefinedInCSS(file.contents);

				// Get vars in ALL components
				const vars = await getAllComponentVars();

				// Get literally all of the possible vars (even overridden vars that are different between themes/scales)
				const allVars = await getAllVars();

				// For each color stop and scale, filter the variables for those matching the component
				const errors = [];
				const usedVars = {};
				variableList.forEach((varName) => {
					if (varName.indexOf("spectrum-global") !== -1) {
						/* was: `⚠️  ${pkg.name} directly uses global variable ${varName}` */
					} else if (
						!allVars[varName] &&
						!varName.startsWith("--mod") &&
						!varName.startsWith("--highcontrast")
					) {
						if (componentVars.indexOf(varName) === -1) {
							errors.push(`${pkg.name} uses undefined variable ${varName}`);
						} else {
							/* was: `🔶 ${pkg.name} uses locally defined variable ${varName}` */
						}
					} else usedVars[varName] = vars[varName];
				});

				if (errors.length) {
					return cb(new Error(errors.join("\n")), file);
				}

				const contents = getVariableDeclarations(classNames, usedVars);
				const newFile = file.clone({ contents: false });
				newFile.path = path.join(file.base, `vars.css`);
				newFile.contents = Buffer.from(contents);

				cb(null, newFile);
			})
		)
		.pipe(gulp.dest("dist/"));
};


// Read in all variables used
// Read in all vars from recent DNA
// Include definitions if they refer to a variable, static if not
const buildIndexVars = () => gulp
	.src(["index.css"])
	.pipe(concat("index-vars.css"))
	.pipe(gulpPostcss(processors))
	.pipe(gulp.dest("dist/"));

exports.default =
    exports.build =
        exports.buildCSS =
            gulp.series(
                buildIndexVars,
                bakeVars,
                // function copyIndex() {
                //     // Just copy index.vars as index.css to maintain backwards compat
                //     return gulp
                //         .src("dist/index-vars.css")
                //         .pipe(
                //             rename((file) => {
                //                 file.basename = "index";
                //             })
                //         )
                //         .pipe(gulp.dest("dist/"));
                // }
            );
