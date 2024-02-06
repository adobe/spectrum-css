# GitHub Actions, templates, and bots (oh my!)

The goal of this documentation is to provide an outline for the GitHub goodness that exists in this folder. This is a living document, so please feel free to contribute to it.

## Architecture

```bash
⎪ actions
├── file-diff
├──── action.yml - this defines the inputs and outputs of the action
├──── index.js - the code that runs the action
├──── package.json - has dependencies so has package
├──── README.md - more documentation yay!
⎪ workflows
├── development.yml - run on pull requests only
├── production.yml - runs only on pushes to main
├── vrt.yml - a reusable workflow that can be called by other workflows (i.e., development.yml or production.yml) or called on it's own via [workflow dispatch](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/).
├── build.yml - builds a branch and outputs the compiled assets as artifacts
├── compare-results.yml - compares the compiled assets between the pull request branch and the main branch
```

**But wait! There's more!**

```bash
⎪ ISSUE_TEMPLATE
├── --bug-report.md
├── --documentation-issue.md
├── --feature-request.md
├── --support-request.md
⎪ PULL_REQUEST_TEMPLATE.md
⎪ CONTRIBUTING.md
⎪ dependabot.yml
```

## Actions

### File Diff

This action is used to determine if a compiled asset has changed between two branches. See the [README](./file-diff/README.md) for more information.

## Workflows

### Development

This workflow runs:

- on pull requests when:
  - opened against the `main` branch
  - opened, reopened, synchronized (i.e., when a commit is pushed to the pull request), labeled or unlabeled, or if auto merge is enabled
  - any files other than markdown have changed (i.e., will not run on a pull request that only changes markdown files)

#### What does this workflow do?

##### 👷‍♀️ Build

Builds the pull request branch against various development environments. Installs dependencies and builds the project looking for basic processing errors.

##### 👷‍♀️ Compare results

Compares the compiled assets between the pull request branch and the base branch. If there are differences, a comment is added to the pull request with a table detailing the files and the size differences.

_to-do_: This needs to diff the actual content of the files as well. Right now we're leveraging a canary approach which would catch any file size changes to the compiled assets. However, **if the content of the file changes but the size doesn't, we won't catch that**.

##### 🧹 Linting

Runs stylelint or eslint if any relevant assets have been updated in this PR.

##### 📝 Publish site

After the build and visual regression tests have passed, this will build the docs site and publish it to Netlify.

##### 📸 Visual regression testing

Run these tests if the `run_vrt` label is added to the pull request.

**OR** the pull request is not in a draft state and is mergeable (meaning no conflicts with the base branch)

**OR** the pull request review request is approved.

The only step in this job is to run the `vrt.yml` workflow.

### Production

This workflow runs:

- on pushes to the `main` branch

#### What does this workflow do?

##### 👷🏾 1. Build

Builds the `main` branch and outputs the compiled assets as artifacts.

##### 📝 2. Publish site

Publish the docs site to Netlify.

##### 📸 3. Visual regression testing

Run the visual regression testing for **ALL** pushes to the `main` branch. Triggers the `vrt.yml` workflow, see below for more information.

<!-- ##### 💾 Auto-updates

If a pull request includes the `auto-update` label and uses `main` as the base branch, this workflow will run. It will attempt to update the pull request with the latest changes from `main` but will fail gracefully if there are conflicts. Conflicts will need to be resolved manually. -->

### Visual regression testing

First, why is this a workflow and not it's own action? We want to be able to trigger the visual regression test manually via the GitHub UI or dynamically via another workflow. It also doesn't need to run in the same container as the rest of the workflow. An action is a definition of tasks and runs in the context it's called within while a workflow runs in it's own container.
