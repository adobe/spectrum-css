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

// set the default remote to push to as origin
let pushTarget = 'origin';
// get local remotes
let remotes  = shell.exec(`git remote`, {silent:true}).stdout;
// convert to an array
remotes = remotes.split("\n");
// remove empty array object
remotes.pop();

// grab local remote name for adobe/spectrum-css repo
// update push target to that remote name
remotes.forEach((remote) => {
	let remoteURL = shell.exec(`git remote get-url ${remote}`, {silent:true}).stdout;
	if (remoteURL.includes('adobe/spectrum-css')) {
		pushTarget = remote;
	}
})

// bump version & tag
shell.exec(`npm version ${version} -m 'Release %s' `)

// grab the name of the tag
let tag = shell.exec(`git describe --abbrev=0`, {silent:true}).stdout.trim();
console.log(`Pushing commits and the tag for release ${tag} up to ${pushTarget}`);

// push up to github, assumes origin is where you want to push
shell.exec(`git push ${pushTarget} master && git push ${pushTarget} ${tag}`)


