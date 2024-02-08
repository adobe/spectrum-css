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

"use strict";

import SpectrumSwitcher from "./SpectrumSwitcher.js";

loadIcons("/assets/images/spectrum-css-icons.svg");
loadIcons("/assets/images/spectrum-icons.svg");

window.addEventListener("DOMContentLoaded", function () {
	document.addEventListener("click", function (event) {
		// Show and hide code samples
		if (event.target.classList.contains("js-markup-toggle")) {
			event.preventDefault();
			const exampleMarkup = event.target.closest(".spectrum-CSSExample-markup");
			const isOpen = exampleMarkup.classList.contains("is-open");
			event.target.innerHTML = isOpen ? "Show markup" : "Hide markup";
			exampleMarkup.classList.toggle("is-open");
		}
	});

	// Switcher
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

	// Sidebar
	var sideBar = document.querySelector("#site-sidebar");
	var overlay = document.querySelector("#site-overlay");
	var scaleMQL = window.matchMedia("(max-width: 768px)");
	function handleScaleMQLChange() {
		if (scaleMQL.matches) {
			switcher.scale = "large";
		} else {
			switcher.scale = "medium";
		}
		if (scalePicker) {
			setPickerValue(scalePicker, switcher.scale);
		}
	}
	scaleMQL.addListener(handleScaleMQLChange);

	document.body.addEventListener("change", function (event) {
		if (event.target.id === "switcher-scale") {
			switcher.scale = event.detail.value;
		} else if (event.target.id === "switcher-theme") {
			switcher.theme = event.detail.value;
		} else if (event.target.id === "switcher-direction") {
			switcher.direction = event.detail.value;
		} else if (event.target.id === "switcher-vars-version") {
			switcher.varsVersion = event.detail.value;
		}
	});

	let scalePicker = document.querySelector("#switcher-scale");
	let themePicker = document.querySelector("#switcher-theme");
	let directionPicker = document.querySelector("#switcher-direction");
	let varsPicker = document.querySelector("#switcher-vars-version");
	window.addEventListener("PageFastLoaded", function updateScalePickers() {
		scalePicker = document.querySelector("#switcher-scale");
		themePicker = document.querySelector("#switcher-theme");
		directionPicker = document.querySelector("#switcher-direction");
		varsPicker = document.querySelector("#switcher-vars-version");
		if (scalePicker) {
			setPickerValue(scalePicker, switcher.scale);
		}
		if (themePicker) {
			setPickerValue(themePicker, switcher.theme);
		}
		if (directionPicker) {
			setPickerValue(directionPicker, switcher.direction);
		}
		if (varsPicker) {
			setPickerValue(varsPicker, switcher.varsVersion);
		}
	});

	var sidebarMQL = window.matchMedia("(max-width: 960px)");
	function handleSidebarMQLChange() {
		if (!sidebarMQL.matches) {
			// Get rid of the overlay if we resize while the sidebar is open
			hideSideBar();
		}
	}
	sidebarMQL.addListener(handleSidebarMQLChange);

	handleScaleMQLChange();
	handleSidebarMQLChange();

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

	document
		.querySelector("#site-menu")
		.addEventListener("click", function (event) {
			if (sideBar.classList.contains("is-open")) {
				hideSideBar();
			} else {
				showSideBar();
			}
		});

	// Search isn't supported on IE 11 and sideBar will not be exist in test mode
	if (typeof Search !== "undefined" && document.querySelector("#site-search")) {
		window.siteSearch = new Search(document.querySelector("#site-search"));
	}

	window.addEventListener("SearchFocused", function () {
		showSideBar();

		// Immediately hide results, otherwise they show up in the wrong position since we're in the middle of animation
		siteSearch.hideResults();
	});
});
