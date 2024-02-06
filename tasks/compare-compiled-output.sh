#!/usr/bin/env bash

# Copyright 2023 Adobe. All rights reserved.
# This file is licensed to you under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License. You may obtain a copy
# of the License at http:#www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software distributed under
# the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
# OF ANY KIND, either express or implied. See the License for the specific language
# governing permissions and limitations under the License.

report() {
    COMMAND=$1

    printf '\n > %b\n' "\e[0;241m${COMMAND}\e[0m"
    eval $COMMAND
}

commit_compiled_assets() {
    # Create a little space before the output starts
    echo ""

    # Capture the current branch name so we can return to it later
    START_BRANCH=$(git rev-parse --abbrev-ref HEAD)

    # Base branch is the first argument or main by default
    BASE_BRANCH=${1:-main}

    # Create a new branch name for the comparison
    COMPARE_BRANCH=${BASE_BRANCH}-with-compiled-output

    # Switch to main branch and commit compiled output
    report "git checkout $BASE_BRANCH --quiet"

    # todo: do we need to pull the latest changes from the main branch?
    # Pull the latest changes from the main branch
    report "git pull origin ${BASE_BRANCH}"

    # Create a new branch to commit the compiled output
    echo ""
    echo "> git checkout -b ${COMPARE_BRANCH}"
    git checkout -b $COMPARE_BRANCH --quiet

    # Compile the assets
    echo ""
    echo "> yarn builder tag:component,ui-icons --skip-nx-cache"
    yarn builder tag:component,ui-icons --skip-nx-cache

    # Add any changed files to the branch
    echo ""
    echo "> git add ."
    git add .

    # Force add the compiled output to the repo
    echo ""
    echo "> git add -f components/*/dist ui-icons/dist"
    git add -f components/*/dist ui-icons/dist

    # todo: should we escape early if there are no changes?
    # HAS_CHANGES=$(git status --short)

    echo ""
    echo "> git commit -m \"chore: refresh compiled output for comparisons\""
    git commit -m "chore: refresh compiled output for comparisons"

    # Capture the commit hash for the comparison URL
    COMMIT_HASH=$(git rev-parse HEAD)

    # Echo the commit hash to the console
    echo ""
    echo "Commit hash: ${COMMIT_HASH}"

    # Push the branch to GitHub and open a comparison
    echo ""
    echo "> git push origin ${COMPARE_BRANCH}"
    git push origin $COMPARE_BRANCH

    # Return to whatever branch we were on before
    echo ""
    echo "> git checkout ${START_BRANCH} --force"
    git checkout $START_BRANCH --force --quiet

    # Return the commit hash
    echo $COMMIT_HASH
}

clean_up_branch() {
    TEMP_BRANCH_NAME=$1

    # Exit with error if the branch name is not provided
    if [[ -z "$TEMP_BRANCH_NAME" ]]; then
        return
    fi

    # Exit early if the branch doesn't exist
    if ! git show-ref --verify --quiet refs/heads/$TEMP_BRANCH_NAME; then
        return
    fi

    # Delete the temp branch locally and remotely
    echo ""
    echo "> git branch -D ${TEMP_BRANCH_NAME}"
    git branch -D $TEMP_BRANCH_NAME

    echo ""
    echo "> git push origin --delete ${TEMP_BRANCH_NAME}"
    git push origin --delete $TEMP_BRANCH_NAME
}

# Capture the current branch name
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
BASE_BRANCH=${1:-main}

# Check if there are any uncommitted changes on the current branch
if [[ -n $(git status --porcelain) ]]; then
    echo "⚠️  There are uncommitted changes on the current branch. Please commit or stash them before continuing."
    exit 1
fi

report "git fetch --no-tags --quiet --depth=1"

# Commit the compiled output for the main branch and capture the commit hash
BASE_COMMIT_HASH=$(commit_compiled_assets $BASE_BRANCH)

# Commit the compiled output for the current branch
BRANCH_COMMIT_HASH=$(commit_compiled_assets $BRANCH_NAME)

# Open the comparison in the browser and wait for it to close before continuing the script
npx open-cli "https://github.com/adobe/spectrum-css/compare/${BASE_COMMIT_HASH}...${BRANCH_COMMIT_HASH}"

# Clean-up the temp branch after the comparison
clean_up_branch "${BRANCH_NAME}-with-compiled-output"

# Exit the script
exit 0
