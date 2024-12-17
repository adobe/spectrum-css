import { createTreeWithEmptyWorkspace } from "@nx/devkit/testing";
import { Tree, readProjectConfiguration } from "@nx/devkit";

import { componentGenerator } from "./generator";
import { ComponentGeneratorSchema } from "./schema";

describe("plugins/spectrum-build/src/generators/component generator", () => {
	let tree: Tree;
	const options: ComponentGeneratorSchema = { name: "test" };

	beforeEach(() => {
		tree = createTreeWithEmptyWorkspace();
	});

	it("should run successfully", async () => {
		await componentGenerator(tree, options);
		const config = readProjectConfiguration(tree, "test");
		expect(config).toBeDefined();
	});
});
