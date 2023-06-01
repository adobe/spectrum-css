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

"use strict";

import workflow from "@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg";
import ui from "@spectrum-css/icon/dist/spectrum-css-icons.svg";

import Accordion from "./components/Accordion.js";
import AssetCard from "./components/AssetCard.js";
import CodePreview from "./components/CodePreview.js";
import CycleButton from "./components/CycleButton.js";
import Dial from "./components/Dial.js";
import Dialog from "./components/Dialog.js";
import InputGroup from "./components/InputGroup.js";
import Menu from "./components/Menu.js";
import Picker from "./components/Picker.js";
import Popover from "./components/Popover.js";
import ProgressCircle from "./components/ProgressCircle.js";
import Rating from "./components/Rating.js";
import Search from "./components/Search.js";
import SideBar from "./components/SideBar.js";
import Slider from "./components/Slider.js";
import Stepper from "./components/Stepper.js";
import Swatch from "./components/Swatch.js";
import Tabs from "./components/Tabs.js";
import TextField from "./components/TextField.js";
import TreeView from "./components/TreeView.js";

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

window.addEventListener("DOMContentLoaded", async () => {
	injectSVG(workflow, "workflow");
	injectSVG(ui, "ui");

	/* Hack the TOC plugin to apply appropriate classes to the markup */
	const asideTOC = document.querySelector(".toc");
	if (asideTOC) {
		const heading = asideTOC.previousElementSibling;
		if (heading.tagName === "H2") {
			heading.classList.add("spectrum-TreeView-heading");
		}

		asideTOC.querySelector("ol,ul")?.prepend(heading.cloneNode(true));
		if (asideTOC.querySelector("ol,ul")) heading.remove();

		[...asideTOC.querySelectorAll("ol,ul")].forEach((list) => {
			list?.classList?.add("spectrum-TreeView", "spectrum-TreeView--sizeM");
			[...list.querySelectorAll("li")].forEach((li) => {
				li.classList.add("spectrum-TreeView-item");
				const a = li.querySelector("a");
				if (!a) return;
				a.classList.add("spectrum-TreeView-itemLink");
				// Add a label wrapper around the text
				a.innerHTML = `<span class="spectrum-TreeView-itemLabel">${a.innerHTML}</span>`;
			});
		});
	}

	document
		.querySelectorAll(".spectrum-Accordion")
		.forEach((el) => new Accordion(el, {}));
	document
		.querySelectorAll(".spectrum-AssetCard")
		.forEach((el) => new AssetCard(el, {}));
	document
		.querySelectorAll(".site-Example-container")
		.forEach((el) => new CodePreview(el, {}));
	document
		.querySelectorAll(".spectrum-CycleButton")
		.forEach((el) => new CycleButton(el, {}));
	document.querySelectorAll(".spectrum-Dial").forEach((el) => new Dial(el, {}));
	document
		.querySelectorAll(".spectrum-Dialog")
		.forEach((el) => new Dialog(el, {}));
	document
		.querySelectorAll(".spectrum-InputGroup")
		.forEach((el) => new InputGroup(el, {}));
	document
		.querySelectorAll(".spectrum-Picker:not([id^=switcher])")
		.forEach((el) => new Picker(el, {}));
	[...document.querySelectorAll(".spectrum-Menu")]
		.filter((menu) => !menu.closest(".spectrum-Picker"))
		.forEach((el) => new Menu(el, {}));
	document
		.querySelectorAll(".spectrum-Popover:not(.site-Search-popover)")
		.forEach((el) => new Popover(el, {}));
	document
		.querySelectorAll(".spectrum-Rating")
		.forEach((el) => new Rating(el, {}));
	document
		.querySelectorAll(".spectrum-Slider")
		.forEach((el) => new Slider(el, {}));
	document
		.querySelectorAll(".spectrum-Stepper")
		.forEach((el) => new Stepper(el, {}));
	document
		.querySelectorAll(".spectrum-Swatch")
		.forEach((el) => new Swatch(el, {}));
	document.querySelectorAll(".spectrum-Tabs").forEach((el) => new Tabs(el, {}));
	document
		.querySelectorAll(".spectrum-TextField")
		.forEach((el) => new TextField(el, {}));
	document
		.querySelectorAll(".spectrum-TreeView")
		.forEach((el) => new TreeView(el, {}));
	document
		.querySelectorAll(".spectrum-Popover")
		.forEach((el) => new Popover(el, {}));
	document
		.querySelectorAll(".spectrum-ProgressCircle")
		.forEach((el) => new ProgressCircle(el, {}));

	if (document.querySelector("#site-menu") && !window.sidebar) {
		window.sidebar = new SideBar(document.querySelector("#site-menu"), {
			overlay: document.querySelector("#site-overlay"),
			breakpoint: "(max-width: 960px)",
		});
	}

	if (document.querySelector("#site-search") && !window.siteSearch) {
		const searchEl = document.querySelector("#site-search");
		window.siteSearch = new Search(searchEl, {
			form: searchEl.querySelector("form"),
			input: searchEl.querySelector('input[type="search"]'),
			popover: new Popover(searchEl.querySelector(".site-Search-results"), {}),
			searchIndex: await fetch("/index.json", {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			}).then(async (response) => {
				if (!response.ok) {
					throw new Error("HTTP error " + response.status);
				}

				return await response.json();
			}),
			storeIndex: await fetch("/store.json", {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			}).then(async (response) => {
				if (!response.ok) {
					throw new Error("HTTP error " + response.status);
				}

				return await response.json();
			}),
			onFocusCallback: () => window.sidebar.show(),
		});
	}

	document
		.querySelectorAll(
			".spectrum-SideNav-item.is-expandable > .spectrum-SideNav-itemLink"
		)
		.forEach((item) => {
			item.addEventListener("click", () =>
				item.parentElement.classList?.toggle("is-open")
			);
		});

	document.querySelectorAll(".spectrum-SideNav-itemLink").forEach((link) => {
		link.parentElement.addEventListener("focusin", (event) => {
			event.target
				.closest(".spectrum-SideNav-item")
				.classList.add("focus-ring");
		});
		link.parentElement.addEventListener("focusout", (event) => {
			event.target
				.closest(".spectrum-SideNav-item")
				.classList.remove("focus-ring");
		});
	});

	if (document.querySelector("#switcher-scale") && !window.scale) {
		window.scale = new Picker(document.querySelector("#switcher-scale"), {
			options: ["medium", "large"],
			default: "medium",
			keys: {
				m: "medium",
				l: "large",
			},
			changeCallback: () => {
				document?.classList?.toggle("spectrum--" + this.value);
			},
		});
	}

	if (document.querySelector("#switcher-theme") && !window.theme) {
		window.theme = new Picker(document.querySelector("#switcher-theme"), {
			options: ["light", "dark", "darkest"],
			default: "light",
			keys: {
				1: "light",
				2: "dark",
				3: "darkest",
			},
			changeCallback: () => {
				document?.classList?.toggle("spectrum--" + this.value);

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

						prismLink.parentElement.insertBefore(
							prismDarkLink,
							prismLink.nextElementSibling
						);
					}
				} else if (prismDarkLink) {
					prismDarkLink.parentElement.removeChild(prismDarkLink);
				}
			},
		});
	}

	if (document.querySelector("#switcher-direction") && !window.direction) {
		window.direction = new Picker(
			document.querySelector("#switcher-direction"),
			{
				options: ["ltr", "rtl"],
				default: document.dir,
				keys: {
					r: "rtl",
					n: "ltr",
				},
				changeCallback: () => {
					document.documentElement.setAttribute("dir", this.value);
				},
			}
		);
	}

	if (document.querySelector("#switcher-vars-version") && !window.varsVersion) {
		window.varsVersion = new Picker(
			document.querySelector("#switcher-vars-version"),
			{
				options: ["default", "express"],
				default: "default",
				keys: {
					d: "default",
					e: "express",
				},
				changeCallback: () => {
					// @todo I believe we can toggle loading stylesheets using custom properties now
					document.documentElement.classList.toggle(
						"spectrum--express",
						value === "express"
					);
				},
			}
		);
	}

	// Observe the document for changes to the dir attribute
	// const attributeObserver = new MutationObserver((mutations) => {
	//   mutations.forEach((mutation) => {
	//     // console.log(mutation);
	//     // Only processing attribute mutations
	//     if (mutation.type !== 'attributes') return;

	//     if (
	//       mutation.attributeName === "dir" &&
	//       mutation.oldValue !== mutation.target?.getAttribute(mutation.attributeName)
	//     ) {
	//       // Update the local storage
	//       let current;
	//       const updated = document.documentElement.getAttribute('dir') ?? 'ltr';
	//       if (window.localStorage) {
	//         if (current = localStorage.getItem('spectrum:theme:dir')) {
	//           if (current !== updated) {
	//             localStorage.setItem('spectrum:theme:dir', updated);
	//           }
	//         }
	//       }

	//       // Update RTL/LTR styles
	//       const updateDirection = () => {
	//         document.querySelectorAll('.spectrum-Slider').forEach(updateSliderDirection);
	//       };

	//       updateDirection();
	//     }
	//   });
	// });

	// //configure it to listen to attribute changes
	// attributeObserver.observe(document.documentElement, { attributes: true });
});

window.matchMedia("(max-width: 768px)").addEventListener("change", () => {
	if (!window.scale) return;

	if (window.matchMedia("(max-width: 768px)").matches)
		window.scale.value = "large";
	else window.scale.value = "medium";
});
