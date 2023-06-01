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

const yaml = require("js-yaml");
const fg = require("fast-glob");
const npmFetch = require("npm-registry-fetch");

const fetchTokenData = require("../../tasks/fetchTokenData.js");

function fetchMetadata(metadata) {
	/* Component data required to fetch vars metadata */
	if (!metadata || !metadata.id || !metadata.name) return metadata;
	const { id, name, dnaStatus, cssStatus, status, examples = [] } = metadata;

	// const quiet = typeof process.env.VERBOSE === undefined || process.env.VERBOSE?.toLowerCase() !== 'true' ? true : false;
	const varsMetadata = require("@spectrum-css/vars") ?? {};
	const cleanId = id.replace("-", "");
	const idParts = id.split("-");

	/* Iterate over metadata keys and filter out component-specific properties */
	const dnaComponent = Object.keys(varsMetadata)
		.filter(
			(varKey) =>
				varKey.startsWith(`spectrum-${cleanId}`) ||
				varKey.startsWith(`spectrum-${idParts[0]}`)
		)
		.reduce((acc, varKey) => {
			/* Attempt to capture name, status, version */
			let key = varKey.match(
				`spectrum-${cleanId}(?:-[s|m|l|xl])?-(name|status|version)`
			)?.[1];
			if (!key)
				key = varKey.match(
					`spectrum-${cleanId}(?:-\\w+)*-(name|status|version)`
				)?.[1];
			if (!key)
				key = varKey.match(
					`spectrum-${idParts[0]}(?:-[s|m|l|xl])?${
						idParts[1] ? `-${idParts[1]}` : ``
					}(?:-\\w+)*-(name|status|version)`
				)?.[1];
			if (!key) return acc;

			acc[key] = varsMetadata[varKey];
			return acc;
		}, {}) ?? {
		name,
		status: dnaStatus ?? "Contribution",
	};

	return {
		...metadata,
		title: metadata.title ?? dnaComponent.name ?? name,
		cssStatus: status ?? "Unverified",
		status: status ?? "Contribution",
		examples: examples.map((example, idx) => {
			if (!example.id) example.id = `${name}${idx}`;

			/* All examples are verified if the outer component is verified */
			if (!example.status && status === "Verified") example.status = "Verified";

			if (dnaStatus === "Deprecated" || cssStatus === "Deprecated") {
				example.status = "Deprecated";
			} else if (dnaStatus === "Canon" || cssStatus === "Verified") {
				example.status = "Verified";
			}

			// The example is canon if the component is Canon and Verified
			if (dnaStatus === "Canon" && status === "Verified")
				example.dnaStatus = "Canon";

			return example ?? {};
		}),
	};
}

