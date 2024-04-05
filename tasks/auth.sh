#!/usr/bin/bash

# Copyright 2023 Adobe. All rights reserved.
# This file is licensed to you under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License. You may obtain a copy
# of the License at http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software distributed under
# the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
# OF ANY KIND, either express or implied. See the License for the specific language
# governing permissions and limitations under the License.

ARTIFACTORY_API_TOKEN=${ARTIFACTORY_API_TOKEN:-$ARTIFACTORY_API_KEY}
if [ -z "$ARTIFACTORY_API_TOKEN" ]; then
    echo >&2 "🔍  no ARTIFACTORY_API_TOKEN detected.";
else
    auth=$(curl -s -H "X-Api-Key: ${ARTIFACTORY_API_TOKEN}" https://artifactory.corp.adobe.com/artifactory/api/npm/auth)
    export NPM_AUTH=$(echo "$auth" | grep "_auth" | awk -F " " '{print $3}')
    export NPM_EMAIL=$(echo "$auth" | grep "email" | awk -F " " '{print $3}')
    echo >&2 "🪩  exported NPM_EMAIL and NPM_AUTH.";
fi
