#!/usr/bin/env node

/*!
 * Copyright 2025 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

export const buildPreviewURLComment = (prNumber) => {
    const prHash = `pr-${prNumber}`;
    const baseUrl = 'https://spectrumcss.z13.web.core.windows.net';

    return `## 📚 Branch preview

PR #${prNumber} has been deployed to Azure Blob Storage: [${baseUrl}/${prHash}/index.html](${baseUrl}/${prHash}/index.html).`;

};