async function fetchStoryBook(storyPath) {
	const storybook = {};
	if (!fs.existsSync(storyPath)) return {};
	/**
	 * @todo: There is a more optimal way to do this however
	 * it requires the entire repo be using es6 modules.
	 **/
	const story = await fsp.readFile(storyPath, "utf8");
	if (!story) return;
	[
		...story.matchAll(
			/(?<key>\s{0,2}title|\s{0,2}description|\s{0,4}rootClass)\:\s*(\"|\')(?<data>[^\n].+)(\"|\'),?/g
		),
	].forEach(({ groups } = {}) => {
		if (groups && groups.key && groups.data) {
			storybook[groups.key.trim()] = groups.data;
		}
	});
	return storybook;
}

const isMigrated = (dependencies) =>
	!!(
		dependencies &&
		(dependencies["@spectrum-css/component-builder-simple"] ||
			dependencies["@spectrum-css/tokens"])
	);

/**
 * This type defines what information is available in the object passed
 * to the component rendering template.
 *
 * @typedef {object} PageMetadata
 * @property {string} PageMetadata.title - The human-readable title for the component's page
 * @property {string} PageMetadata.id - Page identifier; mapped to folder name from the project's filesystem
 * @property {string} PageMetadata.description - A short summary of the component's goals and usage
 * @property {string} PageMetadata.rootClass - The CSS class name for the component's root element
 * @property {PathLike} PageMetadata.folder - The rendered path to the component's page on the site
 * @property {string} PageMetadata.parent - The parent component's identifier for use in the navigation rendering
 * @property {import('type-fest').PackageJson} PageMetadata.package - The package.json data for this component
 * @property {PathLike} PageMetadata.sourceFile - The full path to the component's metadata source file
 * @property {PathLike} PageMetadata.stylesheet - The file name of the component's main stylesheet (typically either index.css or index-vars.css)
 * @property {string[]} PageMetadata.dependencies - An array of the component's dependencies
 * @property {object} PageMetadata.tokens
 * @property {string[]} PageMetadata.tokens.mods - An array of the component's modifier tokens
 * @property {string[]} PageMetadata.tokens.internal - An array of the component's internal tokens
 * @property {string[]} PageMetadata.tokens.a11y - An array of the component's accessibility tokens (--highcontrast)
 * @property {string[]} PageMetadata.tokens.other - An array of the component's other used tokens
 * @property {boolean} PageMetadata.migrated - True if the component has migrated to the new token system
 * @property {string} PageMetadata.releaseDate - Formatted, human-readable date when the package version was published
 * @property {string} PageMetadata.status -
 * @property {string} PageMetadata.cssStatus -
 * @property {string} PageMetadata.dnaStatus -
 * @property {string} PageMetadata.permalink - The url path to the published component page
 * @property {object[]} PageMetadata.examples -
 */
async function fetchRenderData(cwd) {
	if (!cwd) return;

	const folderName = cwd.split(path.sep).pop();

	// @todo, talk about how we can document these assets on the site...
	if (["expressvars", "tokens", "vars"].some((pkg) => folderName === pkg))
		return;

	const pages = (await fg("metadata/*.yml", { cwd, absolute: true })) ?? [];
	// Skip this component if there is no content to render
	if (pages.length === 0) return;

	/* Fetch package data for the package */
	const packageJSON = await fsp
		.readFile(path.join(cwd, "package.json"), "utf8")
		.then(JSON.parse)
		.catch(() => Promise.reject(`No package.json found in ${cwd}`));

	const storybook = await fetchStoryBook(
		path.join(cwd, `stories/${folderName}.stories.js`)
	);

	const releaseDate = await npmFetch
		.json(packageJSON.name)
		.then((data) => {
			if (!data || !data.time) return "Unreleased";
			const datetime = data.time[packageJSON.version] ?? data.time.latest;
			if (!datetime) return "Unreleased";
			return new Date(datetime).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		})
		.catch(() => "Unreleased");

	const bucketConfig = new Map([
		["mods", [/^--mod-/]],
		["internal", [/^--spectrum-(?!global|alias)\w+-/]],
		["globals", [/^--spectrum-global-/, /^--spectrum-alias-/]],
		["a11y", [/^--highcontrast-/]],
		["other", [/^--(?!system|mod|spectrum-(?:global|alias|\w+))-/]],
	]);

	// Initialize the token containers
	let tokens = [...bucketConfig.keys()].reduce(
		(acc, key) => ({ ...acc, [key]: new Map() }),
		{}
	);

	/* Read in the compiled CSS and parse content for token data */
	for (const filepath of await fg("dist/index-vars.css", {
		cwd,
		absolute: true,
	})) {
		/* Read the file */
		const content = await fsp
			.readFile(filepath, "utf8")
			.catch((err) => Promise.reject(err));
		if (!content) continue;

		/* Grep the CSS asset for custom properties */
		tokens = fetchTokenData(content, bucketConfig, tokens, {
			from: filepath,
		});
	}

	// Convert maps into arrays for easier template parsing
	Object.keys(tokens).forEach((k) => {
		tokens[k] = [...tokens[k]];
	});

	// @todo: detect these dependencies from the markup on the page
	// create a data map that connects the foldername with the root class
	const dependencies = [
		...new Set([
			folderName,
			...Object.keys(packageJSON.devDependencies ?? {})
				.filter((packageName) => {
					return (
						packageName.startsWith("@spectrum-css") &&
						!packageName.includes("-builder") &&
						!["vars", "tokens"].includes(packageName)
					);
				})
				.map((name) => name.replace(/^@spectrum-css\//, "")),
		]),
	];

	const stylesheet = fs.existsSync(path.join(cwd, `dist/index.css`))
		? `index.css`
		: fs.existsSync(path.join(cwd, `dist/index-vars.css`))
		? `index-vars.css`
		: null;

	const compiledData = [];
	for (const file of pages) {
		const fileBasename = path.basename(file, ".yml");

		/** @todo: this type should match the schema for component examples */
		/** @type {object} */
		const rawData = await fsp
			.readFile(file, "utf8")
			.then(yaml.load)
			.catch(() => Promise.reject(`Error parsing ${file}`));

		const data = fetchMetadata({
			id: (rawData.id ?? fileBasename ?? folderName)?.toLowerCase().trim(),
			...rawData,
		});

		if (!data) continue;

		if (data.id && data.id === folderName && data.title) {
			data.title = data.title.replace(/\(default\)/, "").trim();
		}

		let folder = folderName;
		let parent = "components";
		if (data.id && !data.id.includes("-")) {
			folder = data.id;
		} else if (data.id && data.id.includes("-")) {
			folder = `${folderName}/${data.id.replace(`${folderName}-`, "")}`;
			parent = folderName;
		}

		compiledData.push({
			// This needs to stay first; storybook and then rootdata may overwrite these values
			title: data.title ?? folderName,
			id: folderName,
			...storybook,
			...(data ?? {}),
			folder: `/components/${folder}`,
			permalink: `components/${folder}/index.html`,
			parent,
			package: packageJSON,
			releaseDate,
			dependencies,
			tokens,
			migrated: isMigrated(packageJSON.devDependencies),
			stylesheet,
			sourceFile: file,
		});
	}

	return compiledData;
}

/** @return PageMetadata[] */
module.exports = async () => {
	/* This iterates over all the component packages */
	const folders = await fg("*", {
		cwd: path.join(__dirname, "../../components"),
		onlyDirectories: true,
		absolute: true,
	});

	return await Promise.all(
		folders.map(async (f) => {
			const d = await fetchRenderData(f);
			if (!d) return;
			if (Array.isArray(d) && d.length === 0) return;
			if (Object.keys(d).length === 0) return;
			return d;
		})
	)
		.then((data) => {
			return data.flat(1).filter(Boolean);
		})
		.catch(console.error);
};
