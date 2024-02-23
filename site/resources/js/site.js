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
/* eslint-disable no-unused-vars */
/* global document, window, Element, loadIcons, URLSearchParams */

window.addEventListener("DOMContentLoaded", () => {
	const scalePicker = document.querySelector("#switcher-scale");
	const themePicker = document.querySelector("#switcher-theme");
	const directionPicker = document.querySelector("#switcher-direction");
	const varsPicker = document.querySelector("#switcher-vars-version");

	const switcher = new SpectrumSwitcher({
		callback: function (event) {
			switch (event.property) {
				case "scale":
					setPickerValue(scalePicker, event.value);
					break;
				case "theme":
					setPickerValue(themePicker, event.value);
					break;
				case "direction":
					setPickerValue(directionPicker, event.value);
					break;
				case "vars":
					setPickerValue(varsPicker, event.value);
					break;
			}
		},
	});

	document.addEventListener("change", (event) => {
		switch (event.target.id) {
			case "switcher-scale":
				switcher.scale = event.detail.value;
				break;
			case "switcher-theme":
				switcher.theme = event.detail.value;
				break;
			case "switcher-direction":
				switcher.direction = event.detail.value;
				break;
			case "switcher-vars-version":
				switcher.varsVersion = event.detail.value;
				break;
		}
	});

	const scaleMQL = window.matchMedia("(max-width: 768px)");

	function handleScaleMQLChange() {
		switcher.scale = scaleMQL.matches ? "large" : "medium";

		if (scalePicker) setPickerValue(scalePicker, switcher.scale);
	}

	scaleMQL.addListener(handleScaleMQLChange);
	handleScaleMQLChange();

	const overlay = document.querySelector("#site-overlay");
	const sideBar = document.querySelector("#site-sidebar");
	function showSideBar() {
		if (sidebarMQL.matches) {
			overlay.addEventListener("click", hideSideBar);
			sideBar.classList.add("is-open");
			overlay.classList.add("is-open");
		}
	}

	function hideSideBar() {
		overlay.removeEventListener("click", hideSideBar);
		overlay.classList.remove("is-open");
		if (sideBar) {
			sideBar.classList.remove("is-open");
		}
		if (window.siteSearch) {
			window.siteSearch.hideResults();
		}
	}

	const sidebarMQL = window.matchMedia("(max-width: 960px)");

	function handleSidebarMQLChange() {
		if (!sidebarMQL.matches) {
			// Get rid of the overlay if we resize while the sidebar is open
			hideSideBar();
		}
	}

	sidebarMQL.addListener(handleSidebarMQLChange);
	handleSidebarMQLChange();


	const siteMenu = document.querySelector("#site-menu");
	siteMenu.addEventListener("click", () => {
		if (sideBar.classList.contains("is-open")) hideSideBar();
		else showSideBar();
	});

	const siteSearch = document.querySelector("#site-search");
	// Search isn't supported on IE 11 and sideBar will not be exist in test mode
	if (typeof Search !== "undefined" && siteSearch) {
		window.siteSearch = new Search(siteSearch);
	}

	window.addEventListener("SearchFocused", function () {
		showSideBar();

		// Immediately hide results, otherwise they show up in the wrong position since we're in the middle of animation
		siteSearch.hideResults();
	});
});
