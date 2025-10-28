#!/usr/bin/bash

# Copyright 2025 Adobe. All rights reserved.
# This file is licensed to you under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software distributed under
# the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
# OF ANY KIND, either express or implied. See the License for the specific language
# governing permissions and limitations under the License.

set -euo pipefail

usage() {
    echo "Usage: tasks/remove-modifiers.sh <component> [username]" 1>&2
    echo "" 1>&2
    echo "Arguments:" 1>&2
    echo "  component  The component folder name under components/ (e.g. breadcrumb)" 1>&2
    echo "  username   Optional. Overrides the username segment used for the branch name." 1>&2
    echo "" 1>&2
    echo "This script performs:" 1>&2
    echo "  1) git checkout spectrum-two" 1>&2
    echo "  2) git checkout -b <username>/feat-<component>-modifier-removal" 1>&2
    echo "  3) git checkout origin/castastrophe/feat-remove-all-modifiers -- components/<component>" 1>&2
    echo "  4) Prompts you to manually review components/<component>/index.css" 1>&2
    echo "  5) Updates .changeset/weak-colts-divide.md to include the component package" 1>&2
    echo "  6) Commits the changes with the appropriate message" 1>&2
}

if [[ ${1:-} == "-h" || ${1:-} == "--help" || $# -lt 1 ]]; then
    usage
    exit 1
fi

component="$1"
username_override="${2:-}"

if [[ -z "$component" ]]; then
    # Prompt for component if not provided
    read -p "Enter the component name: " component

    if [[ -z "$component" ]]; then
        echo "Error: component is required." 1>&2
        usage
        exit 1
    fi
fi

# Ensure working tree is clean to avoid accidental data loss
if ! git diff-index --quiet HEAD --; then
    echo "Error: working tree has uncommitted changes. Please commit or stash before running." 1>&2
    exit 1
fi

# Helper function to return to the return branch if something goes wrong
return_to_branch() {
    git checkout castastrophe/feat-remove-all-modifiers
    exit 1
}

derive_username() {
    local raw
    if raw=$(git config --get user.name 2>/dev/null); then
        :
    else
        raw=""
    fi
    if [[ -z "$raw" ]]; then
        if raw=$(git config --get user.email 2>/dev/null); then
            raw="${raw%@*}"
        fi
    fi
    # Lowercase and remove anything that's not a-z or 0-9 to satisfy branch naming guidance
    raw=$(printf "%s" "$raw" | tr '[:upper:]' '[:lower:]' | tr -cd 'a-z0-9')
    if [[ -z "$raw" ]]; then
        raw="user"
    fi
    printf "%s" "$raw"
}

username_segment="${username_override}"
if [[ -z "$username_segment" ]]; then
    username_segment="$(derive_username)"
fi

branch_name="${username_segment}/feat-${component}-modifier-removal"

echo "→ Checking out base branch: spectrum-two"
git checkout spectrum-two || return_to_branch
git pull origin spectrum-two || return_to_branch

echo "→ Creating feature branch: ${branch_name}"
git checkout -b "$branch_name" || return_to_branch

echo "→ Checking out component from remote reference: components/${component}"
git checkout origin/castastrophe/feat-remove-all-modifiers -- "components/${component}" || return_to_branch

component_css="components/${component}/index.css"
if [[ ! -f "$component_css" ]]; then
    echo "Warning: ${component_css} does not exist yet. Continuing." 1>&2
else
    echo "→ Please review ${component_css} and perform the following manual cleanup:"
    echo "   - Remove unnecessary custom property mappings (especially --mod-* hooks)."
    echo "   - Remove any high contrast styles that match default WHCM behavior."
    echo "   - Keep existing class selectors and variants unchanged."
    echo "   When finished, save your changes and return to this terminal."
    read -r -p "Press Enter to continue once manual edits are complete..." _
fi

# Once updated, refresh the metadata.json file by running:
echo "→ Refreshing metadata.json file"
yarn reporter "$component" --skip-nx-cache || true

changeset_file=".changeset/weak-colts-divide.md"
package_entry_name="\"@spectrum-css/${component}\""
package_entry_line="${package_entry_name}: major"

if [[ -f "$changeset_file" ]]; then
    echo "→ Ensuring ${package_entry_name} is included in ${changeset_file}"
    tmp_file="${changeset_file}.tmp"
    awk -v pkgline="$package_entry_line" -v pkgname="$package_entry_name" '
        BEGIN { fm=0; found=0 }
        /^---$/ {
            fm++
            if (fm==2 && !found) { print pkgline }
            print
            next
        }
        {
            if (fm==1 && index($0, pkgname) != 0) { found=1 }
            print
        }
    ' "$changeset_file" > "$tmp_file"
    mv "$tmp_file" "$changeset_file"
else
    echo "Warning: ${changeset_file} not found. Skipping changeset update." 1>&2
fi

echo "→ Staging files"
git add "components/${component}" || true
test -f "$changeset_file" && git add "$changeset_file" || true

echo "→ Committing changes"
git commit -m "feat(${component}): remove modifiers from the API [SWC-1264]"

echo "Done. Branch ${branch_name} is ready with changes for ${component}."

# If the user has the gh cli installed, open the PR
if command -v gh &> /dev/null; then
    echo "→ Opening PR"
    gh pr create --base spectrum-two --fill --label "ready-for-review,S2,run_vrt" --title "feat(${component}): remove modifiers from the API [SWC-1264]"
fi

echo "→ Returning to base branch"
return_to_branch
