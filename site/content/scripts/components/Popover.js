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

// @todo, does this need to be appended at the document root??

import Menu from "./Menu.js";

export default class Popover {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.menu =
			options.menu ?? new Menu(this.el.querySelector(".spectrum-Menu"), {});

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type !== "childList") return;
				/* One or more children have been added to and/or removed
                    from the tree. */
				if (mutation.removedNodes.length) {
					mutation.removedNodes.forEach((node) => {
						if (node.classList.contains("spectrum-Menu")) {
							this.menu = null;
						}
					});
				}

				if (mutation.addedNodes.length) {
					mutation.addedNodes.forEach((node) => {
						if (node.classList.contains("spectrum-Menu")) {
							this.menu = new Menu(node, {});
						}
					});
				}
			});
		});

		// Watch the popover for the addition or removal of a menu
		observer.observe(this.el, {
			childList: true,
		});
	}

	get isOpen() {
		return this.el.classList.contains("is-open");
	}

	set isOpen(state) {
		this.el.classList.toggle("is-open", state);
	}

	get hasTip() {
		return this.el.classList.contains("spectrum-Popover--withTip");
	}

	set hasTip(state) {
		this.el.classList.toggle("spectrum-Popover--withTip", state);
	}

	/**
	 * @description Sets the position of the popover relative to the trigger
	 * @memberof Popover
	 * @param {(top|bottom|left|right|start|end)[]} position
	 */
	set position(position = []) {
		// @todo could do validation here
		this.el.classList.toggle(`spectrum-Popover--${position.join("-")}`, true);
	}

	alignment(relativeTo, offset = 0) {
		const rect = relativeTo.getBoundingClientRect();
		this.el.style.top = `${rect.bottom + offset}px`;

		if (this.isRTL) {
			this.el.style.right = `${window.innerWidth - rect.right}px`;
			this.el.style.left = "auto";
		} else {
			this.el.style.right = "auto";
			this.el.style.left = `${rect.left}px`;
		}
	}

	/**
	 * @param {string|HTMLElement} content
	 */
	set content(content) {
		if (typeof content === "string") {
			this.el.innerHTML = content;
		} else if (content instanceof HTMLElement) {
			this.el.innerHTML = "";
			this.el.appendChild(content);

			let menu;
			if ((menu = content.querySelector(".spectrum-Menu"))) {
				this.menu = new Menu(menu, { popover: this });
			}
		}
	}
}
