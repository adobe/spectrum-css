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

/* global Search, SpectrumSwitcher */
const COLOR_FALLBACK = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const SCALE_FALLBACK = matchMedia("(max-width: 700px) and (hover: none) and (pointer: coarse), (max-height: 700px) and (hover: none) and (pointer: coarse)").matches ? "large" : "medium";

// Switcher
if (typeof SpectrumSwitcher !== "undefined" && !window.switcher) {
	window.switcher = new SpectrumSwitcher({
		theme: window.localStorage ? localStorage.getItem("swc-docs:theme:color") ?? COLOR_FALLBACK : COLOR_FALLBACK,
		varsVersion: window.localStorage ? localStorage.getItem("swc-docs:theme:theme") ?? "default" : "default",
		scale: window.localStorage ? localStorage.getItem("swc-docs:theme:scale") ?? SCALE_FALLBACK : SCALE_FALLBACK,
		direction: window.localStorage ? localStorage.getItem("swc-docs:theme:dir") ?? "ltr" : "ltr",
		callback: function (event) {
			const key = event.property === "vars" ? "vars-version" : event.property;
			const picker = document.querySelector(`#switcher-${key}`);
			if (!picker) return;

			picker.setAttribute("value", event.value);

			const menu = picker.nextElementSibling.querySelector(".spectrum-Menu");
			if (!menu) return;

			const menuItem = menu.querySelector(
				".spectrum-Menu-item[value=\"" + event.value + "\"]"
			);

			let label;
			if (menuItem) {
				const selectedMenuItem = menu.querySelector(
					".spectrum-Menu-item[selected]"
				);

				if (selectedMenuItem) {
					selectedMenuItem.classList.remove("is-selected");
					selectedMenuItem.removeAttribute("aria-selected");
				}

				menuItem.classList.add("is-selected");
				menuItem.setAttribute("aria-selected", "true");

				const menuLabel = menuItem.querySelector(".spectrum-Menu-itemLabel");
				if (menuLabel) {
					label = menuLabel.innerHTML;
				}
			}

			if (picker && label) {
				const pickerLabel = picker.querySelector(".spectrum-Picker-label");
				if (pickerLabel) pickerLabel.innerHTML = label;
			}
		},
	});
}

// Sidebar
function hideSideBar() {
	const overlay = document.querySelector("#site-overlay");
	overlay.removeEventListener("click", hideSideBar);
	overlay.classList.remove("is-open");

	const sideBar = document.querySelector("#site-sidebar");
	if (sideBar) sideBar.classList.remove("is-open");
	if (window.siteSearch) window.siteSearch.hideResults();
}

function showSideBar() {
	const overlay = document.querySelector("#site-overlay");
	const sideBar = document.querySelector("#site-sidebar");

	overlay.addEventListener("click", hideSideBar);
	sideBar.classList.add("is-open");
	overlay.classList.add("is-open");
}

window.addEventListener("SearchFocused", () => {
	showSideBar();

	// Immediately hide results, otherwise they show up in the wrong position since we're in the middle of animation
	if (window.siteSearch) window.siteSearch.hideResults();
});

window.addEventListener("resize", () => {
	if (!window.matchMedia("(max-width: 960px)").matches) {
		hideSideBar();
	}
});

window.addEventListener("DOMContentLoaded", () => {
	const siteSearch = document.querySelector("#site-search");

	// Search isn't supported on IE 11 and sideBar will not be exist in test mode
	if (typeof Search !== "undefined" && siteSearch && !window.siteSearch) {
		window.siteSearch = new Search(siteSearch);
	}

	if (!window.matchMedia("(max-width: 960px)").matches) hideSideBar();
	else showSideBar();

	const siteMenu = document.querySelector("#site-menu");
	if (siteMenu) {
		siteMenu.addEventListener("click", function () {
			const sideBar = document.querySelector("#site-sidebar");
			if (!sideBar) return;

			if (sideBar.classList.contains("is-open")) hideSideBar();
			else showSideBar();
		});
	}
});
