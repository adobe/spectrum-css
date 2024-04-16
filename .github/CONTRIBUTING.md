# Contributing

❤️ We love pull requests from everyone. 🎉

The following are a set of guidelines to follow when contributing to this project to ensure that your contributions are accepted as quickly as possible.

## Code of conduct

This project adheres to the Adobe [code of conduct](CODE_OF_CONDUCT.md). By participating,
you are expected to uphold this code. Please report unacceptable behavior to
[Grp-opensourceoffice@adobe.com](mailto:Grp-opensourceoffice@adobe.com).

## Have a question?

Start by filing an issue. The existing committers on this project work to reach
consensus around project direction and issue solutions within issue threads
(when appropriate).

### Security issues

Security issues shouldn't be reported on this issue tracker. Instead, [file an issue to our security experts](https://helpx.adobe.com/security/alertus.html).

## Contributor license agreement

All third-party contributions to this project must be accompanied by a signed contributor
license agreement. This gives Adobe permission to redistribute your contributions
as part of the project. [Sign our CLA](http://opensource.adobe.com/cla.html). You
only need to submit an Adobe CLA one time, so if you have submitted one previously,
you are good to go!

## Submitting a contribution

All submissions should come in the form of pull requests and need to be reviewed
by project committers.

Start by [forking](https://help.github.com/articles/fork-a-repo/) the repo, then [clone](https://help.github.com/articles/cloning-a-repository/) your fork:

```shell
git clone git@github.com:yourusername/spectrum-css.git
```

Set up a branch for your feature or bug fix, push it to your fork, and set up a remote for the upstream repo:

```shell
git checkout -b feat-my-awesome-new-feature
git push -u origin feat-my-awesome-new-feature
git remote add upstream git@github.com:adobe/spectrum-css.git
```

To ensure your Node environment is always aligned with the project, we strongly recommend using [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating). Once you have nvm installed, you can run:

```shell
nvm use
```

This will ensure the correct version of node is installed and used for the project. You always want to run nvm use when you first clone the project and whenever you switch branches.

Install [yarn](https://yarnpkg.com/en/docs/install):

```shell
brew install yarn || curl -o- -L https://yarnpkg.com/install.sh | bash
```

Install dependencies:

```shell
yarn install
```

**Important:** Requires >= Node 18.8.1 and Yarn 1.22.0.

To generate a new component, run the generator:

```shell
yarn new component
```

To kick-off the project's storybook locally, run:

```shell
yarn start
```

This is our development environment, where you can see all the components in action, and develop new components. All components must have a storybook entry. Edits to any of the `*.css`, `*.stories.js`, or `template.js` files in `components/*` will live reload in your browser. For more details about how to work within our Storybook setup, take a look at our [getting started Storybook guide](https://opensource.adobe.com/spectrum-css/preview/?path=/docs/guides-contributing--docs).

This project is leveraging caching from [Nx](https://nx.dev/) to speed up the build process. If you are seeing unexpected results, you can clear the cache by running `yarn nx reset`.

Commit all changes with a [conventional commit message](https://www.conventionalcommits.org), making sure to correctly use `feat:`, `fix:`, and `BREAKING CHANGE` accordingly, and referencing the relevant issue number (if any):

```shell
git commit -m "fix(calendar): rendering issue in Safari, fixes #252"
```

To ensure that we release your changes properly, [add a changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) to your branch, [following the steps outlined in the "multi-package repository" section of the Changesets docs](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md#i-am-in-a-multi-package-repository-a-mono-repo) via the `yarn changeset` command. Once complete, stage the change and commit it to your branch.

Make sure your branch is up to date with the original repo:

```shell
git fetch upstream
git merge upstream/main
```

Run your updates through the formatter which will automatically fix any linting issues. Note that this is also handled on commit via lint-staged so running this manually is only necessary if you used a `--no-verify` flag on any of your commits.

```shell
nx affected --target format
```

Review your changes and any possible conflicts and push to your fork:

```shell
git push origin
```

[Submit a pull request](https://help.github.com/articles/creating-a-pull-request/).

At this point you're waiting on us. We do our best to keep on top of all the pull requests. We may suggest some changes, improvements or alternatives.

Some things that will increase the chance that your pull request is accepted:

- Write a thorough pull request description, include screenshots, and test your changes across all [evergreen browsers](https://github.com/adobe/spectrum-css?tab=readme-ov-file#browser-support).
- Write out your test cases for any new features or bug fixes in as much detail as possible and include them in the pull request description.
- Make sure the PR merges cleanly with the latest main.
- Describe your feature/bugfix and why it's needed/important in the pull request description.
