import parse from "@changesets/parse";
import test from "ava";
import sinon from "sinon";
import changelogFunctions from "./index.js";

/** @type {sinon.SinonSandbox} */
let sandbox = sinon.createSandbox();

const data = {
	commit: "a085003d4c8ca284c116668d7217fb747802ed85",
	user: "Andarist",
	pull: 1613,
	repo: "emotion-js/emotion",
};

test.beforeEach((t) => {
	sandbox.stub({
		getInfo: () => ({
			pull: data.pull,
			user: data.user,
			links: {
				user: `[@${data.user}](https://github.com/${data.user})`,
				pull: `[#${data.pull}](https://github.com/${data.repo}/pull/${data.pull})`,
				commit: `[\`${data.commit.slice(0, 7)}\`](https://github.com/${data.repo}/commit/${data.commit})`,
			},
		})
	}, "getInfo");
	sandbox.stub({
		getInfoFromPullRequest: () => ({
			commit: data.commit,
			user: data.user,
			links: {
				user: `[@${data.user}](https://github.com/${data.user})`,
				pull: `[#${data.pull}](https://github.com/${data.repo}/pull/${data.pull})`,
				commit: `[\`${data.commit.slice(0, 7)}\`](https://github.com/${data.repo}/commit/${data.commit})`,
			},
		}),
	}, "getInfoFromPullRequest");
});

test.afterEach.always(() => {
	sandbox.restore();
});

/**
 *
 * @param {string} content
 * @param {string|undefined} commit
 * @returns
 */
const getChangeset = (content, commit) => {
	return [
		{
			...parse(
        `---
  pkg: "minor"
  ---

  something
  ${content}
  `
			),
			id: "some-id",
			commit,
		},
		"minor",
		{ repo: data.repo },
	];
};

[data.commit, "wrongcommit", undefined].forEach((commitFromChangeset) => {
	["pr", "pull request", "pull"].forEach((keyword) => {
		test(`with commit from changeset of ${commitFromChangeset} override pr with ${keyword} keyword with #`, async (t) => {
			t.is(
				await changelogFunctions.getReleaseLine(
					...getChangeset(
                        `${keyword}: #${data.pull}`,
                        commitFromChangeset
					)
				),
				"\n\n📝  [#1613](https://github.com/emotion-js/emotion/pull/1613) [`a085003`](https://github.com/emotion-js/emotion/commit/a085003d4c8ca284c116668d7217fb747802ed85) Thanks [@Andarist](https://github.com/Andarist)!\n\nsomething\n"
			);
		});

		test(`with commit from changeset of ${commitFromChangeset} override pr with pr ${keyword} without #`, async (t) => {
			t.is(
				await changelogFunctions.getReleaseLine(
					...getChangeset(
                        `pr: ${data.pull}`,
                        commitFromChangeset
					)
				),
				"\n\n📝  [#1613](https://github.com/emotion-js/emotion/pull/1613) [`a085003`](https://github.com/emotion-js/emotion/commit/a085003d4c8ca284c116668d7217fb747802ed85) Thanks [@Andarist](https://github.com/Andarist)!\n\nsomething\n"
			);
		});
	});

	test(`override commit ${commitFromChangeset} with commit keyword`, async (t) => {
		t.is(
			await changelogFunctions.getReleaseLine(
				...getChangeset(`commit: ${data.commit}`, commitFromChangeset)
			),
			"\n\n📝  [#1613](https://github.com/emotion-js/emotion/pull/1613) [`a085003`](https://github.com/emotion-js/emotion/commit/a085003d4c8ca284c116668d7217fb747802ed85) Thanks [@Andarist](https://github.com/Andarist)!\n\nsomething\n"
		);
	});
});

["author", "user"].forEach((keyword) => {
	test(`override author with ${keyword} keyword with @`, async (t) => {
		t.is(
			await changelogFunctions.getReleaseLine(
				...getChangeset(
                    `${keyword}: @other`,
                    data.commit
				)
			),
			"\n\n📝  [#1613](https://github.com/emotion-js/emotion/pull/1613) [`a085003`](https://github.com/emotion-js/emotion/commit/a085003d4c8ca284c116668d7217fb747802ed85) Thanks [@other](https://github.com/other)!\n\nsomething\n"
		);
	});

	test(`override author with ${keyword} keyword without @`, async (t) => {
		t.is(
			await changelogFunctions.getReleaseLine(
				...getChangeset(
                    `${keyword}: other`,
                    data.commit
				)
			),
			"\n\n📝  [#1613](https://github.com/emotion-js/emotion/pull/1613) [`a085003`](https://github.com/emotion-js/emotion/commit/a085003d4c8ca284c116668d7217fb747802ed85) Thanks [@other](https://github.com/other)!\n\nsomething\n"
		);
	});
});

test("with multiple authors", async (t) => {
	t.is(
		await changelogFunctions.getReleaseLine(
			...getChangeset(
				["author: @Andarist", "author: @mitchellhamilton"].join("\n"),
				data.commit
			)
		),
		`\n\n📝  [#1613](https://github.com/emotion-js/emotion/pull/1613) [\`a085003\`](https://github.com/emotion-js/emotion/commit/a085003d4c8ca284c116668d7217fb747802ed85) Thanks [@Andarist](https://github.com/Andarist), [@mitchellhamilton](https://github.com/mitchellhamilton)!\n\nsomething\n`
	);
});
