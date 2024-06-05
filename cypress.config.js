import { defineConfig } from "cypress";

export default defineConfig({
	includeShadowDom: true,
	component: {
		devServer: {
			framework: "cypress-ct-lit",
			bundler: "vite",
		},
	},
});
