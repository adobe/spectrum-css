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
const pug = require("gulp-pug");
const data = require("gulp-data");
const through = require("through2");

const fg = require("fast-glob");
const pugCompiler = require("pug");
const yaml = require("js-yaml");
const ext = require("replace-ext");
const lunr = require("lunr");
const npmFetch = require("npm-registry-fetch");

const {
	dirs,
	getPackageDependencyOrder,
	getFolderDependencyOrder
} = require("./utilities");

require("colors");

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
];

let templateData = {
	nav: [],
	pkg: JSON.parse(fs.readFileSync("package.json", "utf8")),
};

async function buildDocs_forDep(dep) {
	const metadata = require("@spectrum-css/vars");
	const dirName = path.dirname(require.resolve(path.join(dep, "package.json")));
	const dependencyOrder = await getPackageDependencyOrder(dirName) ?? [];

	// Drop package org
	dep = dep.split("/").pop();

	// If a dirName was not found, try the deprecated folder instead
	if (!dirName || dirName.split(path.sep).includes("node_modules")) {
		const storybookPath = require.resolve("@spectrum-css/preview");
		dirName = path.join(storybookPath, "deprecated", dep);

		if (!fs.existsSync(dirName)) return;
	}

	return new Promise((resolve, reject) => {
		gulp
			.src([`${dirName}/metadata/*.yml`], {
				allowEmpty: true,
			})
			.pipe(
				data(async function (file) {
					const componentDeps = dependencyOrder.map((dep) => dep.split("/").pop());
					componentDeps.push(dep);

					const pkg = require(path.join(dirs.components, dep, "package.json")) ?? {};

					const docsDeps = [...new Set([
						...minimumDeps ?? [],
						...componentDeps ?? [],
					])];

					let releaseDate;
					try {
						const data = await npmFetch.json(pkg.name);
						releaseDate = data.time[pkg.version];
						releaseDate = new Date(releaseDate).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						});
					} catch (err) {
						releaseDate = "Unreleased";
					}

					return {
						util: require(`${dirs.site}/util`),
						dnaVars: metadata,
						...templateData,
						pageURL: path.basename(file.basename, ".yml") + ".html",
						dependencyOrder: docsDeps,
						releaseDate,
						pkg,
					};
				})
			)
			.pipe(
				through.obj(function compilePug(file, _, cb) {
					const component = yaml.load(String(file.contents));
					if (!component.id) component.id = path.basename(file.basename, ".yml");

					const templateData = {
						component,
						...file.data ?? {},
					};

					file.path = ext(file.path, ".html");

					try {
						const templatePath = `${dirs.site}/templates/siteComponent.pug`;
						let compiled = pugCompiler.renderFile(templatePath, templateData);
						file.contents = Buffer.from(compiled);
					} catch (err) {
						return cb(err);
					}
					cb(null, file);
				})
			)
			.pipe(gulp.dest(dirs.publish))
			.on("end", resolve)
			.on("error", reject);
	});
}

// Combined
async function buildDocs_individualPackages() {
	const dependencies = await depUtils.getFolderDependencyOrder(dirs.components);
	const deprecatedDeps = fs.readdirSync(path.join(dirs.topLevel, ".storybook", "deprecated")).map((folder) => `@spectrum-css/${folder.split(path.sep).pop()}`);
	return Promise.all([
		...dependencies,
		...deprecatedDeps,
	].map((d) => Promise.all([
		buildDocs_forDep(d),
		copyDocs_forDep(d),
	])));
}

