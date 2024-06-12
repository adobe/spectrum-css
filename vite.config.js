import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	publicDir: "assets",
	server: {
		port: 3000,
	},
	build: {
		outDir: "dist",
	},
	css: {
		devSourcemap: true,
	},
	resolve: {
		alias: [{
			find: /^@spectrum-css\/(tokens|ui-icons)$/,
			replacement: "./$1/dist/index.css"
		}, {
			find: /^@spectrum-css\/(tokens|ui-icons)\//,
			replacement: "./$1/"
		}, {
			find: /^@spectrum-css\/(.*)$/,
			replacement: "./components/$1/dist/index.css",
		}, {
			find: /^@spectrum-css\/(.*)\//,
			replacement: "./components/$1/",
		}]
	}
});
