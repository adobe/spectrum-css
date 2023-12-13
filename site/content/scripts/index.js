/*!
 * Copyright 2023 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

"use strict";

import lunr from "lunr";

import workflow from "@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg";
import ui from "@spectrum-css/ui-icons/dist/spectrum-css-icons.svg";

import Search from "./Search.js";
import SpectrumSwitcher from "./SpectrumSwitcher.js";

/* --- UTILITIES --- */
const injectSVG = (source, label = "") => {
	const svgContainer = document.createElement("div");
	svgContainer.setAttribute("hidden", "");
	svgContainer.setAttribute("aria-hidden", "true");
	svgContainer.setAttribute("id", `#${label}`);
	svgContainer.style.position = "absolute";
	svgContainer.style.width = 0;
	svgContainer.style.height = 0;
	svgContainer.innerHTML = source;

	document.documentElement.appendChild(svgContainer);
};

function setPickerValue(picker, value, label) {
	const menu = picker.nextElementSibling.querySelector(".spectrum-Menu");
	const menuItem = menu.querySelector('.spectrum-Menu-item[value="' + value + '"]');

	if (menuItem) {
		const selectedMenuItem = menu.querySelector(".spectrum-Menu-item.is-selected");
		if (selectedMenuItem) {
			selectedMenuItem.classList.remove("is-selected");
			selectedMenuItem.removeAttribute("aria-selected");
		}

		menuItem.classList.add("is-selected");
		menuItem.setAttribute("aria-selected", "true");

		if (!label) {
			const menuLabel = menuItem.querySelector(".spectrum-Menu-itemLabel");
			if (menuLabel) {
				label = menuLabel.innerHTML;
			}
		}
	}

	picker.setAttribute("value", value);
	const fieldButton = picker;
	if (fieldButton && label) {
		const pickerLabel = fieldButton.querySelector(".spectrum-Picker-label");
		if (pickerLabel) {
			pickerLabel.innerHTML = label;
		}
	}

	const event = new CustomEvent("change", {
		bubbles: true,
		detail: {
			label: label,
			value: value,
		},
	});

	picker.dispatchEvent(event);
}

function handleScaleMQLChange(switcher) {
	const scalePicker = document.querySelector("#switcher-scale");

	if (window.matchMedia("(max-width: 960px)")?.matches) {
		switcher.scale = "large";
	} else {
		switcher.scale = "medium";
	}
	if (scalePicker) {
		setPickerValue(scalePicker, switcher.scale);
	}
}

function showSideBar() {
	const sideBar = document.querySelector("#site-sidebar");
	const overlay = document.querySelector("#site-overlay");

	if (window.matchMedia("(max-width: 960px)")?.matches) {
		overlay.addEventListener("click", hideSideBar);
		sideBar.classList.add("is-open");
		overlay.classList.add("is-open");
	}
}

function hideSideBar() {
	const sideBar = document.querySelector("#site-sidebar");
	const overlay = document.querySelector("#site-overlay");

	overlay.removeEventListener("click", hideSideBar);
	overlay.classList.remove("is-open");

	if (sideBar) sideBar.classList.remove("is-open");
	if (window.siteSearch) window.siteSearch.hideResults();
}

function handleSidebarMQLChange() {
	if (window.matchMedia("(max-width: 960px)")?.matches) return;

	// Get rid of the overlay if we resize while the sidebar is open
	hideSideBar();
}

async function initSiteSearch() {
	if (window.siteSearch) return;
	if (typeof Search === "undefined") return;

	const index = await fetch("/index.json", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	})
		.then(async (response) => {
			if (!response.ok) {
				throw new Error("HTTP error " + response.status);
			}

			const result = await response.json();
			return lunr.Index.load(result);
		})
		.catch(() => ({}));

	const store = await fetch("/store.json", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	})
		.then(async (response) => {
			if (!response.ok) {
				throw new Error("HTTP error " + response.status);
			}

			return await response.json();
		})
		.catch(() => ({}));

	window.siteSearch = new Search(
		document.querySelector("#site-search"),
		{
			index,
			store,
			onFocusCallback: window.sidebar ? window.sidebar.show : undefined,
		}
	);
}

function initTOC() {
	/* Hack the TOC plugin to apply appropriate classes to the markup */
	const asideTOC = document.querySelector(".toc");
	if (!asideTOC) return;

	const heading = asideTOC.previousElementSibling;
	if (heading && heading.tagName === "H2") {
		heading.classList.add("spectrum-TreeView-heading");
	}

	asideTOC.querySelector("ol,ul")?.prepend(heading.cloneNode(true));

	if (!asideTOC.querySelector("ol,ul")) return;

	heading.remove();

	[...asideTOC.querySelectorAll("ol,ul")].forEach((list) => {
		list.classList?.add("spectrum-TreeView", "spectrum-TreeView--sizeM");
		[...list.querySelectorAll("li")].forEach((li) => {
			li.classList?.add("spectrum-TreeView-item");
			const a = li.querySelector("a");
			if (!a) return;

			a.classList?.add("spectrum-TreeView-itemLink");

			// Add a label wrapper around the text
			a.innerHTML = `<span class="spectrum-TreeView-itemLabel">${a.innerHTML}</span>`;
		});
	});
}

