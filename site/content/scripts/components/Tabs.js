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

export default class Tabs {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.items = [
			...el.querySelectorAll(
				":scope > .spectrum-Tabs-items > .spectrum-Tabs-item"
			),
			...el.querySelectorAll(":scope > .spectrum-Tabs-item"),
			...el.querySelectorAll(
				":scope > .spectrum-ActionGroup > .spectrum-ActionGroup-item"
			),
		];
		this.panels = [...el.querySelectorAll(":scope > .spectrum-Tabs-panel")];
		this.indicator = el.querySelector(
			":scope > .spectrum-Tabs-selectionIndicator"
		);

		this.selected =
			this.items.indexOf(this.items.find((item) => this.isSelected(item))) ?? 0;
		this.select(this.items[this.selected]);

		this.items.forEach((tabItem) => {
			tabItem.addEventListener("click", this.clickHandler.bind(this));
		});
	}

	isTabItem(el) {
		return this.items.includes(el);
	}

	isPanel(el) {
		return this.panels.includes(el);
	}

	isSelected(el) {
		return el.classList.contains("is-selected");
	}

	isDisabled(el) {
		return el.classList.contains("is-disabled");
	}

	getSelectedTabItem() {
		if (!this.items) return;
		if (this.selected) return this.items[this.selected];
		return this.items.find((item) => this.isSelected(item));
	}

	getPanel(el) {
		const id = el.getAttribute("panel-id");
		if (id) return this.panels.find((panel) => panel.id === id);

		const index = this.items.indexOf(el);
		if (index >= 0) return this.panels[index];
		return;
	}

	updateIndicator(tabItem) {
		if (!tabItem || !this.indicator) return;
		const width = tabItem.offsetWidth;
		const position = tabItem.offsetLeft;
		this.indicator.style.width = `${width}px`;
		this.indicator.style.transform = `translateX(${position}px)`;
	}

	select(el) {
		if (!this.isTabItem(el) || this.isDisabled(el)) return;

		const current = this.getSelectedTabItem();
		if (current) {
			current.classList.remove("is-selected");
			const panel = this.getPanel(current);
			if (panel) panel.classList.remove("is-selected");
		}

		el.classList.add("is-selected");
		this.selected = this.items.indexOf(el);

		const panel = this.getPanel(el);
		if (panel) panel.classList.add("is-selected");
	}

	clickHandler(event) {
		const tabItem = event.target.closest(
			".spectrum-Tabs-item, .spectrum-ActionGroup-item"
		);
		if (!this.isTabItem(tabItem)) return;
		if (this.isDisabled(tabItem)) return;

		// Update selected tab item
		this.select(tabItem);
	}
}
