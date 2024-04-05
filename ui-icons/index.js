const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");
const { optimize } = require("svgo");

const svgstore = require("svgstore");

// Not using svgo's loadConfig because it doesn't support dynamic config files
const getSvgoConfig = require("./svgo.config.js");

/**
 * @description Clean the file name
 */
const cleanFileName = (file) => {
	return file.replace(/^S2_/, "").replace(/Size/, "");
};

/**
 * @description Process the SVG assets using svgo config settings
 */
async function processSVG(filePath, destPath) {
	if (!fs.existsSync(filePath)) return;

	// Read in the SVG contents
	const contents = await fsp.readFile(filePath, "utf-8");
	const result = optimize(contents, getSvgoConfig());

	if (!result?.data) return;

	const assetName = cleanFileName(path.basename(filePath, ".svg"));

	return fsp.writeFile(path.join(destPath, `${assetName}.svg`), result.data);
}

/**
 * @description Attempts to fetch icon assets from their source
 */
async function copySVGs() {
	const source = require.resolve("@a4u/a4u-s2-ui-icon-global-set");
	if (!source) return Promise.resolve();

	const sourcePath = path.join(path.dirname(source), "assets");
	const files = await fg(["svg/*.svg"], {
		cwd: sourcePath,
		onlyFiles: true,
	});

	if (!files || files.length === 0) return;

	const outputPath = path.join(__dirname, "dist", "svg");

	if (fs.existsSync(outputPath)) {
		// Remove existing assets to replace them fully with the new ones
		fs.rmdirSync(outputPath, {
			force: true,
			recursive: true
		});
	}

	// Recreate the folder to store the new assets
	await fsp.mkdir(outputPath, {
		force: true,
		recursive: true
	});

	return Promise.all(
		files.map(file =>
			processSVG(
				path.join(sourcePath, file),
				outputPath
			)
		)
	);
}

/**
 * @description A custom alpha-numeric sort
 * @param {string} a
 * @param {string} b
 * @returns number
 */
function alphaNumericSort (a, b) {
	const aSet = a.match(/^([a-z]+)([0-9]+)\.svg$/i);
	const bSet = b.match(/^([a-z]+)([0-9]+)\.svg$/i);
	const aChar = aSet[1];
	const bChar = bSet[1];

	if (aChar !== bChar) return aChar > bChar ? 1 : -1;

	const aInt = parseInt(aSet[2] ?? 0);
	const bInt = parseInt(bSet[2] ?? 0);
	return aInt - bInt;
}

async function main() {
	// This can only be run by an Adobe employee on the VPN with appropriate access configured on their machine
	try {
		await copySVGs();
	}
	catch (e) { /* empty */ }

	// Hash to hold all icons arranged by processed name
	const icons = [];
	const store = svgstore();

	const files = await fg(["*.svg"], {
		cwd: path.join(__dirname, "dist", "svg"),
		onlyFiles: true,
	});

	if (!files || files.length === 0) {
		return Promise.reject("No assets detected.");
	}

	await Promise.all(
		files.map(async (file) => {
			const assetName = path.basename(file, ".svg");
			if (icons.includes(`${assetName}.svg`)) {
				// eslint-disable-next-line no-console
				console.log(`⚠️  The icon set already includes an icon with the name ${assetName}.`);
			}
			else icons.push(`${assetName}.svg`);

			const content = await fsp.readFile(path.join(__dirname, "dist", "svg", file), { encoding: "utf-8" });
			store.add(assetName, content);
		})
	);

	// Write the icon array to icons.json as a resource
	await fsp.writeFile(path.join(__dirname, "dist", "icons.json"), JSON.stringify(icons.sort(alphaNumericSort), null, 2));

	// Finally, we write out the store to disk
	const dest = path.join(__dirname, "dist", "spectrum-css-icons.svg");
	const config = getSvgoConfig({
		idPrefix: "spectrum-css-icon",
		removeViewBox: true,
	});

	const result = optimize(store.toString(), config);

	if (!result?.data) {
		return Promise.reject("Encountered an error optimizing SVG assets via svgo.");
	}

	return fsp.writeFile(dest, result?.data);
}

main()
	.then(() => {
		// eslint-disable-next-line no-console
		console.log("✔ Icons generated successfully.");
		process.exit(0);
	})
	.catch((e) => {
		console.error(e);
		process.exit(1);
	});
