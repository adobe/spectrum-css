/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require("@yarnpkg/types");
const fg = require("fast-glob");

/**
 * The workspace object used in the constraints function
 * @typedef {import('@yarnpkg/types').Yarn.Constraints.Workspace} Workspace
 */

module.exports = defineConfig({
	async constraints({ Yarn }) {
		// A static list of workspaces that do not have styles and thus do not need CSS processing
		const noStyles = ["action-menu"];

		// Fetch a list of all the component workspaces using a glob pattern
		const components = fg.sync("components/*", {
			cwd: __dirname,
			onlyDirectories: true,
			ignore: ["components/commons"],
		});

		const rootWorkspace = Yarn.workspaces({ cwd: "." })?.[0];
		const tokenWorkspace = Yarn.workspaces({ cwd: "tokens" })?.[0];

		/**
		 * A function to add dependencies to a workspace if they do not already exist
		 * @param {Workspace} workspace
		 * @param {string[]} packages
		 * @param {('dependencies'|'peerDependencies'|'devDependencies')} type
		 * @returns {void}
		 */
		function validateDependencies(workspace, packages = [], type = "devDependencies") {
			for (const pkg of packages) {
				// @note: The token package is the source-of-truth for the @adobe/spectrum-tokens version number
				let rootPackage = rootWorkspace;
				if (pkg === "@adobe/spectrum-tokens") {
					rootPackage = tokenWorkspace;
				}

				if (!workspace.manifest[type] || !workspace.manifest[type][pkg]) {
					// Source the version from the root workspace if it exists
					const version = rootPackage?.manifest?.[type]?.[pkg];
					workspace.set(`${type}.${pkg}`, version ?? "*");
				}
			}
		}

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
		 * A reusable function to set up linting scripts for a workspace;
		 * outputs format and lint scripts for any files provided to the fileGlobs object
		 * and uses the outputDir to ignore files in the output directory
		 * @param {Workspace} workspace
		 * @param {Object} fileGlobs -- An object containing the file globs for stylelint, eslint, and prettier
		 * @param {string} fileGlobs.styles -- The glob pattern(s) to use for stylelint
		 * @param {string} fileGlobs.scripts -- The glob pattern(s) to use for eslint
		 * @param {string} fileGlobs.content -- The glob pattern(s) to use for prettier
		 * @param {string} outputDir -- The directory to ignore when linting
		 * @returns {void}
		 */
		function lintingScripts(workspace, fileGlobs = {}, outputDir = "dist") {
			workspace.set("scripts.format", "run-p \"format:*\"");
			workspace.set("scripts.lint", "run-p \"lint:*\"");
			if (fileGlobs.styles) {
				workspace.set("scripts['format:styles']", `stylelint --fix --cache --allow-empty-input ${fileGlobs.css} --ignore-pattern ${outputDir}`);
				workspace.set("scripts['lint:styles']", `stylelint --cache --allow-empty-input --report-descriptionless-disables --report-invalid-scope-disables --report-needless-disables ${fileGlobs.css} --ignore-pattern ${outputDir}`);
			}
			if (fileGlobs.scripts) {
				workspace.set("scripts['format:scripts']", `eslint --fix --cache --no-error-on-unmatched-pattern ${fileGlobs.scripts}`);
				workspace.set("scripts['lint:scripts']", `eslint --cache --no-error-on-unmatched-pattern --report-unused-disable-directives ${fileGlobs.scripts}`);
			}
			if (fileGlobs.content) {
				workspace.set("scripts['format:content']", `prettier --write --cache --log-level error --ignore-unknown --no-error-on-unmatched-pattern ${fileGlobs.content}`);
			}

			// @note: npm-run-all2 is the maintained fork of npm-run-all which is no longer maintained
			validateDependencies(workspace, ["npm-run-all2", "stylelint", "eslint", "prettier"], "devDependencies");
		}

		/**
		 * A reusable function to set up cleaning scripts for a workspace
		 * @param {Workspace} workspace
		 * @param {string} outputDir -- The directory to remove
		 * @returns {void}
		 */
		function cleaningScripts(workspace, outputDir = "dist") {
			workspace.set("scripts.clean", `rimraf ${outputDir} && test -d ${outputDir} && echo "Error: ${outputDir} directory could not be removed" && exit 1 || exit 0`);
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

		for (const workspace of Yarn.workspaces()) {
			/**
			 * -------------- GLOBAL --------------
			 * Global configuration for all workspaces
			 */
			workspace.set("license", "Apache-2.0");
			workspace.set("author", "Adobe");

			workspace.set("repository.type", "git");
			workspace.set("repository.url", "https://github.com/adobe/spectrum-css.git");

			// We don't need to set the directory for the root workspace
			if (workspace.cwd !== ".") workspace.set("repository.directory", workspace.cwd);

			workspace.set("bugs.url", "https://github.com/adobe/spectrum-css/issues");

			/**
			 * -------------- COMPONENTS --------------
			 * Process the components workspaces with component-specific configuration
			 */
			if (components.includes(workspace.cwd)) {
				const folderName = workspace.cwd?.split("/")?.[1];

				workspace.set("scripts.build", `yarn run component:build ${folderName}`);
				workspace.set("scripts['build:full']", "yarn report");

				cleaningScripts(workspace);

				workspace.set("scripts.compare", `yarn run component:compare ${folderName}`);

				lintingScripts(workspace, {
					css: !noStyles ? "*.css **/*.css" : undefined,
					scripts: "*.json stories/*.js",
					content: "*.{md,mdx} **/*.{md,mdx}"
				});

				workspace.set("scripts.report", `yarn run component:report ${folderName}`);

				workspace.set("homepage", `https://opensource.adobe.com/spectrum-css/?path=/docs/components-${folderName}--docs`);
				workspace.set("publishConfig.access", "public");
				workspace.set("keywords", keywords(["component", "css"]));
				workspace.set("main", "dist/index.css");
				workspace.set("files", ["dist/*", "*.md", "package.json", "metadata/*", "stories/*"]);
				workspace.set("exports", {
					".": "./dist/index.css",
					"./*.md": "./*.md",
					"./dist/*": "./dist/*",
					"./index-*.css": "./dist/index-*.css",
					"./index.css": "./dist/index.css",
					"./metadata.json": "./metadata/metadata.json",
					"./metadata/*": "./metadata/*",
					"./package.json": "./package.json",
					"./stories/*": "./stories/*"
				});

				validateLocalPackages(workspace);
			}

			/**
			 * -------------- TOKENS --------------
			 * Process the tokens workspace with token-specific configuration
			 */
			else if (workspace.cwd === "tokens") {
				lintingScripts(workspace, {
					css: "custom/*.css",
					scripts: "*.{js,json} {tasks,utilities}/*.js",
					content: "*.md **/*.md"
				});

				workspace.set("homepage", "https://opensource.adobe.com/spectrum-css");
				workspace.set("publishConfig.access", "public");
				workspace.set("keywords", keywords(["tokens", "css"]));
				workspace.set("main", "dist/index.css");
				workspace.set("files", ["dist", "*.md", "package.json"]);

				validateLocalPackages(workspace);
			}

			/**
			 * -------------- OTHER --------------
			 * All other workspaces should have at least the following configuration
			 */
			if (!workspace.manifest.keywords) {
				workspace.set("keywords", keywords([]));
			}

			// Check if the files already exist and only add this if it does not
			if (!workspace.manifest.files) {
				workspace.set("files", ["*.md", "package.json"]);
			}

			if (!workspace.manifest.homepage) {
				workspace.set("homepage", "https://opensource.adobe.com/spectrum-css");
			}
		}
	},
});
