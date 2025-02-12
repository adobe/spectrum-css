/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require("@yarnpkg/types");

const fg = require("fast-glob");
const semver = require("semver");

/**
 * The workspace object used in the constraints function
 * @typedef {import('@yarnpkg/types').Yarn.Constraints.Workspace} Workspace
 * @typedef {import('@yarnpkg/types').Yarn.Constraints.Context} Context
 */

module.exports = defineConfig({
	async constraints({ Yarn }) {
		/**
		 * Fetch a list of all the component workspaces using a glob pattern
		 * @type {string[]} components
		 */
		const components = fg.sync("components/*", {
			cwd: __dirname,
			onlyDirectories: true,
			ignore: ["components/commons"],
		});

		/**
		 *
		 * @param {Workspace} workspace
		 * @returns {boolean}
		 */
		function isComponent(workspace) {
			return components.includes(workspace.cwd);
		}

		const semverSort = (a, b) => {
			// Push latest & * to the bottom because we want to use the highest *specified* version
			if (["latest", "*"].includes(a)) return 0;
			if (["latest", "*"].includes(b)) return 1;
			return semver.gt(semver.coerce(a), semver.coerce(b));
		};

		/**
		 * This function checks the workspace for any local package references
		 * and ensure that the devDependencies are up-to-date with the latest version
		 * currently in the project
		 * @param {Workspace} workspace
		 * @returns {void}
		 */
		function validateLocalPackages(workspace) {
			// Start by filtering out the local packages from the external dependencies
			const localPackages = [
				...Object.keys(workspace.manifest?.peerDependencies ?? {}),
				...Object.keys(workspace.manifest?.devDependencies ?? {}),
				...Object.keys(workspace.manifest?.dependencies ?? {}),
			].filter((pkg) => Yarn.workspace({ ident: pkg })).map((pkg) => Yarn.workspace({ ident: pkg }));

			// Iterate over the local packages and ensure that the devDependencies are up-to-date
			for (const localWorkspace of localPackages) {
				const localVersion = localWorkspace.manifest.version;

				// Capture the major version of the local package to ensure that the workspace peerDependencies are aligned
				const majorVersion = localVersion?.split(".")?.[0];

				workspace.set(`devDependencies.${localWorkspace.manifest.name}`, localVersion ?? "workspace:^");

				// If the local package is a peerDependency, ensure that the version is aligned with the major version but allow for more specificity in minor and patch versions
				if (
					workspace.manifest.peerDependencies &&
					workspace.manifest.peerDependencies[localWorkspace.manifest.name] &&
					!workspace.manifest.peerDependencies[localWorkspace.manifest.name].startsWith(`>=${majorVersion}`)
				) {
					workspace.set(`peerDependencies.${localWorkspace.manifest.name}`, `>=${majorVersion}.0.0 <${parseInt(majorVersion) + 1}.0.0`);
				}
			}
		}

		/**
		 * A reusable function to add keywords to ensure workspaces
		 * include a minimal set of keywords for discoverability
		 * with additionalKeywords as an optional parameter to add more
		 * specific keywords that are relevant to the workspace
		 * @param {string[]} additionalKeywords
		 * @returns {string[]}
		 */
		function keywords(additionalKeywords = []) {
			return ["design-system", "spectrum", "spectrum-css", "adobe", "adobe-spectrum", ...additionalKeywords];
		}

		/**
		 *
		 * @param {Workspace} workspace
		 * @returns {void}
		 */
		function validateComponentPeerDependencyMetadata(workspace) {
			// Check that the components list their peerDependencies as optional
			// to prevent unnecessary peerDependency warnings in consuming projects
			const peerDependencies = workspace.manifest.peerDependencies;
			const peerDependenciesMeta = {};
			for (const dependency of Object.keys(peerDependencies)) {
				peerDependenciesMeta[dependency] = {
					optional: true,
				};
			}
			workspace.set("peerDependenciesMeta", peerDependenciesMeta);
		}

		/**
		 * This function rolls up all the component package.json
		 * requirements for all workspaces into a single function
		 * to simplify into a readable set of operations
		 * @param {Workspace} workspace
		 * @param {string} folderName
		 * @returns {void}
		 */
		function validateComponentPackageJson(workspace, folderName) {
			// Only update the homepage if it does not already exist
			if (!workspace.manifest.homepage) {
				workspace.set("homepage", `https://opensource.adobe.com/spectrum-css/?path=/docs/components-${folderName}--docs`);
			}

			workspace.set("publishConfig.access", "public");
			workspace.set("keywords", keywords(["component", "css"]));
			workspace.set("main", "dist/index.css");
			workspace.set("exports", {
				".": "./dist/index.css",
				"./*.md": "./*.md",
				"./dist/*": "./dist/*",
				"./index-*.css": "./dist/index-*.css",
				"./index.css": "./dist/index.css",
				"./metadata.json": "./dist/metadata.json",
				"./package.json": "./package.json",
				"./stories/*": "./stories/*"
			});
		}

		/**
		 * This rule will enforce that a workspace MUST depend on the same version of
		 * a dependency as the one used by the other workspaces.
		 *
		 * @param {Context} context
		 */
		function enforceConsistentDependenciesAcrossTheProject({ Yarn }) {
			const workspaceVersions = new Map();

			// Iterate over all external dependencies and ensure that the version is consistent across all workspaces
			for (const dependency of Yarn.dependencies()) {
				// If this dependency exists locally as a workspace, exclude it from the check
				if (Yarn.workspace({ ident: dependency.ident })) continue;

				for (const workspace of Yarn.workspaces()) {
					const version = workspace.manifest.dependencies?.[dependency.ident] ?? workspace.manifest.devDependencies?.[dependency.ident];

					if (version) workspaceVersions.set(dependency.ident, workspaceVersions.has(dependency.ident) ? workspaceVersions.get(dependency.ident).add(version) : new Set([version]));
				}
			}

			// Iterate over the dependencies in the map and ensure that the versions are consistent across all workspaces
			for (const [dependencyName, versions] of workspaceVersions) {
				if (versions.size <= 1) continue;

				// Use semver to determine the highest version of the dependencies in the versions list and use that as the version
				const highestVersion = Array.from(versions).sort(semverSort).pop();

				// Update all the workspaces with the highest version
				for (const dep of Yarn.dependencies({ ident: dependencyName })) {
					// Figure out if the dependency is a devDependency or a regular dependency
					const isDevDependency = dep.workspace.manifest?.devDependencies?.[dependencyName] !== undefined;
					// Update the workspace with the highest version
					dep.workspace.set(`${isDevDependency ? "devDependencies" : "dependencies"}.${dependencyName}`, highestVersion);
				}
			}
		}

		/**
		 * This function rolls up all the package.json requirements
		 * for all workspaces into a single function to simplify
		 * the workspace for loop into a readable set of operations
		 * @param {Workspace} workspace
		 * @returns {void}
		 */
		function validatePackageJson(workspace) {
			const isRoot = workspace.cwd === ".";
			const isToken = workspace.cwd === "tokens";

			/**
			 * -------------- GLOBAL --------------
			 * Global configuration for all workspaces
			 */
			workspace.set("license", "Apache-2.0");
			workspace.set("author", "Adobe");

			workspace.set("repository.type", "git");
			workspace.set("repository.url", "https://github.com/adobe/spectrum-css.git");

			// We don't need to set the directory for the root workspace
			if (!isRoot) workspace.set("repository.directory", workspace.cwd);

			workspace.set("bugs.url", "https://github.com/adobe/spectrum-css/issues");

			/**
			 * -------------- COMPONENTS --------------
			 * Process the components workspaces with component-specific configuration
			 */
			if (isComponent(workspace)) {
				const folderName = workspace.cwd?.split("/")?.[1];
				validateComponentPackageJson(workspace, folderName);
				validateLocalPackages(workspace);
				validateComponentPeerDependencyMetadata(workspace);
			}
			/**
			 * -------------- TOKENS --------------
			 * Process the tokens workspace with token-specific configuration
			 */
			else if (isToken) {
				workspace.set("homepage", "https://opensource.adobe.com/spectrum-css");
				workspace.set("publishConfig.access", "public");
				workspace.set("keywords", keywords(["tokens", "css"]));
				workspace.set("main", "dist/css/index.css");

				validateLocalPackages(workspace);
			}
			else {
				/**
				 * -------------- OTHER --------------
				 * All other workspaces should have at least the following configuration
				 */
				if (!workspace.manifest.keywords) {
					workspace.set("keywords", keywords());
				}

				if (!workspace.manifest.homepage) {
					workspace.set("homepage", "https://opensource.adobe.com/spectrum-css/");
				}
			}
		}

		/**
		 * This loop iterates over all the workspaces in the project
		 * and updates the package.json file with the necessary
		 */
		for (const workspace of Yarn.workspaces()) {
			validatePackageJson(workspace);
			enforceConsistentDependenciesAcrossTheProject({Yarn});
		}
	},
});
