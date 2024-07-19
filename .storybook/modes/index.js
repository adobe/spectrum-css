/*!
 * Copyright 2024 Adobe. All rights reserved.
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

const modes = {
    "Context: Spectrum 1": {
        scale: "medium",
        color: "light",
        lang: "en_US",
        context: "legacy",
    },
    "Context: Express": {
        scale: "medium",
        color: "light",
        textDirection: "ltr",
        context: "express",
    },
    "Dark | RTL": {
        scale: "medium",
        color: "dark",
        lang: "ar",
    },
};

export default modes;

export const disableDefaultModes = {
    ...Object.keys(modes).reduce((acc, key) => {
        acc[key] = { disable: true };
        return acc;
    }, {}),
};

export const mobile = {
    "Mobile": {
        scale: "large",
    },
};

export const viewports = {
    small: {
        width: 480,
    },
};

export const i18n = {
    // This is the default language, so we don't need to specify it here
    // "English": {
    //     lang: "en_US",
    // },
    "Hebrew": {
        lang: "he",
    },
    "Japanese": {
        lang: "ja",
    },
    "Korean": {
        lang: "ko",
    },
    "Arabic": {
        lang: "ar",
    },
};
