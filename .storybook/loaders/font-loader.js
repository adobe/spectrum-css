export const FontLoader = async () => ({
	fonts: new Promise((resolve) => {
		// First check if the fonts are already loaded
		if (window.Typekit) {
			const config = window.Typekit.config;
			console.info(`Font loaded [id: ${config.t}]`);
			resolve();
			return;
		}

		// Listen for a custom event indicating the Adobe Fonts have loaded
		document.addEventListener("typekit-loaded", () => {
			document.removeEventListener("typekit-loaded", () => {});
			resolve();
		});
	}),
});
