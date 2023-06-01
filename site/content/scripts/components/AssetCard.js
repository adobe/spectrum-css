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

export default class AssetCard {
	constructor(el, options = {}) {
		if (!el) return;
		this.el = el;

		this.checkbox = this.el.querySelector(".spectrum-Checkbox-input");

		this.clickHandler = this.clickHandler.bind(this);
		this.keypressHandler = this.keypressHandler.bind(this);

		this.el.addEventListener("click", this.clickHandler);
		this.el.addEventListener("keypress", this.keypressHandler);
	}

	set isSelected(state) {
		this.el.classList.toggle("is-selected", state);
	}

	get isSelected() {
		return this.el.classList.contains("is-selected");
	}

	clickHandler(event) {
		if (this.isDisabled) return;

		if (this.checkbox) this.checkbox.checked = !this.isSelected;
		this.isSelected = !this.isSelected;
		event.preventDefault();
	}

	keypressHandler(event) {
		if (this.isDisabled) return;
		if (event.key !== "Enter" && event.key !== " ") return;

		if (this.checkbox) this.checkbox.checked = !this.isSelected;
		this.isSelected = !this.isSelected;
		event.preventDefault();
	}
}
