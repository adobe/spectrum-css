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

import Menu from "./Menu.js";
export default class Picker {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;

		if (this.el.nextElementSibling?.querySelector(".spectrum-Menu")) {
			this.menu = new Menu(
				this.el.nextElementSibling?.querySelector(".spectrum-Menu"),
				{}
			);
		}

		this.label = this.el.querySelector(".spectrum-Picker-label");

		this.allowed = options.allowed ?? this.getOptions();
		this.default = options.default ?? this.allowed[0];
		this.keys = options.keys;
		this.changeCallback = options.changeCallback;

		this.keydownHandler = this.keydownHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);

		if (this._keys) {
			document.addEventListener("keydown", this.keydownHandler);
		}

		this.el.addEventListener("change", this.changeHandler);
	}

	getOptions() {
		const options = [];
		this.el.querySelectorAll(".spectrum-Menu-item").forEach((item) => {
			options.push(item.getAttribute("value"));
		});

		return options;
	}

	updateLabel(labelText) {
		if (!this.label) return;
		this.label.innerText = labelText;
	}

	get value() {
		return this.el.getAttribute("value");
	}

	set value(input) {
		if (!input) return;

		// Pass changes down to the menu
		this.menu.value = input;

		if (this.label && this.menu?.activeItem?.labelText) {
			this.updateLabel(this.menu.activeItem.labelText);
		}

		this.el.dispatchEvent(
			new CustomEvent("change", {
				bubbles: true,
				detail: {
					label: this.menu?.activeItem?.labelText,
					value: input,
				},
			})
		);
	}

	get isSelected() {
		return this.el.classList.contains("is-selected");
	}

	set isSelected(state) {
		this.el.classList.toggle("is-selected", state);
	}

	get isOpen() {
		return this.el.classList.contains("is-open");
	}

	set isOpen(state) {
		this.isSelected = state;
		this.el.classList.toggle("is-open", state);

		if (state) this.el.setAttribute("aria-expanded", "true");
		else this.el.removeAttribute("aria-expanded");
	}

	changeHandler(event) {
		const value = event.target.value ?? this.default;
		if (!this.allowed.includes(value)) return;

		let updated = false;
		if (typeof this.changeCallback === "function") {
			this.changeCallback().bind(this);
			updated = true;
		}

		if (updated) this.value = value;
	}

	keydownHandler(event) {
		if (!event.ctrlKey || !(this.keys && this.keys[event.key])) return;
		this.value = this.keys[event.key];

		if (!this.menu && event.key === "ArrowDown") {
			if (!this.isOpen) this.isOpen = true;
		}
	}
}
