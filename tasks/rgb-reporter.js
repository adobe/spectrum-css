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

/* eslint-disable no-console */

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

// const postcss = require("postcss");
// const prettier = require("prettier");

const DIRECTORY_SRC = path.parse("tokens");
const inputDir = DIRECTORY_SRC.name;

// const OUTPUT_DIR = path.join(DIRECTORY_SRC, 'csv-output');

// Function to find and return custom properties containing `-rgb` and `-opacity`
async function findCustomProperties(input) {
  const DISTCSS = path.join(input, "dist", "index.css");

  try {
    // Check if the dist file exists
    await fsp.access(DISTCSS);

    // Read the CSS file async
    const cssContent = await fsp.readFile(DISTCSS, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      if(data.includes("-rgb")) {
      // console.log(data);
      return data;
      }
    });

    // the synchronous version
    // const cssContent = fs.readFileSync(DISTCSS, 'utf8', (err, data) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   if(data.includes("-rgb")) {
    //   // console.log(data);
    //   return data;
    //   }
    // });

    // Regular expression to match custom properties with `-rgb` or `-opacity` or `-transparent`
    const opacityRegex = /(--[\w-]*-(?:opacity)):.*;/g;
    const rgbRegex = /(--[\w-]*-(?:rgb)):.*;/g;
    const transparentRegex = /--[\w-]*-transparent-[\w-]*:.*;/g;

    // Find all matches
    // const matches = [...cssContent.matchAll(opacityRegex)];
    // const matches = [...cssContent.matchAll(rgbRegex)];
    const matches = [...cssContent.matchAll(transparentRegex)];

    // Extract matched lines
    const matchedLines = matches.map(match => match[0]);

    // Output the matches
    console.log(`Found ${matchedLines.length} custom properties:`);
    matchedLines.forEach(line => console.log(line));

    return matchedLines;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(`File not found: ${DISTCSS}`);
    } else {
      console.error(`Error reading file: ${err.message}`);
    }
  }
}

(async () => {
  await findCustomProperties(inputDir);
})();

// console.log("first pass:", findCustomProperties(inputDir));


