/*
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

const regex = /--mod-(.+?)(?:-(.+?))*,(?:\s|$)/;
const rootDir = path.join(__dirname, "..", "components");
const fileExtension = ".css";
const writePath = "metadata/mods.md";

function writeToFile(file) {
    const directoryName = path.dirname(file);
    const readInterface = readline.createInterface({
        input: fs.createReadStream(file),
        console:false
    });
    var result  = new Set();
    readInterface.on("line", function(line) {
        const match = regex.exec(line);
        if (match) {
            var param = match[0].slice(0, -1);
            var str = param;
            if (param.endsWith(",")) {
                str = param.slice(0, -1);
            }
            result.add(str);
            const resultArray = [...result];
            fs.writeFile(`${directoryName}/${writePath}`, resultArray.join("\n"), (err) => {
            });
        }
    });
}

function searchFilesForString(rootDir, searchStr, extension) {
    const files = fs.readdirSync(rootDir);
    for(let i = 0; i < files.length; i++) {
        const dir = path.join(rootDir, files[i]);
        if (!fs.statSync(dir).isDirectory()) {
            continue;
        }
        fs.readdir(dir, function(err, files) {
            if (err) {
                console.warn(err);
                return;
            }
            files.forEach(function (file) {
                let readFile = path.join(dir, file);
                if (path.extname(readFile) === extension) {
                    writeToFile(readFile);
                } 
            });
        });
    }
}

searchFilesForString(rootDir, regex, fileExtension);

