#!/usr/bin/bash

# Copyright 2023 Adobe. All rights reserved.
# This file is licensed to you under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software distributed under
# the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
# OF ANY KIND, either express or implied. See the License for the specific language
# governing permissions and limitations under the License.

# After migrating from our old build system, there are a lot of empty folders hanging out still
# This script aims to clean up those folders

# Legacy tools folder (included storybook & generator)
# test -d "tools" && rm -rf tools

test -d "tools/generator" && rm -rf tools/generator
test -d "tools/preview" && rm -rf tools/preview

# Legacy tokens packages
test -d "components/vars" && rm -rf components/vars
test -d "components/expressvars" && rm -rf components/expressvars
test -d "components/tokens" && rm -rf components/tokens

# Remove deprecated files
for folder in components/*; do
    test -d components/$folder/.npmignore && rm -rf components/$folder/.npmignore
done

# Migrated icons assets
test -d "components/icon/combined" && rm -rf components/icon/combined
test -d "components/icon/large" && rm -rf components/icon/large
test -d "components/icon/medium" && rm -rf components/icon/medium

# test -d "plugins/legacy-postcss-dropdupedvars" && rm -rf plugins/legacy-postcss-dropdupedvars
# test -d "plugins/legacy-postcss-dropunusedvars" && rm -rf plugins/legacy-postcss-dropunusedvars
# test -d "plugins/postcss-combininator" && rm -rf plugins/postcss-combininator
# test -d "plugins/postcss-dropdupedvars" && rm -rf plugins/postcss-dropdupedvars
# test -d "plugins/postcss-droproot" && rm -rf plugins/postcss-droproot
# test -d "plugins/postcss-dropunusedvars" && rm -rf plugins/postcss-dropunusedvars
test -d "plugins/postcss-remapvars" && rm -rf plugins/postcss-remapvars
# test -d "plugins/postcss-transformselectors" && rm -rf plugins/postcss-transformselectors
# test -d "plugins/postcss-varfallback" && rm -rf plugins/postcss-varfallback
