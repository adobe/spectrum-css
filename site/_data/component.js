const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const fg = require("fast-glob");
const yaml = require("js-yaml");
const npmFetch = require("npm-registry-fetch");

async function fetchMetadata(metadata) {
  /* Component data required to fetch vars metadata */
  if (!metadata || !metadata.id || !metadata.name) return metadata;
  const { id, name, dnaStatus, cssStatus, status, examples = [] } = metadata;

  // const quiet = typeof process.env.VERBOSE === undefined || process.env.VERBOSE?.toLowerCase() !== 'true' ? true : false;
  const varsMetadata = await import("@spectrum-css/vars").catch(() => ({}));
  const cleanId = id.replace("-", "");
  const idParts = id.split("-");

  /* Iterate over metadata keys and filter out component-specific properties */
  const dnaComponent = Object.keys(varsMetadata)
    .filter((varKey) => varKey.startsWith(`spectrum-${cleanId}`) || varKey.startsWith(`spectrum-${idParts[0]}`))
    .reduce((acc, varKey) => {
      /* Attempt to capture name, status, version */
      let key = varKey.match(`spectrum-${cleanId}(?:-[s|m|l|xl])?-(name|status|version)`)?.[1];
      if (!key) key = varKey.match(`spectrum-${cleanId}(?:-\\w+)*-(name|status|version)`)?.[1];
      if (!key)
        key = varKey.match(
          `spectrum-${idParts[0]}(?:-[s|m|l|xl])?${
            idParts[1] ? `-${idParts[1]}` : ""
          }(?:-\\w+)*-(name|status|version)`,
        )?.[1];
      if (!key) return acc;

      acc[key] = varsMetadata[varKey];
      return acc;
    }, {}) ?? {
    name,
    status: dnaStatus ?? "Contribution",
  };

  return {
    ...metadata,
    title: metadata.title ?? dnaComponent.name ?? name,
    cssStatus: status ?? "Unverified",
    status: status ?? "Contribution",
    examples: examples.map((example, idx) => {
      if (!example.id) example.id = `${name}${idx}`;

      /* All examples are verified if the outer component is verified */
      if (!example.status && status === "Verified") example.status = "Verified";

      if (dnaStatus === "Deprecated" || cssStatus === "Deprecated") {
        example.status = "Deprecated";
      } else if (dnaStatus === "Canon" || cssStatus === "Verified") {
        example.status = "Verified";
      }

      // The example is canon if the component is Canon and Verified
      if (dnaStatus === "Canon" && status === "Verified") example.dnaStatus = "Canon";

      return example ?? {};
    }),
  };
}

