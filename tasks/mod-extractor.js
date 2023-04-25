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
const path = require("path");
const readline = require("readline");

const pattern = "--mod-";
const rootDir = path.join(__dirname, "..", "components");
const fileExtension = ".css";
const writePath = "metadata/mods.md";

function extract(line, index) {
    let modVariable = "";
    for(let i = index; i < line.length; i++) {
        if (line[i] == ")" || line[i] == "," || line[i] == " ") {
            break;
        }
        modVariable += line[i];
    }
    return modVariable;
}

function writeToFile(file) {
    const directoryName = path.dirname(file);
    const readInterface = readline.createInterface({
        input: fs.createReadStream(file),
        console:false
    });
    var result  = new Set();
    readInterface.on("line", function(line) {
        let index = line.indexOf(pattern);
        while(index != -1) {
            let modVariable = extract(line, index);
            result.add(modVariable);
            index = line.indexOf(pattern, index + 1);
        }
        if (result.size) {
            const resultArray = [...result];
            const formattedResults = resultArray.map((result) => `|\`${result}\`|`);
            const tableHeader = `| Modifiable Custom Properties |\n| --- |`;
            formattedResults.unshift(tableHeader);
            fs.writeFile(`${directoryName}/${writePath}`, formattedResults.join('\n'), (err) => {});
        }
    });
}

function searchFilesForString(dir, pattern, extension) {
    const files = fs.readdirSync(dir);
    for(let i = 0; i < files.length; i++) {
        const file = path.join(dir, files[i]);

        if (fs.statSync(file).isDirectory()) {
            searchFilesForString(file, pattern, extension);
        } else {
            if (path.extname(file) === extension) {
                writeToFile(file);
            }
        }
    }
}

searchFilesForString(rootDir, pattern, fileExtension);
