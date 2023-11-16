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

const gulp = require("gulp");
const pug = require("gulp-pug");
const data = require("gulp-data");
const through = require("through2");
const ext = require("replace-ext");

require("colors");

const lunr = require("lunr");
const yaml = require("js-yaml");
const pugCompiler = require("pug");
const npmFetch = require("npm-registry-fetch");
const browserSync = require("browser-sync");

const componentDir = path.join(__dirname, "../components");

function buildSite_resources() {
	return gulp
		.src(path.join(__dirname, "resources/**"))
		.pipe(gulp.dest(path.join(__dirname, "../dist/")));
}

function buildSite_loadicons() {
	return gulp
		.src(require.resolve("loadicons"))
		.pipe(gulp.dest(path.join(__dirname, "../dist/js/loadicons/")));
}

function buildSite_lunr() {
	return gulp
		.src(require.resolve("lunr"))
		.pipe(gulp.dest(path.join(__dirname, "../dist/js/lunr/")));
}

function buildSite_prism() {
	return gulp
		.src([
			`${path.dirname(require.resolve("prismjs"))}/themes/prism.css`,
			`${path.dirname(require.resolve("prismjs"))}/themes/prism-dark.css`,
		])
		.pipe(gulp.dest(path.join(__dirname, "../dist/css/prism/")));
}

function buildSite_tokens() {
	return gulp
		.src([
			path.dirname(require.resolve("@spectrum-css/tokens")),
		])
		.pipe(gulp.dest(path.join(__dirname, "../dist/components/tokens/")));
}

const minimumDeps = [
	"icon",
	"statuslight",
	"link",
	"page",
	"site",
	"typography",
	"tooltip",
	"sidenav",
	"actionbutton",
	"button",
	"textfield",
	"clearbutton",
	"search",
	"menu",
	"fieldlabel",
	"picker",
	"popover",
	"underlay",
	"card",
	"divider",
	"illustratedmessage",
	"accordion",
	"table",
	"alertbanner"
];

const templateData = {
	nav: [],
	pkg: JSON.parse(fs.readFileSync("package.json", "utf8")),
};

function buildSite_getData() {
	return gulp
		.src([
			`${componentDir}/*/metadata/*.yml`,
			`deprecated/*/*.yml`,
		])
		.pipe(
			(function () {
				const nav = [];
				const docs = [];
				const store = {};
				let latestFile;

				function readYML(file, _, cb) {
					const componentName = file.dirname
						.replace("/metadata", "")
						.split("/")
						.pop();

					const componentData = yaml.load(String(file.contents)) ?? {};

					const fileName = ext(file.basename, ".html");
					nav.push({
						name: componentData.name,
						component: componentName,
						hide: componentData.hide,
						fastLoad: componentData.fastLoad,
						href: fileName,
						description: componentData.description,
						isDeprecated: file.dirname.includes("deprecated"),
					});

					docs.push({
						href: fileName,
						name: componentData.name,
						description: componentData.description,
					});

					store[fileName] = {
						href: fileName,
						name: componentData.name,
						component: componentName,
						description: componentData.description,
					};

					latestFile = file;

					cb(null, file);
				}

				function endStream(cb) {
					templateData.nav = nav.sort((a, b) => a.name <= b.name ? -1 : 1);

					let indexFile = latestFile.clone({ contents: false });
					indexFile.path = path.join(latestFile.base, "index.json");

					let index = lunr(function () {
						this.ref("href");
						this.field("name", { boost: 10 });
						this.field("description");

						docs.forEach(function (doc) {
							this.add(doc);
						}, this);
					});

					// Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript

					indexFile.contents = Buffer.from(JSON.stringify(index));
					this.push(indexFile);

					let storeFile = latestFile.clone({ contents: false });
					storeFile.path = path.join(latestFile.base, "store.json");
					storeFile.contents = Buffer.from(JSON.stringify(store));
					this.push(storeFile);

					cb();
				}

				return through.obj(readYML, endStream);
			})()
		)
		.pipe(gulp.dest("dist/"));
}

