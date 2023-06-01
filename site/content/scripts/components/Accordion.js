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

class AccordionItem {
	constructor(el, options = {}) {
		if (!el) return;
		this.el = el;
		this.parent = options.parent ?? this.el.closest(".spectrum-Accordion");
		this.isOpen = options.isOpen ?? this.isOpen;
		this.isDisabled = options.isDisabled ?? this.isDisabled;

		this.clickHandler = this.clickHandler.bind(this);
		this.keydownHandler = this.keydownHandler.bind(this);

		el.addEventListener("click", this.clickHandler);
		el.addEventListener("keydown", this.keydownHandler);
	}

	get isDisabled() {
		return this.el.classList.contains("is-disabled");
	}

	set isDisabled(value) {
		// cast to boolean if passed a string
		value = Boolean(value);
		if (value === this.isDisabled) return;
		this.el.classList.toggle("is-disabled", value);
	}

	get isOpen() {
		return this.el.classList.contains("is-open");
	}

	set isOpen(value) {
		// cast to boolean if passed a string
		value = Boolean(value);
		if (value === this.isOpen) return;
		this.el.classList.toggle("is-open", value);

		if (!this.isDemo) return;

		// Dispatch a custom event so that the preview can update the markup
		this.parent.dispatchEvent(
			new CustomEvent("markupChanged", { bubbles: true })
		);
	}

	clickHandler(event) {
		if (this.isDisabled) return;
		event.preventDefault();
		this.isOpen = !this.isOpen;
	}

	keydownHandler(event) {
		if (this.isDisabled) return;
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.isOpen = !this.isOpen;
		}
	}
}

export default class Accordion {
	constructor(el, options = {}) {
		if (!el) return;
		this.el = el;

		// Fetch and instantiate all Accordion items
		this.items = [...el.querySelectorAll(".spectrum-Accordion-item")].map(
			(itemEl) => new AccordionItem(itemEl, { parent: this })
		);
	}

	get isDemo() {
		return this.el.closest(".site-Example-preview") !== null;
	}

	get markupChangeEvent() {
		return new CustomEvent("markupChanged", { bubbles: true });
	}
}
