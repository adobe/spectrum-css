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

export default class SideBar {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.overlay =
			options.overlay ?? document.querySelector(".spectrum-overlay");
		this.breakpoint = options.breakpoint ?? "(max-width: 960px)";

		this.clickHandler = this.clickHandler.bind(this);

		this.el.addEventListener("click", this.clickHandler);

		window.matchMedia(this.breakpoint).addEventListener("change", () => {
			if (!window.matchMedia(this.breakpoint).matches) this.hide();
		});
	}

	get isOpen() {
		return this.el.classList.contains("is-open");
	}

	set isOpen(state) {
		this.el.classList.toggle("is-open", state);
	}

	show() {
		if (!window.matchMedia(this.breakpoint).matches) return;
		if (this.overlay) {
			this.overlay.addEventListener("click", this.hide);
			this.overlay.classList?.add("is-open");
		}

		this.isOpen = true;
	}

	hide() {
		if (this.overlay) {
			this.overlay.removeEventListener("click", this.hide);
			this.overlay.classList?.remove("is-open");
		}

		this.isOpen = false;
		if (window.siteSearch) window.siteSearch.hideResults();
	}

	clickHandler() {
		if (this.isOpen) this.hide();
		else this.show();
	}
}
