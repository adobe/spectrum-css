const core = require("@actions/core");

const {
    fetchFilesAndSizes,
    splitDataByComponent,
    bytesToSize,
    printChange,
    printPercentChange,
    generateFileDiff,
    formatData,
    makeTable,
    addComment,
    getAssetURL,
} = require("./utilities.js");

async function run() {
    try {
        // --------------- Fetch user input values  ---------------
        const token = core.getInput("token");
        const path = core.getInput("path");
        const diffPath = core.getInput("diff-path");
        const fileGlobPattern = core.getMultilineInput("file-glob-pattern", {
            trimWhitespace: true,
        });
        const shouldAddComment = core.getBooleanInput("comment") ?? true;
        const commentHeader = core.getInput("comment-header");
        // --------------- End user input  ---------------

        // --------------- Evaluate compiled assets  ---------------
        /** @type Map<string, number> */
        const pathOutput = await fetchFilesAndSizes(path, fileGlobPattern);
        /**
         * If a diff path is provided, get the diff files and their sizes
         * @type Map<string, number>
         **/
        const diffOutput = await fetchFilesAndSizes(diffPath, fileGlobPattern);
        /**
         * Indicates that there are files that have changed
         * @type boolean
         */
        const hasDiff = diffOutput.size > 0;
        // --------------- End evaluation  ---------------

        /** Split the data by component package */
        const COMPONENTS = splitDataByComponent(pathOutput, diffOutput);
        const { sections, changedFiles } = makeTable(COMPONENTS);

        const overallSize = [...pathOutput.values()].reduce((acc, size) => acc + size, 0);

        /** Calculate the overall size of the updated assets */
        const overallDiffSize = [...diffOutput.values()].reduce((acc, size) => acc + size, 0);

        /** If no diff map data provided, we're going to report on the overall size */
        /**
         * If the updated assets are the same as the original,
         * report no change
         * @todo could likely use this to report the overall change; is that helpful info?
         **/
        let markdown =
            diffOutput.size === 0
                ? `\n\n**Overall size**: ${bytesToSize(overallSize)}`
                : `\n\n**Overall Δ**: ${printChange(overallDiffSize - overallSize)}${
                      overallSize === overallDiffSize
                          ? " 🎉"
                          : ` (${printPercentChange((overallDiffSize - overallSize) / overallSize)})`
                  }\n`;

        if (changedFiles.size > 0) {
            // --------------- Upload the changed files as an artifact  ---------------
            // Create the diff asset for all change files
            const paths = await Promise.all(
                [...changedFiles].map(async (file) => {
                    /** @type import('@actions/artifact').UploadResponse */
                    return generateFileDiff(path, diffPath, file);
                }),
            );

            // Upload thsoe assets
            const artifactClient = artifact.create();
            const uploaded = await artifactClient.uploadArtifact("compiled-asset-diffs", paths, __dirname);

            // expected: github.com/adobe/spectrum-css/suites/14765070772/artifacts/839612341
            const url = await getAssetURL({ ...uploaded, token });

            /** Prefix the markdown content with a list of the changed assets */
            markdown += `\n\n**All changed files**: ${[...changedFiles].map((file) => file).join(", ")}`;
            if (url) markdown += `\n - [Review diffs](${url})`;
        }

        markdown += sections
            .map(
                ({ name, totalSize, totalDiffSize, fileMap }) =>
                    `\n### ${name}\n${
                        totalSize > 0 && totalDiffSize === 0
                            ? "🚨 **Compiled assets removed or empty** 🚨"
                            : printChange(totalDiffSize - totalSize)
                    }\n${[
                        ["File", "Size", "Diff", "Δ", "Δ%"],
                        [" - ", " - ", " - ", " - ", " - "],
                        [
                            "**Total changes**",
                            bytesToSize(totalSize),
                            bytesToSize(totalDiffSize),
                            printChange(totalDiffSize - totalSize),
                            printPercentChange((totalDiffSize - totalSize) / totalSize),
                        ],
                        ...formatData(fileMap),
                    ]
                        .map((row) => `| ${row.join(" | ")} |`)
                        .join("\n")}\n`,
            )
            .join("\n");

        // --------------- Start Comment  ---------------
        if (shouldAddComment) {
            await addComment({
                search: new RegExp(`^${commentHeader}`),
                content: `${commentHeader}\n${markdown}`,
                token,
            });
        }
        // --------------- End Comment  ---------------

        // Add a summary to the GitHub Actions output
        core.startGroup(commentHeader);
        core.info(markdown);
        core.endGroup();

        core.summary = markdown;

        // --------------- Set output variables  ---------------
        if (pathOutput.size > 0) {
            const totalSize = [...pathOutput.entries()].reduce((acc, [_, size]) => acc + size, 0);
            core.setOutput("total-size", totalSize);

            if (hasDiff) {
                const totalDiffSize = [...diffOutput.entries()].reduce((acc, [_, size]) => acc + size, 0);

                core.setOutput("has-changed", hasDiff && totalSize !== totalDiffSize ? "true" : "false");
            }
        } else {
            core.setOutput("total-size", 0);
        }
    } catch (error) {
        core.error(error.stack);
        core.setFailed(error.message);
    }
}

run();
