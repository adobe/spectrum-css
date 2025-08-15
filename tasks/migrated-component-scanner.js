#!/usr/bin/env node

/*!
 * Copyright 2025 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable no-console */

/**
 * this script scans the `components` directory and builds a list of storybook
 * components that are marked as migrated. it can either print a human-friendly
 * list to the console or write a structured json report to disk.
 *
 * important behavior:
 * - a single component directory can contain multiple story files (for example,
 *   text field and text area). when multiple story files are marked as migrated,
 *   this script returns one entry per story so each item appears in the output.
 * - console output is alphabetically sorted by title (case- and accent-insensitive)
 *   to make it easier to scan.
 *
 * usage:
 *   node tasks/migrated-component-scanner.js [--output=path/to/output.json]
 */

const fs = require("fs");
const path = require("path");

/**
 * Gets all component directory names from the components folder
 * @returns {string[]} Array of component directory names
 */
function getAllComponentDirectories() {
	try {
		// Get the absolute path to the components directory
		const componentsDir = path.resolve(process.cwd(), "components");

		// Read all directories in the components folder
		const directories = fs.readdirSync(componentsDir, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => dirent.name)
			.sort();

		return directories;
	} catch (error) {
		console.error("Error getting component directories:", error);
		return [];
	}
}

/**
 * Gets all component directories that have a specific status
 * @param {string} statusType Status type to filter by (e.g., 'migrated')
 * @returns {string[]} Array of matching component directory names
 */
function getComponentsByStatus(statusType) {
	try {
		const componentsDir = path.resolve(process.cwd(), "components");
		const directories = getAllComponentDirectories();

		if (!statusType) return directories;

		// Filter directories that have status type in their stories
		const matchingComponents = directories.filter(dir => {
			const storiesDir = path.join(componentsDir, dir, "stories");

			// Check if stories directory exists
			if (!fs.existsSync(storiesDir)) return false;

			// Get all story files
			const storyFiles = fs.readdirSync(storiesDir)
				.filter(file => file.endsWith(".stories.js"));

			// Check each story file for status type
			return storyFiles.some(file => {
				const storyContent = fs.readFileSync(path.join(storiesDir, file), "utf8");
				return storyContent.includes(`type: "${statusType}"`);
			});
		});

		return matchingComponents;
	} catch (error) {
		console.error(`Error getting components with status ${statusType}:`, error);
		return [];
	}
}

/**
 * Extracts the title from a Storybook .stories.js file (to display the title in a list with proper capitalization)
 * @param {string} storyFilePath - Absolute path to the .stories.js file
 * @returns {string|null} The extracted title, or null if not found
 */
function extractTitleFromStoryFile(storyFilePath) {
	try {
		const content = fs.readFileSync(storyFilePath, "utf8");
		const match = content.match(/title:\s*["'`](.+?)["'`]/);
		if (match && match[1]) {
			return match[1];
		}
	} catch (error) {
		console.warn(`Could not extract title from ${storyFilePath}:`, error);
	}
	return null;
}

/**
 * Generates the URL fragment from a component's title
 * @param {string} title - The title to generate a URL fragment from
 * @returns {string} The generated URL fragment
 */
function generateUrlFragmentFromTitle(title) {
	return title
		.split("/")
		.map(segment =>
			segment
				.trim()
				.toLowerCase()
				.replace(/[^a-z0-9 -]/g, "") // remove special chars except space and dash (i.e "in-line alert")
				.replace(/\s+/g, "-")       // replace spaces with dash
		)
		.join("-")
		.replace(/-+/g, "-"); // collapse multiple dashes
}

/**
 * generate a list of migrated components with titles and doc links.
 *
 * notes on shape of data:
 * - the returned `components` array can include multiple entries for a single
 *   component directory when there are multiple migrated story files present.
 * - each entry includes the human-friendly title and a url fragment derived
 *   from that title for linking.
 *
 * @returns {{ total: number, migrated: number, components: Array<{name: string, title: string, url: string}>, generatedAt: string }}
 *   information about migrated components and counts.
 */
function generateMigratedComponentsReport() {
	const allComponents = getAllComponentDirectories();
	const migratedComponents = getComponentsByStatus("migrated");

	// build entries per component directory depending on how many story files
	// inside the directory are marked as `type: "migrated"`.
	const migratedComponentData = migratedComponents.flatMap((dir) => {
		const storiesDir = path.resolve(process.cwd(), "components", dir, "stories");
		if (!fs.existsSync(storiesDir)) {
			// no stories directory; fall back to a single, generic entry so the component still shows up in the report.
			return [{
				name: dir,
				title: dir,
				url: dir,
			}];
		}

		const storyFiles = fs.readdirSync(storiesDir).filter(file => file.endsWith(".stories.js"));

		const entries = [];
		for (const file of storyFiles) {
			const filePath = path.join(storiesDir, file);
			let content = "";
			try {
				content = fs.readFileSync(filePath, "utf8");
			} catch (_) {
				// if a file cannot be read, skip it and continue with others.
				continue;
			}

			// only include story files that declare `type: "migrated"` in their metadata.
			if (!content.includes("type: \"migrated\"")) continue;

			const title = extractTitleFromStoryFile(filePath) || dir;
			const urlFragment = generateUrlFragmentFromTitle(title);
			entries.push({
				name: dir,
				title,
				url: urlFragment,
			});
		}

		// if there are stories but none are marked as migrated, include a single
		// fallback entry for the directory to keep counts consistent.
		if (entries.length === 0) {
			const urlFragment = generateUrlFragmentFromTitle(dir);
			return [{
				name: dir,
				title: dir,
				url: urlFragment,
			}];
		}

		return entries;
	});

	// sort the final array alphabetically by title (fallback to name),
	// keeping the full objects intact for json output and rendering.
	const componentsSorted = migratedComponentData
		.slice()
		.sort((a, b) => (a.title || a.name)
			.localeCompare(b.title || b.name, undefined, { sensitivity: "base" }));

	return {
		total: allComponents.length,
		migrated: migratedComponentData.length,
		components: componentsSorted,
		generatedAt: new Date().toISOString()
	};
}

// Export the functions for use in other modules
module.exports = {
	getAllComponentDirectories,
	getComponentsByStatus,
	generateMigratedComponentsReport
};

// Main execution - only runs when script is executed directly in the terminal
if (require.main === module) {
	(async () => {
		const args = process.argv.slice(2);
		const outputArg = args.find(arg => arg.startsWith("--output="));
		const outputPath = outputArg ? outputArg.split("=")[1] : null;

		console.log("Scanning for migrated components...");
		const report = generateMigratedComponentsReport();

		if (outputPath) {
			const outputDir = path.dirname(outputPath);
			if (!fs.existsSync(outputDir)) {
				fs.mkdirSync(outputDir, { recursive: true });
			}

			fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
			console.log(`Report saved to ${outputPath}`);
			console.log(`Found ${report.migrated} migrated components out of ${report.total} total components.`);
		} else {
			console.log("Migrated Components:");
			const componentNames = report.components
				.map(component => component.title || component.name || component)
				.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
			console.log(componentNames.join(", "));
			console.log(`\nTotal: ${report.migrated} out of ${report.total} components are migrated.`);
		}
	})();
}
