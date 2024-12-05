#!/usr/bin/bash

# Copyright 2024 Adobe. All rights reserved.
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

test -d "tools" && rm -rf tools

# Remove deprecated files
for folder in components/*; do
    # Only processing nested folders, not top-level files
    if [[ ! -d "$folder" ]]; then continue; fi

    # If the folder does not contain a package.json, remove it
    if [[ ! -f "$folder/package.json" ]]; then
        rm -rf $folder
    else
        test -f $folder/.npmignore && rm -rf $folder/.npmignore

        # Migrated icons assets
        if [[ $folder == "components/icon" ]]; then
            test -d $folder/combined && rm -rf $folder/combined
            test -d $folder/large && rm -rf $folder/large
            test -d $folder/medium && rm -rf $folder/medium
        fi
    fi
done

for folder in plugins/*; do
    # Only processing nested folders, not top-level files
    if [[ ! -d "$folder" ]]; then continue; fi

    # If the folder does not contain a package.json, remove it
    if [[ ! -f "$folder/package.json" ]]; then
        rm -rf $folder
    fi
done
