/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import Prism from "prismjs";

export default class CodePreview {
	constructor(el, options = {}) {
		if (!el) return;

		this.container = el;
		this.preview = options.preview ?? el.querySelector(".site-Example-preview");
		this.markup = options.markup ?? el.querySelector(".site-Example-markup");
		this.toggle =
			options.toggle ?? el.querySelector(".site-Example-markupToggle");
		this.codeFormatter = options.codeFormatter ?? Prism.highlight;

		this.clickHandler = this.clickHandler.bind(this);
		this.init = this.init.bind(this);

		// Add the 'is-open' class to the markup container to get an accurate initial height
		if (!this.isOpen) this.isOpen = true;

		// Get the height of the markup container on first load
		const height = this.codeHeight;
		console.log(height);

		// Set the height to a variable so we can animate it later
		this.codeHeight = height;

		// Remove the 'is-open' class from the markup container if the rendered markup too tall
		// otherwise remove the toggle button b/c we won't need it
		if (height > 200) this.isOpen = false;
		else if (this.toggle) this.toggle.style.display = "none";

		this.markup.addEventListener("click", this.clickHandler);

		const observer = new MutationObserver(async (mutationList) => {
			console.log(mutationList);
			for (const mutation of mutationList) {
				if (mutation.type === "childList") this.update();
			}
		});

		observer.observe(this.preview, { childList: true });
	}

	get isOpen() {
		return this.markup.classList.contains("is-open");
	}

	set isOpen(state) {
		return this.markup.classList.toggle("is-open", Boolean(state));
	}

	get codeHeight() {
		// Can't get the height if the container is collapsed; @todo render this offscreen?
		if (!this.isOpen) {
			return parseInt(
				this.markup.style.getPropertyValue("--site-example-markup-full-height"),
				10
			);
		}
		return this.markup.getBoundingClientRect().height;
	}

	set codeHeight(height) {
		if (!this.markup) return;

		// Cast the height to an integer
		height = height ? parseInt(height, 10) : 0;
		if (height > 0) {
			this.markup.style.setProperty(
				"--site-example-markup-height",
				`${height}px`
			);
		}
	}

	// document.addEventListener('markupChanged', (event) => {
	update() {
		if (!this.preview || !this.markup) return;

		const code = this.preview.innerHTML;
		if (this.codeFormatter) {
			this.markup.innerHTML = this.codeFormatter(
				code,
				Prism.languages.html,
				"html"
			);
		} else {
			this.markup.innerHTML = code;
		}
	}

	clickHandler(event) {
		console.log(event.target);
		// Exit early if the user is trying to copy the code
		if (
			event.target.classList.contains("code-copy") ||
			event.target.closest(".code-copy")
		) {
			// Open the markup container if it's not already open, so the user can see the code they're copying
			if (!this.isOpen) this.isOpen = true;

			return;
		}

		// Exit early if we can't determine the preview or markup container
		if (!this.markup) return;

		event.preventDefault();

		// Toggle the markup container
		this.isOpen = !this.isOpen;
		if (this.toggle) {
			this.toggle.innerHTML = this.isOpen ? "Hide markup" : "Show markup";
		}
	}
}
