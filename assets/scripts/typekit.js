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

/* global Typekit */
/* jshint -W033,-W116 */
/**
 * DO NOT REUSE THE ADOBE FONTS ID FOR SPECTRUM-CSS DOCS IN MY PRODUCT / PRODUCTION
 * See https://wiki.corp.adobe.com/display/devrel/Using+Typekit+at+Adobe to get set up right.
 */
window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // On pageload, determine to current pages language setting.
    // If it is US-language or unset use the 1st Adobe font web project id (smaller size),
    // otherwise use the 2nd kit with all the language settings (larger size)

    // This wrapper prevents loading the font more than once
    if (!window.Typekit) {
        // kitId: document.querySelector('[lang]:not([lang="en-US"])') !== null ? 'pbi5ojv' : 'ruf7eed',
        const kitId = document.querySelector('[lang]:not([lang="en-US"])') === null ? "mge7bvf" : "rok6rmo";

        const html = document.documentElement;
        html.classList.add("wf-loading");

        const t = setTimeout(function () {
            html.classList.remove("wf-loading");
            html.classList.add("wf-inactive");
        }, 3000);

        const tk = document.createElement("script");
        let d = false;

        // Always load over https
        tk.src = "https://use.typekit.net/" + kitId + ".js";
        tk.type = "text/javascript";
        tk.async = "true";
        tk.onload = tk.onreadystatechange = () => {
            const a = this.readyState;
            if (d || (a && a !== "complete" && a !== "loaded")) return;

            d = true;
            clearTimeout(t);

            try {
                window.Typekit = Typekit.load({
                    kitId,
                    scriptTimeout: 3000,
                    active: function () {
                        var loader = document.getElementById("loader");
                        if (loader) {
                            setTimeout(function () {
                                // Hide the loader
                                loader.style.display = "none";
                            }, 125);
                        }
                    },
                });
            } catch (b) {
                /* ignore */
            }
        };

        const script = document.getElementsByTagName("script")[0];
        script.parentNode.insertBefore(tk, script);
    }
});
