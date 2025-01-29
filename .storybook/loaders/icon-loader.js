export const IconLoader = async () => ({
	icons: {
		workflow: await import.meta.glob(
			"/node_modules/@adobe/spectrum-css-workflow-icons/dist/assets/svg/*.svg",
			{
				eager: true,
				query: "?raw",
				import: "default",
			}
		),
		ui: await import.meta.glob(
			"/node_modules/@spectrum-css/ui-icons/dist/svg/*.svg",
			{
				eager: true,
				query: "?raw",
				import: "default",
			}
		),
	},
});
