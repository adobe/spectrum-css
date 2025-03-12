# File diff

A GitHub Action for comparing compiled assets between branches.

## Inputs

### `head-path`

**Required** Path to file or directory for file sizes analysis.

### `package-pattern`

**Required** All packages to include in the comparison. Supports glob syntax. Should point to the package folder which contains a package.json asset. If no package.json asset, this folder will be left off the results.

### `base-path`

**Optional** Path to another directory against which to perform file comparisons.

### `token`

**Optional** GitHub token for accessing the GitHub API. Defaults to `${{ github.token }}`.

### `comment`

**Optional** If true, add a comment on the pull request with the results of the comparison. Defaults to `true`.

### `comment-header`

**Optional** Header content for the comment. Markdown is supported. Defaults to `## File metrics`.

## Outputs

### `has-changed`

True if the overall file size has changed, false otherwise.

### `total-size`

Total size of all files for this branch in bytes.

## Example usage

```yaml
name: Compare compiled output file size
uses: "spectrum-tools/gh-action-file-diff"
with:
  head-path: ${{ github.workspace }}/pull-request
  base-path: ${{ github.workspace }}/base-branch
  package-pattern: |
    components/*/dist/*.{css,json}
    components/*/dist/themes/*.css
```
