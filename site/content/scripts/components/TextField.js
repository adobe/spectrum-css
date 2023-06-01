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

export default class TextField {
	constructor(el, options = {}) {
		if (!el) return;
		this.el = el;
		this.input =
			options.input ?? this.el.querySelector(".spectrum-TextField-input");
		this.icon =
			options.icon ?? this.el.querySelector(".spectrum-TextField-icon");
		this.form = options.form ?? this.el.closest("form");

		this.el.addEventListener("focusin", () => {
			this.focus = true;
		});

		this.el.addEventListener("focusout", () => {
			this.focus = false;
		});

		this.handleKeyDown = this.handleKeyDown.bind(this);

		this.input.addEventListener("keydown", this.handleKeyDown);
		// this.input.addEventListener('keypress', this.handleKeyPress.bind(this));
		// this.input.addEventListener('focus', (event) => {
		//   // Immediately hide results, otherwise they show up in the wrong position since we're in the middle of animation
		//   this.hideResults();

		//   if (typeof options.onFocusCallback === 'function') {
		//     options.onFocusCallback(event);
		//   }
		// });
	}

	set focus(state) {
		if (this.el.classList.contains("focus-ring") || !state) {
			this.el.classList?.toggle("is-keyboardFocused", state);
		} else if (!this.el.classList.contains("focus-ring") || !state) {
			this.el.classList?.toggle("is-focused", state);
		}
	}

	get focus() {
		return (
			this.el.classList.contains("focus-ring") ||
			this.el.classList.contains("is-keyboardFocused") ||
			this.el.classList.contains("is-focused")
		);
	}

	get isEmpty() {
		return (
			!this.input.value ||
			this.input.value === "" ||
			this.input.value.length === 0
		);
	}

	reset() {
		this.input.value = "";
	}

	handleKeyDown(event) {
		switch (event.key) {
			case "ArrowDown":
			case "Enter":
				if (!this.form) break;
				if (this.form.requestSubmit) this.form.requestSubmit();
				else this.form.submit();
				break;
			case "Escape":
				if (!this.form) break;
				this.form.reset();
				break;
			default:
				if (event.isComposing) break;
		}
	}
}
