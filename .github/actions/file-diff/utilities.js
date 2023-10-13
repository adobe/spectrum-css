const { statSync, existsSync, readdirSync } = require("fs");
const { readFile, writeFile } = require("fs").promises;
const { join, relative, sep, basename } = require("path");

const core = require("@actions/core");
const github = require("@actions/github");
const glob = require("@actions/glob");
const artifact = require("@actions/artifact");

const diff = require("node-htmldiff");

/**
 * List all files in the directory to help with debugging
 * @param {string} path
 * @param {string[]} pattern
 * @returns {void}
 */
function debugEmptyDirectory(path, pattern) {
	if (!existsSync(path)) {
		throw new Error(`The provided path does not exist in the workspace`);
	}

	/**
	 * Recursively report on the files in the provided directory for debugging
	 * @param {string} path
	 * @param {{ core: import('@actions/core'), rootDir: string }} configuration
	 * @returns {void}
	 */
	function reportOnDirectoryFiles(path, { core, rootDir = path }) {
		readdirSync(path, { withFileTypes: true }).forEach((dirent) => {
			if (dirent.isFile()) {
				const file = join(path, dirent.name);
				if (dirent.name.startsWith(".")) return;
				core.info(
					`- ${relative(path, file)}  |  ${exports.bytesToSize(
						statSync(file).size,
					)}`,
				);
			} else if (dirent.isDirectory()) {
				const dir = join(path, dirent.name);
				if (dirent.name.startsWith(".") || dirent.name === "node_modules")
					return;
				core.info(`${relative(rootDir, dir)}/`);
				reportOnDirectoryFiles(dir, { core, rootDir });
			}
		});
	}

	core.startGroup(`All files in ${path}`);
	reportOnDirectoryFiles(path, { core });
	core.endGroup();

	throw new Error(
		`No files found matching the glob pattern: ${pattern
			.map((p) => join(path, p))
			.join(", ")}`,
	);
}

/**
 * Convert the provided byte size to a human readable format
 * @param {number} bytes
 * @returns {string} The size in human readable format
 */
exports.bytesToSize = function (bytes) {
	if (bytes === 0) return "0";

	const sizes = ["bytes", "KB", "MB", "GB", "TB"];
	// Determine the size identifier to use (KB, MB, etc)
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	const rounding = i > 2 ? 2 : 0;
	return (bytes / Math.pow(1024, i)).toFixed(rounding) + " " + sizes[i];
};

/**
 * Convert the provided difference between file sizes into a human
 * readable representation of the change.
 * @param {number} difference
 * @returns {string}
 */
exports.printChange = function (difference) {
	return difference === 0
		? `No change 🎉`
		: `${difference > 0 ? "+" : "-"}${exports.bytesToSize(
				Math.abs(difference),
		  )} ${difference > 0 ? "⬆" : "⬇"}`;
};

/**
 * Convert the provided difference between file sizes into a percent
 * value of the change.
 * @param {number} delta
 * @param {number} original
 * @returns {string}
 */
exports.printPercentChange = function (delta) {
	if (delta === 0) return `0%`;
	const direction = delta > 0 ? "+" : "-";
	return `${direction}${Math.abs(delta * 100).toFixed(2)}%`;
};

exports.generateFileDiff = async function (path, diffPath, filename) {
	const originalContent = await readFile(join(path, filename));
	const diffContent = await readFile(join(diffPath, filename));
	const diffFile = diff(originalContent, diffContent);

	const writePath = join(__dirname, `${basename(filename, ".css")}.html`);
	await writeFile(writePath, diffFile);

	return writePath;
};

/**
 * Split out the data indexed by filename into groups by component
 * @param {Map<string, number>} dataMap
 * @param {Map<string, number>} diffMap
 * @returns {Map<string, Map<string, { byteSize: number, diffByteSize: number }>>}
 */
