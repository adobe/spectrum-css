/*!
 * Copyright 2024 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// eslint-disable-next-line no-unused-vars
class SpectrumSwitcher {
	constructor({ varsVersion, theme, scale, direction, callback }) {
		this._callback = callback.bind(this);

		this._theme;
		this._scale;
		this._direction;
		this._varsVersion;

		window.addEventListener("keydown", this.keyDownHandler);
		window.addEventListener("resize", () => {
			if (window.matchMedia("(max-width: 768px)").matches) {
				this.scaleMQLHandler();
			}
		});

		window.addEventListener("DOMContentLoaded", () => {
			this.theme = theme;
			this.scale = scale;
			this.direction = direction;
			this.varsVersion = varsVersion;
		});

		// Watch the picker event for changes and reflect in the class object
		window.addEventListener("picker:change", (event) => {
			const value = event.detail.value;
			if (event.target.id === "switcher-scale") {
				this.scale = value;
			}
			else if (event.target.id === "switcher-theme") {
				this.theme = value;
			}
			else if (event.target.id === "switcher-direction") {
				this.direction = value;
			}
			else if (event.target.id === "switcher-vars-version") {
				this.varsVersion = value;
			}
		});
	}

	get rootElements() {
		return [...document.querySelectorAll(".spectrum")];
	}

	keyDownHandler (event) {
		if (!event.ctrlKey) return;

		let property;
		let value;
		if ((value = {
			1: "light",
			2: "dark",
			3: "darkest",
		}[event.key])) {
			property = "theme";
		}
		else if ((value = {
			m: "medium",
			l: "large",
		}[event.key])) {
			property = "scale";
		}
		else if ((value = {
			r: "rtl",
			n: "ltr",
		}[event.key])) {
			property = "direction";
		}
		else if ((value = {
			d: "default",
			e: "express",
		}[event.key])) {
			property = "varsVersion";
		}

		this[property] = value;

		if (this._callback) this._callback({ property, value });
	}

	scaleMQLHandler() {
		this.scale = window.matchMedia("(max-width: 768px)").matches ? "large" : "medium";
	}

	set theme(input) {
		if (this._theme === input) return;

		["light", "dark", "darkest"].forEach((otherTheme) => {
			this.rootElements.forEach(el => el.classList.remove(`spectrum--${otherTheme}`));
		});

		this.rootElements.forEach(el => el.classList.add(`spectrum--${input}`));

		if (window.localStorage) {
			localStorage.setItem("swc-docs:theme:color", input);
		}

		const prismLink = document.querySelector("[data-prism]");
		let prismDarkLink = document.querySelector("[data-prism-dark]");

		if (input.startsWith("dark") && prismLink) {
			if (!prismDarkLink) {
				prismDarkLink = document.createElement("link");
				prismDarkLink.setAttribute("rel", "stylesheet");
				prismDarkLink.setAttribute("data-prism-dark", "");
				prismDarkLink.setAttribute("type", "text/css");
				prismDarkLink.setAttribute("href", "css/prism/prism-dark.css");
			}

			prismLink.parentElement.insertBefore(
				prismDarkLink,
				prismLink.nextElementSibling
			);
		}
		else if (prismDarkLink) {
			prismDarkLink.parentElement.removeChild(prismDarkLink);
		}

		if (this._callback) {
			this._callback({
				property: "theme",
				value: input,
			});
		}

		this._theme = input;
	}

	get theme () {
		return this._theme;
	}

	set varsVersion(input) {
		if (this._varsVersion === input) return;

		if (input === "express") {
			this.rootElements.forEach(el => el.classList.add("spectrum--express"));
		}
		else {
			this.rootElements.forEach(el => el.classList.remove("spectrum--express"));
		}

		if (window.localStorage) {
			localStorage.setItem("swc-docs:theme:theme", input);
		}

		if (this._callback) {
			this._callback({
				property: "vars",
				value: input,
			});
		}

		this._varsVersion = input;
	}

	get varsVersion() {
		return this._varsVersion;
	}

	set scale (input) {
		if (this._scale === input) return;

		["medium", "large"].forEach((otherScale) => {
			this.rootElements.forEach(el => el.classList.remove(`spectrum--${otherScale}`));
		});

		this.rootElements.forEach(el => el.classList.add(`spectrum--${input}`));

		if (window.localStorage) {
			localStorage.setItem("swc-docs:theme:scale", input);
		}

		if (this._callback) {
			this._callback({
				property: "scale",
				value: input,
			});
		}

		this._scale = input;
	}

	get scale() {
		return this._scale;
	}

	set direction(input) {
		if (this._direction === input) return;

		document.documentElement.setAttribute("dir", input);

		if (window.localStorage) {
			localStorage.setItem("swc-docs:theme:dir", input);
		}

		if (this._callback) {
			this._callback({
				property: "direction",
				value: input,
			});
		}

		this._direction = input;
	}

	get direction() {
		return this._direction;
	}
}
