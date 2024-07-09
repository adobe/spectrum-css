
// Use the document.fonts API to check if fonts have loaded
export const FontLoader = async () => ({
	fonts: document.fonts ? await document.fonts.ready : true,
});

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

export const TokenLoader = async () => ({
	tokens: {
		global: {
			medium: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			darkest: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/darkest-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
		spectrum: {
			medium: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			darkest: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/spectrum/darkest-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
		express: {
			medium: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			darkest: await import.meta.glob(
				"/node_modules/@spectrum-css/tokens/dist/css/express/darkest-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
	}
});
