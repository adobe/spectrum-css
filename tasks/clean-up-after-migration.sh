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
test -d "tools" && rm -rf tools || exit 0

# Legacy tokens packages
test -d "components/vars" && rm -rf components/vars || exit 0
test -d "components/expressvars" && rm -rf components/expressvars || exit 0
test -d "components/tokens" && rm -rf components/tokens || exit 0

# Remove deprecated files
for folder in components/*; do
    test -d components/$folder/.npmignore && rm -rf components/$folder/.npmignore || exit 0
    test -d components/$folder/gulpfile.js && rm -rf components/$folder/gulpfile.js || exit 0
done

# Migrated icons assets
test -d "components/icon/combined" && rm -rf components/icon/combined || exit 0
test -d "components/icon/large" && rm -rf components/icon/large || exit 0
test -d "components/icon/medium" && rm -rf components/icon/medium || exit 0

test -d "plugins/legacy-postcss-dropdupedvars" && rm -rf plugins/legacy-postcss-dropdupedvars || exit 0
test -d "plugins/legacy-postcss-dropunusedvars" && rm -rf plugins/legacy-postcss-dropunusedvars || exit 0
# test -d "plugins/postcss-combininator" && rm -rf plugins/postcss-combininator || exit 0
test -d "plugins/postcss-dropdupedvars" && rm -rf plugins/postcss-dropdupedvars || exit 0
test -d "plugins/postcss-droproot" && rm -rf plugins/postcss-droproot || exit 0
test -d "plugins/postcss-dropunusedvars" && rm -rf plugins/postcss-dropunusedvars || exit 0
test -d "plugins/postcss-remapvars" && rm -rf plugins/postcss-remapvars || exit 0
test -d "plugins/postcss-transformselectors" && rm -rf plugins/postcss-transformselectors || exit 0
test -d "plugins/postcss-varfallback" && rm -rf plugins/postcss-varfallback || exit 0
