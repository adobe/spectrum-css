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

export default class CycleButton {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.icons = [...this.el.querySelectorAll(".spectrum-Icon")];

		this.clickHandler = this.clickHandler.bind(this);

		this.el.addEventListener("click", this.clickHandler);
	}

	get selectedIcon() {
		return this.icons.find((icon) => icon.classList.contains("is-selected"));
	}

	clickHandler(event) {
		if (!this.el || !this.selectedIcon) return;

		const selectedIndex = this.icons.indexOf(this.selectedIcon);
		this.selectedIcon.classList.toggle("is-selected", false);

		const newIndex =
			selectedIndex + 1 < this.icons.length ? selectedIndex + 1 : 0;
		this.icons[newIndex].classList.toggle("is-selected", true);

		event.preventDefault();
	}
}