async function fetchStoryBook(storyPath) {
  const storybook = {};
  if (!fs.existsSync(storyPath)) return {};
  /**
     * @todo: There is a more optimal way to do this however
     * it requires the entire repo be using es6 modules.
     **/
  const story = await fsp.readFile(storyPath, "utf8");
  if (!story) return;
  [
    ...story.matchAll(/(?<key>\s{0,2}title|\s{0,2}description|\s{0,4}rootClass):\s*("|')(?<data>[^\n].+)("|'),?/g),
  ].forEach(({ groups } = {}) => {
    if (groups && groups.key && groups.data) {
      storybook[groups.key.trim()] = groups.data;
    }
  });
  return storybook;
}

const isMigrated = (dependencies = []) => Boolean(dependencies.includes("@spectrum-css/tokens"));

/**
 * This type defines what information is available in the object passed
 * to the component rendering template.
 *
 * @typedef {object} PageMetadata
 * @property {string} PageMetadata.title - The human-readable title for the component's page
 * @property {string} PageMetadata.id - Page identifier; mapped to folder name from the project's filesystem
 * @property {string} PageMetadata.description - A short summary of the component's goals and usage
 * @property {string} PageMetadata.rootClass - The CSS class name for the component's root element
 * @property {PathLike} PageMetadata.folder - The rendered path to the component's page on the site
 * @property {string} PageMetadata.parent - The parent component's identifier for use in the navigation rendering
 * @property {import('type-fest').PackageJson} PageMetadata.package - The package.json data for this component
 * @property {PathLike} PageMetadata.sourceFile - The full path to the component's metadata source file
 * @property {PathLike} PageMetadata.stylesheet - The file name of the component's main stylesheet (typically either index.css or index-vars.css)
 * @property {string[]} PageMetadata.dependencies - An array of the component's dependencies
 * @property {object} PageMetadata.tokens
 * @property {string[]} PageMetadata.tokens.mods - An array of the component's modifier tokens
 * @property {string[]} PageMetadata.tokens.internal - An array of the component's internal tokens
 * @property {string[]} PageMetadata.tokens.a11y - An array of the component's accessibility tokens (--highcontrast)
 * @property {string[]} PageMetadata.tokens.other - An array of the component's other used tokens
 * @property {boolean} PageMetadata.migrated - True if the component has migrated to the new token system
 * @property {string} PageMetadata.releaseDate - Formatted, human-readable date when the package version was published
 * @property {string} PageMetadata.status -
 * @property {string} PageMetadata.cssStatus -
 * @property {string} PageMetadata.dnaStatus -
 * @property {string} PageMetadata.permalink - The url path to the published component page
 * @property {object[]} PageMetadata.examples -
 */
async function fetchRenderData(cwd) {
  if (!cwd) return;

  const folderName = cwd.split(path.sep).pop();

  // @todo, talk about how we can document these assets on the site...
  if (["expressvars", "tokens", "vars"].some((pkg) => folderName === pkg)) return;

  const pages = (await fg("metadata/*.yml", { cwd, absolute: true })) ?? [];
  // Skip this component if there is no content to render
  if (pages.length === 0) return;

  /* Fetch package data for the package */
  const packageJSON = await fsp
    .readFile(path.join(cwd, "package.json"), "utf8")
    .then(JSON.parse)
    .catch(() => Promise.reject(`No package.json found in ${cwd}`));

  const combinedDependencies = [...new Set([
    ...Object.keys(packageJSON?.dependencies ?? {}) ?? [],
    ...Object.keys(packageJSON?.devDependencies ?? {}) ?? [],
    ...Object.keys(packageJSON?.peerDependencies ?? {}) ?? [],
  ])];

  // @todo: detect these dependencies from the markup on the page
  // create a data map that connects the foldername with the root class
  const dependencies = [
    ...new Set([
      folderName,
      ...combinedDependencies.filter(
        (packageName) =>
          packageName.startsWith("@spectrum-css") && !["vars", "tokens"].includes(packageName),
      )
        .map((packageName) => packageName.replace(/^@spectrum-css\//, "")),
    ]),
  ];

  const storybook = await fetchStoryBook(path.join(cwd, `stories/${folderName}.stories.js`));

  const releaseDate = await npmFetch
    .json(packageJSON.name)
    .then((data) => {
      if (!data || !data.time) return "Unreleased";
      const datetime = data.time[packageJSON.version] ?? data.time.latest;
      if (!datetime) return "Unreleased";
      return new Date(datetime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    })
    .catch(() => "Unreleased");

  let stylesheet;
  if (fs.existsSync(path.join(cwd, "dist/index.css"))) {
    stylesheet = "index.css";
  }

  const compiledData = [];
  for (const file of pages) {
    let fileBasename = path.basename(file, ".yml");

    /** @todo: this type should match the schema for component examples */
    /** @type {object} */
    const rawData = await fsp
      .readFile(file, "utf8")
      .then(yaml.load)
      .catch(() => Promise.reject(`Error parsing ${file}`));

    /**
     * Attempt to load the metadata.json file which has information
     * about the component's custom properties.
     **/
    let propsData = {};
    try {
      propsData = require(path.join(cwd, "dist/metadata.json"));
    } catch(e) { /* ignore */ }

    const data = await fetchMetadata({
      id: (rawData.id ?? fileBasename ?? folderName)?.toLowerCase().trim(),
      ...rawData,
    });

    if (!data) continue;

    if (data.id && data.id === folderName && data.title) {
      data.title = data.title.replace(/\(default\)/, "").trim();
    }

    let folder = folderName;
    let parent = "components";
    if (data.id && !data.id.includes("-")) {
      folder = data.id;
    } else if (data.id && data.id.includes("-")) {
      folder = `${folderName}/${data.id.replace(`${folderName}-`, "")}`;
      parent = folderName;
    }

    if (fileBasename.includes(folder)) {
      fileBasename = fileBasename.replace(`${folder}-`, "");
    }

    compiledData.push({
      // This needs to stay first; storybook and then rootdata may overwrite these values
      title: data.title ?? folderName,
      id: folderName,
      ...storybook,
      ...(data ?? {}),
      folder: `/components/${folder}`,
      permalink: `components/${folder}/index.html`,
      parent,
      package: packageJSON,
      releaseDate,
      dependencies,
      tokens: propsData,
      migrated: isMigrated(combinedDependencies),
      stylesheet,
      sourceFile: file,
    });
  }
  return compiledData;
}

/** @return PageMetadata[] */
module.exports = async () => {
  /* This iterates over all the component packages */
  const folders = await fg("components/*/package.json", {
    cwd: path.join(__dirname, "../../"),
    absolute: true,
  }).then((packages) => packages.map((p) => path.dirname(p)));

  return Promise.all(folders.map(fetchRenderData))
    .then((data) => data.flat(1).filter(Boolean))
    .catch(console.error);
};
