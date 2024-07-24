export const TokenLoader = async () => ({
	tokens: {
		global: {
			medium: await import.meta.glob(
				"@spectrum-css/tokens/dist/css/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"@spectrum-css/tokens/dist/css/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"@spectrum-css/tokens/dist/css/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"@spectrum-css/tokens/dist/css/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"@spectrum-css/tokens/dist/css/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
	},
	legacy: {
		global: {
			medium: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			darkest: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/darkest-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
		spectrum: {
			medium: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/spectrum/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/spectrum/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/spectrum/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/spectrum/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/spectrum/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			darkest: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/spectrum/darkest-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
		express: {
			medium: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/express/medium-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			large: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/express/large-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			base: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/express/global-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			light: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/express/light-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			dark: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/express/dark-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
			darkest: await import.meta.glob(
				"@spectrum-css/tokens-legacy/dist/css/express/darkest-vars.css",
				{
					eager: true,
					query: "?inline",
					import: "default",
				}
			),
		},
	},
});
