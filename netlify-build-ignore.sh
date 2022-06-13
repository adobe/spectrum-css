#!/bin/bash

# `main` builds are handled via GitHub Actions & we deploy to GitHub pages.
# so, let's save ourselves some build minutes for now.
if [[ $BRANCH == "main" ]]
then
  exit 0
else
  exit 1
fi
