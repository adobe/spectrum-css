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

import { addons, types } from "@storybook/manager-api";
import { ADDON_ID, PARAM_KEY, PARAM_TITLE, TOOL_ID } from "./constants";
import { TestingMode } from "./Tool";

addons.register(ADDON_ID, () => {
	addons.add(TOOL_ID, {
		type: types.TOOL,
		title: PARAM_TITLE,
		match: ({ tabId, viewMode }) => !tabId && viewMode === "story",
		render: TestingMode,
		paramKey: PARAM_KEY,
	});
});
