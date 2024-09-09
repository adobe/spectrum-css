export const FontLoader = async () => ({
	fonts: new Promise((resolve) => {
		// First check if the fonts are already loaded
		if (window.Typekit) resolve();

		// Listen for a custom event indicating the Adobe Fonts have loaded
		document.addEventListener("typekit-loaded", () => {
			if (window.Typekit) resolve();
		});
	}),
});
