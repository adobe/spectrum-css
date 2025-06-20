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
 * This script scans the components directory and generates a list of components
 * with a migrated status. The output can be saved to a JSON file or printed to console.
 *
 * Usage:
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
 * Generates a list of migrated components
 * @returns {Object} Information about migrated components
 */
function generateMigratedComponentsReport() {
	const allComponents = getAllComponentDirectories();
	const migratedComponents = getComponentsByStatus("migrated");

	return {
		total: allComponents.length,
		migrated: migratedComponents.length,
		components: migratedComponents,
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
			console.log(report.components.join(", "));
			console.log(`\nTotal: ${report.migrated} out of ${report.total} components are migrated.`);
		}
	})();
}
