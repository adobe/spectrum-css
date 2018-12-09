#!/usr/bin/env node
const shell = require('shelljs');

// Grab provided args. Possible options equal patch, minor, major.
const [,, ...args] = process.argv

let version = args[0];

// check for system dependencies
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// if no version, set minor as default version bump
if(!version) {
	version = 'minor'
}

// bump version & tag
console.log(version);
shell.exec(`npm version ${version} -m 'Release %s' `)

let tag = shell.exec(`git describe --abbrev=0`).stdout;
console.log(tag);
// push up to github, assumes origin is where you want to push
//shell.exec(`git push origin && git push --tags`)

