#!/usr/bin/env node
const shell = require('shelljs');
const fs = require('fs');
let packageJSON = require('../package.json');

// change scope to @spectrum for internal release
packageJSON.name = '@spectrum/spectrum-css';

// write the new name to package.json
fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2));

// install spectrum-icons
shell.exec(`npm install @spectrum/spectrum-icons@^2.0.0`)