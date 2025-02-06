/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require("@yarnpkg/types");
const fg = require("fast-glob");

/**
 * The workspace object used in the constraints function
 * @typedef {import('@yarnpkg/types').Yarn.Constraints.Workspace} Workspace
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
		 * This function checks the workspace for any local package references
		 * and ensure that the devDependencies are up-to-date with the latest version
		 * currently in the project
		 * @param {Workspace} workspace
		 * @returns {void}
		 */
		function validateLocalPackages(workspace) {
			// Return early if the workspace does not have any peerDependencies
			if (!workspace.manifest.peerDependencies) return;

			// Start by filtering out the local packages from the external dependencies
			const localPackages = Object.keys(workspace.manifest.peerDependencies).filter((pkg) => Yarn.workspace({ ident: pkg })).map((pkg) => Yarn.workspace({ ident: pkg }));

			// Iterate over the local packages and ensure that the devDependencies are up-to-date
			for (const localWorkspace of localPackages) {
				const localVersion = localWorkspace.manifest.version;
				workspace.set(`devDependencies.${localWorkspace.manifest.name}`, localVersion ?? "workspace:^");
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
		 * This function rolls up all the package.json requirements
		 * for all workspaces into a single function to simplify
		 * the workspace for loop into a readable set of operations
		 * @param {Workspace} workspace
		 * @returns {void}
		 */
		function validatePackageJson(workspace) {
			const isRoot = workspace.cwd === ".";
			const isComponent = components.includes(workspace.cwd);
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
			if (isComponent) {
				const folderName = workspace.cwd?.split("/")?.[1];
				validateComponentPackageJson(workspace, folderName);
				validateLocalPackages(workspace);
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
		}
	},
});
