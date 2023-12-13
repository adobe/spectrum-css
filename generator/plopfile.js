import { spawn } from 'child_process';
import { existsSync, readdirSync, readFileSync } from 'fs';
import { readFile } from 'fs/promises';
import { dirname, resolve } from 'path';

import cheerio from 'cheerio';
import yaml from 'js-yaml';

import fuzzy from 'fuzzy';
import autocompletePrompt from 'inquirer-autocomplete-prompt';

const fetchPackage = async (path) =>
	readFile(resolve(path, 'package.json'), {
		encoding: 'utf8'
	})
	.then(JSON.parse);

export default async (plop) => {
	/* Allow customization from the environment variables */
	const rootFolder = process.env.ROOT_DIR ?? resolve(process.cwd(), '../');
	const srcPath = process.env.COMPONENT_DIR ?? resolve(rootFolder, 'components');
	const projectName = process.env.PROJECT_NAME ?? 'Spectrum CSS';
	const pkg = await fetchPackage(rootFolder);

	const tokens = await fetchPackage(dirname(require.resolve('@spectrum-css/tokens/package.json')));

	/* Fetch the project name */
	plop.setWelcomeMessage(`Welcome to the ${projectName} component generator!\n  To get started, answer a few short questions about your component.`);

	/* Fetch the list of existing components to avoid conflicts */
	const existingComponents = readdirSync(srcPath, { withFileTypes: true }).reduce((pkgs, dirent) => {
		if (dirent.isDirectory()) pkgs.push(dirent.name);
		return pkgs;
	}, []);

	plop.setHelper('parse', (str, sep = '/', start = 0, end = undefined) => {
		if (!str) return;
		const array = str.split(sep);
		return array.slice(start, end).join(sep);
	});

	function getExistingMarkupExample(metadataPath, name, plop) {
		if (existsSync(`${metadataPath}/${name}.yml`) === false) return;

		const r = readFileSync(`${metadataPath}/${name}.yml`, { encoding: 'utf8' });
		const result = yaml.load(r);
		if (!result) return;

		const examples = result.examples || [];
		if (examples.length === 0 || !examples[0].markup) return;

		const $ = cheerio.load(examples[0].markup);

		const className = plop.renderString('spectrum-{{ pascalCase name }}', { name });
		const $example = $(`.${className}`);

		if (!$example) return;

		return $example.first().toString();
	}

	plop.setActionType('install', (_, config) => new Promise((resolve, reject) => {
		const install = spawn('yarn', ['install'], {
			cwd: config.root,
			shell: true,
			stdio: 'inherit',
		});
		install.on('close', (code) => {
			if (`${code}` === '0') {
				resolve(`Successfully installed dependencies.`);
			} else {
				reject(`Failed to install dependencies; exit code ${code}.`);
			}
		});
	}));

	plop.setGenerator('component', {
		description: 'Component generator',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name (i.e. Help text)',
				validate: (answer) => {
					if (!answer || answer.length < 1) {
						return "Naming is hard; but it must have a name. You can always change it later.";
					}

					const name = plop.renderString('{{ lowerCase (camelCase name) }}', { name: answer });
					if (name && existingComponents && existingComponents.includes(name)) {
						return "A component with that name already exists. You can always change it later.";
					}

					return true;
				},
				transformer: (answer) => plop.renderString('{{ sentenceCase name }}', { name: answer }),
			},
		],
		actions: (data) => {
			data.description = `The ${data.name} component is...`;
			data.folderName = plop.renderString('{{ lowerCase (camelCase name) }}', data);
			data.pkg = pkg;
			data.tokens = { name: tokens.name, version: tokens.version };

			return [
				{
					type: 'addMany',
					destination: `${srcPath}/{{ folderName }}`,
					base: 'templates',
					templateFiles: 'templates/**/*.hbs',
					skipIfExists: true,
				},
				{
					type: 'install',
					root: rootFolder,
				},
				(data, config, plop) => plop.renderString(`Successfully created component {{ folderName }}. To preview your component, run \`yarn dev\` and navigate to the {{ folderName }} story.`),
			];
		},
	});

    plop.setPrompt('autocomplete', autocompletePrompt);
	plop.setGenerator('story', {
		description: 'Storybook generator for existing components',
		prompts: [
			{
				type: 'autocomplete',
				name: 'folderName',
				message: 'Select the component you wish to update',
				source: (_, input = '') => new Promise((resolve, reject) => {
					if (existingComponents.length === 0) reject('No components found.');
					setTimeout(() => {
						const results = fuzzy.filter(input, existingComponents);
						if (results && results.length > 0) resolve(results.map((r) => r.string));
					}, Math.random() * 470 + 30);
				}),
				emptyText: 'No components match the search.',
			},
		],
		actions: (data) => {
			data.name = plop.renderString('{{ sentenceCase folderName }}', data);
			data.description = `The ${data.name} component is...`;

			const metadataPath = plop.renderString(`${srcPath}/{{ folderName }}/metadata`, data);
			data.example = getExistingMarkupExample(metadataPath, data.name, plop);

			return [
				{
					type: 'addMany',
					destination: `${srcPath}/{{ folderName }}/stories`,
					base: 'templates/stories',
					templateFiles: 'templates/stories/*.hbs',
					skipIfExists: true,
				},
				{
					type: 'install',
					root: rootFolder,
				},
				(data, config, plop) => plop.renderString(`Successfully updated {{ folderName }}. To preview your component, run \`yarn dev\` and navigate to the {{ folderName }} story.`, data),
			];
		},
	});
};
