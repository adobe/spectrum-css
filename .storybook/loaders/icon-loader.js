export const IconLoader = async () => ({
	icons: {
		workflow: {
			medium: await import.meta.glob(
				"/node_modules/@adobe/spectrum-css-workflow-icons/dist/18/*.svg",
				{
					eager: true,
					query: "?raw",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"/node_modules/@adobe/spectrum-css-workflow-icons/dist/24/*.svg",
				{
					eager: true,
					query: "?raw",
					import: "default",
				}
			),
		},
		ui: {
			medium: await import.meta.glob(
				"/node_modules/@spectrum-css/ui-icons/dist/medium/*.svg",
				{
					eager: true,
					query: "?raw",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"/node_modules/@spectrum-css/ui-icons/dist/large/*.svg",
				{
					eager: true,
					query: "?raw",
					import: "default",
				}
			),
		},
	},
});
