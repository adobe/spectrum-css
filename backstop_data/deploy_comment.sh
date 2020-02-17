#!/bin/bash

set -e

BRANCH_NAME=$(git rev-parse --short HEAD)-result-$(date +%Y-%m-%d_%H-%M-%S)

echo Home: $HOME

# SPECTRUM_CSS_TEST_RESULT_FOLDER=$HOME/temp/$BRANCH_NAME
mkdir -p $HOME/temp/$BRANCH_NAME && cp -R backstop_data/* $HOME/temp/$BRANCH_NAME

mkdir -p $HOME/temp/.github/workflows/ && cp backstop_data/push.yml $HOME/temp/.github/workflows/

cd $HOME/temp

git init .

git checkout --orphan $BRANCH_NAME

git branch

git add -A .

git commit -q -m "Deploy jianliao/spectrum-css to github.com/jianliao/spectrum-css-vr-test-result.git:${BRANCH_NAME}"

git show --stat-count=10 HEAD

git remote set-url origin https://x-access-token:$GITHUB_TOKEN@github.com/jianliao/spectrum-css-vr-test-result.git

git push origin $BRANCH_NAME