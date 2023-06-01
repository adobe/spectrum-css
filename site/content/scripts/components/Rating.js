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

export default class Rating {
	constructor(el, options = {}) {
		if (!el) return;
		this.el = el;
		this.input = this.el.querySelector(".spectrum-Rating-input");
		this.icons = [...this.el.querySelectorAll(".spectrum-Rating-icon")].map(
			(el, idx) => new RatingItem(el, { idx, parent: this })
		);

		this.focusinHandler = this.focusinHandler.bind(this);
		this.focusoutHandler = this.focusoutHandler.bind(this);
		this.changeHandler = this.changeHandler.bind(this);

		this.el.addEventListener("focusin", this.focusinHandler);
		this.el.addEventListener("focusout", this.focusoutHandler);
		this.el.addEventListener("change", this.changeHandler);
	}

	get isReadOnly() {
		return this.input.classList.contains("is-readOnly");
	}

	get isFocused() {
		return this.el.classList.contains("is-focused");
	}

	set isFocused(state) {
		this.el.classList.toggle("is-focused", state);
	}

	set value(input) {
		const parsedInput = parseInt(input, 10);
		if (this.isReadOnly || this.value === parsedInput) return;
		this.input.value = parsedInput;
	}

	get value() {
		return parseInt(this.input.value, 10);
	}

	focusinHandler() {
		if (!this.el) return;
		this.isFocused = true;
	}

	focusoutHandler() {
		if (!this.el) return;
		this.isFocused = false;
	}

	changeHandler(event) {
		if (!this.el || !this.input || this.isReadOnly) return;

		event.preventDefault();

		this.icons.forEach((icon, index) => {
			icon.isSelected = index <= parsedInput - 1;
			icon.isCurrentValue = index === parsedInput - 1;
		});
	}
}

export class RatingItem {
	constructor(el, options = {}) {
		if (!el) return;
		this.el = el;
		this.index = options.idx;
		this.parent = options.parent;
	}

	set isSelected(state) {
		this.el.classList.toggle("is-selected", state);
	}

	get isSelected() {
		return this.el.classList.contains("is-selected");
	}

	set isCurrentValue(state) {
		this.el.classList.toggle("is-currentValue", state);
	}

	get isCurrentValue() {
		return this.el.classList.contains("is-currentValue");
	}

	clickHandler() {
		if (!this.el) return;
		this.parent.value = this.index;
	}
}
