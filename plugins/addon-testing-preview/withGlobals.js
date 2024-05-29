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
import { useEffect } from "@storybook/preview-api";
import { DEFAULT_PARAMETERS, PARAM_KEY } from "./constants";

const { window } = global;

export const withGlobals = (StoryFn, context) => {
	const { globals = {}, parameters = {} } = context;

	// Connects to Storybook's API and retrieves the value of the custom parameter for the current story
	const config = parameters[PARAM_KEY] ?? DEFAULT_PARAMETERS;

	// Is the addon being used in the docs panel
	const isInDocs = context.viewMode === "docs";
	const isActive = ![false, "false"].includes(globals[PARAM_KEY]);

	const frameworkCheck = typeof config.isTestEnv === "function" && config.isTestEnv() ? config.isTestEnv : typeof config.isTestEnv === "boolean" && config.isTestEnv ? () => config.isTestEnv : undefined;
	window.isTestEnv = typeof frameworkCheck !== "undefined" && frameworkCheck() ? frameworkCheck : () => isActive && !isInDocs;

	// Updates the global variable with the value of the custom parameter
	useEffect(() => {
		return () => {
			window.isTestEnv = typeof frameworkCheck !== "undefined" && frameworkCheck() ? frameworkCheck : () => isActive && !isInDocs;
		};
	}, [isActive, frameworkCheck, isInDocs]);

	return StoryFn(context);
};
