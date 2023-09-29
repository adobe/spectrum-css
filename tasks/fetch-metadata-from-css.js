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

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

function fetchComponentMetadata(from) {
    let ret;

    // Check the file for it's leading metadata
    const content = fs.readFileSync(from, "utf8");
    const root = postcss.parse(content, { from });
    root.walkComments((comment) => {
      if (!comment.text.startsWith("*")) return;
      const lines = comment.text.split("\n");
      if (!lines.length) return;

      ret = lines.reduce((acc, line) => {
        const keyword = line.match(/@([a-z]+)\s/)?.[1];
        if (!keyword) return acc;
        const value = line.replace("*", "").replace(` @${keyword} `, "").trim();
        if (!value) return acc;
        acc[keyword] = value;
        return acc;
      }, {});
    });

    return ret;
  }
