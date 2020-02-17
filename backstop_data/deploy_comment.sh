#!/bin/bash

set -e

# Generate the dynamic branch name with short commit hash and current timestamp
BRANCH_NAME=$(git rev-parse --short HEAD)-result-$(date +%Y-%m-%d_%H-%M-%S)

# Create the folder with the branch name and copy the result into it
mkdir -p $HOME/temp/$BRANCH_NAME && cp -R backstop_data/* $HOME/temp/$BRANCH_NAME

# Create github action folder and copy the action file into it
mkdir -p $HOME/temp/.github/workflows/ && cp backstop_data/push.yml $HOME/temp/.github/workflows/

cd $HOME/temp

git init .

git checkout --orphan $BRANCH_NAME

git branch

git add -A .

git commit -q -m "Deploy ${TRAVIS_REPO_SLUG} VR test result to github.com/jianliao/spectrum-css-vr-test-result.git:${BRANCH_NAME}"

git show --stat-count=10 HEAD

git remote add origin https://x-access-token:$GITHUB_TOKEN@github.com/jianliao/spectrum-css-vr-test-result.git

git push origin $BRANCH_NAME

# Create a comment to the PR
if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
    TEST_RESULT_URL=https://jianliao.github.io/spectrum-css-vr-test-result/$BRANCH_NAME/html_report/index.html
    echo !!!! TRAVIS_PULL_REQUEST: $TRAVIS_PULL_REQUEST
    echo !!!! Test result url: $TEST_RESULT_URL
    curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST \-d "{\"body\": \"Test result: ${TEST_RESULT_URL}\"}" "https://api.github.com/repos/jianliao/spectrum-css-vr-test-result/issues/${TRAVIS_PULL_REQUEST}/comments"
fi
