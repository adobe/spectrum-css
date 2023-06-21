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
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");

const gulp = require("gulp");
const rename = require("gulp-rename");
const data = require("gulp-data");
const pug = require("gulp-pug");

const yaml = require("js-yaml");

const npmFetch = require("npm-registry-fetch");

const nav = [];

// Read in component metadata, and build the navigation, index, and store files
const site_buildData = async () => {
	const docs = [];
	const store = {};
	for (const metaPath of await fg(`*/metadata/*.yml`, {
		cwd: path.resolve(__dirname, "../components"),
		absolute: true,
	})) {
		const metadata = await fsp.readFile(metaPath);

		if (!metadata) continue;

		const componentData = yaml.load(metadata) ?? {};
		const component = path
			.dirname(file)
			.replace("/metadata", "")
			.split("/")
			.pop();
		const href = `${path.basename(file, "yml")}.html`;

		nav.push({
			...componentData,
			component,
			href,
		});

		docs.push({
			...componentData,
			href,
		});

		store[fileName] = {
			...componentData,
			href,
			component,
		};
	}

	const index = require("lunr")(function () {
		this.ref("href");
		this.field("name", { boost: 10 });
		this.field("description");

		docs.forEach(function (doc) {
			this.add(doc);
		}, this);
	});

	fs.writeFile(
		path.join(__dirname, "../dist/index.json"),
		JSON.stringify(index)
	);
	fs.writeFile(
		path.join(__dirname, "../dist/store.json"),
		JSON.stringify(store)
	);

	const pkg = await fsp
		.readFile(path.resolve(file.dirname, "../package.json"))
		.then(JSON.parse);

	let date;
	try {
		const data = await npmFetch.json(pkg.name);
		date = data.time[pkg.version];
		date = new Date(date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	} catch (err) {
		date = "Unreleased";
	}

	// legacy template?
	// const templatePath = `${sitePath}/templates/individualComponent.pug`;
	const compiled = require("pug").renderFile(
		`${__dirname}/templates/siteComponent.pug`,
		{
			util: require(`${__dirname}/util`),
			id: metadata.id ?? path.basename(file.basename, ".yml"),
			dnaVars: metadata,
			nav: nav.sort((a, b) => (a.name <= b.name ? -1 : 1)),
			pageURL: path.basename(file.basename, ".yml") + ".html",
			releaseDate: date,
			pkg,
		}
	);

	fs.writeFile(path.join(__dirname, "../dist/", href), compiled);
};

const site_assets = gulp.parallel(
	function site_resources() {
		return gulp
			.src(path.join(__dirname, "resources/**"))
			.pipe(gulp.dest(path.join(__dirname, "../dist/")));
	},
	function site_loadicons() {
		return gulp
			.src(require.resolve("loadicons"))
			.pipe(gulp.dest(path.join(__dirname, "../dist/js/loadicons/")));
	},
	function site_workflowIcons() {
		return gulp
			.src(
				path.join(
					path.dirname(require.resolve("@adobe/spectrum-css-workflow-icons")),
					"spectrum-icons.svg"
				)
			)
			.pipe(gulp.dest("dist/img/"));
	},
	function site_focusPolyfill() {
		return gulp
			.src(require.resolve("@adobe/focus-ring-polyfill"))
			.pipe(gulp.dest(path.join(__dirname, "../dist/js/focus-ring-polyfill/")));
	},
	function site_lunr() {
		return gulp
			.src(require.resolve("lunr"))
			.pipe(gulp.dest(path.join(__dirname, "../dist/js/lunr/")));
	},
	function site_prism() {
		return gulp
			.src([
				`${path.dirname(require.resolve("prismjs"))}/themes/prism.css`,
				`${path.dirname(require.resolve("prismjs"))}/themes/prism-dark.css`,
			])
			.pipe(gulp.dest(path.join(__dirname, "../dist/css/prism/")));
	}
);

const site_componentAssets = () =>
	gulp
		.src([
			`${path.resolve(__dirname, "../components")}/*/package.json`,
			`${path.resolve(__dirname, "../components")}/*/dist/**`,
			`!${path.resolve(__dirname, "../components")}/*/dist/docs/**`,
		])
		.pipe(
			rename((file) => {
				file.dirname = file.dirname.replace("/dist", "");
			})
		)
		.pipe(gulp.dest("dist/components/"));

const site_html = () =>
	gulp
		.src(`${__dirname}/*.pug`)
		.pipe(
			data((file) => ({
				util: require(`${__dirname}/util`),
				pageURL: path.basename(file.basename, ".pug") + ".html",
				dependencyOrder: [
					"icon",
					"statuslight",
					"link",
					"page",
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
				],
			}))
		)
		.pipe(
			pug({
				locals: {
					nav: nav.sort((a, b) => (a.name <= b.name ? -1 : 1)),
				},
			})
		)
		.pipe(gulp.dest("dist/"));

exports.build = gulp.parallel(
	gulp.series(site_buildData, site_html),
	site_assets,
	site_componentAssets
);

exports.serve = () => {
	return browserSync({
		startPath: "index.html",
		server: `${process.cwd()}/dist/`,
		notify: process.env.BROWSERSYNC_NOTIFY === "true" ? true : false,
		open: process.env.BROWSERSYNC_OPEN === "true" ? true : false,
		port: process.env.BROWSERSYNC_PORT ?? 3000,
	});
};

exports.watch = () => {
	function reload(cb) {
		browserSync.reload();
		if (cb) cb();
	}

	return gulp.parallel(
		() =>
			gulp.watch(
				`${path.join(__dirname, "../components")}/*/metadata/*.yml`,
				gulp.series(site_buildData, site_html, reload)
			),
		() =>
			gulp.watch(
				`${__dirname}/*.pug`,
				gulp.series(site_buildData, site_html, reload)
			),
		() =>
			gulp.watch(
				`${__dirname}/includes/*.pug`,
				gulp.series(site_buildData, site_html, reload)
			),
		() =>
			gulp.watch(
				[`${__dirname}/templates/siteComponent.pug`, `${__dirname}/util.js`],
				gulp.series(site_buildData, reload)
			),
		() =>
			gulp.watch(
				[`${__dirname}/resources/css/*.css`, `${__dirname}/resources/js/*.js`],
				gulp.series(
					() => gulp.src(`${__dirname}/resources/**`).pipe(gulp.dest("dist/")),
					function injectSiteResources() {
						return gulp
							.src(["dist/css/**/*.css", "dist/js/**/*.js"])
							.pipe(browserSync.stream());
					}
				)
			)
	);
};

exports.dev = gulp.series(
	exports.build,
	gulp.parallel(exports.serve, exports.watch)
);
