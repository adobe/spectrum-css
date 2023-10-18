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

import uiLarge from "@adobe/spectrum-css-ui-icons/dist/spectrum-css-icons-large.svg";
import uiMedium from "@adobe/spectrum-css-ui-icons/dist/spectrum-css-icons-medium.svg";
import workflow from "@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg";

import "./components/CodePreview.js";
import "./components/Search.js";
import "./components/SideBar.js";

/* --- LOAD COMPONENTS --- */
import "./components/index.js";

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

async function initSiteSearch() {
    if (window.siteSearch) return;
    window.siteSearch = document.querySelector("#site-search");

    if (!window.siteSearch) return;

    window.siteSearch.index = await fetch("/index.json", {
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

    window.siteSearch.store = await fetch("/store.json", {
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

    if (window.sidebar) {
        window.siteSearch.onFocusCallback = () => window.sidebar.show();
    }
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

            if (value === "large") {
                document.querySelector("#ui-medium").remove();
                injectSVG(uiLarge, "ui-large");
            } else {
                document.querySelector("#ui-large").remove();
                injectSVG(uiMedium, "ui-medium");
            }
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
    initTOC();
    initSiteSearch();
    initSidebar();

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
});