function buildSite_generateIndex() {
	const storybookPath = require.resolve("@spectrum-css/preview");
	return gulp
		.src([
			`${dirs.components}/*/metadata/*.yml`,
			`${storybookPath}/deprecated/*/*.yml`,
		])
		.pipe(
			(function () {
				const docs = [];
				const store = {};
				let latestFile = null;

				function readYML(file, _, cb) {
					const componentData = yaml.load(String(file.contents));
					const componentName = file.dirname
						.replace("/metadata", "")
						.split("/")
						.pop();

					const fileName = ext(file.basename, ".html");

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

					cb();
				}

				function endStream(cb) {
					const indexFile = latestFile.clone({ contents: false });
					indexFile.path = path.join(latestFile.base, "index.json");

					const index = lunr(function () {
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

					const storeFile = latestFile.clone({ contents: false });
					storeFile.path = path.join(latestFile.base, "store.json");
					storeFile.contents = Buffer.from(JSON.stringify(store));
					this.push(storeFile);

					cb();
				}

				return through.obj(readYML, endStream);
			})()
		)
		.pipe(gulp.dest(dirs.publish));
}

function buildSite_getData() {
	const storybookPath = require.resolve("@spectrum-css/preview");
	let nav = [];
	return gulp
		.src([
			`${dirs.components}/*/metadata/*.yml`,
			`${storybookPath}/deprecated/*/*.yml`,
		])
		.pipe(
			through.obj(function readYML(file, enc, cb) {
				const componentData = yaml.load(String(file.contents));
				const componentName = file.dirname
					.replace("/metadata", "")
					.split("/")
					.pop();

				const fileName = ext(file.basename, ".html");
				nav.push({
					name: componentData.name,
					component: componentName,
					hide: componentData.hide,
					href: fileName,
					description: componentData.description,
				});

				cb(null, file);
			})
		)
		.on("end", function () {
			templateData.nav = nav.sort(function (a, b) {
				return a.name <= b.name ? -1 : 1;
			});
		});
}

function copySite_resources() {
	return gulp.src(`${dirs.site}/resources/**`).pipe(gulp.dest(dirs.publish));
}

function buildSite_html() {
	return gulp
		.src(`${dirs.site}/*.pug`)
		.pipe(
			data(function (file) {
				return {
					util: require(`${dirs.site}/util`),
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
		.pipe(gulp.dest(dirs.publish));
}

function copySite_workflowIcons() {
	return gulp
		.src(
			path.join(
				path.dirname(require.resolve("@adobe/spectrum-css-workflow-icons")),
				"spectrum-icons.svg"
			),
		)
		.pipe(gulp.dest(`${dirs.publish}/img/`));
}

function copySite_uiIcons() {
	return gulp
		.src(require.resolve("@spectrum-css/ui-icons"))
		.pipe(gulp.dest(`${dirs.publish}/img/`));
}

const varDir = path.dirname(require.resolve("@spectrum-css/vars/package.json", {
	paths: [process.cwd(), path.join(process.cwd(), "../../")]
}));

function copySite_vars() {
	return gulp
		.src(path.join(varDir, "dist/spectrum-*.css"))
		.pipe(gulp.dest(`${dirs.publish}/dependencies/@spectrum-css/vars/`));
}

const expressVarDir = path.dirname(require.resolve("@spectrum-css/expressvars/package.json", {
	paths: [process.cwd(), path.join(process.cwd(), "../../")]
}));

function copySite_expressVars() {
	return gulp
		.src(path.join(expressVarDir, "dist/spectrum-*.css"))
		.pipe(gulp.dest(`${dirs.publish}/dependencies/@spectrum-css/expressvars/`));
}

const coreTokensDir = path.dirname(require.resolve("@spectrum-css/tokens/package.json", {
	paths: [process.cwd(), path.join(process.cwd(), "../../")]
})) ?? path.dirname(dirs.components, "tokens");


function copySite_coreTokens() {
	return gulp
		.src(path.join(coreTokensDir, "dist/**/*.css"))
		.pipe(gulp.dest(`${dirs.publish}/tokens/`));
}

function copySite_resources() {
	return gulp
		.src(path.join(dirs.site, "resources/**"))
		.pipe(gulp.dest(dirs.publish));
}

function copySite_loadicons() {
	return gulp
		.src(require.resolve("loadicons"))
		.pipe(gulp.dest(path.join(dirs.publish, "js/loadicons/")));
}

function copySite_lunr() {
	return gulp
		.src(require.resolve("lunr"))
		.pipe(gulp.dest(path.join(dirs.publish, "js/lunr/")));
}

function copySite_prism() {
	return gulp
		.src([
			`${path.dirname(require.resolve("prismjs"))}/themes/prism.css`,
			`${path.dirname(require.resolve("prismjs"))}/themes/prism-dark.css`,
		])
		.pipe(gulp.dest(path.join(dirs.publish, "css/prism/")));
}

function copySite_tokens() {
	return gulp
		.src([
			require.resolve("@spectrum-css/tokens"),
		])
		.pipe(gulp.dest(path.join(dirs.publish, "components/tokens/")));
}

function copySite_styles() {
	return gulp
		.src([
			`${require.resolve(path.join(dirs.components, "site"))}/dist/**`,
		])
		.pipe(gulp.dest(path.join(dirs.publish, "components/site/")));
}

async function copySite_packages() {
	const files = await fg(["*/package.json", "*/dist/**"], {
		cwd: dirs.components,
	});

	return Promise.all(files.map((file) => {
		const destDir = path.join(dirs.publish, "components");
		const dest = path.join(destDir, file.replace("/dist", ""));
		// Ensure the destination directory exists
		fse.ensureDirSync(path.dirname(dest), { recursive: true });
		// Copy the file to the destination
		fs.copyFileSync(path.join(dirs.components, file), dest);
	}));
}

// Used in server.js
exports.buildDocs_forDep = buildDocs_forDep;
exports.buildSite_getData = buildSite_getData;
exports.buildSite_html = buildSite_html;
exports.copySite_resources = copySite_resources;
exports.buildSite_pages = gulp.series(
	buildSite_getData,
	buildSite_html
);

// Used in index.js
exports.build = gulp.parallel(
	gulp.series(
		buildSite_getData,
		gulp.parallel(
			buildSite_generateIndex,
			buildDocs_individualPackages,
		),
		buildSite_html
	),
	copySite_workflowIcons,
	copySite_uiIcons,
	copySite_vars,
	copySite_expressVars,
	copySite_coreTokens,
	copySite_resources,
	copySite_tokens,
	copySite_styles,
	copySite_loadicons,
	copySite_lunr,
	copySite_prism,
	copySite_packages,
);
