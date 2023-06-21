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
const svgo = require("svgo");
const svgstore = require("svgstore");

exports.clean = async function (paths) {
	return require("rimraf").rimraf(paths, {
		glob: true,
	});
};

exports.sanitize = async function (file) {
	let content = await fsp.readFile(file, "utf8");

	const deleteFile = fsp.rm(file);
	const config = svgo.loadConfig();

	// Sanitize the icon data
	content = content.replace(/<defs>[\s\S]*?<\/defs>/m, "");
	content = content.replace(/<rect[\s\S]*?\/>/m, "");

	await config;

	let optimized;
	try {
		optimized =
			svgo.optimize(content, {
				path: file,
				...config,
			})?.data ?? content;
	} catch (err) {
		console.error(err);
	}

	// Ensure the file is deleted before proceeding
	await deleteFile;

	const newFileName = path.basename(file).split("_").pop().replace("Size", "");
	fsp.writeFile(path.join(path.dirname(file), newFileName), optimized, "utf8");

	return content;
};

exports.combined = async function (paths) {
	const makeCombinedDir = fsp.mkdir("combined", { recursive: true });

	const icons = new Map();
	// Fetch the data from the original SVG assets
	for (const file of await fg(paths)) {
		const processedName = path
			.basename(file, path.extname(file))
			.replace(/S_UI(.*?)_.*/, "$1");
		const modifier =
			"spectrum-UIIcon--" + path.dirname(file).split(path.sep).pop();

		const content = await exports
			.sanitize(file)
			.catch((err) => console.error(err));

		icons.set(processedName, {
			...(icons.get(processedName) ?? {}),
			[modifier]: content,
		});
	}

	// Make sure the directory exists before we start writing files
	await makeCombinedDir;

	const promises = [];
	// Sort the files so that the medium and large icons are combined in the same order
	for (const [key, icon] of [...icons.entries()].sort()) {
		const svg = require("svgcombiner")(key, icon);
		promises.push(fsp.writeFile(`combined/${key}.svg`, svg));
	}

	return Promise.all(promises);
};

exports.update = async () => {
	await exports.clean(["combined/**"]);
	await exports.combined(["medium/*.svg", "large/*.svg"]);
};

exports.createSprite = async (
	input,
	output,
	transform = (filename) => filename
) => {
	const sprites = svgstore({ inlineSVG: true });
	for (const file of await fg(input)) {
		const content = await fsp.readFile(file, "utf8");
		const identifier = transform(file);
		sprites.add(identifier, content);
	}

	const content = sprites.toString();
	return fsp.writeFile(output, content, "utf8");
};

await exports.createSprite(
	["combined/*.svg"],
	path.join(path.dirname(file), "../dist/spectrum-css-icons.svg"),
	(filename) => `spectrum-css-icon-${path.basename(filename)}`
);

await exports.createSprite(
	[`${size}/*.svg`],
	`spectrum-css-icons-${size}.svg`,
	(filename) =>
		`spectrum-css-icon-${path.basename(filename).replace(/S_UI(.*?)_.*/, "$1")}`
);

// function getSVGSpriteTask(size) {
// 	return function generateSVGSprite() {
// 		return gulp
// 			.src(`${size}/*.svg`)
// 			.pipe(
// 				rename(function (filePath) {
// 					filePath.basename =
// 						"spectrum-css-icon-" +
// 						filePath.basename.replace(/S_UI(.*?)_.*/, "$1");
// 				})
// 			)
// 			.pipe(
// 				svgstore({
// 					inlineSvg: true,
// 				})
// 			)
// 			.pipe(rename(`spectrum-css-icons-${size}.svg`))
// 			.pipe(gulp.dest("dist/"));
// 	};
// }

// const generateSVGSpriteMedium = getSVGSpriteTask("medium");
// const generateSVGSpriteLarge = getSVGSpriteTask("large");

// exports.buildIcons = gulp.parallel(
// 	generateSVGSpriteMedium,
// 	generateSVGSpriteLarge,
// 	generateSVGSprite
// );

require("make-runnable");