function initSidebar() {
	if (window.sidebar) return;
	window.sidebar = document.querySelector("#site-menu");

	window.sidebar.addEventListener("click", function (event) {
		if (event.target.classList.contains("is-open")) {
			hideSideBar();
		} else showSideBar();
	});
}

const init = {
	theme: () => {
		window.theme.keys = {
			d: "default",
			e: "express",
		};

		window.theme.addEventListener("change", () => {
			const value = window.theme.value;
			document.documentElement.classList.toggle("spectrum--express", value === "express");

			// @todo I believe we can toggle loading stylesheets using custom properties now
			document.documentElement.classList.toggle("spectrum", value !== "express");
		});
	},
	color: () => {
		window.color.keys = {
			1: "light",
			2: "dark",
			3: "darkest",
		};

		window.color.addEventListener("change", () => {
			const value = window.color.value;
			if (value) {
				document?.classList?.toggle(`spectrum--${value}`);
			}

			const prismLink = document.querySelector("[data-prism]");
			let prismDarkLink = document.querySelector("[data-prism-dark]");
			if (value === "dark" || value === "darkest") {
				if (prismLink) {
					// Create the dark theme link if it doesn't exist
					if (!prismDarkLink) {
						prismDarkLink = document.createElement("link");
						prismDarkLink.setAttribute("rel", "stylesheet");
						prismDarkLink.setAttribute("data-prism-dark", "");
						prismDarkLink.setAttribute("type", "text/css");
						// @todo pass in the path so it isn't stored in the JS
						prismDarkLink.setAttribute("href", "css/prism/prism-dark.css");
					}

					prismLink.parentElement.insertBefore(prismDarkLink, prismLink.nextElementSibling);
				}
			} else if (prismDarkLink) {
				prismDarkLink.parentElement.removeChild(prismDarkLink);
			}
		});
	},
	scale: () => {
		window.scale.keys = {
			m: "medium",
			l: "large",
		};

		window.scale.addEventListener("change", () => {
			const value = window.scale.value;
			document?.classList?.toggle(`spectrum--${value}`);
		});

		window.matchMedia("(max-width: 768px)").addEventListener("change", () => {
			if (!window.scale) return;

			if (window.matchMedia("(max-width: 768px)").matches) window.scale.value = "large";
			else window.scale.value = "medium";
		});
	},
};

function initContexts(defaults) {
	["theme", "color", "scale"].forEach((item) => {
		if (!window[item]) {
			window[item] = document.querySelector(`#switcher-${item}`);
		}

		if (!window[item]) return;

		window[item].value = localStorage.getItem(`spectrum-${item}`) ?? defaults[item];
		window[item].addEventListener("change", () => {
			if (window[item]) localStorage.setItem(`spectrum-${item}`, window[item].value);
		});

		if (init[item]) init[item]();
	});

	if (window.direction) {
		window.direction.keys = {
			r: "rtl",
			n: "ltr",
		};

		window.direction.addEventListener("change", () => {
			const value = window.direction.value;
			document.documentElement.setAttribute("dir", value);
		});
	}
}

window.addEventListener("DOMContentLoaded", async () => {
	const scalePicker = document.querySelector("#switcher-scale");
	const themePicker = document.querySelector("#switcher-theme");
	const directionPicker = document.querySelector("#switcher-direction");
	const varsPicker = document.querySelector("#switcher-vars-version");

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

	initTOC();
	initSiteSearch();
	initSidebar();

	window.matchMedia("(max-width: 960px)")?.addListener(() => handleSidebarMQLChange());
	window.matchMedia("(max-width: 768px)")?.addListener(() => handleScaleMQLChange(switcher));

	handleScaleMQLChange(switcher);
	handleSidebarMQLChange();

	document.querySelectorAll(".spectrum-SideNav-item.is-expandable > .spectrum-SideNav-itemLink").forEach((item) => {
		item.addEventListener("click", () => item.parentElement.classList?.toggle("is-open"));
	});

	document.querySelectorAll(".spectrum-SideNav-itemLink").forEach((link) => {
		link.parentElement.addEventListener("focusin", (event) => {
			event.target.closest(".spectrum-SideNav-item").classList.add("focus-ring");
		});
		link.parentElement.addEventListener("focusout", (event) => {
			event.target.closest(".spectrum-SideNav-item").classList.remove("focus-ring");
		});
	});

	initContexts({
		theme: "spectrum",
		color: "light",
		scale: "medium",
	});

	injectSVG(workflow, "workflow");
	injectSVG(ui, "ui");

	document.addEventListener("click", function (event) {
		if (!event.target.classList.contains("js-markup-toggle")) return;

		event.preventDefault();

		const exampleMarkup = event.target.closest(".spectrum-CSSExample-markup");
		const isOpen = exampleMarkup.classList.contains("is-open");
		event.target.innerHTML = isOpen ? "Show markup" : "Hide markup";
		exampleMarkup.classList.toggle("is-open");
	});
});

window.addEventListener("SearchFocused", function () {
	showSideBar();

	// Immediately hide results, otherwise they show up in the wrong position since we're in the middle of animation
	window.siteSearch.hideResults();
});
