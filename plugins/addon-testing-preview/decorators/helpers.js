/*!
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * @description How to read and understand the properties to be iterated over by the testing grid
 * @export Options - How to read and understand the properties to be iterated over by the testing grid
 * @interface Options
 * @property {string} key - The key of the option used by args or globals object
 * @property {"args" | "globals"} [type="args"] - The scope in which the option is stored
 * @property {Record<string, any>} [mapping] - How to label the value of the option in the testing grid
 */

/**
 * @description Default parameters for the testing preview
 * @export Parameters - Default parameters for the testing preview
 * @interface Parameters
 * @property {() => boolean} isTestEnv
 * @property {boolean} showLabel
 * @property {boolean} withHeadings
 * @property {"full" | "side" | "none"} withBorder
 * @property {Record<string, Options>} options
 */

/**
 * @description Key to be used when toggling whether a setting is displayed in the testing grid
 * @export Key
 * @type {keyof Parameters.options}
 */

import { useParameter } from '@storybook/manager-api';
import { DEFAULT_PARAMETERS, GLOBAL_KEY, PARAM_KEY } from '../constants';

/**
 * @description Expect this to return an object with keys that match the options object in the Parameters interface set to 'false' if the story wants to exclude this from the testing grid
 * @param StoryContext
 * @returns {Record<Key, boolean>}
 */
export function fetchFromContext({ globals }, {
    key = GLOBAL_KEY,
    defaultValue = {}
} = {}) {
  return globals[key] || defaultValue;
}

export function useParameters() {
  return useParameter(PARAM_KEY, DEFAULT_PARAMETERS);
}
