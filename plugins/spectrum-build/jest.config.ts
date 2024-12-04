export default {
	displayName: "spectrum-build",
	preset: "../../jest.preset.js",
	transform: {
		"^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
	},
	moduleFileExtensions: ["ts", "js", "html"],
	coverageDirectory: "../../coverage/plugins/spectrum-build",
};
