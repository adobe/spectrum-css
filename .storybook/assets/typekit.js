/* global Typekit */

window.addEventListener("DOMContentLoaded", () => {
	const html = document.documentElement;
	const root = document.head ?? document.body ?? html;
	const isNotEnglish = root.querySelector("[lang]:not([lang=\"en-US\"])");

	const toggleClass = (state, force = true) => {
		if (html) html.classList.toggle(`wf-${state}`, force);
		else if (root) root.classList.toggle(`wf-${state}`, force);
	};

	const timeout = setTimeout(function () {
		toggleClass("loading", false);
		toggleClass("inactive");
	}, 3000);

	const config = {
		kitId: isNotEnglish ? "mge7bvf" : "rok6rmo",
		scriptTimeout: 3000,
		active: () => {
			toggleClass("loading");
		},
	};

	// This wrapper prevents loading the font more than once
	if (window && !window.Typekit) {
		let d = false;
		let tk = document.querySelector("#typekit");

		if (!tk) {
			tk = document.createElement("script");
			tk.id = "typekit";
			tk.src = `https://use.typekit.net/${config.kitId}.js`;
			tk.type = "text/javascript";
			tk.async = "true";
			tk.onload = tk.onreadystatechange = function () {
				const readyState = this.readyState;
				if (d || (readyState && readyState !== "complete" && readyState !== "loaded")) return;

				d = true;
				clearTimeout(timeout);

				try {
					window.Typekit = Typekit.load(config);
				}
				catch (b) {/* empty */}
			};
			root.appendChild(tk);
		}
	}
});
