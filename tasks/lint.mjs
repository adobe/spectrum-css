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

import path from "path";
import fs, { promises as fsp } from "fs";

import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import semver from "semver";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const rootDir = process.cwd();

const { _:inputs , verbose = false } = yargs(hideBin(process.argv)).alias(
	"v",
	"verbose"
).argv;

import { parseCSS } from "./parse-css.mjs";


const rootPkg = await fsp.readFile(path.join(rootDir, "package.json")).then(JSON.parse);
const expectedHomepage = (name) =>
	`${rootPkg.homepage}${
		name && !rootPkg.homepage.endsWith("/") ? `/${name}` : name
	}`;

async function main() {
	const promises = [];

  /**
   * Read in the component's package data to determine which build method to use
   */
  const pkg = await fsp
    .readFile(path.join(process.cwd(), "package.json"))
    .then(JSON.parse)
	  .catch(() => { });

  /** If there's no package.json data, nothing to do */
  if (!pkg || !pkg.name) {
    throw new Error(
      `No package.json data was found at ${process.cwd()}. Ensure this script is running at the root of a component directory.`
    );
  }

	promises.push(validatePackageJSON(pkg));

	const indexVars = await fsp.readFile(path.join(process.cwd(), "dist/index.css"));
	const { varDefinitions, usedVars } = await parseCSS(indexVars);
	const { component } = filterVars(usedVars, { pkgName: pkg.name });
	promises.push(
		...component.map(async (key) => {
			// If the definition doesn't exist inside the component's own stylesheet, check for it in the global stylesheet
			if (varDefinitions.has(key)) Promise.resolve();

			return checkVariables(key).then((isUndefined) =>
				isUndefined ? console.log(`⛔️ ${pkg.name} uses undefined variable ${key}`) : Promise.resolve()
			);
		})
	);

  	/** Wait for all the linting to conclude */
	return Promise.all(promises);
}

async function validatePackageJSON(pkg) {
	const promises = [];

	const report = [];
	let updated = false;
	const packagePath = path.join(pkg, "package.json");
	const packageJSON = await fsp.readFile(packagePath).then(JSON.parse);
	if (!packageJSON) {
		Promise.reject(`Unable to read package.json for ${packagePath}`);
	}

	const {
		name,
		license,
		publishConfig,
		repository,
		author,
		homepage,
		bugs,
		main,
		peerDependencies,
		devDependencies,
	} = packageJSON;
	if (!name) {
		return Promise.reject(`Unable to read name for ${packagePath}`);
	}
	if (verbose) report.push(`- ${name}`);

	/* Validate expected license */
	if (!license || license !== rootPkg.license) {
		packageJSON.license = rootPkg.license;
		if (verbose) report.push(`    Adding license=${packageJSON.license}`);
		updated = true;
	}

	/* Validate expected publish access */
	if (!publishConfig || publishConfig.access != "public") {
		packageJSON.publishConfig = {
			...packageJSON.publishConfig,
			access: "public",
		};
		if (verbose) report.push(`    Adding publishConfig.access=public`);
		updated = true;
	}

	/* Validate repository */
	if (
		!repository ||
		!repository.directory ||
		!repository.type ||
		!repository.url ||
		repository.type !== rootPkg.repository?.type ||
		repository.url !== rootPkg.repository?.url
	) {
		packageJSON.repository = {
			...rootPkg.repository,
			directory: path.relative(rootDir, pkg),
		};
		if (verbose)
			report.push(
				`    Adding repository details=${JSON.stringify(
					packageJSON.repository
				)}`
			);
		updated = true;
	}

	/* Validate author */
	if (!author || author !== rootPkg.author) {
		packageJSON.author = rootPkg.author;
		if (verbose) report.push(`    Adding author=${packageJSON.author}`);
		updated = true;
	}

	/* Validate homepage */
	if (!homepage) {
		packageJSON.homepage = expectedHomepage(name.split("/").pop());
		if (verbose) report.push(`    Adding homepage=${packageJSON.homepage}`);
		updated = true;
	}

	/* Validate bugs url */
	if (!bugs || !bugs.url || bugs.url !== rootPkg.bugs?.url) {
		packageJSON.bugs = rootPkg.bugs;
		if (verbose)
			report.push(`    Adding bugs.url=${JSON.stringify(packageJSON.bugs)}`);
		updated = true;
	}

	/* Validate main */
	if (!main) {
		packageJSON.main = "dist/index.css";
		if (verbose) report.push(`    Adding main=dist/index.css`);
		updated = true;
	}

	const peerDepsCheck = await checkPeerDependencies(
		peerDependencies,
		devDependencies
	);

	if (peerDepsCheck) {
		["peerDependencies", "devDependencies"].forEach((dep) => {
			if (peerDepsCheck[dep]) {
				packageJSON[dep] = peerDepsCheck[dep];
				updated = true;
			}
		});
	}

	if (updated) {
		report.map((r) => console.log(r));
		promises.push(
			fsp.writeFile(packagePath, JSON.stringify(packageJSON, null, 2))
		);
	}

	if (promises.length === 0) {
		return Promise.resolve(`👍 All package.json metadata validated.`);
	}

	return Promise.all(promises);
}

