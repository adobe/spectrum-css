#!/usr/bin/env node
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const shell = require('shelljs');
const fs = require('fs');
let packageJSON = require('../package.json');

// change scope to @spectrum for internal release
packageJSON.name = '@spectrum/spectrum-css';

// write the new name to package.json
fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2));

// install spectrum-icons
shell.exec(`npm install @spectrum/spectrum-icons@^2.0.0`)
