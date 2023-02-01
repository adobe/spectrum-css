/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const fsp = require("fs").promises;
const { basename } = require("path");

const yaml = require("js-yaml");
const fg = require("fast-glob");

module.exports = async (root_folder) => {
    let nav = [];

    for(const file of await fg(`${root_folder}/*/metadata/*.yml`)) {
      const componentName = file.replace("/metadata", "").split("/").pop();
      const componentData = await fsp.readFile(file, "utf8").then(yaml.load).catch(console.error);

      nav.push({
        ...componentData,
        component: componentName,
        href: `${basename(componentName, ".yml")}.html`,
      });
    }

    return nav;
};
