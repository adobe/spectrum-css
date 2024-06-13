/* global Typekit */

// This wrapper prevents loading the font more than once
if (!window.Typekit) {
	const kitId =
		document.querySelector("[lang]:not([lang=\"en-US\"])") === null
			? "mge7bvf"
			: "rok6rmo";

	const html = document.documentElement;
	html.classList.add("wf-loading");

	const t = setTimeout(function () {
		html.classList.remove("wf-loading");
		html.classList.add("wf-inactive");
	}, 3000);

	const tk = document.createElement("script");
	let d = false;

	// Always load over https
	tk.src = "https://use.typekit.net/" + kitId + ".js";
	tk.type = "text/javascript";
	tk.async = "true";
	tk.onload = tk.onreadystatechange = () => {
		const a = this.readyState;
		if (d || (a && a !== "complete" && a !== "loaded")) return;

		d = true;
		clearTimeout(t);

		try {
			window.Typekit = Typekit.load({
				kitId,
				scriptTimeout: 3000,
			});
		}
		catch (b) {/* empty */}
	};

	document.body.appendChild(tk);
}