async function buildSite_forPackage(packageName) {
	const dirName = fs.existsSync(path.join(componentDir, packageName)) ? path.join(componentDir, packageName) : path.join(__dirname, "deprecated", packageName);

	const deprecatedComponents = fs.readdirSync(path.join(__dirname, 'deprecated'), { withFileTypes: true })
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name) ?? [];

	return gulp.src([
		`metadata/*.yml`,
		`*.yml`,
	], {
		allowEmpty: true,
		cwd: dirName,
	})
	.pipe(
		data(async function (file) {
			const pkg = require(path.join(dirName, "package.json")) ?? {
				name: `@spectrum-css/${packageName}`,
			};
			const docsDeps = [...new Set(minimumDeps.concat([packageName]))];

			const npmData = await npmFetch.json(pkg.name);
			const date = pkg.version && npmData?.time?.[pkg.version] ? new Date(npmData.time[pkg.version]).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			}) : "Unreleased";

			return {
				util: require("./util.js"),
				vars: require("@spectrum-css/vars") ?? {},
				...templateData,
				pageURL: path.basename(file.basename, ".yml") + ".html",
				dependencyOrder: docsDeps.filter((dep) => !deprecatedComponents.includes(dep)),
				deprecatedComponents,
				releaseDate: date,
				pkg,
			};
		})
	)
	.pipe(
		through.obj(function compilePug(file, _, cb) {
			let component;
			try {
				component = yaml.load(String(file.contents));
			} catch (loadError) {
				throw loadError;
			}

			if (!component.id) component.id = path.basename(file.basename, ".yml");

			file.path = ext(file.path, ".html");

			const templatePath = `templates/siteComponent.pug`;
			const compiled = pugCompiler.renderFile(templatePath, {
				component,
				...file.data ?? {}
			});

			file.contents = Buffer.from(compiled);

			cb(null, file);
		})
	)
	.pipe(gulp.dest(path.join(__dirname, "../dist/")));
}

async function buildSite_forPackages() {
	const components = fs.readdirSync(componentDir, { withFileTypes: true })
		.filter(dirent => (dirent.isDirectory() || dirent.isSymbolicLink()) && fs.existsSync(path.join(componentDir, dirent.name, "package.json")))
		.map(dirent => dirent.name);

	return Promise.all(components.map(buildSite_forPackage));
}

function buildSite_html() {
	return gulp
		.src(`*.pug`)
		.pipe(
			data(function (file) {
				return {
					util: require(`./util.js`),
					pageURL: path.basename(file.basename, ".pug") + ".html",
					dependencyOrder: minimumDeps,
				};
			})
		)
		.pipe(
			pug({
				locals: templateData,
			})
		)
		.pipe(gulp.dest("../dist/"));
}

const copySiteResources = gulp.parallel(
	buildSite_resources,
	buildSite_tokens,
	buildSite_loadicons,
	buildSite_lunr,
	buildSite_prism,
);

function buildSite_copyFreshResources() {
	return gulp.src(`resources/**`).pipe(gulp.dest("../dist/"));
}

const build = gulp.series(
	buildSite_getData,
	gulp.parallel(buildSite_forPackages, buildSite_html, copySiteResources)
);

function serve() {
	browserSync({
		startPath: "index.html",
		server: {
			baseDir: path.join(__dirname, "../dist/"),
			middleware: function (_, res, next) {
			  res.setHeader('Access-Control-Allow-Origin', '*');
			  next();
			}
		},
		notify: process.env.BROWSERSYNC_NOTIFY === "true" ? true : false,
		open: process.env.BROWSERSYNC_OPEN === "true" ? true : false,
		port: process.env.BROWSERSYNC_PORT ?? 3000,
	});
}

function watch() {
	serve();

	const packageDocs = gulp.watch(
		[
			"../components/*/metadata/*.yml",
			"deprecated/**/*.yml",
		],
		{
			followSymlinks: false,
			ignoreInitial: false,
			cwd: __dirname,
		}
	);

	packageDocs.on("change", function (changedFile) {
		const packageName = path.relative(componentDir, changedFile)?.split(path.sep)[0];
		return gulp.series(
			buildSite_getData,
			gulp.parallel(
				rebuildComponent = () => buildSite_forPackage(packageName),
				buildSite_html,
			),
			browserSync.reload
		);
	});

	gulp.watch(
		["*.pug", "includes/*.pug", "templates/siteComponent.pug", "util.js"],
		{
			followSymlinks: false,
			ignoreInitial: false,
		},
		gulp.series(build, browserSync.reload)
	);

	gulp.watch(
		[`resources/css/*.css`, `resources/js/*.js`],
		{
			followSymlinks: false,
			ignoreInitial: false,
		},
		gulp.series(
			buildSite_copyFreshResources,
			injectSiteResources = () => gulp
				.src(["../dist/css/**/*.css", "../dist/js/**/*.js"])
				.pipe(browserSync.stream()),
			browserSync.reload
		)
	);
}

exports.dev = watch;
exports.default = exports.build = build;
