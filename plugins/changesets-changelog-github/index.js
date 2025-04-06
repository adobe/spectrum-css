import { getInfo, getInfoFromPullRequest } from "@changesets/get-github-info";
import { config } from "dotenv";

config();

/**
 * @type {import("@changesets/types").ChangelogFunctions}
 */
const changelogFunctions = {
	getDependencyReleaseLine: async (
		changesets,
		dependenciesUpdated,
		options,
	) => {
		if (!options.repo) {
			throw new Error(
				"Please provide a repo to this changelog generator like this:\n\"changelog\": [\"@changesets/changelog-github\", { \"repo\": \"org/repo\" }]",
			);
		}
		if (dependenciesUpdated.length === 0) return "";

		const changesetLink = `Updated dependencies [${(
			await Promise.all(
				changesets.map(async (cs) => {
					if (cs.commit) {
						let { links } = await getInfo({
							repo: options.repo,
							commit: cs.commit,
						});
						return links.commit;
					}
				}),
			)
		)
			.filter((_) => _)
			.join(", ")}]:`;

		const updatedDepenenciesList = dependenciesUpdated.map(
			(dependency) => `  - ${dependency.name}@${dependency.newVersion}`,
		);

		return [changesetLink, ...updatedDepenenciesList].join("\n");
	},
	getReleaseLine: async (changeset, type, options) => {
		if (!options || !options.repo) {
			throw new Error(
				"Please provide a repo to this changelog generator like this:\n\"changelog\": [\"@changesets/changelog-github\", { \"repo\": \"org/repo\" }]",
			);
		}

		/** @type {number | undefined} */
		let prFromSummary;
		/** @type {string | undefined} */
		let commitFromSummary;
		/** @type {string[]} */
		let usersFromSummary = [];

		const replacedChangelog = changeset.summary
			.replace(/^\s*(?:pr|pull|pull\s+request):\s*#?(\d+)/im, (_, pr) => {
				let num = Number(pr);
				if (!isNaN(num)) prFromSummary = num;
				return "";
			})
			.replace(/^\s*commit:\s*([^\s]+)/im, (_, commit) => {
				commitFromSummary = commit;
				return "";
			})
			.replace(/^\s*(?:author|user):\s*@?([^\s]+)/gim, (_, user) => {
				usersFromSummary.push(user);
				return "";
			})
			.trim();

		const changelogLines = replacedChangelog
			.split("\n")
			.map((l) => l.trimRight());

		const links = await (async () => {
			if (prFromSummary !== undefined) {
				let { links } = await getInfoFromPullRequest({
					repo: options.repo,
					pull: prFromSummary,
				});
				if (commitFromSummary) {
					links.commit = `[\`${commitFromSummary.slice(0, 7)}\`](https://github.com/${options.repo}/commit/${commitFromSummary})`;
				}
				return links;
			}
			const commitToFetchFrom = commitFromSummary || changeset.commit;
			if (commitToFetchFrom) {
				let { links } = await getInfo({
					repo: options.repo,
					commit: commitToFetchFrom,
				});
				return links;
			}
			return { commit: null, pull: null, user: null };
		})();

		const users = usersFromSummary.length
			? usersFromSummary
				.map(
					(userFromSummary) =>
							`[@${userFromSummary}](https://github.com/${userFromSummary})`,
				)
				.join(", ")
			: links.user;

		const prefix = [
			links.pull === null ? "" : ` ${links.pull}`,
			links.commit === null ? "" : ` ${links.commit}`,
			users === null ? "" : ` Thanks ${users}!`,
		].join("");

		return `${prefix ? `\n\n📝 ${prefix}` : ""}\n\n${changelogLines.join("\n")}\n`;
	},
};

export default changelogFunctions;
