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

export const ADDON_ID = "addon/testing-preview";
export const TOOL_ID = `${ADDON_ID}/tool`;

export const PARAM_KEY = "testingPreview";
export const GLOBAL_KEY = "testingPreview";
export const PARAM_TITLE = "Testing preview";

export const DEFAULT_PARAMETERS = {
  isTestEnv: () => false,
  showLabel: true,
  withHeadings: true,
  withBorder: "full",
  options: {},
};

export const EVENTS = {
  REGISTER: `${ADDON_ID}/REGISTER`,
  UPDATE: `${ADDON_ID}/UPDATE`,
};