exports.splitDataByComponent = function (dataMap, diffMap = new Map()) {
	const COMPONENTS = new Map();
	[...dataMap.entries()].forEach(([file, byteSize]) => {
		// Determine the name of the component
		const parts = file.split(sep);
		const componentIdx = parts.findIndex((part) => part === "dist") - 1;
		const componentName = parts[componentIdx];
		const readableFilename = file.replace(/^.*\/dist\//, "");

		const fileMap = COMPONENTS.has(componentName)
			? COMPONENTS.get(componentName)
			: new Map();

		if (!fileMap.has(readableFilename)) {
			fileMap.set(readableFilename, {
				byteSize,
				diffByteSize: diffMap.get(file),
			});
		} else {
			throw new Error(`The file ${file} was found twice in the dataset`);
		}

		/** Update the component's table data */
		COMPONENTS.set(componentName, fileMap);
	});
	return COMPONENTS;
};

/**
 *
 * @param {Map<string, {byteSize: number, diffByteSize: number}>} data
 * @returns {[string, number, number][] | [][]}
 */
exports.formatData = function (data) {
	return [...data.entries()].reduce(
		(table, [{ byteSize, diffByteSize }, readableFilename]) => {
			// @todo readable filename can be linked to html diff of the file?
			const row = [readableFilename, byteSize, diffByteSize];
			if (diffByteSize !== undefined) {
				const delta = (diffByteSize - byteSize) / byteSize;
				row.push(
					exports.printChange(diffByteSize - byteSize),
					exports.printPercentChange(delta),
				);
			}
			return [...table, row];
		},
		[],
	);
};

/**
 *
 * @param {Map<string, number>} pathMap
 * @param {Map<string, number>} diffMap
 * @returns {string}
 */
exports.makeTable = function (COMPONENTS) {
	const sections = [];
	const changedFiles = new Set();

	/** Next convert that component data into a comment */
	COMPONENTS.forEach((fileMap, componentName) => {
		const totalSize = [...fileMap.values()].reduce(
			(acc, { byteSize }) => acc + byteSize,
			0,
		);
		const totalDiffSize = [...fileMap.values()].reduce(
			(acc, { diffByteSize = 0 }) => acc + diffByteSize,
			0,
		);

		/**
		 * We don't need to report on components that haven't changed
		 * unless they didn't exist before
		 * @todo do we want to report that there was no change to the component?
		 */
		if (totalSize === totalDiffSize) return;

		// Add the changed files to the overall changed files set
		fileMap.forEach(({ byteSize, diffByteSize }, filename) => {
			if (diffByteSize === undefined) return;
			if (changedFiles.has(filename)) return;
			if (byteSize === diffByteSize) return;
			// Add the full path to the changed files set so we can link to it
			changedFiles.add(join("components", componentName, "dist", filename));
		});

		sections.push({ name: componentName, totalSize, totalDiffSize, fileMap });
	});

	return { sections, changedFiles };
};

/** @typedef {import('@octokit/rest').RestEndpointMethodTypes['issues']} Issues */
/**
 * @param {RegExp} findComment
 * @param {string} content
 * @param {string} token - The GitHub token to use for authentication
 * @returns {Promise<Issues['createComment']['response'] | Issues['updateComment']['response']>}
 */
exports.addComment = async function ({ search, content, token }) {
	/**
	 * @description Set up the octokit client
	 * @type ReturnType<import('@actions/github').getOctokit>
	 */
	const octokit = new github.getOctokit(token);

	// Fetch data about the action that triggered the workflow
	/** @type import('@actions/github/lib/interfaces').WebhookPayload['pull_request'] */
	const pullRequest = github.context.payload.pull_request;
	/** @type string */
	const owner = github.context.payload.repository.owner.login;
	/** @type string */
	const repo = github.context.payload.repository.name;

	if (!pullRequest) {
		core.warning(`No pull request found in the context, skipping comment`);
		return;
	}

	const commentData = { owner, repo };
	const comments =
		(await octokit.paginate(octokit.rest.issues.listComments, {
			...commentData,
			issue_number: pullRequest.number,
		})) ?? [];

	/**
	 * Add the body content after comments are fetched so that it's
	 * not included in the search for existing comments.
	 */
	commentData.body = content;

	/**
	 * Search comments from the bottom-up to find the most recent comment
	 * from the GitHub Actions bot that matches our criteria.
	 */
	const existingComment = comments.reverse().find((comment) => {
		return (
			comment?.user?.login === "github-actions[bot]" &&
			comment?.user?.type === "Bot" &&
			search.test(comment?.body)
		);
	});

	// If the comment exists then update instead of creating a new one.
	const action = existingComment ? "updateComment" : "createComment";

	if (existingComment) {
		commentData.comment_id = existingComment.id;
	} else {
		commentData.issue_number = pullRequest.number;
	}

	return octokit.rest.issues[action](commentData);
};

exports.getAssetURL = async function ({ artifactName, token }) {
	/**
	 * @description Set up the octokit client
	 * @type ReturnType<import('@actions/github').getOctokit>
	 */
	const octokit = new github.getOctokit(token);

	/** @type import('@actions/github').context */
	const context = github.context;

	const {
		data: { artifacts },
	} = await octokit.request(
		"GET /repos/{owner}/{repo}/actions/artifacts?name={name}",
		{
			owner: context.repo.owner,
			repo: context.repo.repo,
			name: artifactName,
		},
	);

	if (
		artifacts.length === 0 ||
		(!context &&
			!context.serverUrl &&
			!context.repo &&
			!context.repo.owner &&
			!context.repo.repo &&
			!context.runId &&
			!artifacts[0].id)
	)
		return;

	return `${context.serverUrl}/${context.repo.owner}/${context.repo.repo}/suites/${context.runId}/artifacts/${artifacts[0].id}`;
};

/**
 *
 * @param {string} rootPath
 * @param {string[]} patterns
 * @returns {Promise<Map<string, number>>}
 */
exports.fetchFilesAndSizes = async function (rootPath, patterns = []) {
	if (!existsSync(rootPath)) return new Map();

	/** @type import('@actions/glob').Globber */
	const globber = await glob.create(
		patterns.map((f) => join(rootPath, f)).join("\n"),
	);
	/** @type Awaited<ReturnType<import('@actions/glob').Globber['glob']>> */
	const files = await globber.glob();

	// If no files are found, fail the action with a helpful message
	if (files.length === 0) {
		debugEmptyDirectory(rootPath, patterns);
		return new Map();
	}

	core.info(
		`Found ${files.length} files matching the glob pattern ${patterns.join(
			", ",
		)}.`,
	);

	// Fetch the files and their sizes, creates an array of arrays to be used in the table
	return new Map(
		files
			.map((f) => {
				const relativePath = relative(rootPath, f);
				const stat = statSync(f);
				if (!stat || stat.isDirectory()) return;
				return [relativePath, stat.size];
			})
			.filter(Boolean),
	);
};
