import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import { resolve } from "path";

const __dirname = new URL(".", import.meta.url).pathname;

import autocompletePrompt from "inquirer-autocomplete-prompt";
import fuzzy from "fuzzy";

const fetchPackage = async (path) =>
	readFile(resolve(path, "package.json"), {
		encoding: "utf8",
	}).then(JSON.parse);

export default async (plop) => {
	/* Allow customization from the environment variables */
	const rootFolder = process.env.ROOT_DIR ?? resolve(__dirname, "../../");
	const srcPath =
		process.env.COMPONENT_DIR ?? resolve(rootFolder, "components");
	const projectName = process.env.PROJECT_NAME ?? "Spectrum CSS";

	const pkg = await fetchPackage(rootFolder);
	const tokens = await fetchPackage(resolve(srcPath, "tokens"));
	const preview = await fetchPackage(resolve(__dirname, "../preview"));

	/* Fetch the list of existing components to avoid conflicts */
	const existingComponents = readdirSync(srcPath, {
		withFileTypes: true,
	}).reduce((pkgs, dirent) => {
		if (dirent.isDirectory()) pkgs.push(dirent.name);
		return pkgs;
	}, []);

	/* Fetch the project name */
	plop.setWelcomeMessage(
		`Welcome to the ${projectName} component generator!\n  To get started, answer a few short questions about your component.`
	);

	plop.setHelper("parse", (str, sep = "/", start = 0, end = undefined) => {
		if (!str) return;
		const array = str.split(sep);
		return array.slice(start, end).join(sep);
	});

	plop.setPrompt("autocomplete", autocompletePrompt);

	plop.setGenerator("component", {
		description: "Component generator",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Component name (i.e. Help text)",
				validate: (answer) => {
					if (!answer || answer.length < 1) {
						return "Naming is hard; but it must have a name. You can always change it later.";
					}

					const name = plop.renderString("{{ lowerCase (camelCase name) }}", {
						name: answer,
					});
					if (name && existingComponents && existingComponents.includes(name)) {
						return "A component with that name already exists. You can always change it later.";
					}

					return true;
				},
				transformer: (answer) =>
					plop.renderString("{{ sentenceCase name }}", { name: answer }),
			},
		],
		actions: (data) => {
			data.description = `The ${data.name} component is...`;
			data.folderName = plop.renderString(
				"{{ lowerCase (camelCase name) }}",
				data
			);
			data.pkg = pkg;
			data.tokens = { name: tokens.name, version: tokens.version };
			data.preview = { name: preview.name, version: preview.version };

			return [
				{
					type: "addMany",
					destination: `${srcPath}/{{ folderName }}`,
					base: "templates",
					templateFiles: "templates/**/*.hbs",
					skipIfExists: true,
				},
				(data, config, plop) =>
					plop.renderString(
						`Successfully created component {{ folderName }}. To preview your component, run \`yarn dev\` and navigate to the {{ folderName }} story.`
					),
			];
		},
	});

	plop.setGenerator("story", {
		description: "Storybook generator for existing components",
		prompts: [
			{
				type: "autocomplete",
				name: "folderName",
				message: "Select the component you wish to update",
				source: (_, input = "") =>
					new Promise((resolve, reject) => {
						if (existingComponents.length === 0) reject("No components found.");
						setTimeout(() => {
							const results = fuzzy.filter(input, existingComponents);
							if (results && results.length > 0)
								resolve(results.map((r) => r.string));
						}, Math.random() * 470 + 30);
					}),
				emptyText: "No components match the search.",
			},
		],
		actions: (data) => {
			data.name = plop.renderString("{{ sentenceCase folderName }}", data);
			// data.description = `The ${data.name} component is...`;

			const metadataPath = plop.renderString(
				`${srcPath}/{{ folderName }}/metadata`,
				data
			);
			data.example = getExistingMarkupExample(metadataPath, data.name, plop);

			return [
				{
					type: "addMany",
					destination: `${srcPath}/{{ folderName }}/stories`,
					base: "templates/stories",
					templateFiles: "templates/stories/*.hbs",
					skipIfExists: true,
				},
				(data, config, plop) =>
					plop.renderString(
						`Successfully updated {{ folderName }}. To preview your component, run \`yarn dev\` and navigate to the {{ folderName }} story.`,
						data
					),
			];
		},
	});

	plop.setGenerator("nx", {
		description: "Project definitions for existing components",
		prompts: [],
		actions: (data) =>
			existingComponents.map((component) => {
				data.folderName = component;
				return {
						type: "add",
						path: `${srcPath}/${component}/project.json`,
						templateFile: "templates/project.json.hbs"
					};
			}),
	});
};
