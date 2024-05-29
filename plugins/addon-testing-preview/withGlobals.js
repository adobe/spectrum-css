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

import { global } from '@storybook/global';
import { useGlobals } from "@storybook/preview-api";
import { DEFAULT_PARAMETERS, PARAM_KEY } from "./constants";

const { window } = global;

export const withGlobals = (StoryFn, context) => {
	const { globals = {}, parameters = {}, viewMode } = context;

	// Connects to Storybook's API and retrieves the value of the custom parameter for the current story
	const { isTestEnv } = parameters[PARAM_KEY] ?? DEFAULT_PARAMETERS;

	const isActive = ![false, "false"].includes(globals[PARAM_KEY]);
	const [, updateGlobals] = useGlobals();

	updateGlobals({
		showTestingPreview: typeof frameworkCheck !== "undefined" && frameworkCheck() ? frameworkCheck : () => isActive && viewMode !== "docs",
	});

	window.isTestEnv = typeof frameworkCheck !== "undefined" && frameworkCheck() ? frameworkCheck : () => isActive && viewMode !== "docs";

	// Updates the global variable with the value of the custom parameter
	// useEffect(() => {
	// 	const frameworkCheck = typeof isTestEnv === "function" && isTestEnv(window) ? isTestEnv : typeof isTestEnv === "boolean" && isTestEnv ? () => isTestEnv : undefined;
	// 	// @todo remove this
	// 	window.isTestEnv = typeof frameworkCheck !== "undefined" && frameworkCheck() ? frameworkCheck : () => isActive && viewMode !== "docs";
	// 	updateGlobals({
	// 		showTestingPreview: typeof frameworkCheck !== "undefined" && frameworkCheck() ? frameworkCheck : () => isActive && viewMode !== "docs",
	// 	});
	// }, [isActive, isTestEnv, viewMode]);

	return StoryFn(context);
};
