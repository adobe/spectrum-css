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

export default class Menu {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.items = [...el.querySelectorAll(".spectrum-Menu-item")].map(
			(itemEl, idx) => new MenuItem(itemEl, { parent: this, idx })
		);
		this.popover = options.popover ?? el.closest(".spectrum-Picker-popover");
		this.picker =
			options.picker ??
			this.popover?.previousElementSibling?.classList?.contains(
				"spectrum-Picker"
			)
				? this.popover?.previousElementSibling
				: null;

		this.changeHandler = this.changeHandler.bind(this);
		this.keydownHandler = this.keydownHandler.bind(this);

		el.addEventListener("keydown", this.keydownHandler);
		el.addEventListener("change", this.changeHandler);

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.type !== "childList") return;
				let refreshItems = false;
				/* One or more children have been added to and/or removed from the tree. */
				if (mutation.removedNodes.length) {
					mutation.removedNodes.forEach((node) => {
						if (node.classList.contains("spectrum-Menu-item"))
							refreshItems = true;
					});
				}

				if (mutation.addedNodes.length) {
					mutation.addedNodes.forEach((node) => {
						if (node.classList.contains("spectrum-Menu-item"))
							refreshItems = true;
					});
				}

				if (refreshItems) {
					this.items = [...this.el.querySelectorAll(".spectrum-Menu-item")].map(
						(itemEl, idx) => new MenuItem(itemEl, { parent: this, idx })
					);
				}
			});
		});

		// Watch the popover for the addition or removal of a menu
		observer.observe(this.el, { childList: true });
	}

	get selectedItem() {
		return this.items.find((item) => item.isSelected);
	}

	set selectedItem(state) {
		if (!this.selectedItem) return;
		this.selectedItem.isSelected = state;
	}

	selectItem(idx) {
		// If the index is out of bounds, do nothing
		if (idx < 0 || idx > this.items.length - 1 || this.items[idx].isDisabled)
			return;

		this.activeItem = this.items[idx];
		this.activeItem.click();
		return this.activeItem;
	}

	get activeItem() {
		return this.items.find((item) => item.value === this.value);
	}

	set activeItem(item) {
		if (!item || !this.items.includes(item)) return;

		this.activeItem.isSelected = false;
		item.isSelected = true;
		this.value = item.value;
	}

	get value() {
		return this.el.getAttribute("value");
	}

	set value(input) {
		if (!input) return;

		this.el.setAttribute("value", input);

		this.el.dispatchEvent(
			new CustomEvent("change", {
				bubbles: true,
				detail: {
					label: this.label,
					value: input,
				},
			})
		);
	}

	previousItem() {
		const items = this.items.filter((item) => !item.isDisabled);
		const idx =
			this.activeItem.idx - 1 >= 0 ? this.activeItem.idx - 1 : items.length - 1;
		return this.selectItem(idx);
	}

	nextItem() {
		const items = this.items.filter((item) => !item.isDisabled);
		const idx =
			this.activeItem.idx + 1 < items.length ? this.activeItem.idx + 1 : 0;
		return this.selectItem(idx);
	}

	firstItem() {
		return this.selectItem(0);
	}

	lastItem() {
		return this.selectItem(items.length - 1);
	}

	changeHandler(event) {
		const value = event.target.value ?? this.default;
		// if (!options.includes(value)) return;

		let updated = false;
		if (typeof this.changeCallback === "function") {
			this.changeCallback().bind(this);
			updated = true;
		}

		if (updated) this.value = value;
	}

	keydownHandler(event) {
		switch (event.key) {
			case "ArrowDown":
				this.nextItem()?.focus();
				break;
			case "ArrowUp":
				this.previousItem()?.focus();
				break;
			case "Home":
				this.firstItem()?.focus();
				break;
			case "End":
				this.lastItem()?.focus();
				break;
			case "Enter" && this.picker:
				this.picker.isOpen = false;
				this.picker.value = this.activeItem.value;
				this.picker.focus();
				break;
			case "Escape" && this.picker:
				this.picker.isOpen = false;
				this.picker.focus();
				break;
		}

		event.preventDefault();
	}
}

export class MenuItem {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.parent = options.parent;
		this.idx = options.idx;

		this.label = this.el.querySelector(".spectrum-Menu-itemLabel");
		this.icon = this.el.querySelector(".spectrum-Menu-itemIcon");
	}

	get labelText() {
		return this.label?.innerText;
	}

	get isDisabled() {
		return this.el.classList.contains("is-disabled");
	}

	get isSelected() {
		return this.el.classList?.contains("is-selected");
	}

	set isSelected(state) {
		if (!this.el) return;

		this.el.classList?.toggle("is-selected", state);

		if (state) this.el.setAttribute("aria-selected", "true");
		else this.el.removeAttribute("aria-selected");
	}

	get isHighlighted() {
		return this.el.classList?.contains("is-highlighted");
	}

	set isHighlighted(state) {
		if (!this.el) return;

		this.el.classList?.toggle("is-highlighted", state);
	}
}
