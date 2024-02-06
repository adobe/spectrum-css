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
const fse = require('fs-extra');
const path = require("path");

const gulp = require("gulp");

const browserSync = require("browser-sync");

const { dirs, getPackageFromPath } = require("./utilities");

const {
	buildSite_getData,
	build,
	buildDocs_forDep,
	buildSite_html,
	buildSite_pages,
	copySite_resources,
} = require("./builder.js");

/* Run the specified gulp task for the given package */
function runComponentTask(packageDir, task = "build", callback = () => {}) {
	// Drop org
	packageName = packageDir.split("/").pop();

	const gulpfile = path.join(packageDir, "gulpfile.js");

	if (!fs.existsSync(gulpfile)) return callback();

	const cwd = process.cwd();
	const tasks = require(gulpfile) ?? {};

	if (tasks[task]) {
		process.chdir(packageDir);

		tasks[task]((err) => {
			process.chdir(cwd);
			callback(err);
		});
	} else callback(new Error(
		`Task '${packageName.yellow}:${task.yellow}' not found!`
	));
}

/* Watch for changes to globs matching files within packages, execute task for that package, and copy/inject specified files */
function watchWithinPackages(glob, files) {
	gulp
		.watch(glob, { followSymlinks: false })
		.on("change", (filePath) => {
			const packageName = getPackageFromPath(filePath);
			const packageDir = path.dirname(require.resolve(`@spectrum-css/${packageName}/package.json`));

			return runComponentTask(packageDir, "build", (err) => {
				if (err) return;
				return gulp
					.src(`${packageDir}/dist/${files}`)
					.pipe(gulp.dest(`dist/components/${packageName}/`));
			});
		});
}

// run build on a selected set of packages that depend on commons
// yay: faster than 'rebuild everything' approach
// boo: must add new packages here as commons grows
function buildDepenenciesOfCommons() {
	return Promise.all([
		`${dirs.components}/actionbutton`,
		`${dirs.components}/button`,
		`${dirs.components}/clearbutton`,
		`${dirs.components}/closebutton`,
		`${dirs.components}/infieldbutton`,
		`${dirs.components}/logicbutton`,
		`${dirs.components}/picker`,
		`${dirs.components}/pickerbutton`,
	].map((package) => runComponentTask(package)));
}

function copyPackages() {
	fg.sync(["*/package.json", "*/dist/**"], {
		cwd: dirs.components,
	})?.forEach((file) => {
		const destDir = path.join(dirs.publish, "components");
		const dest = path.join(destDir, file.replace("/dist", ""));
		fse.ensureDirSync(path.dirname(dest), { recursive: true });
		// Copy the file to the destination
		fs.copyFileSync(path.join(dirs.components, file), dest);
	});
}

function watch() {
	browserSync({
		startPath: "index.html",
		server: dirs.publish,
		notify: true,
		open: true,
		port: process.env.PORT ?? 3000,
	});

	gulp.watch(
		[`${dirs.components}/commons/*.css`],
		gulp.series(
			buildDepenenciesOfCommons,
			copyPackages,
			browserSync.reload
		)
	);

	watchWithinPackages(
		`${dirs.components}/*/index.css`,
		"*.css"
	);

	watchWithinPackages(
		`${dirs.components}/*/themes/{spectrum,express}.css`,
		"*.css"
	);


	let changedFile;
	gulp.watch(`${dirs.components}/*/metadata/*.yml`,
		{
			// Otherwise we get infinite loops because chokidar gets all crazy with symlinked deps
			followSymlinks: false,
		},
		(done) => {
			if (!changedFile) {
				done();
				return;
			}

			const package = getPackageFromPath(changedFile);
			const packageDir = path.dirname(
				require.resolve(`@spectrum-css/${package}/package.json`)
			);

			try {
				gulp.series(
					// Get data first so nav builds
					buildSite_getData,
					() => buildDocs_forDep(packageDir),
				)();
			} catch (error) {
				done(err);
				changedFile = null;
			} finally {
				done(err);
				changedFile = null;
				browserSync.reload();
			}
		}
	).on("change", (filePath) => {
		if (changedFile === null) changedFile = filePath;
	});


	gulp.watch(`${dirs.site}/*.pug`, gulp.series(
		buildSite_pages,
		browserSync.reload
	));

	gulp.watch(
		`${dirs.site}/includes/*.pug`,
		gulp.series(
			gulp.parallel(
				buildSite_html,
				build
			),
			browserSync.reload
		)
	);

	gulp.watch(
		[`${dirs.site}/templates/siteComponent.pug`, `${dirs.site}/util.js`],
		gulp.series(build, browserSync.reload)
	);

	gulp.watch(
		[`${dirs.site}/resources/css/*.css`, `${dirs.site}/resources/js/*.js`],
		gulp.series(
			copySite_resources,
			function injectSiteResources() {
				return gulp
					.src(["dist/css/**/*.css", "dist/js/**/*.js"])
					.pipe(browserSync.stream());
			}
		)
	);
}

exports.watch = watch;
