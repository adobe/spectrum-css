/*!
 * Copyright 2023 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
*/

const { readFileSync, existsSync } = require('fs');
const { join } = require('path');

/**
 * @typedef {object} Options
 * @property {string[]=} filename
 * @property {string=} cwd
 * @property {boolean=} skipIfEmpty
 */

/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} options
 * @returns {import('postcss').Plugin}
 */
module.exports = ({
    filename = ['COPYRIGHT', 'LICENSE'],
    cwd = process.cwd(),
    skipIfEmpty = true,
}) => {
    function checkForFile(cwd, file) {
        const path = join(cwd, file);
        if (!existsSync(path)) return;
        return path;
    }

    return {
        postcssPlugin: 'postcss-licensing',
        OnceExit(css, { Comment }) {
            // Don't add a license if there are no nodes
            if(css.nodes.length === 0 && skipIfEmpty) {
                css.cleanRaws();
                return;
            }

            /* Fetch the license from the provided location */
            let path;

            if (typeof filename === 'string') {
                filename = [filename];
            }

            filename.forEach((f) => {
                if (!path) path = checkForFile(cwd, f);
            });

            if (!existsSync(path)) {
                return css.error(`File not found at ${path}. Please specify a path with the filename option or create a LICENSE file in the root of the project.`);
            }

            const content = readFileSync(path, 'utf8').trim();
            if (!content) {
                css.error(`File is empty at ${path}. Please specify a path with the filename option or create a LICENSE file in the root of the project.`);
            }

            const lines = content.split('\n').map((l) => l.trim());
            const text = lines.map((l) => l ? ` * ${l}` : ' *').join('\n');
            const comment = new Comment({
                text,
                raws: {
                    left: '!\n',
                    right: '\n '
                },
            });

            css.prepend(comment);
            if (comment.next()) comment.next().raws.before = '\n\n';
        }
    };
};

module.postcss = true;
