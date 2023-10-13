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

const md = require("./markdown.js");

function markdownify(value) {
    return md.render(value);
}

function jsonify(value) {
    return JSON.stringify(value, null, 2);
}

function dedupe(value) {
    return [...new Set(value)].filter(Boolean);
}

function getStatusLight(status) {
    if (!status) return "neutral";
    if (status === "Deprecated") return "negative";
    if (["Beta Contribution", "Contribution", "Unverified"].includes(status)) return "notice";
    if (["Canon", "Verified"].includes(status)) return "positive";
    return "neutral";
}

function log(value) {
    // eslint-disable-next-line no-console
    return console.log(value);
}

function map(row, valueKey = "fallback") {
    return [row[0], row[1][valueKey]];
}

function mapToArray(map) {
    return [...map].filter(Boolean);
}

function basename(str) {
    return str.split("/").pop();
}

function find(arr = [], key = "", value) {
    return arr?.find((item) => item[key] === value);
}

module.exports = {
    markdownify,
    jsonify,
    dedupe,
    getStatusLight,
    log,
    map,
    mapToArray,
    basename,
    find,
};
