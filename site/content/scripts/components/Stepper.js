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

export default class Stepper {
	constructor(el, options = {}) {
		if (!el) return;
		this.el = el;

		this.focusinHandler = this.focusinHandler.bind(this);
		this.focusoutHandler = this.focusoutHandler.bind(this);

		this.el.addEventListener("focusin", this.focusinHandler);
		this.el.addEventListener("focusout", this.focusoutHandler);
	}

	set isSelected(state) {
		this.el.classList.toggle("is-selected", state);
	}

	get isSelected() {
		return this.el.classList.contains("is-selected");
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
}
