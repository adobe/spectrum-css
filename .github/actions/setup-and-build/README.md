# Setup and build

A composite GitHub Action for running a setup and build for Spectrum CSS that leverages yarn caching and a custom cache for the compiled assets.

## Inputs

### `branch-ref`

**Optional** The branch ref to use for the build. Defaults to `${{ github.head_ref }}`.

### `compiled-asset-path`

**Optional** Path to the compiled assets. Defaults to `**/dist/**`.

### `build-command`

**Optional** The command to run for the build. Defaults to `yarn build`.

### `node-version`

**Optional** Node version to use for the build. Defaults to `16`.

### `skip-cache`

**Optional** A boolean indicating whether to skip the cache. Defaults to `false`.

### `skip-build`

**Optional** A boolean indicating whether to skip the build step. Defaults to `false`.

### `token`

**Optional** GitHub token for accessing the GitHub API. Defaults to `${{ github.token }}`.

### `path`

**Optional** Path to the working directory. Defaults to `${{ github.workspace }}`.

## Outputs

### `nx-base`

The SHA of the base commit for `nx affected`.

### `nx-head`

The SHA of the head commit for `nx affected`.

## Example usage

```yaml
name: Setup and build
uses: "spectrum-tools/gh-action-setup"
with:
  build-command: yarn build:components
  node-version: 16
  compiled-asset-path: components/*/dist/**
  token: ${{ secrets.GITHUB_TOKEN }}
```
