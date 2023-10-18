/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

module.exports = {
    root: true,
    env: {
        node: true,
        es2020: true,
        browser: true,
    },
    plugins: ["@nx"],
    extends: ["eslint:recommended", "plugin:@nx/javascript", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            impliedStrict: true,
        },
    },
    rules: {
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "func-call-spacing": ["error", "never"],
        "linebreak-style": ["error", "unix"],
        "no-console": ["error", { allow: ["warn", "error"] }],
        semi: ["error", "always"],
        "space-before-blocks": ["error", "always"],
        "@nx/enforce-module-boundaries": ["warn"],
        "prettier/prettier": [
            "warn",
            {
                singleQuote: false,
            },
        ],
    },
    overrides: [
        {
            files: ["components/*/stories/*.js"],
            rules: {
                "@nx/enforce-module-boundaries": 0,
            },
        },
        {
            files: ["*.json"],
            parser: "jsonc-eslint-parser",
            rules: {
                "@nx/dependency-checks": [
                    "error",
                    {
                        checkObsoleteDependencies: false,
                    },
                ],
            },
        },
        {
            files: ["package.json"],
            parser: "jsonc-eslint-parser",
            rules: {
                "@nx/nx-plugin-checks": "error",
            },
        },
    ],
};
