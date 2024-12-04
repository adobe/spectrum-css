import {
	addProjectConfiguration,
	formatFiles,
	installPackagesTask,
	generateFiles,
	joinPathFragments,
	Tree,
} from "@nx/devkit";
import { ComponentGeneratorSchema } from "./schema";

export async function componentGenerator(
	tree: Tree,
	options: ComponentGeneratorSchema,
) {
	if (!options.name) {
		throw new Error("Invalid options, name is required.");
	}

	const foldername = options.name.toLowerCase().replace(/\s/g, "");
	const projectRoot = `components/${foldername}`;

	function pascal(str: string) {
		return str
			.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
			.replace(/\s/g, "");
	}

	function kebab(str: string) {
		return str
			.replace(/\s/g, "-")
			.toLowerCase();
	}

	function title(str: string) {
		return str
			.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
	}

	addProjectConfiguration(tree, foldername, {
		root: projectRoot,
		"tags": ["component"],
		targets: {
			"build": {},
			"clean": {},
			"compare": {},
			"format": {},
			"lint": {},
			"report": {},
			"test": {
				"defaultConfiguration": "scope"
			},
			"validate": {}
		},
	});

	generateFiles(
		tree,
		joinPathFragments(__dirname, "./files"),
		projectRoot,
		{
			pascal,
			kebab,
			title,
			foldername,
			...options,
		}
	);

	await formatFiles(tree);

	return () => {
		installPackagesTask(tree);
	};
}

export default componentGenerator;
