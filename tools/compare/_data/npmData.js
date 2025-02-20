import Fetch from "@11ty/eleventy-fetch";
import { createPatch, diffCss, diffJson, diffLines } from "diff";
import Diff2Html from "diff2html";
import fg from "fast-glob";
import fs from "node:fs";
import path from "node:path";
import { extract } from "tar";

const fsp = fs.promises;

export default async function () {
	let name = "@spectrum-css/accordion";
	let version;

	let url = `https://registry.npmjs.org/${name ? `${name}/` : ""}${version ?? ""}`;

	let json;
	try {
		json = await Fetch(url, {
			duration: "1d",
			type: "json",
		});
	}
	catch (error) {
		console.error(`Failed to fetch ${url}`);
		console.error(error);
		return;
	}

	let tag;
	// If the target is specified, use that as the tag to compare against
	if (version && json.versions?.[version.replace(/^v/, "")]) {
		tag = version;
	}
	// If the component exists on npm, fetch the latest release data
	else if (json["dist-tags"]?.[version ?? "latest"]) {
		tag = json["dist-tags"]?.[version ?? "latest"];
	}

	if (!tag) {
		console.error(`No version found for ${name}@${version}`);
		return;
	}

	const tarballUrl = json.versions?.[tag]?.dist?.tarball;

	if (!tarballUrl) {
		console.error(`No tarball found for ${name}@${tag}`);
		return;
	}

	/** @type {Buffer} */
	let result;
	try {
		result = await Fetch(tarballUrl);
	}
	catch (error) {
		console.error(`Failed to fetch release content for ${name}`, error);
		return;
	}

	// Write the tarball to a temporary file
	await fsp.writeFile(".cache/tarball.tgz", result, { encoding: "binary" });
	const outputPath = path.join(".cache", "extracted", name.split(path.sep).pop());

	// Clean up the output directory
	await fsp.rm(outputPath, { recursive: true });

	// Ensure output directory exists
	await fsp.mkdir(outputPath, { recursive: true });

	// We can extract the tarball contents using the tar-stream library
	await extract({
		file: ".cache/tarball.tgz",
		cwd: outputPath,
		// Only unpack the dist folder
		filter: (filepath) => filepath.startsWith(`package${path.sep}dist`) && [/\.gz$/, /\.min\./].every((ext) => !ext.test(filepath)),
		// Strip the first two directories from the tarball
		strip: 2,
	}).catch((err) => {
		console.error("Failed to extract tarball", err);
		return;
	});

	// @todo can we read these without writing to disk?
	// Read the contents of the extracted directory
	const files = await fg(["**/*"], { cwd: outputPath, onlyFiles: true });

	// Using a set, we can remove duplicates from the list of compiled assets
	// const filelist = new Set();

	// Create a map to store the file data
	const fileMap = new Map();
	const patches = [];
	for (const file of files) {
		// Read the contents of the file
		const content = fs.readFileSync(path.join(outputPath, file), "utf-8");

		const patch = createPatch(file, content, "");
		let diff;

		if (/\.css$/.test(file)) {
			diff = diffCss(content, "");
		}
		else if (/\.json$/.test(file)) {
			diff = diffJson(content, "");
		}
		else {
			diff = diffLines(content, "");
		}

		// Reflect if the component has a diff to the data
		fileMap.set(file, {
			...json,
			hasDiff: diff.length > 1,
		});

		if (!patch) continue;

		patches.push(patch);
	}

	const html = Diff2Html.html(patches.map(patch => Diff2Html.parse(patch)).flat(), {
		drawFileList: true,
		matching: "lines",
		outputFormat: "side-by-side",
		renderNothingWhenEmpty: true,
	});

	return [{
		name,
		version: tag,
		fileMap,
		html
	}];
}