/* Check if the variable is defined in the global vars */
async function checkVariables(key) {
	return [
		resolve(__dirname, "../components/vars/dist/variable-metadata.json"),
		resolve(__dirname, "../components/expressvars/dist/variable-metadata.json"),
		resolve(__dirname, "../components/tokens/dist/index.css"),
	].reduce(async (acc, file) => {
		if (!fs.existsSync(file)) return acc && false;

		const ext = path.extname(file).replace(".", "");
		if (ext === "json") {
			const data = await fsp.readFile(file).then(JSON.parse);
			if (data[key]) return acc && true;
		} else if (ext === "css") {
			const c = await fsp.readFile(file, "utf8");
			const { varDefinitions } = await parseCSS(c);
			if (!varDefinitions || !varDefinitions.has(key)) return acc && false;

			return acc && true;
		}
	}, false);
}

/**
 * Validate peer deps for components; escapes before running lerna if they are not valid.
 **/
async function checkPeerDependencies(
	peerDependencies,
	devDependencies,
) {
	if (!peerDependencies) return;

	const report = [];
	let updated;
	for (const dependency of Object.keys(peerDependencies)) {
		if (!devDependencies) continue;
		const devDepVer = semver.coerce(
			devDependencies[dependency]?.replace("^", "")
		);
		if (devDepVer === null) continue;
		if (semver.satisfies(devDepVer, peerDependencies[dependency])) continue;

		// Set a new peer dependency or bump the dev dependency to align them
		const peerDepVer = semver.coerce(peerDependencies[dependency]);
		if (semver.gt(devDepVer, peerDepVer)) {
			if (verbose) {
				report.push(
					`    ⚠️ Out of date peerDependencies ${dependency}: devDependency ${devDepVer.toString()} is greater than ${peerDepVer.toString()}`
				);
			}

			const newPeerDepVer = semver.coerce(
				"^" + devDepVer.toString()?.replace(/-\d+$/, "")?.split(".")?.shift()
			);
			peerDependencies[dependency] = `>=${newPeerDepVer.toString()}`;
			updated = true;
			report.push(
				`    ✔ Updated ${dependency} to >=${newPeerDepVer.toString()}`
			);
		} else {
			if (verbose) {
				report.push(
					`    ⚠️ Out of date peerDependencies ${dependency}: devDependency ${devDepVer.toString()} is less than ${peerDepVer.toString()}`
				);
			}

			const newDevDepVer = semver.coerce(
				"^" + peerDepVer.toString().replace(/-\d+$/, "")
			);
			devDependencies[dependency] = `^${newDevDepVer.toString()}`;
			updated = true;
			report.push(`    ✔ Updated ${dependency} to ^${newDevDepVer}`);
		}
	}

	if (!updated) return;

	report.map((r) => console.log(r));
	return { peerDependencies, devDependencies };
}

/** Get the arguments passed to the script */
const pwd = process.cwd();

inputs.forEach(async (input) => {
	/** Change the working directory to the component */
	if (!fs.existsSync(path.dirname(path.join(__dirname, "../components", input)))) {
		return;
	}

	process.chdir(path.dirname(path.join(__dirname, "../components", input)));

	await main().catch((err) => {
		console.error(err);
		process.exit(1);
	});
});

/** Restore the original working directory */
process.chdir(pwd);
