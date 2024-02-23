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
const browserSync = require("browser-sync");

const docs = require("../docs");

const dirs = {
	components: path.join(__dirname, "../../../components"),
	site: path.join(__dirname, "../../../site"),
	root: path.join(__dirname, "../../.."),
};

/*
  Run the specified gulp task for the given package
*/
function runComponentTask(packageDir, task, callback) {
	packageName = packageDir.split("/").pop();

	const gulpfile = path.join(packageDir, "gulpfile.js");

	if (!fs.existsSync(gulpfile)) {
		return callback();
	}

	const cwd = process.cwd();

	process.chdir(packageDir);

	const tasks = require(gulpfile);

	if (tasks[task]) {
		tasks[task](function (err) {
			process.chdir(cwd);

			callback(err);
		});
	} else {
		process.chdir(cwd);

		callback(new Error(
			`Task '${packageName.yellow}:${task.yellow}' not found!`
		));
	}
}

/*
  Run a task on every package
*/
function runTaskOnPackages(task, packages) {
	return new Promise(async (resolve, reject) => {
		if (!packages || !packages.length) {
			return reject(`No packages provided for task ${task}!`);
		}

		function processPackage() {
			var packageDir = packages.shift();

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
				resolve();
			}
		}

		// Kick off a gulp build for each package
		processPackage();
	});
}

// run buildLite on a selected set of packages that depend on commons
// yay: faster than 'rebuild everything' approach
// boo: must add new packages here as commons grows
function buildDependenciesOfCommons() {
	return runTaskOnPackages("buildLite", [
		`${dirs.components}/actionbutton`,
		`${dirs.components}/button`,
		`${dirs.components}/closebutton`,
		`${dirs.components}/logicbutton`,
		`${dirs.components}/modal`,
		`${dirs.components}/picker`,
		`${dirs.components}/popover`,
		`${dirs.components}/tooltip`,
		`${dirs.components}/underlay`,
	]);
}

function serve() {
	return browserSync({
		startPath: "index.html",
		server: `${process.cwd()}/dist/`,
		notify: process.env.BROWSERSYNC_NOTIFY === "true" ? true : false,
		open: process.env.BROWSERSYNC_OPEN === "true" ? true : false,
		port: process.env.BROWSERSYNC_PORT ?? 3000,
	});
}

function getPackageFromPath(filePath) {
	const componentMatch = filePath.match(`${dirs.components}\/(.*?)\/`);
	if (componentMatch?.[1]) return componentMatch[1];

	const deprecatedMatch = filePath.match(`.storybook\/deprecated\/(.*?)\/`);
	if (deprecatedMatch?.[1]) return deprecatedMatch?.[1];
	return;
}

/*
  Watch for changes to globs matching files within packages, execute task for that package, and copy/inject specified files
*/
function watchWithinPackages(glob, task, files) {
	let watcher = gulp.watch(
		glob,
		{
			// Otherwise we get infinite loops because chokidar gets all crazy with symlinked deps
			followSymlinks: false,
		},
		function handleChanged(done) {
			if (!changedFile) {
				done();
				return;
			}

			let packageName = getPackageFromPath(changedFile);
			let packageDir = path.dirname(require.resolve(`@spectrum-css/${packageName}/package.json`));

			if (packageDir.split(path.sep).includes("node_modules")) {
				return done();
			}

			if (typeof task === "function") {
				task(changedFile, packageName, (err) => {
					done(err);
					changedFile = null;
				});
			} else {
				runComponentTask(packageDir, task, (err) => {
					if (err) {
						changedFile = null;
						return done(err);
					}

					// Copy files
					gulp
						.src(`${packageDir}/dist/${files}`)
						.pipe(gulp.dest(`dist/components/${packageName}/`))
						.on("end", () => {
							// Inject
							gulp
								.src(`dist/components/${packageName}/${files}`)
								.pipe(browserSync.stream());

							changedFile = null;

							done();
						})
						.on("error", (err) => {
							changedFile = null;

							done(err);
						});
				});
			}
		}
	);

	let changedFile = null;
	watcher.on("change", (filePath) => {
		if (changedFile === null) {
			changedFile = filePath;
		}
	});
}

function reload(cb) {
	browserSync.reload();
	if (cb) cb();
}

function watchSite() {
	gulp.watch(`${dirs.site}/*.pug`, gulp.series(docs.buildSite_pages, reload));

	gulp.watch(
		`${dirs.site}/includes/*.pug`,
		gulp.series(gulp.parallel(docs.buildSite_html, docs.buildDocs), reload)
	);

	gulp.watch(
		[`${dirs.site}/templates/siteComponent.pug`, `${dirs.site}/util.js`],
		gulp.series(gulp.parallel(docs.buildDocs), reload)
	);

	gulp.watch(
		[`${dirs.site}/resources/css/*.css`, `${dirs.site}/resources/js/*.js`],
		gulp.series(
			docs.buildSite_copyFreshResources,
			function injectSiteResources() {
				return gulp
					.src(["dist/css/**/*.css", "dist/js/**/*.js"])
					.pipe(browserSync.stream());
			}
		)
	);
}

function watchCommons() {
	gulp.watch(
		[`${dirs.components}/commons/*.css`],
		gulp.series(
			buildDependenciesOfCommons,
			docs.buildDocs_individualPackages,
			reload
		)
	);
}

function watch() {
	serve();

	watchCommons();

	watchWithinPackages(
		`${dirs.components}/*/{index,skin}.css`,
		"buildMedium",
		"*.css"
	);
	watchWithinPackages(
		`${dirs.components}/*/themes/{spectrum,express}.css`,
		"buildMedium",
		"*.css"
	);

	watchWithinPackages(
		[
			`${dirs.components}/*/metadata/*.yml`,
			`${dirs.root}/.storybook/deprecated/*/*.yml`,
		],
		(_, package, done) => {
			const packageDir = path.dirname(require.resolve(`@spectrum-css/${package}/package.json`));

			// Do this as gulp tasks to avoid premature stream termination
			try {
				gulp.series(
					// Get data first so nav builds
					docs.buildSite_getData,
					buildDocs_forDep = () => docs.buildDocs_forDep(packageDir),
				)();
				// this catches yaml parsing errors
				// should stop the series from running
			} catch (error) {
				done(error);
			} finally {
				// we have to do this
				// or gulp will get wedged by the error
				done();
				reload();
			}
		}
	);

	watchSite();
}

exports.watch = watch;
